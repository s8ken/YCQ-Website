import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1c1917',
          backgroundImage: 'linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)',
        }}
      >
        {/* Logo and Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              backgroundColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 24,
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: 64,
                fontWeight: 'bold',
                color: 'white',
                letterSpacing: '-0.02em',
              }}
            >
              Sonate
            </span>
            <span
              style={{
                fontSize: 24,
                color: '#a8a29e',
                marginTop: -8,
              }}
            >
              by YCQ Labs
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: '#10b981',
            fontWeight: 600,
            marginBottom: 24,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          AI Trust Infrastructure
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: '#d6d3d1',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Cryptographic Trust Receipts • 6 Trust Principles • Enterprise Compliance
        </div>

        {/* Bottom badges */}
        <div
          style={{
            display: 'flex',
            marginTop: 48,
            gap: 16,
          }}
        >
          <div
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Ed25519 Signatures
          </div>
          <div
            style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            SONATE Framework
          </div>
          <div
            style={{
              backgroundColor: '#8b5cf6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Bedau Emergence
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 20,
            color: '#78716c',
          }}
        >
          yseeku.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
