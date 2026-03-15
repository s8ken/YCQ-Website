"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { API_URL, CONTACT_EMAIL } from "@/lib/site";
import {
  Shield,
  BookOpen,
  ExternalLink,
  Key,
  Fingerprint,
  Lock,
  Terminal,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const BACKEND_BASE = API_URL.replace("/api", "");
const SWAGGER_URL = `${BACKEND_BASE}/api/docs`;

const PUBLIC_ENDPOINTS = [
  {
    method: "GET",
    path: "/api/public-demo/public-key",
    auth: "None",
    description: "Returns the live Ed25519 public key used for trust receipt verification.",
  },
  {
    method: "POST",
    path: "/api/public-demo/generate",
    auth: "None",
    description: "Generates a real signed demo receipt from a prompt.",
  },
  {
    method: "POST",
    path: "/api/public-demo/verify",
    auth: "None",
    description: "Verifies a submitted receipt and returns structure, signature, and chain checks.",
  },
  {
    method: "POST",
    path: "/api/public-demo/generate-chain",
    auth: "None",
    description: "Creates a linked chain of demo receipts for tamper-evident verification flows.",
  },
  {
    method: "POST",
    path: "/api/public-demo/verify-chain",
    auth: "None",
    description: "Verifies a receipt chain end to end, including link integrity between receipts.",
  },
  {
    method: "POST",
    path: "/api/public-demo/export",
    auth: "None",
    description: "Exports a provided receipt set as JSON or CSV for sharing and review.",
  },
];

const AUTH_ENDPOINTS = [
  {
    method: "POST",
    path: "/api/auth/guest",
    auth: "None",
    description: "Creates a guest session and returns a bearer token for protected demo flows.",
  },
  {
    method: "POST",
    path: "/api/auth/login",
    auth: "None",
    description: "Authenticates a registered user and returns access tokens.",
  },
  {
    method: "POST",
    path: "/api/auth/register",
    auth: "None",
    description: "Registers a user account and returns tokens on success.",
  },
];

const RECEIPT_ENDPOINTS = [
  {
    method: "POST",
    path: "/api/v1/receipts/generate",
    auth: "Bearer",
    description: "Generates and persists a signed trust receipt for a protected interaction.",
  },
  {
    method: "GET",
    path: "/api/v1/receipts/:id",
    auth: "Bearer",
    description: "Fetches a stored receipt by its SHA-256 receipt ID.",
  },
  {
    method: "POST",
    path: "/api/v1/receipts/verify",
    auth: "Optional",
    description: "Validates a receipt payload and returns detailed verification checks.",
  },
  {
    method: "GET",
    path: "/api/v1/receipts/list",
    auth: "Bearer",
    description: "Lists stored receipts with pagination and common filters.",
  },
  {
    method: "POST",
    path: "/api/v1/receipts/export",
    auth: "Bearer",
    description: "Exports stored receipts as JSON, JSONL, CSV, or log-shipping formats.",
  },
];

const WEBSITE_DEMO_ENDPOINTS = [
  {
    method: "POST",
    path: "/api/trust-demo/generate",
    description: "Website-local mock route used for front-end demo interactions.",
  },
  {
    method: "POST",
    path: "/api/trust-demo/verify",
    description: "Website-local mock verification route used for sandboxed UI states.",
  },
  {
    method: "GET",
    path: "/api/trust-demo/analytics",
    description: "Website-local mock analytics feed for the trust demo.",
  },
  {
    method: "GET/POST",
    path: "/api/trust-demo/declarations",
    description: "Website-local mock declaration endpoints used by the compliance demo.",
  },
  {
    method: "POST",
    path: "/api/receipts/demo",
    description: "Website-local sample receipt generator for static demo flows.",
  },
  {
    method: "GET/POST",
    path: "/api/trust-receipts",
    description: "Legacy demo route with illustrative sample data, not the live backend receipt API.",
  },
];

const publicGenerateExample = `curl -X POST ${BACKEND_BASE}/api/public-demo/generate \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Explain the purpose of a signed trust receipt",
    "model": "demo-model",
    "includeContent": false
  }'`;

const guestTokenExample = `curl -X POST "${BACKEND_BASE}/api/auth/guest?tenant=live-tenant" \\
  -H "Content-Type: application/json"`;

const protectedVerifyExample = `curl -X POST ${BACKEND_BASE}/api/v1/receipts/verify \\
  -H "Content-Type: application/json" \\
  -d '{
    "receipt": { "...": "..." },
    "publicKey": "<optional hex public key>"
  }'`;

function EndpointTable({
  title,
  icon: Icon,
  subtitle,
  rows,
  showAuth = true,
}: {
  title: string;
  icon: ComponentType<{ className?: string }>;
  subtitle: string;
  rows: Array<{ method: string; path: string; auth?: string; description: string }>;
  showAuth?: boolean;
}) {
  return (
    <div className="glass-card p-6 md:p-7">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold">{title}</h2>
          <p className="text-sm text-white/50">{subtitle}</p>
        </div>
      </div>

      <div className="space-y-4">
        {rows.map((row) => (
          <div key={`${row.method}-${row.path}`} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded bg-blue-500/20 px-2 py-1 font-mono text-xs text-blue-300">
                  {row.method}
                </span>
                <code className="text-sm text-white/80">{row.path}</code>
              </div>
              {showAuth && row.auth ? (
                <span className="rounded bg-white/10 px-2 py-1 text-xs text-white/60">
                  Auth: {row.auth}
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{row.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      <main className="relative z-10">
        <section className="px-6 pb-16 pt-20">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1">
              <BookOpen className="h-3 w-3 text-blue-400" />
              <span className="text-xs font-medium uppercase tracking-widest text-blue-400">
                API Reference
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-heading font-bold leading-tight md:text-6xl">
              Practical API paths for
              <span className="gradient-text"> receipts, verification, and demos.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-white/60">
              This page documents the endpoints most relevant to the website and trust receipt flow. For the full backend schema, use the live interactive API docs.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={SWAGGER_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  Open Full API Docs <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/trust-demo">
                <Button size="lg" variant="outline" className="gap-2">
                  Try Trust Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="glass-card p-6">
              <Key className="mb-4 h-9 w-9 text-blue-400" />
              <h2 className="mb-2 text-lg font-heading font-semibold">Public verification</h2>
              <p className="text-sm leading-relaxed text-white/60">
                The fastest proof path is{" "}
                <code className="text-white/80">
                  public-key -&gt; generate -&gt; verify -&gt; tamper -&gt; verify again
                </code>
                .
              </p>
            </div>
            <div className="glass-card p-6">
              <Lock className="mb-4 h-9 w-9 text-purple-400" />
              <h2 className="mb-2 text-lg font-heading font-semibold">Protected receipt flows</h2>
              <p className="text-sm leading-relaxed text-white/60">
                Use guest or user auth to generate, persist, fetch, and export receipts in the live backend.
              </p>
            </div>
            <div className="glass-card p-6">
              <AlertTriangle className="mb-4 h-9 w-9 text-yellow-400" />
              <h2 className="mb-2 text-lg font-heading font-semibold">Website demo routes</h2>
              <p className="text-sm leading-relaxed text-white/60">
                Several `/api/*` routes inside this website are UI helpers or mock feeds. They are useful for presentation, not the canonical backend contract.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-16">
          <div className="mx-auto max-w-6xl space-y-6">
            <EndpointTable
              title="Live Public Demo API"
              icon={Fingerprint}
              subtitle={`Backed by ${BACKEND_BASE}`}
              rows={PUBLIC_ENDPOINTS}
            />
            <EndpointTable
              title="Authentication"
              icon={Key}
              subtitle="Use these to obtain tokens for protected API flows."
              rows={AUTH_ENDPOINTS}
            />
            <EndpointTable
              title="Protected Receipt API"
              icon={Lock}
              subtitle="These endpoints drive the authenticated end-to-end trust receipt workflow."
              rows={RECEIPT_ENDPOINTS}
            />
            <EndpointTable
              title="Website-Local Demo Routes"
              icon={Terminal}
              subtitle="Useful for front-end demos and previews, but not the source of truth for the backend contract."
              rows={WEBSITE_DEMO_ENDPOINTS}
              showAuth={false}
            />
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-heading font-bold">Common requests</h2>
              <p className="mx-auto max-w-2xl text-white/60">
                These are the shortest useful calls for developers and demo operators.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="glass-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <h3 className="font-heading text-lg font-semibold">Generate a public receipt</h3>
                </div>
                <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/30 p-4 text-xs text-white/80">
                  <code>{publicGenerateExample}</code>
                </pre>
              </div>

              <div className="glass-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <h3 className="font-heading text-lg font-semibold">Get a guest token</h3>
                </div>
                <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/30 p-4 text-xs text-white/80">
                  <code>{guestTokenExample}</code>
                </pre>
              </div>

              <div className="glass-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <h3 className="font-heading text-lg font-semibold">Verify a receipt payload</h3>
                </div>
                <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/30 p-4 text-xs text-white/80">
                  <code>{protectedVerifyExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="glass-card p-8 md:p-10">
              <h2 className="mb-4 text-2xl font-heading font-bold">Scope note</h2>
              <p className="mb-4 leading-relaxed text-white/70">
                The strongest claim this site should make is straightforward: SONATE can generate and verify signed trust receipts for supported AI interactions. This reference page keeps the same standard by separating live backend endpoints from website-local demo routes.
              </p>
              <p className="text-white/50">
                If someone needs the complete backend contract, direct them to the live Swagger UI rather than trying to compress the entire platform into one marketing page.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-heading font-bold">Need a narrower integration path?</h2>
            <p className="mb-8 text-white/60">
              Start with public receipt generation and verification. Move to the protected receipt API once you need persistence, retrieval, and export.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/developers">
                <Button size="lg" className="gap-2">
                  Developer Page <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE API Reference`}>
                <Button size="lg" variant="outline">
                  Ask About Integration
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 px-6 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-tr from-blue-500 to-purple-600">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="font-heading font-bold">SONATE</span>
              <span className="text-sm text-white/40">by yseeku</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <Link href="/developers" className="transition-colors hover:text-white">Developers</Link>
              <Link href="/trust-demo" className="transition-colors hover:text-white">Trust Demo</Link>
              <Link href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
