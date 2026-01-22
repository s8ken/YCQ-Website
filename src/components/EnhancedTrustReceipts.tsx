'use client';

import { useState, useEffect } from 'react';
import { Download, Share2, Eye, CheckCircle, AlertCircle, Clock, Shield, Key, FileText, TrendingUp, Users, Award, Zap } from 'lucide-react';

interface TrustReceipt {
  id: string;
  receiptHash: string;
  transactionHash: string;
  issuer: {
    did: string;
    name: string;
    type: 'individual' | 'organization';
  };
  recipient: {
    did: string;
    name: string;
    type: 'individual' | 'organization';
  };
  trustScore: number;
  verificationLevel: 'basic' | 'standard' | 'enhanced' | 'premium';
  issuedAt: string;
  expiresAt: string;
  status: 'active' | 'expired' | 'revoked' | 'suspended';
  metadata: {
    verificationMethod: string;
    blockchain: string;
    smartContract: string;
    zeroKnowledgeProof?: string;
  };
  cryptographicProof: {
    signature: string;
    publicKey: string;
    algorithm: string;
  };
}

interface EnhancedTrustReceiptsProps {
  className?: string;
}

export default function EnhancedTrustReceipts({ className = "" }: EnhancedTrustReceiptsProps) {
  const [receipts, setReceipts] = useState<TrustReceipt[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState<TrustReceipt | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'expired' | 'revoked'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'score' | 'level'>('date');

  // Demo data initialization
  useEffect(() => {
    const demoReceipts: TrustReceipt[] = [
      {
        id: 'tr_001',
        receiptHash: '0x7f8a9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b',
        transactionHash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
        issuer: {
          did: 'did:web:ycq.com:issuer:ai-agent-001',
          name: 'YCQ AI Compliance Agent',
          type: 'organization'
        },
        recipient: {
          did: 'did:web:demo.com:user:enterprise-client',
          name: 'Enterprise Demo Client',
          type: 'organization'
        },
        trustScore: 0.94,
        verificationLevel: 'premium',
        issuedAt: '2024-11-15T10:30:00Z',
        expiresAt: '2025-11-15T10:30:00Z',
        status: 'active',
        metadata: {
          verificationMethod: 'Ed25519Signature2020',
          blockchain: 'Ethereum',
          smartContract: '0x9f8e7d6c5b4a3920',
          zeroKnowledgeProof: 'zk-SNARK-verification'
        },
        cryptographicProof: {
          signature: '0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c',
          publicKey: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
          algorithm: 'Ed25519'
        }
      },
      {
        id: 'tr_002',
        receiptHash: '0x8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1',
        transactionHash: '0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c',
        issuer: {
          did: 'did:web:ycq.com:issuer:compliance-oracle',
          name: 'YCQ Compliance Oracle',
          type: 'organization'
        },
        recipient: {
          did: 'did:web:demo.com:user:regulatory-auditor',
          name: 'Regulatory Auditor',
          type: 'individual'
        },
        trustScore: 0.87,
        verificationLevel: 'enhanced',
        issuedAt: '2024-11-14T15:45:00Z',
        expiresAt: '2025-05-14T15:45:00Z',
        status: 'active',
        metadata: {
          verificationMethod: 'RSA-PSS-SHA256',
          blockchain: 'Polygon',
          smartContract: '0x8d7e6c5b4a39201f'
        },
        cryptographicProof: {
          signature: '0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e',
          publicKey: '0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f',
          algorithm: 'RSA-PSS-SHA256'
        }
      },
      {
        id: 'tr_003',
        receiptHash: '0x9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e',
        transactionHash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
        issuer: {
          did: 'did:web:ycq.com:issuer:ai-validator',
          name: 'AI Validator Node',
          type: 'individual'
        },
        recipient: {
          did: 'did:web:demo.com:user:developer',
          name: 'Demo Developer',
          type: 'individual'
        },
        trustScore: 0.92,
        verificationLevel: 'standard',
        issuedAt: '2024-11-13T09:15:00Z',
        expiresAt: '2024-12-13T09:15:00Z',
        status: 'expired',
        metadata: {
          verificationMethod: 'ECDSA-P256-SHA256',
          blockchain: 'Arbitrum',
          smartContract: '0x7c6b5a4938e2017'
        },
        cryptographicProof: {
          signature: '0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f',
          publicKey: '0x6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a5',
          algorithm: 'ECDSA-P256-SHA256'
        }
      }
    ];
    setReceipts(demoReceipts);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50 border-green-200';
      case 'expired': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'revoked': return 'text-red-600 bg-red-50 border-red-200';
      case 'suspended': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-blue-100 text-blue-800';
      case 'standard': return 'bg-purple-100 text-purple-800';
      case 'enhanced': return 'bg-indigo-100 text-indigo-800';
      case 'premium': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 0.9) return 'text-green-600';
    if (score >= 0.7) return 'text-blue-600';
    if (score >= 0.5) return 'text-amber-600';
    return 'text-red-600';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const downloadReceipt = (receipt: TrustReceipt) => {
    const dataStr = JSON.stringify(receipt, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `trust-receipt-${receipt.id}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const shareReceipt = (receipt: TrustReceipt) => {
    const shareData = {
      title: `Trust Receipt ${receipt.id}`,
      text: `Trust Receipt from ${receipt.issuer.name} to ${receipt.recipient.name} - Score: ${(receipt.trustScore * 100).toFixed(1)}%`,
      url: window.location.href
    };
    
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      alert('Receipt details copied to clipboard!');
    }
  };

  const filteredReceipts = receipts.filter(receipt => 
    filter === 'all' || receipt.status === filter
  ).sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.issuedAt).getTime() - new Date(a.issuedAt).getTime();
      case 'score':
        return b.trustScore - a.trustScore;
      case 'level':
        const levelOrder = { basic: 1, standard: 2, enhanced: 3, premium: 4 };
        return levelOrder[b.verificationLevel] - levelOrder[a.verificationLevel];
      default:
        return 0;
    }
  });

  const stats = {
    total: receipts.length,
    active: receipts.filter(r => r.status === 'active').length,
    avgScore: receipts.length > 0 ? (receipts.reduce((sum, r) => sum + r.trustScore, 0) / receipts.length * 100).toFixed(1) : '0',
    premium: receipts.filter(r => r.verificationLevel === 'premium').length
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">SONATE Trust Receipts</h2>
              <p className="text-blue-100">Cryptographic trust verification system</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
              <div className="text-sm text-blue-100">Total Receipts</div>
              <div className="text-xl font-bold">{stats.total}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Active</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{stats.active}</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">Avg Score</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{stats.avgScore}%</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-gray-600">Premium</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{stats.premium}</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-600">Total</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {['all', 'active', 'expired', 'revoked'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="date">Sort by Date</option>
              <option value="score">Sort by Score</option>
              <option value="level">Sort by Level</option>
            </select>
          </div>
        </div>
      </div>

      {/* Receipts List */}
      <div className="p-6">
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2 text-gray-600">Loading trust receipts...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReceipts.map((receipt) => (
              <div key={receipt.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(receipt.status)}`}>
                        {receipt.status.charAt(0).toUpperCase() + receipt.status.slice(1)}
                      </span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(receipt.verificationLevel)}`}>
                        {receipt.verificationLevel.charAt(0).toUpperCase() + receipt.verificationLevel.slice(1)}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className={`text-lg font-bold ${getScoreColor(receipt.trustScore)}`}>
                          {(receipt.trustScore * 100).toFixed(1)}%
                        </span>
                        <span className="text-gray-500 text-sm">Trust Score</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">From</div>
                        <div className="font-medium text-gray-900">{receipt.issuer.name}</div>
                        <div className="text-xs text-gray-500 font-mono">{receipt.issuer.did}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">To</div>
                        <div className="font-medium text-gray-900">{receipt.recipient.name}</div>
                        <div className="text-xs text-gray-500 font-mono">{receipt.recipient.did}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Issued: {formatDate(receipt.issuedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Key className="w-4 h-4" />
                        <span>{receipt.cryptographicProof.algorithm}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        <span>{receipt.metadata.blockchain}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => {
                        setSelectedReceipt(receipt);
                        setShowDetails(true);
                      }}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => downloadReceipt(receipt)}
                      className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                      title="Download"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => shareReceipt(receipt)}
                      className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                      title="Share"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredReceipts.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No trust receipts found for the selected filter.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Detailed View Modal */}
      {showDetails && selectedReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Trust Receipt Details</h3>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Receipt Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>ID:</strong> <code className="text-xs">{selectedReceipt.id}</code></div>
                    <div><strong>Hash:</strong> <code className="text-xs">{selectedReceipt.receiptHash.substring(0, 32)}...</code></div>
                    <div><strong>Transaction:</strong> <code className="text-xs">{selectedReceipt.transactionHash.substring(0, 32)}...</code></div>
                    <div><strong>Status:</strong> <span className={`px-2 py-1 rounded text-xs ${getStatusColor(selectedReceipt.status)}`}>{selectedReceipt.status}</span></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Trust Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Trust Score:</strong> <span className={`font-bold ${getScoreColor(selectedReceipt.trustScore)}`}>{(selectedReceipt.trustScore * 100).toFixed(1)}%</span></div>
                    <div><strong>Verification Level:</strong> <span className={`px-2 py-1 rounded text-xs ${getLevelColor(selectedReceipt.verificationLevel)}`}>{selectedReceipt.verificationLevel}</span></div>
                    <div><strong>Issued:</strong> {formatDate(selectedReceipt.issuedAt)}</div>
                    <div><strong>Expires:</strong> {formatDate(selectedReceipt.expiresAt)}</div>
                  </div>
                </div>
              </div>

              {/* Parties */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Issuer</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium">{selectedReceipt.issuer.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{selectedReceipt.issuer.did}</div>
                    <div className="text-xs text-gray-500 mt-1">Type: {selectedReceipt.issuer.type}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recipient</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium">{selectedReceipt.recipient.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{selectedReceipt.recipient.did}</div>
                    <div className="text-xs text-gray-500 mt-1">Type: {selectedReceipt.recipient.type}</div>
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Verification Metadata</h4>
                <div className="bg-blue-50 p-4 rounded-lg space-y-2 text-sm">
                  <div><strong>Method:</strong> {selectedReceipt.metadata.verificationMethod}</div>
                  <div><strong>Blockchain:</strong> {selectedReceipt.metadata.blockchain}</div>
                  <div><strong>Smart Contract:</strong> <code className="text-xs">{selectedReceipt.metadata.smartContract}</code></div>
                  {selectedReceipt.metadata.zeroKnowledgeProof && (
                    <div><strong>ZK Proof:</strong> {selectedReceipt.metadata.zeroKnowledgeProof}</div>
                  )}
                </div>
              </div>

              {/* Cryptographic Proof */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Cryptographic Proof</h4>
                <div className="bg-green-50 p-4 rounded-lg space-y-2 text-sm">
                  <div><strong>Algorithm:</strong> {selectedReceipt.cryptographicProof.algorithm}</div>
                  <div><strong>Signature:</strong> <code className="text-xs break-all">{selectedReceipt.cryptographicProof.signature}</code></div>
                  <div><strong>Public Key:</strong> <code className="text-xs break-all">{selectedReceipt.cryptographicProof.publicKey}</code></div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => downloadReceipt(selectedReceipt)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
              <button
                onClick={() => shareReceipt(selectedReceipt)}
                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}