'use client';

import { useState } from 'react';
import { API_URL } from '@/lib/site';

interface SignedReceipt {
  id: string;
  version: string;
  timestamp: string;
  session_id: string;
  agent_did: string;
  human_did: string;
  interaction: {
    prompt: string;
    response: string;
    model: string;
  };
  chain: {
    previous_hash: string;
    chain_hash: string;
    chain_length: number;
  };
  signature: {
    algorithm: string;
    value: string;
    key_version: string;
    timestamp_signed: string;
    public_key: string;
  };
}

interface VerificationResult {
  valid: boolean;
  overallStatus: string;
  checks: Record<string, { status: string; message: string }>;
  receipt?: {
    id: string;
    timestamp: string;
    session_id: string;
    agent_did: string;
  };
  publicKey?: string;
}

// Use the real backend API
const BACKEND_API = API_URL.replace('/api', '');

export default function TrustLedgerDemo() {
  const [activeTab, setActiveTab] = useState<'generate' | 'verify'>('generate');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<SignedReceipt | null>(null);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [aiPrompt, setAiPrompt] = useState('Explain why AI transparency is important for enterprise adoption.');
  const [receiptJson, setReceiptJson] = useState('');

  const generateWithTrustReceipt = async () => {
    setLoading(true);
    setError(null);
    setReceipt(null);
    setAiResponse(null);
    try {
      const response = await fetch(`${BACKEND_API}/api/public-demo/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: aiPrompt,
          model: 'demo-model',
        }),
      });
      const data = await response.json();
      if (data.success) {
        setAiResponse(data.data.response);
        setReceipt(data.data.receipt);
        setReceiptJson(JSON.stringify(data.data.receipt, null, 2));
      } else {
        setError(data.error || 'Failed to generate receipt');
      }
    } catch (e) {
      setError('Network error - ensure backend is running');
    } finally {
      setLoading(false);
    }
  };

  const verifyReceipt = async () => {
    if (!receiptJson.trim()) {
      setError('Please generate a receipt first or paste receipt JSON');
      return;
    }
    setLoading(true);
    setError(null);
    setVerificationResult(null);
    try {
      const receiptToVerify = JSON.parse(receiptJson);
      const response = await fetch(`${BACKEND_API}/api/public-demo/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ receipt: receiptToVerify }),
      });
      const data = await response.json();
      if (data.success) {
        setVerificationResult(data.data);
      } else {
        setError(data.error || 'Verification failed');
      }
    } catch (e) {
      if (e instanceof SyntaxError) {
        setError('Invalid JSON format');
      } else {
        setError('Network error verifying receipt');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-white/10 mb-6">
        <div className="flex gap-1">
          {[
            { id: 'generate', label: 'Generate + Receipt' },
            { id: 'verify', label: 'Verify Receipt' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'generate' | 'verify')}
              className={`px-6 py-3 text-sm font-medium transition-colors rounded-t-lg ${
                activeTab === tab.id
                  ? 'bg-white/10 text-white border-b-2 border-blue-500'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          {error}
        </div>
      )}

      {/* Generate Tab */}
      {activeTab === 'generate' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Your Message</label>
            <textarea
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/30 resize-none"
              placeholder="Enter a message for the AI..."
            />
          </div>
          
          <button
            onClick={generateWithTrustReceipt}
            disabled={loading || !aiPrompt.trim()}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Generating...
              </span>
            ) : (
              'Send Message & Generate Receipt'
            )}
          </button>

          {/* AI Response */}
          {aiResponse && (
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">AI Response</div>
              <p className="text-white/80 text-sm leading-relaxed">{aiResponse}</p>
            </div>
          )}

          {/* Trust Receipt */}
          {receipt && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-400">Ed25519 Signed Receipt</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40">Receipt ID:</span>
                  <span className="text-white/80 break-all">{receipt.id.substring(0, 32)}...</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40">Timestamp:</span>
                  <span className="text-white/80">{receipt.timestamp}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40">Agent DID:</span>
                  <span className="text-blue-400 break-all">{receipt.agent_did}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40">Chain Hash:</span>
                  <span className="text-blue-400 break-all">{receipt.chain.chain_hash.substring(0, 32)}...</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40">Signature:</span>
                  <span className="text-purple-400 break-all">{receipt.signature.value.substring(0, 32)}...</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40">Public Key:</span>
                  <span className="text-green-400 break-all">{receipt.signature.public_key.substring(0, 16)}...</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex gap-4">
                <button
                  onClick={() => setActiveTab('verify')}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Verify this receipt →
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(receiptJson)}
                  className="text-sm text-white/40 hover:text-white/60 transition-colors"
                >
                  Copy JSON
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Verify Tab */}
      {activeTab === 'verify' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Receipt JSON</label>
            <textarea
              value={receiptJson}
              onChange={(e) => setReceiptJson(e.target.value)}
              rows={8}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/30 font-mono text-xs resize-none"
              placeholder='{"id": "...", "signature": {...}, ...}'
            />
          </div>
          
          <button
            onClick={verifyReceipt}
            disabled={loading || !receiptJson.trim()}
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Verifying...
              </span>
            ) : (
              'Verify Receipt Signature'
            )}
          </button>

          {/* Verification Result */}
          {verificationResult && (
            <div className={`p-4 rounded-lg border ${
              verificationResult.overallStatus === 'VERIFIED' 
                ? 'bg-green-500/10 border-green-500/20' 
                : verificationResult.overallStatus === 'PARTIAL'
                ? 'bg-amber-500/10 border-amber-500/20'
                : 'bg-red-500/10 border-red-500/20'
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${
                  verificationResult.overallStatus === 'VERIFIED' ? 'bg-green-500' : 
                  verificationResult.overallStatus === 'PARTIAL' ? 'bg-amber-500' : 'bg-red-500'
                }`}></div>
                <span className={`text-sm font-medium ${
                  verificationResult.overallStatus === 'VERIFIED' ? 'text-green-400' : 
                  verificationResult.overallStatus === 'PARTIAL' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {verificationResult.overallStatus}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="text-xs text-white/40 uppercase tracking-wider">Verification Checks</div>
                {Object.entries(verificationResult.checks).map(([key, check]) => (
                  <div key={key} className="flex items-center justify-between p-2 bg-white/5 rounded">
                    <div className="flex-1">
                      <span className="text-sm text-white/70 capitalize">{key}</span>
                      <div className="text-xs text-white/40">{check.message}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ml-2 ${
                      check.status === 'PASS' 
                        ? 'bg-green-500/20 text-green-400' 
                        : check.status === 'WARN'
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {check.status}
                    </span>
                  </div>
                ))}
              </div>

              {verificationResult.publicKey && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-xs text-white/40 mb-1">Verified with Public Key</div>
                  <div className="text-xs font-mono text-green-400 break-all">
                    {verificationResult.publicKey.substring(0, 32)}...
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
