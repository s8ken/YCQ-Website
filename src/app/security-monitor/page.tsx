"use client"

import React, { useState, useEffect } from 'react'
import { Activity, Lock, AlertTriangle, Shield, Eye, Clock, TrendingUp, Users, Cpu, Database, Wifi } from 'lucide-react'

interface SecurityEvent {
  id: string
  timestamp: string
  type: 'THREAT' | 'WARNING' | 'INFO' | 'CRITICAL'
  title: string
  description: string
  source: string
  resolved: boolean
}

interface SystemMetrics {
  cpu: number
  memory: number
  network: number
  requests: number
  errors: number
  uptime: number
}

interface ThreatLevel {
  level: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  score: number
  activeThreats: number
  blockedAttempts: number
}

export default function SecurityMonitorPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'metrics'>('overview')
  const [events, setEvents] = useState<SecurityEvent[]>([])
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null)
  const [threatLevel, setThreatLevel] = useState<ThreatLevel | null>(null)
  const [autoRefresh, setAutoRefresh] = useState(true)

  // Demo security events
  const demoEvents: SecurityEvent[] = [
    {
      id: 'SEC_001',
      timestamp: '2024-01-26T14:35:00Z',
      type: 'INFO',
      title: 'Key Rotation Completed',
      description: 'Successfully rotated API keys for production environment',
      source: 'Key Management Service',
      resolved: true
    },
    {
      id: 'SEC_002',
      timestamp: '2024-01-26T14:20:00Z',
      type: 'WARNING',
      title: 'Unusual Request Pattern',
      description: 'Detected spike in API requests from IP range 192.168.1.0/24',
      source: 'Rate Limiter',
      resolved: false
    },
    {
      id: 'SEC_003',
      timestamp: '2024-01-26T14:15:00Z',
      type: 'THREAT',
      title: 'Potential SQL Injection Attempt',
      description: 'Blocked suspicious query pattern in agent declaration endpoint',
      source: 'Web Application Firewall',
      resolved: true
    },
    {
      id: 'SEC_004',
      timestamp: '2024-01-26T13:45:00Z',
      type: 'INFO',
      title: 'Trust Receipt Verification',
      description: 'Successfully verified 247 trust receipts in batch operation',
      source: 'Verification Service',
      resolved: true
    },
    {
      id: 'SEC_005',
      timestamp: '2024-01-26T13:30:00Z',
      type: 'CRITICAL',
      title: 'Failed Authentication Attempt',
      description: 'Multiple failed login attempts detected for admin account',
      source: 'Authentication Service',
      resolved: true
    }
  ]

  const demoMetrics: SystemMetrics = {
    cpu: 45,
    memory: 67,
    network: 23,
    requests: 1247,
    errors: 3,
    uptime: 99.97
  }

  const demoThreatLevel: ThreatLevel = {
    level: 'LOW',
    score: 15,
    activeThreats: 2,
    blockedAttempts: 47
  }

  useEffect(() => {
    setEvents(demoEvents)
    setMetrics(demoMetrics)
    setThreatLevel(demoThreatLevel)
  }, [])

  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      // Simulate real-time updates
      setMetrics(prev => prev ? {
        ...prev,
        requests: prev.requests + Math.floor(Math.random() * 10),
        cpu: Math.max(10, Math.min(90, prev.cpu + (Math.random() - 0.5) * 5)),
        memory: Math.max(20, Math.min(90, prev.memory + (Math.random() - 0.5) * 3)),
        network: Math.max(5, Math.min(80, prev.network + (Math.random() - 0.5) * 8))
      } : null)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoRefresh])

  const getEventColor = (type: string) => {
    switch (type) {
      case 'CRITICAL': return 'text-red-600 bg-red-100'
      case 'THREAT': return 'text-orange-600 bg-orange-100'
      case 'WARNING': return 'text-yellow-600 bg-yellow-100'
      case 'INFO': return 'text-blue-600 bg-blue-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'CRITICAL': return 'text-red-600 border-red-500'
      case 'HIGH': return 'text-orange-600 border-orange-500'
      case 'MEDIUM': return 'text-yellow-600 border-yellow-500'
      case 'LOW': return 'text-green-600 border-green-500'
      default: return 'text-gray-600 border-gray-500'
    }
  }

  const getStatusColor = (value: number, threshold: number = 70) => {
    if (value >= 90) return 'text-red-600'
    if (value >= threshold) return 'text-yellow-600'
    return 'text-green-600'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Shield className="w-8 h-8" />
                Security Monitor
              </h1>
              <p className="mt-2 text-red-100">
                Enterprise-grade monitoring for rate limits, key safety, and guardrail enforcement
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="autoRefresh"
                  checked={autoRefresh}
                  onChange={(e) => setAutoRefresh(e.target.checked)}
                  className="rounded border-white/20 bg-white/10 text-white focus:ring-white/50"
                />
                <label htmlFor="autoRefresh" className="text-sm text-white">Auto-refresh</label>
              </div>
              <div className={`px-4 py-2 rounded-lg border-2 ${getThreatColor(threatLevel?.level || '')}`}>
                <span className="font-semibold">Threat Level: {threatLevel?.level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'events'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Security Events
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'metrics'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              System Metrics
            </button>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Security Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Threat Score</p>
                    <p className={`text-2xl font-bold mt-1 ${getThreatColor(threatLevel?.level || '').split(' ')[0]}`}>
                      {threatLevel?.score || 0}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Scale: 0-100</p>
                  </div>
                  <div className="p-3 bg-red-100 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Threats</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {threatLevel?.activeThreats || 0}
                    </p>
                  </div>
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Eye className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Blocked Attempts</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {threatLevel?.blockedAttempts || 0}
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Lock className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Uptime</p>
                    <p className={`text-2xl font-bold mt-1 ${getStatusColor(metrics?.uptime || 0, 99)}`}>
                      {metrics?.uptime.toFixed(2)}%
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Security Features Status */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Security Features Status</h2>
                <p className="text-sm text-gray-600 mt-1">Real-time status of enterprise security controls</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Lock className="w-5 h-5 text-gray-600" />
                        <h3 className="font-medium text-gray-900">Key Management</h3>
                      </div>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <p className="text-sm text-gray-600">Server-side keys with zero-trust access</p>
                    <div className="mt-2 text-xs text-green-600">• All keys rotated</div>
                    <div className="text-xs text-green-600">• Hardware security modules active</div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-gray-600" />
                        <h3 className="font-medium text-gray-900">Rate Limiting</h3>
                      </div>
                      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    </div>
                    <p className="text-sm text-gray-600">Request throttling and anomaly detection</p>
                    <div className="mt-2 text-xs text-green-600">• Rate limits enforced</div>
                    <div className="text-xs text-yellow-600">• Unusual pattern detected</div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-gray-600" />
                        <h3 className="font-medium text-gray-900">Guardrails</h3>
                      </div>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <p className="text-sm text-gray-600">Policy enforcement with audit signals</p>
                    <div className="mt-2 text-xs text-green-600">• All policies active</div>
                    <div className="text-xs text-green-600">• Audit logging enabled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Security Events</h2>
              <p className="text-sm text-gray-600 mt-1">Recent security events and incidents</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {events.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-gray-400" />
                          {new Date(event.timestamp).toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getEventColor(event.type)}`}>
                          {event.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{event.title}</div>
                          <div className="text-sm text-gray-500">{event.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.source}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          event.resolved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {event.resolved ? 'Resolved' : 'Open'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Metrics Tab */}
        {activeTab === 'metrics' && metrics && (
          <div className="space-y-8">
            {/* System Performance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">System Resources</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Cpu className="w-4 h-4" /> CPU Usage
                      </span>
                      <span className={`text-sm font-medium ${getStatusColor(metrics.cpu)}`}>{metrics.cpu}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          metrics.cpu >= 90 ? 'bg-red-500' :
                          metrics.cpu >= 70 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${metrics.cpu}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Database className="w-4 h-4" /> Memory Usage
                      </span>
                      <span className={`text-sm font-medium ${getStatusColor(metrics.memory)}`}>{metrics.memory}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          metrics.memory >= 90 ? 'bg-red-500' :
                          metrics.memory >= 70 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${metrics.memory}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Wifi className="w-4 h-4" /> Network I/O
                      </span>
                      <span className={`text-sm font-medium ${getStatusColor(metrics.network)}`}>{metrics.network}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          metrics.network >= 80 ? 'bg-red-500' :
                          metrics.network >= 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${metrics.network}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Total Requests</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">{metrics.requests.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <span className="text-sm font-medium text-gray-700">Error Rate</span>
                    </div>
                    <span className={`text-xl font-bold ${getStatusColor(metrics.errors, 1)}`}>{metrics.errors}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">Success Rate</span>
                    </div>
                    <span className="text-xl font-bold text-green-600">
                      {((metrics.requests - metrics.errors) / metrics.requests * 100).toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}