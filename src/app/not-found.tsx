import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#f4f7fb' }}>
      <div className="text-center px-6 max-w-lg">
        <div className="font-black text-[120px] leading-none mb-2" style={{ color: '#1d4ed8', opacity: 0.15 }}>404</div>
        <h1 className="text-3xl font-extrabold mb-3" style={{ color: '#0b1630' }}>Page non trouv&eacute;e</h1>
        <p className="text-[15px] leading-[1.65] mb-8" style={{ color: '#64748b' }}>
          D&eacute;sol&eacute;, la page que vous recherchez n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-bold text-white rounded-lg no-underline transition-all hover:-translate-y-0.5" style={{ background: '#1d4ed8' }}>
            Retour &agrave; l&apos;accueil
          </Link>
          <Link href="/produits" className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-bold rounded-lg no-underline transition-all" style={{ color: '#1d4ed8', border: '1.5px solid rgba(29,78,216,0.3)' }}>
            Voir le catalogue
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-bold rounded-lg no-underline transition-all" style={{ color: '#64748b', border: '1.5px solid #e2e8f0' }}>
            Contact
          </Link>
        </div>
        <div className="text-[13px]" style={{ color: '#94a3b8' }}>
          Cat&eacute;gories populaires :&nbsp;
          <Link href="/produits/switches-ethernet/layer-3-rack" className="no-underline font-medium" style={{ color: '#1d4ed8' }}>Layer-3</Link>
          {' \u00b7 '}
          <Link href="/produits/switches-ethernet/poe" className="no-underline font-medium" style={{ color: '#1d4ed8' }}>PoE</Link>
          {' \u00b7 '}
          <Link href="/produits/switches-ethernet/compact" className="no-underline font-medium" style={{ color: '#1d4ed8' }}>Compact</Link>
          {' \u00b7 '}
          <Link href="/produits/switches-ethernet/tsn-ptp" className="no-underline font-medium" style={{ color: '#1d4ed8' }}>TSN</Link>
        </div>
      </div>
    </div>
  );
}
