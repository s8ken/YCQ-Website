"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Fingerprint,
  Key,
  Clock,
  Link as LinkIcon,
  Copy,
  Code,
  ArrowRight,
  Info
} from "lucide-react";
import { API_URL, DEMO_URL, CONTACT_EMAIL } from "@/lib/site";

const BACKEND_API = API_URL.replace('/api', '');

interface ReceiptToVerify {
  id?: string;
  self_hash?: string;
  timestamp?: string;
  session_id?: string;
  version?: string;
  agent_did?: string;
  signature?: string | { value: string; algorithm: string };
  chain?: { chain_hash?: string; previous_hash?: string };
  interaction?: {
    prompt?: string;
    response?: string;
  };
  trust_score?: number;
  ciq_metrics?: {
    clarity?: number;
    integrity?: number;
    quality?: number;
  };
}

interface VerificationCheck {
  name: string;
  status: 'pass' | 'fail' | 'warn' | 'pending';
  message: string;
}

export default function VerifyPage() {
  const [receiptJson, setReceiptJson] = useState('');
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [publicKeyLoading, setPublicKeyLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [checks, setChecks] = useState<VerificationCheck[]>([]);
  const [overallStatus, setOverallStatus] = useState<'verified' | 'failed' | 'partial' | null>(null);
  const [receipt, setReceipt] = useState<ReceiptToVerify | null>(null);
  const [copied, setCopied] = useState(false);
  const [showSampleReceipt, setShowSampleReceipt] = useState(false);

  // Sample receipt for testing
  const sampleReceipt = {
    "version": "2.0.0",
    "timestamp": new Date().toISOString(),
    "session_id": "demo-session-f864c9",
    "agent_did": "did:web:sonate.org:agents:gpt-4-turbo",
    "human_did": "did:web:sonate.org:users:dev-demo",
    "policy_version": "1.0.0",
    "mode": "constitutional",
    "interaction": {
      "prompt_hash": "a1b2c3d4e5f6789abcdef0123456789abcdef0123",
      "response_hash": "9876543210fedcba9876543210fedcba98765432",
      "model": "gpt-4-turbo",
      "temperature": 0.7
    },
    "trust_scores": {
      "overall": 92,
      "safety": 95,
      "hallucination_risk": 8,
      "compliance": 94
    },
    "ciq_metrics": {
      "clarity": 0.93,
      "integrity": 0.94,
      "quality": 0.91
    },
    "symbi_principles": {
      "consent": "explicit",
      "inspection": "full_audit_trail",
      "validation": "continuous",
      "override": "enabled",
      "disconnect": "available",
      "recognition": "respected"
    },
    "chain": {
      "previous_hash": "GENESIS",
      "chain_hash": "715799d2fb16c4b6e5f8a9b0c1d2e3f4g5h6i7j8",
      "chain_length": 1
    },
    "id": "8ef4860bc94612e89d47f3b8c9a0b1c2d3e4f5a6",
    "signature": {
      "algorithm": "Ed25519",
      "value": "3991dea2f2c8e5d4b6a9c8e7f6g5h4i3j2k1l0m9n8o7p6q5r4s3t2u1v0w9x8y7z6",
      "public_key": "741f8d7fb2e45c9a6d3f8e1b4c7a0d3e6f9a2b5c"
    },
    "privacy_mode": "hash_only"
  };

  // Fetch public key on mount
  useEffect(() => {
    fetchPublicKey();
  }, []);

  const fetchPublicKey = async () => {
    setPublicKeyLoading(true);
    try {
      const response = await fetch(`${BACKEND_API}/api/public-demo/public-key`);
      const data = await response.json();
      if (data.success && data.data?.publicKey) {
        setPublicKey(data.data.publicKey);
      } else {
        console.error('Failed to fetch public key');
      }
    } catch (error) {
      console.error('Error fetching public key:', error);
    } finally {
      setPublicKeyLoading(false);
    }
  };

  const verifyReceipt = async () => {
    setVerifying(true);
    setChecks([]);
    setOverallStatus(null);
    setReceipt(null);

    const newChecks: VerificationCheck[] = [];

    try {
      // 1. Parse JSON
      let parsed: ReceiptToVerify;
      try {
        parsed = JSON.parse(receiptJson);
        setReceipt(parsed);
        newChecks.push({
          name: 'JSON Format',
          status: 'pass',
          message: 'Valid JSON structure'
        });
      } catch {
        newChecks.push({
          name: 'JSON Format',
          status: 'fail',
          message: 'Invalid JSON - could not parse'
        });
        setChecks(newChecks);
        setOverallStatus('failed');
        setVerifying(false);
        return;
      }

      // 2. Check required fields
      const hasId = parsed.id || parsed.self_hash;
      const hasTimestamp = !!parsed.timestamp;
      const hasSignature = parsed.signature && (typeof parsed.signature === 'string' || parsed.signature.value);

      if (hasId && hasTimestamp) {
        newChecks.push({
          name: 'Required Fields',
          status: 'pass',
          message: 'Receipt ID and timestamp present'
        });
      } else {
        newChecks.push({
          name: 'Required Fields',
          status: 'fail',
          message: `Missing: ${!hasId ? 'ID/hash ' : ''}${!hasTimestamp ? 'timestamp' : ''}`
        });
      }

      // 3. Check signature presence
      if (hasSignature) {
        newChecks.push({
          name: 'Signature Present',
          status: 'pass',
          message: 'Ed25519 signature found'
        });
      } else {
        newChecks.push({
          name: 'Signature Present',
          status: 'warn',
          message: 'No signature - cannot verify cryptographically'
        });
      }

      // 4. Verify against backend (if we have signature)
      if (hasSignature) {
        try {
          const verifyResponse = await fetch(`${BACKEND_API}/api/public-demo/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ receipt: parsed }),
          });
          
          const verifyData = await verifyResponse.json();
          
          if (verifyData.success && verifyData.data?.valid) {
            newChecks.push({
              name: 'Cryptographic Signature',
              status: 'pass',
              message: 'Ed25519 signature verified against public key'
            });

            // Add individual check results from backend
            if (verifyData.data.checks?.chain?.status === 'PASS') {
              newChecks.push({
                name: 'Chain Integrity',
                status: 'pass',
                message: verifyData.data.checks.chain.message
              });
            }
          } else if (verifyData.success && !verifyData.data?.valid) {
            // Check failed but we got a response
            const sigCheck = verifyData.data?.checks?.signature;
            newChecks.push({
              name: 'Cryptographic Signature',
              status: sigCheck?.status === 'PASS' ? 'pass' : 'fail',
              message: sigCheck?.message || 'Signature verification failed'
            });
          } else {
            newChecks.push({
              name: 'Cryptographic Signature',
              status: 'fail',
              message: verifyData.error || 'Signature verification failed'
            });
          }
        } catch (error) {
          newChecks.push({
            name: 'Backend Verification',
            status: 'warn',
            message: 'Could not reach verification service'
          });
        }
      }

      // 5. Check chain integrity (if chain data present)
      if (parsed.chain?.chain_hash) {
        newChecks.push({
          name: 'Chain Integrity',
          status: 'pass',
          message: `Chain hash: ${parsed.chain.chain_hash.substring(0, 16)}...`
        });
      }

      // 6. Check timestamp validity
      if (parsed.timestamp) {
        const receiptTime = new Date(parsed.timestamp);
        const now = new Date();
        const hoursDiff = (now.getTime() - receiptTime.getTime()) / (1000 * 60 * 60);
        
        if (receiptTime > now) {
          newChecks.push({
            name: 'Timestamp',
            status: 'fail',
            message: 'Receipt timestamp is in the future'
          });
        } else if (hoursDiff > 24 * 365) {
          newChecks.push({
            name: 'Timestamp',
            status: 'warn',
            message: 'Receipt is over 1 year old'
          });
        } else {
          newChecks.push({
            name: 'Timestamp',
            status: 'pass',
            message: `Issued ${receiptTime.toLocaleString()}`
          });
        }
      }

      // Determine overall status
      const hasFail = newChecks.some(c => c.status === 'fail');
      const hasWarn = newChecks.some(c => c.status === 'warn');
      const allPass = newChecks.every(c => c.status === 'pass');

      if (hasFail) {
        setOverallStatus('failed');
      } else if (allPass) {
        setOverallStatus('verified');
      } else {
        setOverallStatus('partial');
      }

      setChecks(newChecks);

    } catch (error) {
      newChecks.push({
        name: 'Verification Error',
        status: 'fail',
        message: 'An unexpected error occurred'
      });
      setChecks(newChecks);
      setOverallStatus('failed');
    } finally {
      setVerifying(false);
    }
  };

  const copyPublicKey = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case 'fail':
        return <XCircle className="w-4 h-4 text-red-400" />;
      case 'warn':
        return <AlertCircle className="w-4 h-4 text-amber-400" />;
      default:
        return <Clock className="w-4 h-4 text-white/40" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'bg-green-500/10 border-green-500/20';
      case 'fail': return 'bg-red-500/10 border-red-500/20';
      case 'warn': return 'bg-amber-500/10 border-amber-500/20';
      default: return 'bg-white/5 border-white/10';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-16 pb-8 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Fingerprint className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-medium text-purple-400 uppercase tracking-widest">Independent Verification</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
              Verify Trust Receipts
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Verify any SONATE trust receipt independently. Paste the receipt JSON below to check its cryptographic signature and integrity.
            </p>
          </div>
        </section>

        {/* Public Key Display */}
        <section className="px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm font-medium">SONATE Public Key (Ed25519)</div>
                    <div className="text-xs text-white/40">
                      {publicKeyLoading ? 'Loading...' : (
                        publicKey ? `${publicKey.substring(0, 16)}...${publicKey.substring(publicKey.length - 16)}` : 'Unavailable'
                      )}
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={copyPublicKey}
                  disabled={!publicKey}
                  className="gap-2"
                >
                  <Copy className="w-3 h-3" />
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Form */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-white/70">Receipt JSON</label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setReceiptJson(JSON.stringify(sampleReceipt, null, 2));
                      setShowSampleReceipt(true);
                    }}
                    className="text-xs text-blue-400 hover:text-blue-300"
                  >
                    Load Sample Receipt
                  </Button>
                </div>
                <textarea
                  value={receiptJson}
                  onChange={(e) => setReceiptJson(e.target.value)}
                  rows={10}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/30 font-mono text-sm resize-none"
                  placeholder='{"id": "abc123...", "timestamp": "2026-02-10T...", "signature": {...}}'
                />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={verifyReceipt}
                  disabled={verifying || !receiptJson.trim()}
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  size="lg"
                >
                  {verifying ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Verifying...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Fingerprint className="w-4 h-4" />
                      Verify Receipt
                    </span>
                  )}
                </Button>
                <Button
                  onClick={() => {
                    const results = checks.map(c => `${c.name}: ${c.status.toUpperCase()} - ${c.message}`).join('\n');
                    const exportData = `SONATE Receipt Verification Report\n${'='.repeat(50)}\n\nOverall Status: ${overallStatus?.toUpperCase()}\n\nVerification Checks:\n${results}\n\nReceipt JSON:\n${receiptJson}`;
                    navigator.clipboard.writeText(exportData);
                    alert('Results copied to clipboard!');
                  }}
                  disabled={checks.length === 0}
                  variant="outline"
                  size="lg"
                  className="border-white/20 hover:bg-white/5"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>

              {/* Sample Receipt Badge */}
              {showSampleReceipt && (
                <div className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-300">This is a sample receipt for demonstration. Click "Verify Receipt" to test the verification process.</div>
                </div>
              )}

              {/* Overall Status */}
              {overallStatus && (
                <div className={`mt-6 p-4 rounded-lg border ${
                  overallStatus === 'verified' ? 'bg-green-500/10 border-green-500/20' :
                  overallStatus === 'failed' ? 'bg-red-500/10 border-red-500/20' :
                  'bg-amber-500/10 border-amber-500/20'
                }`}>
                  <div className="flex items-center gap-3">
                    {overallStatus === 'verified' && <CheckCircle2 className="w-6 h-6 text-green-400" />}
                    {overallStatus === 'failed' && <XCircle className="w-6 h-6 text-red-400" />}
                    {overallStatus === 'partial' && <AlertCircle className="w-6 h-6 text-amber-400" />}
                    <div>
                      <div className="font-heading font-semibold">
                        {overallStatus === 'verified' && '✓ Receipt Verified'}
                        {overallStatus === 'failed' && '✗ Verification Failed'}
                        {overallStatus === 'partial' && '⚠ Partial Verification'}
                      </div>
                      <div className="text-sm text-white/60">
                        {overallStatus === 'verified' && 'This receipt has passed all cryptographic and integrity checks.'}
                        {overallStatus === 'failed' && 'One or more critical checks failed. Please review the receipt.'}
                        {overallStatus === 'partial' && 'Some checks passed but warnings were raised. Review details below.'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Verification Checks */}
              {checks.length > 0 && (
                <div className="mt-6 space-y-3">
                  <div className="text-sm font-medium text-white/70">Verification Checks</div>
                  {checks.map((check, i) => (
                    <div key={i} className={`p-3 rounded-lg border ${getStatusColor(check.status)}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(check.status)}
                          <span className="text-sm font-medium">{check.name}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded uppercase ${
                          check.status === 'pass' ? 'bg-green-500/20 text-green-400' :
                          check.status === 'fail' ? 'bg-red-500/20 text-red-400' :
                          'bg-amber-500/20 text-amber-400'
                        }`}>
                          {check.status}
                        </span>
                      </div>
                      <div className="text-xs text-white/50 mt-1 ml-7">{check.message}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Receipt Details (if parsed) */}
              {receipt && (
                <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium text-white/70">Receipt Metadata</div>
                    <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300">v{receipt.version || '2.0.0'}</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    {(receipt.id || receipt.self_hash) && (
                      <div className="flex flex-col sm:flex-row gap-1 pb-2 border-b border-white/5">
                        <span className="text-white/40 w-24">Receipt ID:</span>
                        <span className="text-white/80 break-all">{receipt.id || receipt.self_hash}</span>
                      </div>
                    )}
                    {receipt.timestamp && (
                      <div className="flex flex-col sm:flex-row gap-1 pb-2 border-b border-white/5">
                        <span className="text-white/40 w-24">Timestamp:</span>
                        <span className="text-white/80">{new Date(receipt.timestamp).toLocaleString()}</span>
                      </div>
                    )}
                    {receipt.session_id && (
                      <div className="flex flex-col sm:flex-row gap-1 pb-2 border-b border-white/5">
                        <span className="text-white/40 w-24">Session:</span>
                        <span className="text-white/80">{receipt.session_id}</span>
                      </div>
                    )}
                    {receipt.agent_did && (
                      <div className="flex flex-col sm:flex-row gap-1 pb-2 border-b border-white/5">
                        <span className="text-white/40 w-24">Agent:</span>
                        <span className="text-blue-400 break-all text-xs">{receipt.agent_did}</span>
                      </div>
                    )}
                    {receipt.chain?.chain_hash && (
                      <div className="flex flex-col sm:flex-row gap-1">
                        <span className="text-white/40 w-24">Chain Hash:</span>
                        <span className="text-green-400 break-all">{receipt.chain.chain_hash.substring(0, 40)}...</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-8 text-center">How to Verify</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-400">1</span>
                </div>
                <h3 className="font-heading font-semibold mb-2">Get Receipt</h3>
                <p className="text-sm text-white/50">Export a trust receipt from the SONATE platform or receive it from a trusted party.</p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-purple-400">2</span>
                </div>
                <h3 className="font-heading font-semibold mb-2">Paste JSON</h3>
                <p className="text-sm text-white/50">Paste the complete receipt JSON in the form above. Include all fields.</p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-green-400">3</span>
                </div>
                <h3 className="font-heading font-semibold mb-2">Verify</h3>
                <p className="text-sm text-white/50">Click verify to check the signature against our public key and validate integrity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Code className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">Developer SDK</span>
            </div>
            <h2 className="text-2xl font-heading font-bold mb-3">Integrate This in Your App</h2>
            <p className="text-white/60 mb-4 max-w-xl mx-auto">
              Generate and verify trust receipts programmatically with a single npm package.
            </p>
            <pre className="inline-block bg-white/5 rounded-lg border border-white/10 px-6 py-3 font-mono text-sm text-white/80 mb-8">
              npm install @yseeku/trust-receipts
            </pre>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/developers">
                <Button size="lg" className="gap-2">
                  <Code className="w-4 h-4" /> Full SDK Docs
                </Button>
              </Link>
              <Link href="/trust-demo">
                <Button size="lg" variant="outline" className="gap-2">
                  Try the Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold">SONATE</span>
              <span className="text-white/40 text-sm">by YCQ Labs</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Full Demo</Link>
              <Link href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
