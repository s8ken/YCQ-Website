import Link from "next/link";

export default function Governance() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-stone-800">YCQ Sonate</Link>
              <div className="ml-2 text-sm text-stone-600">DAO Governance</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/#platform" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Platform
                </Link>
                <Link href="/technology" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Technology
                </Link>
                <Link href="/demo" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Demo
                </Link>
                <Link href="/governance" className="text-stone-900 px-3 py-2 text-sm font-medium border-b-2 border-purple-600">
                  Governance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Legal Disclaimer Banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="text-sm font-semibold text-amber-900 mb-1">IMPORTANT LEGAL NOTICE</h3>
              <p className="text-sm text-amber-800">
                <strong>SYMBI governance tokens have no financial value, no expectation of profit, and grant no economic rights.</strong>
                Tokens are non-transferable and used solely for protocol governance voting. SYMBI Trust Protocol and YCQ Sonate Platform do not require tokens or DAO participation for use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              SYMBI DAO Governance
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Optional community governance for protocol development decisions. Uses SYMBI Trust Protocol for contributor verification.
            </p>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-sm">100% Optional • No Tokens Required for Protocol/Platform Use</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Model */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Three Pillars: Protocol, Platform, DAO
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Understanding how SYMBI DAO fits into the broader ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-stone-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">SYMBI Trust Protocol</h3>
              <p className="text-stone-600 mb-4">
                Open-source W3C-compliant DID/VC infrastructure. The foundation layer that everything else builds on.
              </p>
              <ul className="text-sm text-stone-600 space-y-2">
                <li>✓ Production-ready (95 tests)</li>
                <li>✓ Open-source on GitHub</li>
                <li>✓ No tokens required</li>
              </ul>
            </div>

            <div className="bg-stone-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">YCQ Sonate Platform</h3>
              <p className="text-stone-600 mb-4">
                Commercial SaaS built on trust protocol. Enterprise AI trust infrastructure with Ledger, Guardrails, Roundtable.
              </p>
              <ul className="text-sm text-stone-600 space-y-2">
                <li>✓ Enterprise pricing model</li>
                <li>✓ Built on trust protocol</li>
                <li>✓ No tokens required</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">SYMBI DAO</h3>
              <p className="text-stone-600 mb-4">
                Optional community governance layer. For contributors who want to participate in protocol development decisions.
              </p>
              <ul className="text-sm text-stone-600 space-y-2">
                <li>✓ 100% optional</li>
                <li>✓ Governance-only tokens</li>
                <li>✓ Non-transferable, no value</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How DAO Uses Trust Protocol */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              How SYMBI DAO Uses SYMBI Trust Protocol
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              The DAO is built on top of the trust protocol it governs - proving the protocol works in production
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Architecture: Contributor → DID → VC → Trust Score → Voting Weight</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Contributor Identity (DID)</h4>
                  <p className="text-stone-600">Each contributor receives a W3C-compliant DID (typically did:web or did:ethr). This serves as their verifiable identity in the DAO.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Contribution Attestation (VC)</h4>
                  <p className="text-stone-600">Contributions (code commits, documentation, code reviews, research) are attested via Verifiable Credentials. Each VC is cryptographically signed and proves contribution authenticity.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Trust Score Calculation</h4>
                  <p className="text-stone-600">Trust scores are computed from verified contributions: code quality, peer reviews, documentation, community support. All calculations logged to cryptographic audit trail.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Governance Token Minting</h4>
                  <p className="text-stone-600">Non-transferable governance tokens (ERC-721 soulbound) are minted to contributor DIDs. Tokens grant voting rights proportional to trust score. Tokens cannot be sold or transferred.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Proposal Voting</h4>
                  <p className="text-stone-600">All votes are DID-authenticated and logged to audit trail. Smart contracts enforce voting rules. Constitution Nodes provide algorithmic oversight.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3">Why This Approach?</h4>
            <p className="text-blue-800 mb-4">
              By using SYMBI Trust Protocol for DAO governance, we demonstrate the protocol&apos;s production readiness while ensuring:
            </p>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>✓ <strong>Cryptographic verification</strong> of all governance actions</li>
              <li>✓ <strong>Immutable audit trail</strong> of proposals and votes</li>
              <li>✓ <strong>Sybil resistance</strong> through contribution-based identity</li>
              <li>✓ <strong>Transparency</strong> via publicly verifiable credentials</li>
              <li>✓ <strong>Privacy</strong> via selective disclosure (only reveal what&apos;s necessary)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Governance Token Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              SYMBI Governance Token (SGT)
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Non-transferable, governance-only tokens with no financial value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-stone-900 mb-4">What SGT Is</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Governance Rights:</strong> Vote on protocol development proposals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Earned via Contribution:</strong> Verified code, docs, research, peer review</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Soulbound:</strong> Non-transferable ERC-721/1155 tokens tied to contributor DID</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Revocable:</strong> Can be revoked for violations of Constitution Nodes</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-lg border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-4">What SGT Is NOT</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong>Not a Security:</strong> No profit expectation, no dividends, no revenue share</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong>Not Transferable:</strong> Cannot be sold, traded, or transferred to others</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong>No Financial Value:</strong> Zero market value, no price, no liquidity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong>Not Required:</strong> Protocol and platform work without DAO participation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-stone-900 p-6 rounded-lg">
            <h4 className="text-white text-lg font-semibold mb-4">Example Smart Contract (ERC-721 Soulbound)</h4>
            <pre className="text-green-400 text-sm overflow-x-auto">
{`contract SymbiGovernanceToken is ERC721, Ownable {
    mapping(address => bool) public verifiedContributors;
    mapping(address => uint256) public trustScore;
    mapping(address => bool) public revoked;

    // Prevent transfers (soulbound)
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 _tokenId
    ) internal pure override {
        require(
            from == address(0) || to == address(0),
            "Non-transferable token"
        );
    }

    // Mint to verified contributor DID
    function mintToContributor(
        address contributorDID,
        uint256 _trustScore
    ) external onlyOwner {
        require(verifiedContributors[contributorDID], "Not verified");
        trustScore[contributorDID] = _trustScore;
        _mint(contributorDID, _tokenId);
    }

    // Revoke for violations
    function revokeToken(address contributorDID) external onlyOwner {
        revoked[contributorDID] = true;
    }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Legal & Compliance
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Australia-based foundation structure with governance-only token classification
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-stone-900 mb-4">Foundation Structure</h3>
              <ul className="space-y-3 text-stone-600">
                <li>• <strong>Jurisdiction:</strong> Australia (proposed)</li>
                <li>• <strong>Entity Type:</strong> Non-profit foundation (ACNC registered)</li>
                <li>• <strong>Governance Model:</strong> Constitution Nodes + Council + Community voting</li>
                <li>• <strong>Legal Opinion:</strong> Governance-only token classification (not a security)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-stone-900 mb-4">Token Classification</h3>
              <ul className="space-y-3 text-stone-600">
                <li>• <strong>Not a Security:</strong> No profit expectation, no economic rights</li>
                <li>• <strong>Non-Transferable:</strong> Cannot be sold or traded</li>
                <li>• <strong>Earned via Contribution:</strong> Not purchasable</li>
                <li>• <strong>Governance-Only:</strong> Voting rights for protocol decisions</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
            <h4 className="font-semibold text-amber-900 mb-3">Mandatory Disclaimer (All DAO Pages)</h4>
            <p className="text-amber-800 text-sm">
              <strong>IMPORTANT:</strong> SYMBI governance tokens have no financial value, no expectation of profit, and grant no economic rights.
              Tokens are non-transferable and used solely for protocol governance voting. SYMBI Trust Protocol and YCQ Sonate Platform do not require
              tokens or DAO participation for use. This is not an investment opportunity. Participation in DAO governance is entirely optional.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Contributing?
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            SYMBI DAO is for active contributors (developers, researchers, integrators) who want to participate in protocol governance.
            If you&apos;re building with or extending SYMBI Trust Protocol, governance participation may be for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://github.com/symbi-trust" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors">
              View on GitHub
            </Link>
            <Link href="mailto:stephen@yseeku.com?subject=SYMBI DAO Contribution" className="border border-stone-300 text-stone-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-stone-700 transition-colors">
              Contact About Contributing
            </Link>
          </div>

          {/* Footer Disclaimer */}
          <div className="border-t border-stone-700 pt-8 mt-12">
            <p className="text-sm text-stone-400 text-center max-w-3xl mx-auto">
              <strong>LEGAL DISCLAIMER:</strong> SYMBI governance tokens have no financial value, no expectation of profit, and grant no economic rights.
              Tokens are non-transferable and used solely for protocol governance voting. SYMBI Trust Protocol and YCQ Sonate Platform do not require tokens
              or DAO participation for use. Participation is entirely optional and at your own discretion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
