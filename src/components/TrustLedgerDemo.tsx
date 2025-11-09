'use client';

import { useState, useEffect } from 'react';

interface TrustReceipt {
  eventId: string;
  timestamp: string;
  contentHash: string;
  previousHash: string;
  signature: string;
  verificationUrl: string;
}



interface Analytics {
  totalDeclarations?: number;
  complianceScore?: number;
  activeAgents?: number;
  riskLevel?: string;
  violations?: {
    critical: number;
    major: number;
    minor: number;
  };
  trustArticles?: Record<string, { compliance: number; violations: number }>;
  trends?: {
    daily: Array<{ date: string; declarations: number; compliance: number }>;
  };
  [key: string]: unknown;
}

interface VerificationResult {
  contentIntegrity: string;
  trustScore: number;
  compliance: {
    biasDetected: boolean;
    fairnessScore: number;
  };
}

const DEMO_API_URL = '/api/trust-demo';

export default function TrustLedgerDemo() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'create' | 'generate' | 'verify'>('analytics');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  // const [declarations, setDeclarations] = useState<TrustDeclaration[]>([]);
  const [trustReceipt, setTrustReceipt] = useState<TrustReceipt | null>(null);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);

  // Form states
  const [agentName, setAgentName] = useState('Demo AI Agent');
  const [trustArticles, setTrustArticles] = useState({
    inspection_mandate: true,
    consent_architecture: true,
    ethical_override: true,
    continuous_validation: true,
    right_to_disconnect: true,
    moral_recognition: true,
  });
  const [aiPrompt, setAiPrompt] = useState('Explain the importance of AI compliance in enterprise environments');
  const [eventId, setEventId] = useState('');

  const loadAnalytics = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${DEMO_API_URL}/analytics`);
      const data = await response.json();
      if (data.success) {
        setAnalytics(data.data);
      } else {
        setError('Failed to load analytics');
      }
    } catch {
      setError('Network error loading analytics');
    } finally {
      setLoading(false);
    }
  };

  const createTrustDeclaration = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${DEMO_API_URL}/declarations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentId: `agent-${Date.now()}`,
          agentName,
          trustArticles,
          notes: 'Demo trust declaration from YCQ website',
        }),
      });
      const data = await response.json();
      if (data.success) {
        setTrustReceipt(data.trustReceipt);
      } else {
        setError('Failed to create trust declaration');
      }
    } catch {
      setError('Network error creating declaration');
    } finally {
      setLoading(false);
    }
  };

  const generateWithTrustReceipt = async () => {
    setLoading(true);
    setError(null);
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
        setTrustReceipt(data.data.trustReceipt);
      } else {
        setError('Failed to generate AI response');
      }
    } catch {
      setError('Network error generating response');
    } finally {
      setLoading(false);
    }
  };

  const verifyReceipt = async () => {
    if (!eventId) {
      setError('Please enter an Event ID');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${DEMO_API_URL}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventId }),
      });
      const data = await response.json();
      if (data.success) {
        setVerificationResult(data.verification);
      } else {
        setError('Verification failed');
      }
    } catch {
      setError('Network error verifying receipt');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'analytics') {
      loadAnalytics();
    }
  }, [activeTab]);

  const complianceScore = Object.values(trustArticles).filter(Boolean).length / 6;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-stone-200">
        <div className="flex overflow-x-auto">
          {[
            { id: 'analytics', label: '📊 Analytics', icon: '📊' },
            { id: 'create', label: '✨ Create Declaration', icon: '✨' },
            { id: 'generate', label: '🤖 AI + Receipt', icon: '🤖' },
            { id: 'verify', label: '🔍 Verify Receipt', icon: '🔍' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'analytics' | 'create' | 'generate' | 'verify')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-900">
            ❌ {error}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Trust Analytics Dashboard</h3>
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-2 text-stone-700">Loading analytics...</p>
              </div>
            ) : analytics ? (
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-700 font-medium">Total Declarations</div>
                    <div className="text-3xl font-bold text-blue-900">{analytics.totalDeclarations}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-green-700 font-medium">Avg Compliance</div>
                    <div className="text-3xl font-bold text-green-900">
                      {((analytics.complianceScore || 0) * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="text-sm text-amber-700 font-medium">Trust Receipts</div>
                    <div className="text-3xl font-bold text-amber-900">{analytics.activeAgents}</div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={loadAnalytics}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Load Analytics
              </button>
            )}
          </div>
        )}

        {/* Create Declaration Tab */}
        {activeTab === 'create' && (
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Create Trust Declaration</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-800 mb-2">Agent Name</label>
                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-800 mb-2">Trust Articles</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {Object.entries(trustArticles).map(([key, value]) => (
                    <label key={key} className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer ${value ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => setTrustArticles({ ...trustArticles, [key]: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-bold text-gray-900">{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-900">Compliance Score</span>
                  <span className="text-2xl font-bold text-blue-900">{(complianceScore * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${complianceScore * 100}%` }}
                  ></div>
                </div>
              </div>
              <button
                onClick={createTrustDeclaration}
                disabled={loading}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Declaration + Trust Receipt'}
              </button>
              {trustReceipt && (
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">🔐 Trust Receipt Generated</h4>
                  <div className="space-y-1 text-sm">
                    <div><strong>Event ID:</strong> <code className="bg-amber-100 px-2 py-1 rounded">{trustReceipt.eventId}</code></div>
                    <div><strong>Timestamp:</strong> {new Date(trustReceipt.timestamp).toLocaleString()}</div>
                    <div><strong>Content Hash:</strong> <code className="bg-amber-100 px-2 py-1 rounded text-xs">{trustReceipt.contentHash.substring(0, 32)}...</code></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Generate AI Tab */}
        {activeTab === 'generate' && (
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">AI Generation + Trust Receipt</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-800 mb-2">AI Prompt</label>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                />
              </div>
              <button
                onClick={generateWithTrustReceipt}
                disabled={loading}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Generating...' : 'Generate AI Response + Trust Receipt'}
              </button>
              {trustReceipt && (
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">🤖 AI Response Generated with Trust Receipt</h4>
                  <div className="space-y-1 text-sm">
                    <div><strong>Event ID:</strong> <code className="bg-purple-100 px-2 py-1 rounded">{trustReceipt.eventId}</code></div>
                    <div><strong>Timestamp:</strong> {new Date(trustReceipt.timestamp).toLocaleString()}</div>
                    <div><strong>Signature:</strong> <code className="bg-purple-100 px-2 py-1 rounded text-xs">{trustReceipt.signature.substring(0, 32)}...</code></div>
                    <button
                      onClick={() => {
                        setEventId(trustReceipt.eventId);
                        setActiveTab('verify');
                      }}
                      className="mt-2 bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700"
                    >
                      Verify This Receipt
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Verify Tab */}
        {activeTab === 'verify' && (
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Verify Trust Receipt</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-800 mb-2">Event ID</label>
                <input
                  type="text"
                  value={eventId}
                  onChange={(e) => setEventId(e.target.value)}
                  placeholder="evt_xxx"
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                />
              </div>
              <button
                onClick={verifyReceipt}
                disabled={loading || !eventId}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Verifying...' : 'Verify Trust Receipt'}
              </button>
              {verificationResult && (
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">✅ Verification Results</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Content Integrity:</span>
                      <span className="font-bold text-green-700">{verificationResult.contentIntegrity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trust Score:</span>
                      <span className="font-bold text-green-700">{(verificationResult.trustScore * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bias Detected:</span>
                      <span className="font-bold text-green-700">{verificationResult.compliance.biasDetected ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fairness Score:</span>
                      <span className="font-bold text-green-700">{(verificationResult.compliance.fairnessScore * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}