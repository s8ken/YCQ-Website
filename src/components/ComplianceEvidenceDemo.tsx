'use client';

import { useState } from 'react';
import { API_URL } from '@/lib/site';
import {
  Shield,
  Link2,
  CheckCircle2,
  XCircle,
  Download,
  ChevronDown,
  ChevronRight,
  Loader2,
  ArrowDown,
  FileJson,
  FileSpreadsheet,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const BACKEND_API = API_URL.replace('/api', '');

interface SignedReceipt {
  id: string;
  version: string;
  timestamp: string;
  session_id: string;
  agent_did: string;
  human_did: string;
  mode: string;
  interaction: {
    prompt?: string;
    response?: string;
    prompt_hash: string;
    response_hash: string;
    model: string;
  };
  telemetry: {
    resonance_score: number;
    coherence_score: number;
    truth_debt: number;
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

interface ChainVerifyResult {
  chain_integrity: boolean;
  overall_status: string;
  chain_length: number;
  results: {
    index: number;
    receipt_id: string;
    timestamp: string;
    checks: Record<string, { status: string; message: string }>;
  }[];
}

const STEPS = [
  { label: 'Generate Chain', icon: Link2 },
  { label: 'Inspect Chain', icon: Shield },
  { label: 'Verify Integrity', icon: CheckCircle2 },
  { label: 'Export Evidence', icon: Download },
];

export default function ComplianceEvidenceDemo() {
  const [step, setStep] = useState(0);
  const [receipts, setReceipts] = useState<SignedReceipt[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedReceipt, setExpandedReceipt] = useState<number | null>(null);
  const [verifyResult, setVerifyResult] = useState<ChainVerifyResult | null>(null);
  const [verifyProgress, setVerifyProgress] = useState(0);

  const generateChain = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BACKEND_API}/api/public-demo/generate-chain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Generation failed');
      setReceipts(data.data.receipts);
      setStep(1);
    } catch (e: any) {
      setError(e.message || 'Failed to generate chain');
    } finally {
      setLoading(false);
    }
  };

  const verifyChain = async () => {
    setLoading(true);
    setError(null);
    setVerifyProgress(0);
    setVerifyResult(null);

    // Animate progress
    const interval = setInterval(() => {
      setVerifyProgress(p => Math.min(p + 15, 90));
    }, 200);

    try {
      const res = await fetch(`${BACKEND_API}/api/public-demo/verify-chain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ receipts }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Verification failed');
      clearInterval(interval);
      setVerifyProgress(100);
      setVerifyResult(data.data);
      setStep(3);
    } catch (e: any) {
      clearInterval(interval);
      setError(e.message || 'Failed to verify chain');
    } finally {
      setLoading(false);
    }
  };

  const exportReceipts = async (format: 'json' | 'csv') => {
    try {
      const res = await fetch(`${BACKEND_API}/api/public-demo/export`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ receipts, format }),
      });

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `trust-receipts.${format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e: any) {
      setError(e.message || 'Export failed');
    }
  };

  const truncHash = (hash: string, len = 12) =>
    hash ? `${hash.substring(0, len)}...` : '—';

  const canGoToStep = (s: number) => {
    if (s === 0) return true;
    if (s === 1) return receipts.length > 0;
    if (s === 2) return receipts.length > 0;
    if (s === 3) return verifyResult !== null;
    return false;
  };

  return (
    <div className="space-y-8">
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-0">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const active = step === i;
          const completed = step > i;
          const clickable = canGoToStep(i);
          return (
            <div key={i} className="flex items-center">
              <button
                onClick={() => clickable && setStep(i)}
                disabled={!clickable}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  active
                    ? 'bg-blue-500/20 border border-blue-500/40 text-blue-400'
                    : completed
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-white/5 border border-white/10 text-white/30'
                } ${clickable ? 'cursor-pointer hover:bg-white/10' : 'cursor-default'}`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  active ? 'bg-blue-500 text-white' : completed ? 'bg-green-500 text-white' : 'bg-white/10 text-white/40'
                }`}>
                  {completed ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span className="text-xs font-medium hidden sm:inline">{s.label}</span>
              </button>
              {i < STEPS.length - 1 && (
                <div className={`w-6 md:w-10 h-px mx-1 ${
                  step > i ? 'bg-green-500/40' : 'bg-white/10'
                }`} />
              )}
            </div>
          );
        })}
      </div>

      {error && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Step 0: Generate Chain */}
      {step === 0 && (
        <div className="text-center space-y-6 py-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
            <Link2 className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold mb-2">Generate a Receipt Chain</h3>
            <p className="text-white/50 max-w-lg mx-auto text-sm">
              This will simulate 3 enterprise AI interactions — a data governance query, financial analysis,
              and audit review — each producing a cryptographically signed trust receipt linked to the previous one.
            </p>
          </div>
          <Button onClick={generateChain} disabled={loading} size="lg" className="gap-2">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Link2 className="w-4 h-4" />}
            {loading ? 'Generating Chain...' : 'Generate 3-Receipt Chain'}
          </Button>
        </div>
      )}

      {/* Step 1: Inspect Chain */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-heading font-bold mb-2">Inspect the Chain</h3>
            <p className="text-white/50 text-sm">
              Each receipt is cryptographically linked to the previous one via chain hashes.
              Click a receipt to see its full contents.
            </p>
          </div>

          {receipts.map((receipt, i) => (
            <div key={receipt.id}>
              {/* Chain link arrow */}
              {i > 0 && (
                <div className="flex items-center justify-center py-2">
                  <div className="flex flex-col items-center gap-1">
                    <ArrowDown className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] font-mono text-blue-400/60">
                      chain_hash: {truncHash(receipts[i - 1].chain.chain_hash, 16)}
                    </span>
                  </div>
                </div>
              )}

              <div className="glass-card overflow-hidden">
                {/* Receipt header */}
                <button
                  onClick={() => setExpandedReceipt(expandedReceipt === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      i === 0 ? 'bg-blue-500/20 text-blue-400'
                        : i === 1 ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}>
                      #{i + 1}
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        {receipt.interaction.prompt
                          ? receipt.interaction.prompt.substring(0, 60) + '...'
                          : `Receipt ${i + 1}`}
                      </div>
                      <div className="text-xs text-white/40 font-mono">
                        ID: {truncHash(receipt.id, 16)} | Trust: {(receipt.telemetry.resonance_score * 100).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                  {expandedReceipt === i ? (
                    <ChevronDown className="w-4 h-4 text-white/40" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  )}
                </button>

                {/* Expanded receipt details */}
                {expandedReceipt === i && (
                  <div className="border-t border-white/5 p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <Field label="Receipt ID" value={receipt.id} mono />
                      <Field label="Timestamp" value={receipt.timestamp} />
                      <Field label="Agent DID" value={receipt.agent_did} mono />
                      <Field label="Model" value={receipt.interaction.model} />
                      <Field label="Trust Score" value={`${(receipt.telemetry.resonance_score * 100).toFixed(1)}%`} />
                      <Field label="Coherence" value={`${(receipt.telemetry.coherence_score * 100).toFixed(1)}%`} />
                      <Field label="Prompt Hash" value={receipt.interaction.prompt_hash} mono />
                      <Field label="Response Hash" value={receipt.interaction.response_hash} mono />
                      <Field label="Chain Hash" value={receipt.chain.chain_hash} mono highlight="blue" />
                      <Field
                        label="Previous Hash"
                        value={receipt.chain.previous_hash}
                        mono
                        highlight={i > 0 ? 'green' : undefined}
                      />
                      <Field label="Signature" value={receipt.signature.value} mono />
                      <Field label="Algorithm" value={receipt.signature.algorithm} />
                    </div>

                    {receipt.interaction.prompt && (
                      <div className="mt-3 space-y-2">
                        <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Prompt</div>
                        <div className="text-xs text-white/70 bg-white/5 rounded p-3">
                          {receipt.interaction.prompt}
                        </div>
                        <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Response</div>
                        <div className="text-xs text-white/70 bg-white/5 rounded p-3 max-h-32 overflow-y-auto">
                          {receipt.interaction.response}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="text-center pt-4">
            <Button onClick={() => setStep(2)} className="gap-2">
              <CheckCircle2 className="w-4 h-4" /> Verify Chain Integrity
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Verify Integrity */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-heading font-bold mb-2">Verify Chain Integrity</h3>
            <p className="text-white/50 text-sm max-w-lg mx-auto">
              Cryptographically verify every signature and chain link. This proves no receipt
              has been tampered with and the chain is complete.
            </p>
          </div>

          {!verifyResult && !loading && (
            <div className="text-center py-6">
              <Button onClick={verifyChain} size="lg" className="gap-2">
                <Shield className="w-4 h-4" /> Run Verification
              </Button>
            </div>
          )}

          {loading && (
            <div className="space-y-4 py-6">
              <div className="flex items-center justify-center gap-3 text-blue-400">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-sm font-medium">Verifying chain integrity...</span>
              </div>
              <div className="max-w-md mx-auto">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                    style={{ width: `${verifyProgress}%` }}
                  />
                </div>
                <div className="text-xs text-white/30 text-center mt-2">
                  Checking signatures & chain hashes...
                </div>
              </div>
            </div>
          )}

          {verifyResult && (
            <div className="space-y-4">
              {/* Overall status banner */}
              <div className={`p-4 rounded-lg border text-center ${
                verifyResult.chain_integrity
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  {verifyResult.chain_integrity ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span className={`text-lg font-heading font-bold ${
                    verifyResult.chain_integrity ? 'text-green-400' : 'text-red-400'
                  }`}>
                    Chain Integrity: {verifyResult.overall_status}
                  </span>
                </div>
                <p className="text-xs text-white/50">
                  {verifyResult.chain_length} receipts verified |{' '}
                  {verifyResult.results.reduce(
                    (acc, r) => acc + Object.values(r.checks).filter(c => c.status === 'PASS').length,
                    0
                  )}{' '}
                  checks passed
                </p>
              </div>

              {/* Per-receipt results */}
              {verifyResult.results.map((result, i) => (
                <div key={result.receipt_id} className="glass-card p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <span className="text-sm font-medium">Receipt {truncHash(result.receipt_id, 12)}</span>
                      <span className="text-xs text-white/30 ml-2">{new Date(result.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {Object.entries(result.checks).map(([name, check]) => (
                      <div
                        key={name}
                        className={`flex items-center gap-2 px-3 py-2 rounded text-xs ${
                          check.status === 'PASS'
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-red-500/10 text-red-400'
                        }`}
                      >
                        {check.status === 'PASS' ? (
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        )}
                        <span className="truncate">{check.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="text-center pt-2">
                <Button onClick={() => setStep(3)} className="gap-2">
                  <Download className="w-4 h-4" /> Export Evidence
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Export Evidence */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-heading font-bold mb-2">Export Compliance Evidence</h3>
            <p className="text-white/50 text-sm max-w-lg mx-auto">
              Download the verified receipt chain as audit evidence. Choose your preferred format.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <button
              onClick={() => exportReceipts('json')}
              className="glass-card p-6 text-center hover:bg-white/10 transition-colors group"
            >
              <FileJson className="w-10 h-10 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="font-medium mb-1">JSON</div>
              <div className="text-xs text-white/40">Full receipt data with metadata</div>
            </button>
            <button
              onClick={() => exportReceipts('csv')}
              className="glass-card p-6 text-center hover:bg-white/10 transition-colors group"
            >
              <FileSpreadsheet className="w-10 h-10 mx-auto mb-3 text-green-400 group-hover:scale-110 transition-transform" />
              <div className="font-medium mb-1">CSV</div>
              <div className="text-xs text-white/40">Spreadsheet-ready flat format</div>
            </button>
          </div>

          <div className="glass-card p-4 max-w-lg mx-auto">
            <div className="text-xs text-white/40 mb-2 font-medium uppercase tracking-wider">Enterprise Formats (API)</div>
            <p className="text-xs text-white/50">
              Additional export formats are available via API for enterprise integrations:
              Splunk HEC, Datadog Logs, and Elastic NDJSON.
              See the <a href="/developers" className="text-blue-400 hover:text-blue-300 underline">developer docs</a> for details.
            </p>
          </div>

          {verifyResult?.chain_integrity && (
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
              <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Chain verified — {receipts.length} receipts, all signatures valid</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  mono,
  highlight,
}: {
  label: string;
  value: string;
  mono?: boolean;
  highlight?: 'blue' | 'green';
}) {
  const highlightClass = highlight === 'blue'
    ? 'text-blue-400/80'
    : highlight === 'green'
    ? 'text-green-400/80'
    : 'text-white/60';

  return (
    <div>
      <div className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5">{label}</div>
      <div className={`text-xs break-all ${mono ? 'font-mono' : ''} ${highlightClass}`}>
        {value}
      </div>
    </div>
  );
}
