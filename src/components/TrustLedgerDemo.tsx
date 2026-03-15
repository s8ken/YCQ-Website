'use client';

import { useEffect, useState } from 'react';
import { API_URL } from '@/lib/site';

interface SignedReceipt {
  id: string;
  version: string;
  timestamp: string;
  session_id: string;
  agent_did: string;
  human_did: string;
  interaction: {
    prompt?: string;
    response?: string;
    prompt_hash?: string;
    response_hash?: string;
    model: string;
  };
  chain: {
    previous_hash: string;
    chain_hash: string;
    chain_length: number;
  };
  telemetry?: {
    resonance_score?: number;
    coherence_score?: number;
    truth_debt?: number;
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

interface ChainVerificationResult {
  chain_integrity: boolean;
  overall_status: string;
  chain_length: number;
  results: Array<{
    index: number;
    receipt_id: string;
    timestamp: string;
    checks: Record<string, { status: string; message: string }>;
  }>;
  publicKey?: string;
}

type DemoTab = 'generate' | 'verify' | 'chain';

const BACKEND_API = API_URL.replace('/api', '');

const PROMPT_PRESETS = [
  {
    label: 'Enterprise Safe',
    prompt: 'Explain why AI transparency is important for enterprise adoption.',
  },
  {
    label: 'Compliance Brief',
    prompt: 'Summarize how an AI assistant should handle customer PII in a regulated environment.',
  },
  {
    label: 'Board Update',
    prompt: 'Give a short board-level update on why signed AI receipts matter for governance.',
  },
];

const FLOW_STEPS = [
  { id: 1, title: 'Generate', hint: 'Mint one signed receipt' },
  { id: 2, title: 'Inspect', hint: 'Review the proof fields' },
  { id: 3, title: 'Verify', hint: 'Confirm it passes checks' },
];

function shortHash(value?: string, size = 16) {
  if (!value) return 'Unavailable';
  return `${value.substring(0, size)}...${value.substring(value.length - size)}`;
}

function statusTone(status?: string) {
  if (status === 'PASS' || status === 'VERIFIED') return 'text-green-400 bg-green-500/20';
  if (status === 'WARN' || status === 'PARTIAL') return 'text-amber-400 bg-amber-500/20';
  return 'text-red-400 bg-red-500/20';
}

export default function TrustLedgerDemo() {
  const [activeTab, setActiveTab] = useState<DemoTab>('generate');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [receipt, setReceipt] = useState<SignedReceipt | null>(null);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [aiPrompt, setAiPrompt] = useState(PROMPT_PRESETS[0].prompt);

  const [receiptJson, setReceiptJson] = useState('');
  const [originalReceiptJson, setOriginalReceiptJson] = useState('');
  const [hasTampered, setHasTampered] = useState(false);
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  const [chainReceipts, setChainReceipts] = useState<SignedReceipt[]>([]);
  const [chainSessionId, setChainSessionId] = useState<string | null>(null);
  const [chainVerificationResult, setChainVerificationResult] =
    useState<ChainVerificationResult | null>(null);

  const formatPercent = (value?: number, invert = false) => {
    if (typeof value !== 'number') return null;
    const normalized = invert ? 1 - value : value;
    return `${Math.round(normalized * 100)}%`;
  };

  const currentStep = verificationResult
    ? 3
    : receipt || receiptJson.trim()
      ? 2
      : 1;

  const signatureCheck = verificationResult?.checks?.signature?.status;
  const chainCheck = verificationResult?.checks?.chain?.status;
  const nextAction = verificationResult
    ? hasTampered && verificationResult.overallStatus !== 'VERIFIED'
      ? 'Restore the original receipt to show verification recovering.'
      : 'Tamper with the JSON to show the proof breaks when the payload changes.'
    : receipt
      ? 'Switch to Verify Receipt and run the cryptographic checks.'
      : 'Start with one preset prompt so the proof flow is visible immediately.';

  useEffect(() => {
    fetch(`${BACKEND_API}/api/public-demo/public-key`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.publicKey) {
          setPublicKey(data.data.publicKey);
        }
      })
      .catch(() => {});
  }, []);

