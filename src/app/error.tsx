'use client';

import Link from 'next/link';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#f4f7fb' }}>
      <div className="text-center px-6 max-w-lg">
        <div className="font-black text-[100px] leading-none mb-2" style={{ color: '#ef4444', opacity: 0.15 }}>500</div>
        <h1 className="text-3xl font-extrabold mb-3" style={{ color: '#0b1630' }}>Une erreur est survenue</h1>
        <p className="text-[15px] leading-[1.65] mb-8" style={{ color: '#64748b' }}>
          Nous sommes d&eacute;sol&eacute;s, quelque chose s&apos;est mal pass&eacute;. Veuillez r&eacute;essayer.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-bold text-white rounded-lg border-0 cursor-pointer transition-all hover:-translate-y-0.5"
            style={{ background: '#1d4ed8' }}
          >
            R&eacute;essayer
          </button>
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-bold rounded-lg no-underline transition-all" style={{ color: '#1d4ed8', border: '1.5px solid rgba(29,78,216,0.3)' }}>
            Retour &agrave; l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
