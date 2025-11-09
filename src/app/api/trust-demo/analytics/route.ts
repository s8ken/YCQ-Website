import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock analytics data for demo purposes
  const analytics = {
    totalDeclarations: 42,
    complianceScore: 0.87,
    activeAgents: 8,
    riskLevel: 'low',
    violations: {
      critical: 0,
      major: 2,
      minor: 5
    },
    trustArticles: {
      inspection_mandate: { compliance: 0.92, violations: 1 },
      consent_architecture: { compliance: 0.88, violations: 2 },
      ethical_override: { compliance: 0.85, violations: 1 },
      continuous_validation: { compliance: 0.90, violations: 1 },
      right_to_disconnect: { compliance: 0.82, violations: 2 },
      moral_recognition: { compliance: 0.86, violations: 0 }
    },
    trends: {
      daily: Array.from({ length: 7 }, (_, i) => ({
        date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        declarations: Math.floor(Math.random() * 10) + 3,
        compliance: 0.8 + Math.random() * 0.15
      }))
    }
  };

  return NextResponse.json({
      success: true,
      data: analytics
    });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ success: true, message: 'Analytics data updated' });
}