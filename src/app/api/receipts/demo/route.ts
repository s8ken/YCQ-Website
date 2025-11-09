import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Generate a demo Ed25519-signed trust receipt
    const receipt = {
      payload: JSON.stringify({
        event_id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        session_id: body.session_id || `sess_${Date.now()}`,
        actor: body.actor || 'demo@ycq',
        intent: body.intent || 'verify-demo',
        inputs: body.inputs || { q: 'hello world' },
        outputs: body.outputs || { a: 'hi!' },
        timestamp: new Date().toISOString(),
        model_vendor: 'demo',
        model_name: 'demo-model',
        trust_version: '1.0'
      }),
      
      inputs_hash: Buffer.from(JSON.stringify(body.inputs || { q: 'hello world' })).toString('hex').substring(0, 16),
      outputs_hash: Buffer.from(JSON.stringify(body.outputs || { a: 'hi!' })).toString('hex').substring(0, 16),
      prev_hash: null,
      entry_hash: Buffer.from(new Date().toISOString() + Math.random().toString()).toString('hex').substring(0, 16),
      
      ed25519_pubkey: 'MCowBQYDK2VwAyEAIqC9n_qd9aI8B5p8aYXJ9n8K5X2K3mQ5R7sT6vW9zX0Y',
      ed25519_sig: 'demo_signature_' + Math.random().toString(36).substr(2, 32),
      policy_id: 'demo.v1'
    };

    return new NextResponse(JSON.stringify(receipt), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to generate demo receipt'
    }, { status: 400 });
  }
}