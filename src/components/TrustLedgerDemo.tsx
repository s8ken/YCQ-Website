'use client';

import { useState } from 'react';

interface TrustReceipt {
  eventId: string;
  timestamp: string;
  contentHash: string;
  previousHash: string;
  signature: string;
  verificationUrl: string;
}

interface VerificationResult {
  eventId: string;
  status: string;
  timestamp: string;
  checks: {
    hashIntegrity: { status: string; message: string };
    signatureValid: { status: string; message: string };
    temporalOrder: { status: string; message: string };
  };
  summary: {
    overallStatus: string;
    confidence: number;
    riskLevel: string;
  };
}

const DEMO_API_URL = '/api/trust-demo';

export default function TrustLedgerDemo() {
  const [activeTab, setActiveTab] = useState<'generate' | 'verify'>('generate');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [trustReceipt, setTrustReceipt] = useState<TrustReceipt | null>(null);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [aiPrompt, setAiPrompt] = useState('Explain why AI transparency is important for enterprise adoption.');
  const [eventId, setEventId] = useState('');

  const generateWithTrustReceipt = async () => {
    setLoading(true);
    setError(null);
    setTrustReceipt(null);
    setAiResponse(null);
    try {
      const response = await fetch(`${DEMO_API_URL}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: aiPrompt,
          provider: 'anthropic',
          model: 'claude-3-5-sonnet',
          includeReceipt: true,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setAiResponse(data.data.response);
        setTrustReceipt(data.data.trustReceipt);
      } else {
        setError(data.error || 'Failed to generate AI response');
      }
    } catch {
      setError('Network error generating response');
    } finally {
      setLoading(false);
    }
  };

  const verifyReceipt = async () => {
    if (!eventId.trim()) {
      setError('Please enter an event ID');
      return;
    }
    setLoading(true);
    setError(null);
    setVerificationResult(null);
    try {
      const response = await fetch(`${DEMO_API_URL}/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId }),
      });
      const data = await response.json();
      if (data.success) {
        setVerificationResult(data.data);
      } else {
        setError(data.error || 'Verification failed');
      }
    } catch {
      setError('Network error verifying receipt');
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
          {trustReceipt && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-400">Trust Receipt Generated</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40">Event ID:</span>
                  <span className="text-white/80 break-all">{trustReceipt.eventId}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40">Timestamp:</span>
                  <span className="text-white/80">{trustReceipt.timestamp}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40">Content Hash:</span>
                  <span className="text-blue-400 break-all">{trustReceipt.contentHash}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40">Signature:</span>
                  <span className="text-purple-400 break-all">{trustReceipt.signature.substring(0, 32)}...</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setEventId(trustReceipt.eventId);
                    setActiveTab('verify');
                  }}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Verify this receipt →
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
            <label className="block text-sm font-medium text-white/70 mb-2">Event ID to Verify</label>
            <input
              type="text"
              value={eventId}
              onChange={(e) => setEventId(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/30 font-mono text-sm"
              placeholder="evt_..."
            />
          </div>
          
          <button
            onClick={verifyReceipt}
            disabled={loading || !eventId.trim()}
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Verifying...
              </span>
            ) : (
              'Verify Receipt'
            )}
          </button>

          {/* Verification Result */}
          {verificationResult && (
            <div className={`p-4 rounded-lg border ${
              verificationResult.summary.overallStatus === 'VERIFIED' 
                ? 'bg-green-500/10 border-green-500/20' 
                : 'bg-red-500/10 border-red-500/20'
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${
                  verificationResult.summary.overallStatus === 'VERIFIED' ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className={`text-sm font-medium ${
                  verificationResult.summary.overallStatus === 'VERIFIED' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {verificationResult.summary.overallStatus}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="text-xs text-white/40 uppercase tracking-wider">Verification Checks</div>
                {Object.entries(verificationResult.checks).map(([key, check]) => (
                  <div key={key} className="flex items-center justify-between p-2 bg-white/5 rounded">
                    <span className="text-sm text-white/70">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      check.status === 'PASS' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {check.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-sm">
                <span className="text-white/40">Confidence</span>
                <span className="text-white/80">{(verificationResult.summary.confidence * 100).toFixed(1)}%</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
