import type { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    id: 'tsn-revolution-industrie-4-0',
    slug: {
      fr: 'tsn-revolution-industrie-4-0',
      en: 'tsn-revolution-industry-4-0',
      es: 'tsn-revolucion-industria-4-0',
      it: 'tsn-rivoluzione-industria-4-0',
      ar: 'tsn-revolution-industry-4-0',
      ru: 'tsn-revolyutsiya-industriya-4-0',
    },
    title: {
      fr: 'TSN : La révolution du réseau temps-réel pour l\'Industrie 4.0',
      en: 'TSN: The Real-Time Network Revolution for Industry 4.0',
      es: 'TSN: La revolución de redes en tiempo real para la Industria 4.0',
      it: 'TSN: La rivoluzione delle reti in tempo reale per l\'Industria 4.0',
      ar: 'TSN: ثورة الشبكات في الوقت الحقيقي للصناعة 4.0',
      ru: 'TSN: Революция сетей реального времени для Индустрии 4.0',
    },
    excerpt: {
      fr: 'Découvrez comment le Time-Sensitive Networking transforme les réseaux industriels avec une latence déterministe inférieure à 1 microseconde.',
      en: 'Discover how Time-Sensitive Networking is transforming industrial networks with deterministic latency below 1 microsecond.',
      es: 'Descubra cómo TSN transforma las redes industriales con latencia determinista inferior a 1 microsegundo.',
      it: 'Scopri come il TSN trasforma le reti industriali con latenza deterministica inferiore a 1 microsecondo.',
      ar: 'اكتشف كيف تحول شبكات TSN الشبكات الصناعية بزمن استجابة حتمي أقل من 1 ميكروثانية.',
      ru: 'Узнайте, как TSN трансформирует промышленные сети с детерминированной задержкой менее 1 микросекунды.',
    },
    content: {
      fr: 'Le Time-Sensitive Networking (TSN) est un ensemble de standards IEEE 802.1 qui apporte des capacités temps-réel déterministes aux réseaux Ethernet standard. Pour l\'Industrie 4.0, cela signifie la convergence IT/OT sur un seul réseau.\n\n## Pourquoi le TSN ?\n\nLes réseaux industriels traditionnels (PROFIBUS, DeviceNet) sont remplacés par Ethernet industriel. Le TSN ajoute :\n\n- **Latence déterministe < 1µs** : critique pour le contrôle motion et la robotique\n- **Synchronisation IEEE 802.1AS** : tous les appareils partagent la même horloge\n- **Priorité du trafic (802.1Qbv)** : le trafic critique passe toujours en premier\n\n## Nos switches TSN\n\nTSF Technology propose 5 switches TSN/PTP industriels, du compact DIN-Rail au rack 36 ports avec 10G SFP+. Tous certifiés IP40, -40°C à +75°C.',
      en: 'Time-Sensitive Networking (TSN) is a set of IEEE 802.1 standards bringing deterministic real-time capabilities to standard Ethernet. For Industry 4.0, this means IT/OT convergence on a single network.\n\n## Why TSN?\n\nTraditional industrial networks are being replaced by industrial Ethernet. TSN adds:\n\n- **Deterministic latency < 1µs**: critical for motion control and robotics\n- **IEEE 802.1AS synchronization**: all devices share the same clock\n- **Traffic prioritization (802.1Qbv)**: critical traffic always goes first\n\n## Our TSN Switches\n\nTSF Technology offers 5 industrial TSN/PTP switches, from compact DIN-Rail to 36-port rack with 10G SFP+. All IP40 certified, -40°C to +75°C.',
      es: 'TSN es un conjunto de estándares IEEE 802.1 que aportan capacidades de tiempo real a Ethernet estándar.',
      it: 'Il TSN è un insieme di standard IEEE 802.1 che porta capacità real-time alle reti Ethernet standard.',
      ar: 'TSN هي مجموعة من معايير IEEE 802.1 التي توفر إمكانيات الوقت الحقيقي لشبكات Ethernet.',
      ru: 'TSN — это набор стандартов IEEE 802.1, обеспечивающих детерминированные возможности реального времени для стандартного Ethernet.',
    },
    category: 'technology',
    date: '2025-01-15',
    readTime: 5,
    image: '/images/blog/tsn-industry.jpg',
  },
  {
    id: 'ip40-vs-ip30-protection-industrielle',
    slug: {
      fr: 'ip40-vs-ip30-protection-industrielle',
      en: 'ip40-vs-ip30-industrial-protection',
      es: 'ip40-vs-ip30-proteccion-industrial',
      it: 'ip40-vs-ip30-protezione-industriale',
      ar: 'ip40-vs-ip30-industrial-protection',
      ru: 'ip40-vs-ip30-promyshlennaya-zashchita',
    },
    title: {
      fr: 'IP40 vs IP30 : Pourquoi la protection IP40 est essentielle en milieu industriel',
      en: 'IP40 vs IP30: Why IP40 Protection Is Essential in Industrial Environments',
      es: 'IP40 vs IP30: Por qué la protección IP40 es esencial en entornos industriales',
      it: 'IP40 vs IP30: Perché la protezione IP40 è essenziale in ambiente industriale',
      ar: 'IP40 مقابل IP30: لماذا حماية IP40 ضرورية في البيئات الصناعية',
      ru: 'IP40 vs IP30: Почему защита IP40 необходима в промышленной среде',
    },
    excerpt: {
      fr: 'Comprendre la différence entre IP40 et IP30 et pourquoi ce détail fait toute la différence pour la fiabilité de vos équipements réseau.',
      en: 'Understanding the difference between IP40 and IP30 and why this detail makes all the difference for network equipment reliability.',
      es: 'Entienda la diferencia entre IP40 e IP30 y por qué este detalle importa para sus equipos de red.',
      it: 'Capire la differenza tra IP40 e IP30 e perché questo dettaglio è importante per le apparecchiature di rete.',
      ar: 'فهم الفرق بين IP40 وIP30 ولماذا يحدث هذا التفصيل كل الفرق لمعدات الشبكة.',
      ru: 'Понимание разницы между IP40 и IP30 и почему эта деталь важна для надёжности сетевого оборудования.',
    },
    content: {
      fr: 'L\'indice de protection IP (Ingress Protection) définit le niveau de protection d\'un équipement contre les corps étrangers et l\'eau.\n\n## IP30 vs IP40\n\n- **IP30** : Protection contre les objets > 2.5mm. Standard chez la plupart des concurrents.\n- **IP40** : Protection contre les objets > 1mm. C\'est le standard TSF Technology.\n\n## Pourquoi ça compte ?\n\nEn environnement industriel, les poussières fines (1-2.5mm) sont omniprésentes. Un switch IP30 laisse passer ces particules qui s\'accumulent sur les circuits, provoquant des pannes prématurées.\n\n## L\'avantage TSF Technology\n\nTous nos 102 produits sont certifiés IP40 minimum, sans surcoût. C\'est notre engagement qualité.',
      en: 'The IP (Ingress Protection) rating defines the level of protection against foreign objects and water.\n\n## IP30 vs IP40\n\n- **IP30**: Protection against objects > 2.5mm. Standard for most competitors.\n- **IP40**: Protection against objects > 1mm. This is the TSF Technology standard.\n\n## Why It Matters\n\nIn industrial environments, fine dust (1-2.5mm) is everywhere. An IP30 switch lets these particles through, accumulating on circuits and causing premature failures.\n\n## The TSF Technology Advantage\n\nAll our 102 products are IP40 certified minimum, at no extra cost.',
      es: 'El índice IP define el nivel de protección contra cuerpos extraños y agua.',
      it: 'L\'indice IP definisce il livello di protezione contro corpi estranei e acqua.',
      ar: 'تصنيف IP يحدد مستوى الحماية ضد الأجسام الغريبة والماء.',
      ru: 'Степень защиты IP определяет уровень защиты от посторонних предметов и воды.',
    },
    category: 'guide',
    date: '2025-02-10',
    readTime: 4,
    image: '/images/blog/ip40-protection.jpg',
  },
  {
    id: 'choisir-switch-ethernet-industriel',
    slug: {
      fr: 'comment-choisir-switch-ethernet-industriel',
      en: 'how-to-choose-industrial-ethernet-switch',
      es: 'como-elegir-switch-ethernet-industrial',
      it: 'come-scegliere-switch-ethernet-industriale',
      ar: 'how-to-choose-industrial-ethernet-switch',
      ru: 'kak-vybrat-promyshlennyj-ethernet-kommutator',
    },
    title: {
      fr: 'Comment choisir son switch Ethernet industriel en 2025 ?',
      en: 'How to Choose Your Industrial Ethernet Switch in 2025?',
      es: '¿Cómo elegir su switch Ethernet industrial en 2025?',
      it: 'Come scegliere il proprio switch Ethernet industriale nel 2025?',
      ar: 'كيف تختار محول Ethernet الصناعي في 2025؟',
      ru: 'Как выбрать промышленный Ethernet-коммутатор в 2025 году?',
    },
    excerpt: {
      fr: 'Guide complet pour sélectionner le bon switch : Layer 2 vs Layer 3, managed vs unmanaged, DIN-Rail vs Rack, PoE, TSN...',
      en: 'Complete guide to selecting the right switch: Layer 2 vs Layer 3, managed vs unmanaged, DIN-Rail vs Rack, PoE, TSN...',
      es: 'Guía completa para seleccionar el switch correcto: Layer 2 vs 3, managed vs unmanaged...',
      it: 'Guida completa per selezionare lo switch giusto: Layer 2 vs 3, managed vs unmanaged...',
      ar: 'دليل شامل لاختيار المحول الصحيح: Layer 2 مقابل Layer 3...',
      ru: 'Полное руководство по выбору коммутатора: Layer 2 vs Layer 3...',
    },
    content: {
      fr: '## 1. Managed ou Unmanaged ?\n\n**Unmanaged** : plug-and-play, idéal pour les petites installations sans besoin de configuration.\n**Managed** : VLAN, QoS, RSTP, monitoring. Nécessaire pour les réseaux critiques.\n\n## 2. Layer 2 ou Layer 3 ?\n\n**Layer 2** : commutation basée sur les adresses MAC. Suffisant pour 90% des cas.\n**Layer 3** : routage IP, OSPF, VRRP. Pour les réseaux multi-segments complexes.\n\n## 3. DIN-Rail ou Rack ?\n\n**DIN-Rail** : montage sur rail dans les armoires industrielles. Compact.\n**Rack 19"** : pour les salles serveurs et datacenters industriels.\n\n## 4. PoE nécessaire ?\n\nSi vous alimentez des caméras IP, capteurs ou points d\'accès Wi-Fi, choisissez un switch PoE+ (IEEE 802.3af/at).\n\n## 5. TSN pour le temps-réel\n\nPour l\'automatisation et la robotique, les switches TSN garantissent une latence < 1µs.',
      en: '## 1. Managed or Unmanaged?\n\n**Unmanaged**: plug-and-play, ideal for small installations.\n**Managed**: VLAN, QoS, RSTP, monitoring. Required for critical networks.\n\n## 2. Layer 2 or Layer 3?\n\n**Layer 2**: MAC-based switching. Sufficient for 90% of use cases.\n**Layer 3**: IP routing, OSPF, VRRP. For complex multi-segment networks.\n\n## 3. DIN-Rail or Rack?\n\n**DIN-Rail**: rail mounting in industrial cabinets.\n**Rack 19"**: for server rooms and industrial datacenters.\n\n## 4. PoE Required?\n\nIf powering IP cameras, sensors, or Wi-Fi APs, choose a PoE+ switch.\n\n## 5. TSN for Real-Time\n\nFor automation and robotics, TSN switches guarantee < 1µs latency.',
      es: 'Guía completa para seleccionar el switch Ethernet industrial adecuado.',
      it: 'Guida completa per selezionare lo switch Ethernet industriale giusto.',
      ar: 'دليل شامل لاختيار محول Ethernet الصناعي المناسب.',
      ru: 'Полное руководство по выбору промышленного Ethernet-коммутатора.',
    },
    category: 'guide',
    date: '2025-03-01',
    readTime: 8,
    image: '/images/blog/choose-switch.jpg',
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string, locale: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug[locale as keyof typeof p.slug] === slug);
}
