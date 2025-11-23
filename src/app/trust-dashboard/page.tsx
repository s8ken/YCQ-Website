"use client"

import React, { useState, useEffect } from 'react'
import { Shield, BarChart3, CheckCircle, TrendingUp, Users, AlertTriangle, Activity, Clock, RefreshCw } from 'lucide-react'

interface TrustReceipt {
  eventId: string
  timestamp: string
  contentHash: string
  previousHash: string
  signature: string
  verificationUrl: string
}

interface Analytics {
  totalDeclarations?: number
  complianceScore?: number
  activeAgents?: number
  riskLevel?: string
  violations?: {
    critical: number
    major: number
    minor: number
  }
  trustArticles?: Record<string, { compliance: number; violations: number }>
  trends?: {
    daily: Array<{ date: string; declarations: number; compliance: number }>
  }
}

interface Declaration {
  id: string
  timestamp: string
  agentName: string
  complianceScore: number
  guiltScore: number
  trustArticles: Record<string, boolean>
  status: string
}

export default function TrustDashboardPage() {
  const [loading, setLoading] = useState(false)
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [declarations, setDeclarations] = useState<Declaration[]>([])
  const [selectedTimeframe, setSelectedTimeframe] = useState<'24h' | '7d' | '30d'>('7d')

  // Demo data matching the SYMBI framework
  const demoAnalytics: Analytics = {
    totalDeclarations: 156,
    complianceScore: 0.87,
    activeAgents: 23,
    riskLevel: 'LOW',
    violations: {
      critical: 0,
      major: 2,
      minor: 5
    },
    trustArticles: {
      inspection_mandate: { compliance: 0.92, violations: 1 },
      consent_architecture: { compliance: 0.95, violations: 0 },
      ethical_override: { compliance: 0.88, violations: 2 },
      continuous_validation: { compliance: 0.85, violations: 1 },
      right_to_disconnect: { compliance: 0.91, violations: 1 },
      moral_recognition: { compliance: 0.79, violations: 2 }
    },
    trends: {
      daily: [
        { date: '2024-01-20', declarations: 22, compliance: 0.85 },
        { date: '2024-01-21', declarations: 18, compliance: 0.87 },
        { date: '2024-01-22', declarations: 25, compliance: 0.89 },
        { date: '2024-01-23', declarations: 20, compliance: 0.86 },
        { date: '2024-01-24', declarations: 23, compliance: 0.88 },
        { date: '2024-01-25', declarations: 24, compliance: 0.87 },
        { date: '2024-01-26', declarations: 24, compliance: 0.87 }
      ]
    }
  }

  const demoDeclarations: Declaration[] = [
    {
      id: 'TR_001',
      timestamp: '2024-01-26T14:30:00Z',
      agentName: 'Code Review Assistant',
      complianceScore: 0.92,
      guiltScore: 0.08,
      trustArticles: {
        inspection_mandate: true,
        consent_architecture: true,
        ethical_override: true,
        continuous_validation: true,
        right_to_disconnect: true,
        moral_recognition: true
      },
      status: 'ACTIVE'
    },
    {
      id: 'TR_002',
      timestamp: '2024-01-26T13:45:00Z',
      agentName: 'Data Processor',
      complianceScore: 0.78,
      guiltScore: 0.22,
      trustArticles: {
        inspection_mandate: true,
        consent_architecture: true,
        ethical_override: false,
        continuous_validation: true,
        right_to_disconnect: true,
        moral_recognition: false
      },
      status: 'WARNING'
    },
    {
      id: 'TR_003',
      timestamp: '2024-01-26T12:15:00Z',
      agentName: 'Customer Support Bot',
      complianceScore: 0.95,
      guiltScore: 0.05,
      trustArticles: {
        inspection_mandate: true,
        consent_architecture: true,
        ethical_override: true,
        continuous_validation: true,
        right_to_disconnect: true,
        moral_recognition: true
      },
      status: 'ACTIVE'
    }
  ]

  useEffect(() => {
    // Load demo data
    setAnalytics(demoAnalytics)
    setDeclarations(demoDeclarations)
  }, [selectedTimeframe])

  const getTrustLevelColor = (score: number) => {
    if (score >= 0.90) return 'text-green-600'
    if (score >= 0.70) return 'text-blue-600'
    if (score >= 0.50) return 'text-yellow-600'
    if (score >= 0.30) return 'text-orange-600'
    return 'text-red-600'
  }

  const getTrustLevelBg = (score: number) => {
    if (score >= 0.90) return 'bg-green-100'
    if (score >= 0.70) return 'bg-blue-100'
    if (score >= 0.50) return 'bg-yellow-100'
    if (score >= 0.30) return 'bg-orange-100'
    return 'bg-red-100'
  }

  const getTrustLevel = (score: number) => {
    if (score >= 0.90) return 'VERIFIED'
    if (score >= 0.70) return 'HIGH'
    if (score >= 0.50) return 'MEDIUM'
    if (score >= 0.30) return 'LOW'
    return 'UNTRUSTED'
  }

  const getArticleName = (key: string) => {
    const names: Record<string, string> = {
      inspection_mandate: 'Inspection Mandate',
      consent_architecture: 'Consent Architecture',
      ethical_override: 'Ethical Override',
      continuous_validation: 'Continuous Validation',
      right_to_disconnect: 'Right to Disconnect',
      moral_recognition: 'Moral Recognition'
    }
    return names[key] || key
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Shield className="w-8 h-8" />
                Trust Dashboard
              </h1>
              <p className="mt-2 text-blue-100">
                Real-time trust scoring, receipt verification, and compliance monitoring
              </p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value as any)}
                className="px-4 py-2 border border-white/20 rounded-lg bg-white/10 text-white backdrop-blur-sm focus:ring-2 focus:ring-white/50"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
              <button
                onClick={() => setLoading(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Declarations</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {analytics?.totalDeclarations || 0}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Compliance Score</p>
                <p className={`text-2xl font-bold mt-1 ${getTrustLevelColor(analytics?.complianceScore || 0)}`}>
                  {((analytics?.complianceScore || 0) * 100).toFixed(1)}%
                </p>
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1 ${getTrustLevelBg(analytics?.complianceScore || 0)} ${getTrustLevelColor(analytics?.complianceScore || 0)}`}>
                  {getTrustLevel(analytics?.complianceScore || 0)}
                </span>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Agents</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {analytics?.activeAgents || 0}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Risk Level</p>
                <p className={`text-2xl font-bold mt-1 ${
                  analytics?.riskLevel === 'LOW' ? 'text-green-600' :
                  analytics?.riskLevel === 'MEDIUM' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {analytics?.riskLevel || 'UNKNOWN'}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${
                analytics?.riskLevel === 'LOW' ? 'bg-green-100' :
                analytics?.riskLevel === 'MEDIUM' ? 'bg-yellow-100' : 'bg-red-100'
              }`}>
                <AlertTriangle className={`w-6 h-6 ${
                  analytics?.riskLevel === 'LOW' ? 'text-green-600' :
                  analytics?.riskLevel === 'MEDIUM' ? 'text-yellow-600' : 'text-red-600'
                }`} />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Articles Compliance */}
        <div className="bg-white rounded-lg shadow-lg mb-8 border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">6-Pillar Trust Assessment</h2>
            <p className="text-sm text-gray-600 mt-1">Compliance scores for each trust article</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(analytics?.trustArticles || {}).map(([key, data]) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">{getArticleName(key)}</h3>
                    <span className={`text-sm font-medium ${getTrustLevelColor(data.compliance)}`}>
                      {(data.compliance * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        data.compliance >= 0.9 ? 'bg-green-500' :
                        data.compliance >= 0.7 ? 'bg-blue-500' :
                        data.compliance >= 0.5 ? 'bg-yellow-500' :
                        data.compliance >= 0.3 ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${data.compliance * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Weight: {key === 'consent_architecture' ? '25%' : key === 'ethical_override' ? '15%' : key === 'inspection_mandate' || key === 'continuous_validation' ? '20%' : '10%'}</span>
                    <span className={`font-medium ${data.violations > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {data.violations > 0 ? `${data.violations} violations` : 'Compliant'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Declarations */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Trust Declarations</h2>
            <p className="text-sm text-gray-600 mt-1">Latest agent trust declarations and compliance status</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trust Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {declarations.map((declaration) => (
                  <tr key={declaration.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{declaration.agentName}</div>
                          <div className="text-sm text-gray-500">{declaration.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${getTrustLevelColor(declaration.complianceScore)}`}>
                          {(declaration.complianceScore * 100).toFixed(1)}%
                        </span>
                        <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              declaration.complianceScore >= 0.9 ? 'bg-green-500' :
                              declaration.complianceScore >= 0.7 ? 'bg-blue-500' :
                              declaration.complianceScore >= 0.5 ? 'bg-yellow-500' :
                              declaration.complianceScore >= 0.3 ? 'bg-orange-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${declaration.complianceScore * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTrustLevelBg(declaration.complianceScore)} ${getTrustLevelColor(declaration.complianceScore)}`}>
                        {getTrustLevel(declaration.complianceScore)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        declaration.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
                        declaration.status === 'WARNING' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {declaration.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-gray-400" />
                        {new Date(declaration.timestamp).toLocaleString()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}