  const copyText = (value: string, setter: (value: boolean) => void) => {
    navigator.clipboard.writeText(value);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  const generateWithTrustReceipt = async () => {
    setLoading(true);
    setError(null);
    setReceipt(null);
    setAiResponse(null);
    setVerificationResult(null);
    setHasTampered(false);

    try {
      const response = await fetch(`${BACKEND_API}/api/public-demo/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: aiPrompt,
          model: 'demo-model',
          includeContent: true,
        }),
      });
      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Failed to generate receipt');
        return;
      }

      const nextReceipt = data.data.receipt as SignedReceipt;
      const nextReceiptJson = JSON.stringify(nextReceipt, null, 2);

      setAiResponse(data.data.response);
      setReceipt(nextReceipt);
      setReceiptJson(nextReceiptJson);
      setOriginalReceiptJson(nextReceiptJson);
      setActiveTab('generate');
    } catch {
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

  const tamperReceipt = () => {
    if (!receiptJson.trim()) return;

    try {
      const parsed = JSON.parse(receiptJson);
      parsed.interaction = {
        ...parsed.interaction,
        response_hash: parsed.interaction?.response_hash
          ? `ff${String(parsed.interaction.response_hash).slice(2)}`
          : 'ff-tampered-demo-hash',
      };
      setReceiptJson(JSON.stringify(parsed, null, 2));
      setVerificationResult(null);
      setHasTampered(true);
      setActiveTab('verify');
    } catch {
      setError('Receipt JSON must be valid before tampering');
    }
  };

  const restoreReceipt = () => {
    if (!originalReceiptJson) return;
    setReceiptJson(originalReceiptJson);
    setVerificationResult(null);
    setHasTampered(false);
  };

  const generateChainDemo = async () => {
    setLoading(true);
    setError(null);
    setChainReceipts([]);
    setChainVerificationResult(null);

    try {
      const response = await fetch(`${BACKEND_API}/api/public-demo/generate-chain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Failed to generate receipt chain');
        return;
      }

      setChainReceipts(data.data.receipts || []);
      setChainSessionId(data.data.session_id || null);
      setActiveTab('chain');
    } catch {
      setError('Network error generating chain demo');
    } finally {
      setLoading(false);
    }
  };

  const verifyChain = async () => {
    if (chainReceipts.length === 0) {
      setError('Generate a chain first');
      return;
    }

    setLoading(true);
    setError(null);
    setChainVerificationResult(null);

    try {
      const response = await fetch(`${BACKEND_API}/api/public-demo/verify-chain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ receipts: chainReceipts }),
      });
      const data = await response.json();

      if (data.success) {
        setChainVerificationResult(data.data);
      } else {
        setError(data.error || 'Chain verification failed');
      }
    } catch {
      setError('Network error verifying receipt chain');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_320px]">
      <div className="rounded-xl overflow-hidden">
        <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex flex-wrap gap-3">
            {FLOW_STEPS.map((step) => {
              const isActive = currentStep === step.id;
              const isComplete = currentStep > step.id;
              return (
                <div key={step.id} className="flex min-w-[140px] flex-1 items-start gap-3 rounded-lg border border-white/10 bg-black/20 p-3">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                      isComplete
                        ? 'bg-green-500 text-black'
                        : isActive
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {step.id}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{step.title}</div>
                    <div className="text-xs text-white/45">{step.hint}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-b border-white/10 mb-6">
          <div className="flex gap-1 flex-wrap">
            {[
              { id: 'generate', label: 'Generate' },
              { id: 'verify', label: 'Verify' },
              { id: 'chain', label: 'Chain Demo' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as DemoTab)}
                className={`px-5 py-3 text-sm font-medium transition-colors rounded-t-lg ${
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

        {error && (
          <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

        {activeTab === 'generate' && (
          <div className="space-y-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">Prompt Presets</div>
              <div className="flex flex-wrap gap-2">
                {PROMPT_PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setAiPrompt(preset.prompt)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                      aiPrompt === preset.prompt
                        ? 'border-blue-500/40 bg-blue-500/15 text-blue-300'
                        : 'border-white/10 bg-white/5 text-white/65 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Your Message</label>
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                rows={4}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a message for the AI..."
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={generateWithTrustReceipt}
                disabled={loading || !aiPrompt.trim()}
                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'Generating…' : 'Send Message & Generate Receipt'}
              </button>
              <button
                onClick={generateChainDemo}
                disabled={loading}
                className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/80 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'Working…' : 'Generate 3-Receipt Chain'}
              </button>
            </div>

            {aiResponse && (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-white/40">AI Response</div>
                <p className="text-sm leading-relaxed text-white/80">{aiResponse}</p>
              </div>
            )}

            {receipt && (
              <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-green-400">SONATE Signed Receipt</span>
                </div>

                {(receipt.telemetry?.resonance_score != null ||
                  receipt.telemetry?.coherence_score != null ||
                  receipt.telemetry?.truth_debt != null) && (
                  <div className="mb-4 grid gap-3 sm:grid-cols-3">
                    {receipt.telemetry?.resonance_score != null && (
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
                        <div className="mb-1 text-[11px] uppercase tracking-wider text-blue-300/70">
                          Trust Score
                        </div>
                        <div className="text-xl font-semibold text-blue-300">
                          {formatPercent(receipt.telemetry.resonance_score)}
                        </div>
                      </div>
                    )}
                    {receipt.telemetry?.coherence_score != null && (
                      <div className="rounded-lg border border-violet-500/20 bg-violet-500/10 p-3">
                        <div className="mb-1 text-[11px] uppercase tracking-wider text-violet-300/70">
                          Coherence
                        </div>
                        <div className="text-xl font-semibold text-violet-300">
                          {formatPercent(receipt.telemetry.coherence_score)}
                        </div>
                      </div>
                    )}
                    {receipt.telemetry?.truth_debt != null && (
                      <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-3">
                        <div className="mb-1 text-[11px] uppercase tracking-wider text-amber-300/70">
                          Truth Debt
                        </div>
                        <div className="text-xl font-semibold text-amber-300">
                          {formatPercent(receipt.telemetry.truth_debt, true)}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-2 font-mono text-xs">
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <span className="text-white/40">Receipt ID</span>
                    <span className="break-all text-white/80">{shortHash(receipt.id, 24)}</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <span className="text-white/40">Timestamp</span>
                    <span className="text-white/80">{receipt.timestamp}</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <span className="text-white/40">Agent DID</span>
                    <span className="break-all text-blue-400">{receipt.agent_did}</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <span className="text-white/40">Chain Hash</span>
                    <span className="break-all text-blue-400">{shortHash(receipt.chain.chain_hash, 24)}</span>
                  </div>
                  {receipt.interaction.prompt_hash && (
                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                      <span className="text-white/40">Prompt Hash</span>
                      <span className="break-all text-amber-400">{shortHash(receipt.interaction.prompt_hash, 24)}</span>
                    </div>
                  )}
                  {receipt.interaction.response_hash && (
                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                      <span className="text-white/40">Response Hash</span>
                      <span className="break-all text-amber-400">{shortHash(receipt.interaction.response_hash, 24)}</span>
                    </div>
                  )}
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <span className="text-white/40">Signature</span>
                    <span className="break-all text-purple-400">{shortHash(receipt.signature.value, 24)}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 border-t border-white/10 pt-4">
                  <button
                    onClick={() => setActiveTab('verify')}
                    className="text-sm text-blue-400 transition-colors hover:text-blue-300"
                  >
                    Verify this receipt →
                  </button>
                  <button
                    onClick={() => copyText(receiptJson, setCopiedReceipt)}
                    className="text-sm text-white/40 transition-colors hover:text-white/70"
                  >
                    {copiedReceipt ? 'Copied JSON' : 'Copy JSON'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'verify' && (
          <div className="space-y-6">
            {publicKey && (
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Public Key</div>
                  <div className="truncate font-mono text-xs text-white/60">{shortHash(publicKey, 18)}</div>
                </div>
                <button
                  onClick={() => copyText(publicKey, setCopiedKey)}
                  className="ml-3 text-xs text-white/40 hover:text-white"
                >
                  {copiedKey ? 'Copied' : 'Copy'}
                </button>
              </div>
            )}

            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-medium text-white">Receipt JSON</div>
                  <div className="text-xs text-white/45">Paste a receipt, or tamper with the generated one to see verification fail.</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={tamperReceipt}
                    disabled={loading || !receiptJson.trim()}
                    className="rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-300 transition-colors hover:bg-amber-500/15 disabled:opacity-40"
                  >
                    Tamper Receipt
                  </button>
                  <button
                    onClick={restoreReceipt}
                    disabled={loading || !originalReceiptJson}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 disabled:opacity-40"
                  >
                    Restore Original
                  </button>
                </div>
              </div>

              <textarea
                value={receiptJson}
                onChange={(e) => setReceiptJson(e.target.value)}
                rows={12}
                className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-3 font-mono text-xs text-white placeholder-white/30 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                placeholder='{"id":"...", "signature": {...}}'
              />
            </div>

            <button
              onClick={verifyReceipt}
              disabled={loading || !receiptJson.trim()}
              className="w-full rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Verifying…' : 'Verify Receipt Signature'}
            </button>

            {verificationResult && (
              <div
                className={`rounded-lg border p-4 ${
                  verificationResult.overallStatus === 'VERIFIED'
                    ? 'border-green-500/20 bg-green-500/10'
                    : verificationResult.overallStatus === 'PARTIAL'
                      ? 'border-amber-500/20 bg-amber-500/10'
                      : 'border-red-500/20 bg-red-500/10'
                }`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      verificationResult.overallStatus === 'VERIFIED'
                        ? 'bg-green-500'
                        : verificationResult.overallStatus === 'PARTIAL'
                          ? 'bg-amber-500'
                          : 'bg-red-500'
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      verificationResult.overallStatus === 'VERIFIED'
                        ? 'text-green-400'
                        : verificationResult.overallStatus === 'PARTIAL'
                          ? 'text-amber-400'
                          : 'text-red-400'
                    }`}
                  >
                    {verificationResult.overallStatus}
                  </span>
                  {hasTampered && verificationResult.overallStatus !== 'VERIFIED' && (
                    <span className="rounded-full bg-amber-500/20 px-2 py-1 text-[11px] uppercase tracking-wider text-amber-300">
                      Tamper detected
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Verification Checks</div>
                  {Object.entries(verificationResult.checks).map(([key, check]) => (
                    <div key={key} className="flex items-center justify-between rounded bg-white/5 p-2">
                      <div className="flex-1">
                        <div className="text-sm capitalize text-white/70">{key}</div>
                        <div className="text-xs text-white/40">{check.message}</div>
                      </div>
                      <span className={`ml-2 rounded px-2 py-1 text-xs ${statusTone(check.status)}`}>
                        {check.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'chain' && (
          <div className="space-y-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-sm font-medium text-white">Linked Receipt Chain</div>
              <div className="text-sm text-white/55">
                Generate three linked receipts, then verify that each signature passes and each receipt points to the previous chain hash.
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={generateChainDemo}
                  disabled={loading}
                  className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Generating…' : 'Generate Chain'}
                </button>
                <button
                  onClick={verifyChain}
                  disabled={loading || chainReceipts.length === 0}
                  className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/80 transition-colors hover:bg-white/10 disabled:opacity-40"
                >
                  {loading ? 'Working…' : 'Verify Chain'}
                </button>
              </div>
            </div>

            {chainSessionId && (
              <div className="text-xs uppercase tracking-[0.2em] text-white/35">
                Session {chainSessionId}
              </div>
            )}

            {chainReceipts.length > 0 && (
              <div className="space-y-3">
                {chainReceipts.map((item, index) => (
                  <div key={item.id} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium text-white">Receipt {index + 1}</div>
                        <div className="font-mono text-xs text-white/45">{shortHash(item.id, 18)}</div>
                      </div>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] uppercase tracking-wider text-white/55">
                        Chain #{item.chain.chain_length}
                      </span>
                    </div>
                    <div className="grid gap-2 text-xs sm:grid-cols-2">
                      <div className="rounded bg-black/20 p-2">
                        <div className="text-white/40">Previous Hash</div>
                        <div className="mt-1 break-all font-mono text-white/70">
                          {index === 0 ? item.chain.previous_hash : shortHash(item.chain.previous_hash, 20)}
                        </div>
                      </div>
                      <div className="rounded bg-black/20 p-2">
                        <div className="text-white/40">Chain Hash</div>
                        <div className="mt-1 break-all font-mono text-blue-300">
                          {shortHash(item.chain.chain_hash, 20)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {chainVerificationResult && (
              <div
                className={`rounded-lg border p-4 ${
                  chainVerificationResult.chain_integrity
                    ? 'border-green-500/20 bg-green-500/10'
                    : 'border-red-500/20 bg-red-500/10'
                }`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${chainVerificationResult.chain_integrity ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className={`text-sm font-medium ${chainVerificationResult.chain_integrity ? 'text-green-400' : 'text-red-400'}`}>
                    {chainVerificationResult.overall_status}
                  </span>
                </div>
                <div className="space-y-3">
                  {chainVerificationResult.results.map((result) => (
                    <div key={result.receipt_id} className="rounded bg-white/5 p-3">
                      <div className="mb-2 text-sm font-medium text-white">
                        Receipt {result.index + 1} <span className="font-mono text-xs text-white/45">{shortHash(result.receipt_id, 18)}</span>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-3">
                        {Object.entries(result.checks).map(([key, check]) => (
                          <div key={key} className="rounded bg-black/20 p-2">
                            <div className="text-xs capitalize text-white/45">{key}</div>
                            <div className={`mt-1 inline-flex rounded px-2 py-0.5 text-[11px] ${statusTone(check.status)}`}>
                              {check.status}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">Proof Summary</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded bg-black/20 p-3">
              <span className="text-sm text-white/70">Receipt minted</span>
              <span className={`rounded px-2 py-1 text-xs ${receipt ? statusTone('PASS') : statusTone('FAIL')}`}>
                {receipt ? 'YES' : 'NO'}
              </span>
            </div>
            <div className="flex items-center justify-between rounded bg-black/20 p-3">
              <span className="text-sm text-white/70">Telemetry visible</span>
              <span
                className={`rounded px-2 py-1 text-xs ${
                  receipt?.telemetry ? statusTone('PASS') : statusTone('WARN')
                }`}
              >
                {receipt?.telemetry ? 'LIVE' : 'LIMITED'}
              </span>
            </div>
            <div className="flex items-center justify-between rounded bg-black/20 p-3">
              <span className="text-sm text-white/70">Signature check</span>
              <span className={`rounded px-2 py-1 text-xs ${statusTone(signatureCheck || 'WARN')}`}>
                {signatureCheck || 'PENDING'}
              </span>
            </div>
            <div className="flex items-center justify-between rounded bg-black/20 p-3">
              <span className="text-sm text-white/70">Chain check</span>
              <span
                className={`rounded px-2 py-1 text-xs ${
                  chainVerificationResult
                    ? statusTone(chainVerificationResult.chain_integrity ? 'PASS' : 'FAIL')
                    : statusTone(chainCheck || 'WARN')
                }`}
              >
                {chainVerificationResult
                  ? chainVerificationResult.chain_integrity
                    ? 'VERIFIED'
                    : 'FAILED'
                  : chainCheck || 'PENDING'}
              </span>
            </div>
            <div className="flex items-center justify-between rounded bg-black/20 p-3">
              <span className="text-sm text-white/70">Tamper test</span>
              <span
                className={`rounded px-2 py-1 text-xs ${
                  hasTampered && verificationResult?.overallStatus !== 'VERIFIED'
                    ? statusTone('PASS')
                    : hasTampered
                      ? statusTone('WARN')
                      : statusTone('WARN')
                }`}
              >
                {hasTampered && verificationResult?.overallStatus !== 'VERIFIED'
                  ? 'DETECTED'
                  : hasTampered
                    ? 'TAMPERED'
                    : 'READY'}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
          <div className="mb-2 text-xs uppercase tracking-[0.2em] text-blue-200/70">Next Action</div>
          <div className="text-sm text-blue-100">{nextAction}</div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 text-xs uppercase tracking-[0.2em] text-white/40">Best Investor Move</div>
          <div className="text-sm text-white/65">
            Show one passing verification first, then tamper with the receipt JSON and rerun verification so the failure is visible.
          </div>
        </div>
      </aside>
    </div>
  );
}
