import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Mock trust declaration creation
    const declaration = {
      id: `decl_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      agentName: body.agentName || 'Demo AI Agent',
      complianceScore: 0.85 + Math.random() * 0.14,
      guiltScore: Math.random() * 0.05,
      trustArticles: {
        inspection_mandate: body.trustArticles?.inspection_mandate ?? true,
        consent_architecture: body.trustArticles?.consent_architecture ?? true,
        ethical_override: body.trustArticles?.ethical_override ?? true,
        continuous_validation: body.trustArticles?.continuous_validation ?? true,
        right_to_disconnect: body.trustArticles?.right_to_disconnect ?? true,
        moral_recognition: body.trustArticles?.moral_recognition ?? true,
      },
      status: 'active',
      verificationStatus: 'pending'
    };

    return NextResponse.json(declaration);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create declaration' },
      { status: 400 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Mock existing declarations
  const declarations = [
    {
      id: 'decl_demo_001',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      agentName: 'Healthcare Diagnosis AI',
      complianceScore: 0.91,
      guiltScore: 0.02,
      trustArticles: {
        inspection_mandate: true,
        consent_architecture: true,
        ethical_override: false,
        continuous_validation: true,
        right_to_disconnect: true,
        moral_recognition: true,
      },
      status: 'verified'
    },
    {
      id: 'decl_demo_002',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      agentName: 'Financial Risk Assessment',
      complianceScore: 0.88,
      guiltScore: 0.03,
      trustArticles: {
        inspection_mandate: true,
        consent_architecture: true,
        ethical_override: true,
        continuous_validation: true,
        right_to_disconnect: false,
        moral_recognition: true,
      },
      status: 'active'
    }
  ];

  return NextResponse.json(declarations);
}