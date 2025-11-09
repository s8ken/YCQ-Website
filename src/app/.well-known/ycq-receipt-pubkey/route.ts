import { NextResponse } from 'next/server';

export async function GET() {
  // Demo public key for client-side verification
  const publicKey = 'MCowBQYDK2VwAyEAIqC9n_qd9aI8B5p8aYXJ9n8K5X2K3mQ5R7sT6vW9zX0Y';
  
  return new NextResponse(publicKey, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}