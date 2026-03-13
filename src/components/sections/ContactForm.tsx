'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

function WhatsAppIcon({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

type Props = { isQuote?: boolean };

const PRODUCT_TYPES = [
  { key: 'switch', emoji: '🔌', label: 'Switch Ethernet' },
  { key: 'router', emoji: '📡', label: 'Routeur 4G/5G' },
  { key: 'wifi', emoji: '📶', label: 'Wi-Fi 6' },
  { key: 'poe', emoji: '⚡', label: 'Switch PoE' },
  { key: 'iot', emoji: '🔗', label: 'IoT Gateway' },
  { key: 'converter', emoji: '🔄', label: 'Convertisseur' },
];

const QUANTITY_OPTIONS = ['1–5', '6–20', '21–100', '100–500', '500+'];

export function ContactForm({ isQuote = false }: Props) {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'devis' | 'support' | 'general'>(isQuote ? 'devis' : 'devis');
  const [selectedProduct, setSelectedProduct] = useState('switch');
  const [selectedQty, setSelectedQty] = useState('1–5');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── HERO ── */}
      <div style={{ background: '#0b1630', padding: '56px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 500, height: 500, background: 'radial-gradient(circle, rgba(29,78,216,0.2), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, padding: '5px 14px', fontSize: 11, color: '#94a3b8', fontWeight: 600, letterSpacing: 0.5, marginBottom: 18 }}>
              Parlons de votre projet
            </div>
            <h1 style={{ fontSize: 36, fontWeight: 800, color: '#fff', letterSpacing: -0.5, marginBottom: 12 }}>
              {isQuote ? 'Demander un\nDevis Gratuit' : "Contactez\nl'équipe TSF"}
            </h1>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.75, marginBottom: 24 }}>
              Devis gratuit, assistance technique, ou simple question — nous répondons en moins de 2 heures, 7j/7.
            </p>

            {/* Channels */}
            <div className="grid grid-cols-2 gap-[10px]">
              {[
                { href: 'mailto:contact@tsf-technology.com', icon: <Mail size={15} />, iconBg: 'rgba(96,165,250,0.15)', iconColor: '#60a5fa', label: 'Email', sub: 'contact@tsf-technology.com' },
                { href: 'tel:+33617030308', icon: <Phone size={15} />, iconBg: 'rgba(249,115,22,0.15)', iconColor: '#fb923c', label: 'Téléphone', sub: '+33 6 17 03 03 08' },
                { href: 'https://wa.me/33617030308', icon: <WhatsAppIcon size={15} color="#22c55e" />, iconBg: 'rgba(34,197,94,0.15)', iconColor: '#22c55e', label: 'WhatsApp', sub: 'Réponse < 2h · 7j/7' },
                { href: '#form', icon: <Send size={15} />, iconBg: 'rgba(45,212,191,0.15)', iconColor: '#2dd4bf', label: 'Formulaire', sub: 'Réponse sous 24h' },
              ].map((ch) => (
                <a key={ch.label} href={ch.href} target={ch.href.startsWith('http') ? '_blank' : undefined} rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '12px 14px', textDecoration: 'none', transition: 'all .2s' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 7, background: ch.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: ch.iconColor }}>{ch.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{ch.label}</div>
                    <div style={{ fontSize: 10, color: '#64748b' }}>{ch.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Response time card */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#64748b', marginBottom: 14 }}>Délais de réponse garantis</div>
            {[
              { color: '#22c55e', label: 'WhatsApp', time: 'Réponse en moins de 2h' },
              { color: '#22c55e', label: 'Email', time: 'Réponse sous 24h' },
              { color: '#f97316', label: 'Devis', time: 'Envoi sous 24h ouvré' },
              { color: '#22c55e', label: 'SAV & Garantie', time: 'Traitement J+1' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: '#94a3b8', marginBottom: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                <strong style={{ color: '#fff' }}>{item.label}</strong> — {item.time}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div id="form" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 40px' }}
        className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-7 items-start"
      >
        {/* FORM */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ padding: '24px 28px', borderBottom: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0b1630' }}>Formulaire de contact</h2>
            <p style={{ fontSize: 12, color: '#64748b' }}>Devis gratuit · Sans engagement · Réponse sous 24h</p>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0' }}>
            {([['devis', '📋', 'Demande de devis'], ['support', '🔧', 'Support technique'], ['general', '💬', 'Question générale']] as const).map(([key, emoji, label]) => (
              <button key={key} onClick={() => setActiveTab(key)}
                style={{ flex: 1, padding: 12, textAlign: 'center', fontSize: 13, fontWeight: 600, color: activeTab === key ? '#1d4ed8' : '#64748b', cursor: 'pointer', background: 'none', border: 'none', borderBottomStyle: 'solid', borderBottomWidth: 2, borderBottomColor: activeTab === key ? '#1d4ed8' : 'transparent', transition: 'all .2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span>{emoji}</span> {label}
              </button>
            ))}
          </div>

          {submitted ? (
            <div style={{ padding: '80px 28px', textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <CheckCircle size={32} style={{ color: '#22c55e' }} />
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0b1630', marginBottom: 12 }}>Message envoyé !</h2>
              <p style={{ fontSize: 14, color: '#64748b' }}>{t('successMessage')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ padding: 28 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: 16 }}>
                <FormField label="Prénom" name="firstName" required placeholder="Jean" />
                <FormField label="Nom" name="lastName" required placeholder="Dupont" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: 16 }}>
                <FormField label="Email professionnel" name="email" type="email" required placeholder="jean@entreprise.com" />
                <FormField label="Téléphone" name="phone" type="tel" placeholder="+33 6 ..." />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: 16 }}>
                <FormField label="Entreprise" name="company" placeholder="Nom de votre société" />
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>Secteur d&apos;activité</label>
                  <select name="sector" style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #e2e8f0', borderRadius: 8, fontSize: 13.5, fontFamily: 'inherit', color: '#0f172a', background: '#fff', outline: 'none' }}>
                    <option>Sélectionner...</option>
                    <option>Smart City</option>
                    <option>Industrie 4.0 / Automatisation</option>
                    <option>Énergie / Utilities</option>
                    <option>Transport / Logistique</option>
                    <option>Pétrole &amp; Gaz</option>
                    <option>Sécurité / Surveillance</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>

              {/* Product type selector - only for devis tab */}
              {activeTab === 'devis' && (
                <>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>Type de produit recherché</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-[10px]">
                      {PRODUCT_TYPES.map((pt) => (
                        <button key={pt.key} type="button" onClick={() => setSelectedProduct(pt.key)}
                          style={{
                            padding: '14px 10px', borderRadius: 10, cursor: 'pointer', textAlign: 'center',
                            background: selectedProduct === pt.key ? '#eff6ff' : '#fff',
                            border: selectedProduct === pt.key ? '1.5px solid #1d4ed8' : '1.5px solid #e2e8f0',
                            transition: 'all .2s',
                          }}>
                          <div style={{ fontSize: 20, marginBottom: 4 }}>{pt.emoji}</div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: selectedProduct === pt.key ? '#1d4ed8' : '#64748b' }}>{pt.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>Quantité estimée</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {QUANTITY_OPTIONS.map((q) => (
                        <button key={q} type="button" onClick={() => setSelectedQty(q)}
                          style={{
                            padding: '7px 16px', borderRadius: 999, fontSize: 12, fontWeight: 700, cursor: 'pointer',
                            fontFamily: "'Space Mono', monospace",
                            background: selectedQty === q ? '#1d4ed8' : '#fff',
                            color: selectedQty === q ? '#fff' : '#64748b',
                            border: selectedQty === q ? '1.5px solid #1d4ed8' : '1.5px solid #e2e8f0',
                            transition: 'all .2s',
                          }}>
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>
                  Décrivez votre projet ou votre besoin <span style={{ color: '#1d4ed8' }}>*</span>
                </label>
                <textarea name="message" required rows={4}
                  style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #e2e8f0', borderRadius: 8, fontSize: 13.5, fontFamily: 'inherit', color: '#0f172a', background: '#fff', outline: 'none', resize: 'vertical', minHeight: 100 }}
                  placeholder="Exemple : Nous cherchons des switches industriels DIN Rail pour une ligne de production, avec support PROFINET IRT. Température ambiante entre -20°C et +60°C. Besoin de 8 ports minimum par switch..."
                />
              </div>

              <button type="submit" style={{ background: '#f97316', color: '#fff', border: 'none', width: '100%', padding: 14, borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: 'pointer', marginTop: 8 }}>
                Envoyer ma demande →
              </button>
              <p style={{ fontSize: 11, color: '#64748b', textAlign: 'center', marginTop: 10, lineHeight: 1.5 }}>
                Vos données sont confidentielles et ne seront jamais revendues.<br />Devis gratuit · Sans engagement · Réponse garantie sous 24h.
              </p>
            </form>
          )}
        </div>

        {/* SIDEBAR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* WhatsApp card */}
          <div style={{ background: '#0b1630', borderRadius: 14, padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <WhatsAppIcon size={22} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>Support WhatsApp 24/7</div>
                <div style={{ fontSize: 11, color: '#64748b' }}>Réponse garantie en moins de 2h</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#64748b', marginBottom: 14 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
              Équipe disponible maintenant
            </div>
            <a href="https://wa.me/33617030308" target="_blank" rel="noopener noreferrer"
              style={{ background: '#22c55e', color: '#fff', border: 'none', width: '100%', padding: 12, borderRadius: 8, fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none' }}>
              <WhatsAppIcon size={15} color="#fff" /> Contacter via WhatsApp
            </a>
          </div>

          {/* Info card */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 22 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#64748b', marginBottom: 16 }}>Informations de contact</div>
            {[
              { icon: <Mail size={15} />, label: 'Email', val: 'contact@tsf-technology.com' },
              { icon: <Phone size={15} />, label: 'Téléphone', val: '+33 6 17 03 03 08' },
              { icon: <MapPin size={15} />, label: 'Adresse', val: '401 Ch. du Montbert\n14100 Hermival-les-Vaux' },
              { icon: <Clock size={15} />, label: 'Horaires support', val: '24h/24 — 7j/7', extra: true },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#1d4ed8' }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>{item.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', whiteSpace: 'pre-line' }}>{item.val}</div>
                  {'extra' in item && item.extra && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2, fontSize: 11, color: '#22c55e', fontWeight: 600 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                      Actuellement disponible
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map card */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ background: '#0b1630', height: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50%, rgba(29,78,216,0.25), transparent 60%)' }} />
              <div style={{ fontSize: 32, position: 'relative', zIndex: 1 }}>📍</div>
              <div style={{ fontSize: 11, color: '#64748b', textAlign: 'center', position: 'relative', zIndex: 1, lineHeight: 1.5 }}>
                TSF Technology — Lannkin<br />Hermival-les-Vaux, Normandie
              </div>
            </div>
            <div style={{ padding: '16px 20px' }}>
              <div style={{ fontSize: 13, color: '#0f172a', fontWeight: 500, lineHeight: 1.6, marginBottom: 10 }}>
                401 Chemin du Montbert<br />14100 Hermival-les-Vaux, France
              </div>
              <a href="https://maps.google.com/?q=401+Chemin+du+Montbert+14100+Hermival-les-Vaux" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 12, color: '#1d4ed8', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                <MapPin size={12} /> Ouvrir dans Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── TRUST BAND ── */}
      <div style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '24px 40px', marginTop: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {['Devis gratuit & sans engagement', 'Réponse sous 24h garantie', 'Support technique expert', 'Données 100% confidentielles'].map((text) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#0f172a' }}>
              <CheckCircle size={14} style={{ color: '#22c55e' }} /> {text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function FormField({ label, name, type = 'text', required = false, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>
        {label} {required && <span style={{ color: '#1d4ed8' }}>*</span>}
      </label>
      <input type={type} name={name} required={required} placeholder={placeholder}
        style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #e2e8f0', borderRadius: 8, fontSize: 13.5, fontFamily: 'inherit', color: '#0f172a', background: '#fff', outline: 'none' }}
      />
    </div>
  );
}
