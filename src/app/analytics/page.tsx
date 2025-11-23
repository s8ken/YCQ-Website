"use client"

import React, { useState, useEffect } from 'react'
import { BarChart3, TrendingUp, Users, Activity, CheckCircle, AlertTriangle, Clock, Filter, Download, Eye } from 'lucide-react'

interface AnalyticsData {
  overview: {
    totalAgents: number
    activeDeclarations: number
    avgComplianceScore: number
    trustReceiptsIssued: number
  }
  trends: {
    daily: Array<{ date: string; agents: number; compliance: number; receipts: number }>
    weekly: Array<{ week: string; agents: number; compliance: number; receipts: number }>
  }
  trustDistribution: {
    verified: number
    high: number
    medium: number
    low: number
    untrusted: number
  }
  articleCompliance: Record<string, { name: string; compliance: number; violations: number }>
  topAgents: Array<{
    name: string
    complianceScore: number
    declarations: number
    lastActive: string
  }>
}

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState<'24h' | '7d' | '30d' | '90d'>('7d')
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(false)

  // Demo analytics data
  const demoData: AnalyticsData = {
    overview: {
      totalAgents: 47,
      activeDeclarations: 156,
      avgComplianceScore: 0.87,
      trustReceiptsIssued: 1247
    },
    trends: {
      daily: [
        { date: '2024-01-20', agents: 42, compliance: 0.85, receipts: 180 },
        { date: '2024-01-21', agents: 44, compliance: 0.87, receipts: 195 },
        { date: '2024-01-22', agents: 45, compliance: 0.89, receipts: 210 },
        { date: '2024-01-23', agents: 43, compliance: 0.86, receipts: 188 },
        { date: '2024-01-24', agents: 46, compliance: 0.88, receipts: 205 },
        { date: '2024-01-25', agents: 47, compliance: 0.87, receipts: 220 },
        { date: '2024-01-26', agents: 47, compliance: 0.87, receipts: 124 }
      ],
      weekly: [
        { week: 'W1', agents: 38, compliance: 0.82, receipts: 892 },
        { week: 'W2', agents: 42, compliance: 0.85, receipts: 1056 },
        { week: 'W3', agents: 45, compliance: 0.86, receipts: 1234 },
        { week: 'W4', agents: 47, compliance: 0.87, receipts: 1247 }
      ]
    },
    trustDistribution: {
      verified: 89,
      high: 34,
      medium: 23,
      low: 8,
      untrusted: 2
    },
    articleCompliance: {
      inspection_mandate: { name: 'Inspection Mandate', compliance: 0.92, violations: 12 },
      consent_architecture: { name: 'Consent Architecture', compliance: 0.95, violations: 8 },
      ethical_override: { name: 'Ethical Override', compliance: 0.88, violations: 18 },
      continuous_validation: { name: 'Continuous Validation', compliance: 0.85, violations: 23 },
      right_to_disconnect: { name: 'Right to Disconnect', compliance: 0.91, violations: 14 },
      moral_recognition: { name: 'Moral Recognition', compliance: 0.79, violations: 32 }
    },
    topAgents: [
      { name: 'Code Review Assistant', complianceScore: 0.95, declarations: 24, lastActive: '2024-01-26T14:30:00Z' },
      { name: 'Data Processor', complianceScore: 0.92, declarations: 18, lastActive: '2024-01-26T13:45:00Z' },
      { name: 'Customer Support Bot', complianceScore: 0.90, declarations: 31, lastActive: '2024-01-26T14:15:00Z' },
      { name: 'Security Monitor', complianceScore: 0.88, declarations: 12, lastActive: '2024-01-26T14:00:00Z' },
      { name: 'Analytics Engine', complianceScore: 0.85, declarations: 15, lastActive: '2024-01-26T13:30:00Z' }
    ]
  }

  useEffect(() => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setData(demoData)
      setLoading(false)
    }, 500)
  }, [timeframe])

  const getTrustLevelColor = (level: string) => {
    switch (level) {
      case 'verified': return 'text-green-600 bg-green-100'
      case 'high': return 'text-blue-600 bg-blue-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-orange-600 bg-orange-100'
      case 'untrusted': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getComplianceColor = (score: number) => {
    if (score >= 0.9) return 'text-green-600'
    if (score >= 0.7) return 'text-blue-600'
    if (score >= 0.5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const SimpleBarChart = ({ data, dataKey, color = 'blue' }: { data: any[], dataKey: string, color?: string }) => {
    const maxValue = Math.max(...data.map(d => d[dataKey]))
    
    return (
      <div className="flex items-end justify-between h-32 gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
              <div
                className={`w-full bg-${color}-500 rounded-t transition-all duration-300 hover:opacity-80`}
                style={{
                  height: `${(item[dataKey] / maxValue) * 100}%`,
                  backgroundColor: color === 'green' ? '#10b981' : color === 'blue' ? '#3b82f6' : '#6b7280'
                }}
              />
              <span className="text-xs text-gray-500 mt-1 text-center">
                {item.date || item.week || index}
              </span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const SimplePieChart = ({ data }: { data: Record<string, number> }) => {
    const total = Object.values(data).reduce((sum, val) => sum + val, 0)
    const colors = {
      verified: '#10b981',
      high: '#3b82f6',
      medium: '#eab308',
      low: '#f97316',
      untrusted: '#ef4444'
    }

    let cumulativePercentage = 0

    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 42 42" className="w-full h-full">
          {Object.entries(data).map(([key, value]) => {
            const percentage = (value / total) * 100
            const angle = (percentage / 100) * 360
            const startAngle = cumulativePercentage * 3.6
            const endAngle = startAngle + angle
            
            const x1 = 21 + 19 * Math.cos((startAngle - 90) * Math.PI / 180)
            const y1 = 21 + 19 * Math.sin((startAngle - 90) * Math.PI / 180)
            const x2 = 21 + 19 * Math.cos((endAngle - 90) * Math.PI / 180)
            const y2 = 21 + 19 * Math.sin((endAngle - 90) * Math.PI / 180)
            
            const largeArc = angle > 180 ? 1 : 0
            
            cumulativePercentage += percentage / 100

            return (
              <path
                key={key}
                d={`M 21 21 L ${x1} ${y1} A 19 19 0 ${largeArc} 1 ${x2} ${y2} Z`}
                fill={colors[key as keyof typeof colors]}
                className="hover:opacity-80 transition-opacity"
              />
            )
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{total}</span>
        </div>
      </div>
    )
  }

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <BarChart3 className="w-8 h-8" />
                Analytics
              </h1>
              <p className="mt-2 text-purple-100">
                Trust score distributions, agent activity, and performance metrics
              </p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value as any)}
                className="px-4 py-2 border border-white/20 rounded-lg bg-white/10 text-white backdrop-blur-sm focus:ring-2 focus:ring-white/50"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Agents</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {data.overview.totalAgents}
                </p>
                <p className="text-xs text-green-600 mt-1">+12% from last period</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Declarations</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {data.overview.activeDeclarations}
                </p>
                <p className="text-xs text-green-600 mt-1">+8% from last period</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Compliance Score</p>
                <p className={`text-2xl font-bold mt-1 ${getComplianceColor(data.overview.avgComplianceScore)}`}>
                  {(data.overview.avgComplianceScore * 100).toFixed(1)}%
                </p>
                <p className="text-xs text-green-600 mt-1">+2% from last period</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Trust Receipts Issued</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {data.overview.trustReceiptsIssued}
                </p>
                <p className="text-xs text-green-600 mt-1">+15% from last period</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Trust Distribution */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Trust Level Distribution</h3>
            <div className="flex items-center justify-center mb-6">
              <SimplePieChart data={data.trustDistribution} />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(data.trustDistribution).map(([level, count]) => (
                <div key={level} className="flex items-center justify-between p-2 rounded">
                  <span className={`text-sm font-medium px-2 py-1 rounded ${getTrustLevelColor(level)}`}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </span>
                  <span className="text-sm font-bold text-gray-900">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Compliance */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">6-Pillar Compliance</h3>
            <div className="space-y-3">
              {Object.entries(data.articleCompliance).map(([key, article]) => (
                <div key={key} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{article.name}</span>
                    <span className={`text-sm font-bold ${getComplianceColor(article.compliance)}`}>
                      {(article.compliance * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        article.compliance >= 0.9 ? 'bg-green-500' :
                        article.compliance >= 0.7 ? 'bg-blue-500' :
                        article.compliance >= 0.5 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${article.compliance * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Weight: {key === 'consent_architecture' ? '25%' : key === 'ethical_override' ? '15%' : key === 'inspection_mandate' || key === 'continuous_validation' ? '20%' : '10%'}</span>
                    <span className={article.violations > 0 ? 'text-red-600' : 'text-green-600'}>
                      {article.violations} violations
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trends Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Activity Trends</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-gray-600">Compliance %</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-gray-600">Receipts</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Daily Activity</h4>
              <SimpleBarChart data={data.trends.daily.slice(-7)} dataKey="compliance" color="blue" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Trust Receipts Issued</h4>
              <SimpleBarChart data={data.trends.daily.slice(-7)} dataKey="receipts" color="green" />
            </div>
          </div>
        </div>

        {/* Top Agents Table */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Agents</h3>
            <p className="text-sm text-gray-600 mt-1">Agents with highest compliance scores</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Declarations</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.topAgents.map((agent, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${getComplianceColor(agent.complianceScore)}`}>
                          {(agent.complianceScore * 100).toFixed(1)}%
                        </span>
                        <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              agent.complianceScore >= 0.9 ? 'bg-green-500' :
                              agent.complianceScore >= 0.7 ? 'bg-blue-500' :
                              agent.complianceScore >= 0.5 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${agent.complianceScore * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {agent.declarations}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-gray-400" />
                        {new Date(agent.lastActive).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900 flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
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