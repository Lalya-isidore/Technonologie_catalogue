import type { Product, FAQ } from '@/lib/types';
import { getProductsByLayer } from '@/data/products';

/* ═══════ Types ═══════ */

export interface CategoryConfig {
  layer: Product['layer'];
  seo: { title: string; description: string };
  bannerImage?: string;
  heroImages?: string[];
  landing: {
    [locale: string]: {
      title: string;
      headline: string;
      description: string;
      benefits: string[];
      stats: { value: string; label: string }[];
      useCases: string[];
    };
  };
  faqs: FAQ[];
}

/* ═══════ Category Map ═══════ */

export const CATEGORY_MAP: Record<string, CategoryConfig> = {
  'layer-3-din-rail': {
    layer: 'layer-3',
    seo: { title: 'Layer 3 Industrial DIN Rail Switches | TSF Technology', description: 'Industrial Layer 3 Ethernet switches for DIN Rail mounting. IP routing, OSPF, VRRP. IP40, -40°C to +75°C. CE/FCC/UL certified.' },
    bannerImage: '/images/products/banner-switches.png',
    heroImages: ['/images/products/product-din-rail.png', '/images/products/product-compact.png'],
    landing: {
      en: {
        title: 'Layer 3 DIN Rail Switches',
        headline: 'Industrial Layer 3\nDIN Rail Switches',
        description: 'Advanced Layer 3 managed Ethernet switches with IP routing, OSPF, VRRP and full network segmentation. Built for extreme industrial environments with DIN Rail mounting.',
        benefits: ['Full IP routing (OSPF, RIP, VRRP)', 'DIN Rail mounting for control cabinets', '-40°C to +75°C operating range', 'Redundant power inputs 12-58VDC'],
        stats: [
          { value: '10G', label: 'Up to\n10 Gigabit' },
          { value: '24', label: 'Ports\nmax' },
          { value: 'IP40', label: 'Protection\nrating' },
          { value: '3yr', label: 'Warranty\nincluded' },
        ],
        useCases: ['Industrial automation & SCADA', 'Smart factory backbone networks', 'Renewable energy substations', 'Rail & transportation systems', 'Oil & gas remote sites', 'Smart city infrastructure'],
      },
      fr: {
        title: 'Switches Layer-3 DIN Rail',
        headline: 'Switches Layer 3\nDIN Rail Industriels',
        description: 'Switches Ethernet managés Layer 3 avec routage IP, OSPF, VRRP et segmentation réseau complète. Conçus pour les environnements industriels extrêmes, montage DIN Rail.',
        benefits: ['Routage IP complet (OSPF, RIP, VRRP)', 'Montage DIN Rail pour armoires', '-40°C à +75°C plage de fonctionnement', 'Double alimentation 12-58VDC'],
        stats: [
          { value: '10G', label: 'Jusqu\'à\n10 Gigabit' },
          { value: '24', label: 'Ports\nmax' },
          { value: 'IP40', label: 'Indice de\nprotection' },
          { value: '3 ans', label: 'Garantie\nincluse' },
        ],
        useCases: ['Automatisation industrielle & SCADA', 'Réseaux backbone usines', 'Sous-stations énergies renouvelables', 'Systèmes ferroviaires & transport', 'Sites pétroliers & gaziers', 'Infrastructure Smart City'],
      },
      es: {
        title: 'Switches Layer-3 DIN Rail',
        headline: 'Switches Layer 3\nDIN Rail Industriales',
        description: 'Switches Ethernet gestionados Layer 3 con enrutamiento IP, OSPF, VRRP y segmentación de red completa. Diseñados para entornos industriales extremos, montaje DIN Rail.',
        benefits: ['Enrutamiento IP completo (OSPF, RIP, VRRP)', 'Montaje DIN Rail para armarios', '-40°C a +75°C rango operativo', 'Alimentación redundante 12-58VDC'],
        stats: [
          { value: '10G', label: 'Hasta\n10 Gigabit' },
          { value: '24', label: 'Puertos\nmáx' },
          { value: 'IP40', label: 'Grado de\nprotección' },
          { value: '3 años', label: 'Garantía\nincluida' },
        ],
        useCases: ['Automatización industrial & SCADA', 'Redes backbone de fábricas', 'Subestaciones de energía renovable', 'Sistemas ferroviarios & transporte', 'Sitios de petróleo & gas', 'Infraestructura Smart City'],
      },
      it: {
        title: 'Switch Layer-3 DIN Rail',
        headline: 'Switch Layer 3\nDIN Rail Industriali',
        description: 'Switch Ethernet gestiti Layer 3 con routing IP, OSPF, VRRP e segmentazione di rete completa. Progettati per ambienti industriali estremi, montaggio DIN Rail.',
        benefits: ['Routing IP completo (OSPF, RIP, VRRP)', 'Montaggio DIN Rail per armadi', '-40°C a +75°C range operativo', 'Alimentazione ridondante 12-58VDC'],
        stats: [
          { value: '10G', label: 'Fino a\n10 Gigabit' },
          { value: '24', label: 'Porte\nmax' },
          { value: 'IP40', label: 'Grado di\nprotezione' },
          { value: '3 anni', label: 'Garanzia\ninclusa' },
        ],
        useCases: ['Automazione industriale & SCADA', 'Reti backbone di fabbrica', 'Sottostazioni energie rinnovabili', 'Sistemi ferroviari & trasporti', 'Siti petroliferi & gas', 'Infrastruttura Smart City'],
      },
      ar: {
        title: 'محولات Layer-3 DIN Rail',
        headline: 'محولات Layer 3\nDIN Rail الصناعية',
        description: 'محولات إيثرنت مُدارة Layer 3 مع توجيه IP وOSPF وVRRP وتقسيم شبكة كامل. مصممة للبيئات الصناعية القاسية، تركيب DIN Rail.',
        benefits: ['توجيه IP كامل (OSPF, RIP, VRRP)', 'تركيب DIN Rail للخزائن', '-40°C إلى +75°C نطاق التشغيل', 'تغذية مزدوجة 12-58VDC'],
        stats: [
          { value: '10G', label: 'حتى\n10 جيجابت' },
          { value: '24', label: 'منافذ\nكحد أقصى' },
          { value: 'IP40', label: 'درجة\nالحماية' },
          { value: '3 سنوات', label: 'ضمان\nمشمول' },
        ],
        useCases: ['الأتمتة الصناعية وSCADA', 'شبكات المصانع الرئيسية', 'محطات الطاقة المتجددة', 'أنظمة السكك الحديدية والنقل', 'مواقع النفط والغاز', 'البنية التحتية للمدن الذكية'],
      },
      ru: {
        title: 'Коммутаторы Layer-3 DIN Rail',
        headline: 'Промышленные коммутаторы\nLayer 3 DIN Rail',
        description: 'Управляемые Ethernet-коммутаторы Layer 3 с IP-маршрутизацией, OSPF, VRRP и полной сегментацией сети. Созданы для экстремальных промышленных условий, монтаж на DIN-рейку.',
        benefits: ['Полная IP-маршрутизация (OSPF, RIP, VRRP)', 'Монтаж на DIN-рейку', 'Рабочий диапазон -40°C до +75°C', 'Резервное питание 12-58VDC'],
        stats: [
          { value: '10G', label: 'До\n10 Гигабит' },
          { value: '24', label: 'Портов\nмакс' },
          { value: 'IP40', label: 'Степень\nзащиты' },
          { value: '3 года', label: 'Гарантия\nвключена' },
        ],
        useCases: ['Промышленная автоматизация и SCADA', 'Магистральные сети заводов', 'Подстанции возобновляемой энергии', 'Железнодорожные и транспортные системы', 'Нефтегазовые объекты', 'Инфраструктура умного города'],
      },
    },
    faqs: [
      { question: { fr: 'Quelle est la différence entre un switch Layer 2 et Layer 3 ?', en: 'What is the difference between Layer 2 and Layer 3 switches?', es: '¿Cuál es la diferencia entre un switch Layer 2 y Layer 3?', it: 'Qual è la differenza tra switch Layer 2 e Layer 3?', ar: 'ما الفرق بين محولات Layer 2 وLayer 3؟', ru: 'В чём разница между коммутаторами Layer 2 и Layer 3?' }, answer: { fr: 'Un switch Layer 2 commute les trames selon les adresses MAC. Un switch Layer 3 ajoute le routage IP (OSPF, VRRP, RIP), permettant la segmentation réseau et la communication inter-VLAN sans routeur externe.', en: 'A Layer 2 switch forwards frames based on MAC addresses. A Layer 3 switch adds IP routing (OSPF, VRRP, RIP), enabling network segmentation and inter-VLAN communication without an external router.', es: 'Un switch Layer 2 reenvía tramas basándose en direcciones MAC. Un switch Layer 3 añade enrutamiento IP (OSPF, VRRP, RIP), permitiendo segmentación de red y comunicación inter-VLAN sin router externo.', it: 'Uno switch Layer 2 inoltra i frame in base agli indirizzi MAC. Uno switch Layer 3 aggiunge il routing IP (OSPF, VRRP, RIP), consentendo la segmentazione della rete e la comunicazione inter-VLAN senza router esterno.', ar: 'يقوم محول Layer 2 بتحويل الإطارات بناءً على عناوين MAC. يضيف محول Layer 3 توجيه IP (OSPF, VRRP, RIP)، مما يتيح تقسيم الشبكة والتواصل بين VLANs بدون راوتر خارجي.', ru: 'Коммутатор Layer 2 передаёт кадры на основе MAC-адресов. Коммутатор Layer 3 добавляет IP-маршрутизацию (OSPF, VRRP, RIP), обеспечивая сегментацию сети и межвланную коммуникацию без внешнего маршрутизатора.' } },
      { question: { fr: 'Ces switches fonctionnent-ils dans des conditions de température extrêmes ?', en: 'Do these switches work in extreme temperature conditions?', es: '¿Funcionan estos switches en condiciones de temperatura extrema?', it: 'Questi switch funzionano in condizioni di temperatura estreme?', ar: 'هل تعمل هذه المحولات في ظروف حرارة قاسية؟', ru: 'Работают ли эти коммутаторы в экстремальных температурных условиях?' }, answer: { fr: 'Oui, tous nos switches DIN Rail fonctionnent de -40°C à +75°C avec un boîtier IP40 en aluminium. Ils sont conçus pour les armoires industrielles sans ventilation active.', en: 'Yes, all our DIN Rail switches operate from -40°C to +75°C with an IP40-rated aluminum housing. They are designed for industrial cabinets without active ventilation.', es: 'Sí, todos nuestros switches DIN Rail operan de -40°C a +75°C con carcasa de aluminio IP40. Están diseñados para armarios industriales sin ventilación activa.', it: 'Sì, tutti i nostri switch DIN Rail funzionano da -40°C a +75°C con un alloggiamento in alluminio IP40. Sono progettati per armadi industriali senza ventilazione attiva.', ar: 'نعم، جميع محولات DIN Rail تعمل من -40°C إلى +75°C مع هيكل ألمنيوم بتصنيف IP40. مصممة للخزائن الصناعية بدون تهوية نشطة.', ru: 'Да, все наши коммутаторы DIN Rail работают при температуре от -40°C до +75°C в алюминиевом корпусе IP40. Они предназначены для промышленных шкафов без активной вентиляции.' } },
      { question: { fr: 'Quelle garantie est incluse ?', en: 'What warranty is included?', es: '¿Qué garantía se incluye?', it: 'Quale garanzia è inclusa?', ar: 'ما هو الضمان المشمول؟', ru: 'Какая гарантия включена?' }, answer: { fr: 'Tous les produits TSF Technology sont couverts par une garantie de 3 ans avec support technique gratuit par email et téléphone.', en: 'All TSF Technology products come with a 3-year warranty including free technical support via email and phone.', es: 'Todos los productos TSF Technology incluyen una garantía de 3 años con soporte técnico gratuito por email y teléfono.', it: 'Tutti i prodotti TSF Technology includono una garanzia di 3 anni con supporto tecnico gratuito via email e telefono.', ar: 'جميع منتجات TSF Technology مشمولة بضمان 3 سنوات مع دعم فني مجاني عبر البريد الإلكتروني والهاتف.', ru: 'На всю продукцию TSF Technology предоставляется 3-летняя гарантия с бесплатной технической поддержкой по email и телефону.' } },
    ],
  },
  'layer-3-rack': {
    layer: 'layer-3',
    seo: { title: 'Layer 3 Industrial Rack Mount Switches | TSF Technology', description: 'Industrial Layer 3 Ethernet switches for 19" Rack mounting. High port density, advanced IP routing. CE/FCC/UL certified.' },
    bannerImage: '/images/products/banner-layer3-rack.jpg',
    landing: {
      en: { title: 'Layer 3 Rack 19" Switches', headline: 'Industrial Layer 3\nRack Mount Switches', description: 'High-density Layer 3 managed switches designed for 19-inch rack mounting in server rooms and industrial data centers. Full IP routing with OSPF, VRRP, and advanced QoS.', benefits: ['19" rack mount, 1U form factor', 'High port density up to 28 ports', 'Full Layer 3 routing (OSPF, VRRP)', 'Advanced QoS & traffic management'], stats: [{ value: '10G', label: 'Up to\n10 Gigabit' }, { value: '28', label: 'Ports\nmax' }, { value: '1U', label: 'Rack\nform factor' }, { value: '3yr', label: 'Warranty\nincluded' }], useCases: ['Industrial data centers', 'Server room aggregation', 'Campus network backbone', 'Telecom infrastructure', 'Control room networking', 'Large-scale automation'] },
      fr: { title: 'Switches Layer-3 Rack 19"', headline: 'Switches Layer 3\nRack 19" Industriels', description: 'Switches managés Layer 3 haute densité pour montage rack 19 pouces en salles serveurs et data centers industriels. Routage IP complet avec OSPF, VRRP et QoS avancé.', benefits: ['Montage rack 19", format 1U', 'Haute densité jusqu\'à 28 ports', 'Routage Layer 3 complet (OSPF, VRRP)', 'QoS avancé & gestion du trafic'], stats: [{ value: '10G', label: 'Jusqu\'à\n10 Gigabit' }, { value: '28', label: 'Ports\nmax' }, { value: '1U', label: 'Format\nrack' }, { value: '3 ans', label: 'Garantie\nincluse' }], useCases: ['Data centers industriels', 'Agrégation salle serveur', 'Backbone réseau campus', 'Infrastructure télécom', 'Réseau salle de contrôle', 'Automatisation grande échelle'] },
      es: { title: 'Switches Layer-3 Rack 19"', headline: 'Switches Layer 3\nRack 19" Industriales', description: 'Switches gestionados Layer 3 de alta densidad para montaje en rack 19". Enrutamiento IP completo con OSPF, VRRP y QoS avanzado.', benefits: ['Montaje rack 19", formato 1U', 'Alta densidad hasta 28 puertos', 'Enrutamiento Layer 3 completo', 'QoS avanzado'], stats: [{ value: '10G', label: 'Hasta\n10 Gigabit' }, { value: '28', label: 'Puertos\nmáx' }, { value: '1U', label: 'Formato\nrack' }, { value: '3 años', label: 'Garantía' }], useCases: ['Data centers industriales', 'Agregación sala de servidores', 'Backbone de campus', 'Infraestructura telecom', 'Redes de sala de control', 'Automatización a gran escala'] },
      it: { title: 'Switch Layer-3 Rack 19"', headline: 'Switch Layer 3\nRack 19" Industriali', description: 'Switch gestiti Layer 3 ad alta densità per montaggio rack 19". Routing IP completo con OSPF, VRRP e QoS avanzato.', benefits: ['Montaggio rack 19", formato 1U', 'Alta densità fino a 28 porte', 'Routing Layer 3 completo', 'QoS avanzato'], stats: [{ value: '10G', label: 'Fino a\n10 Gigabit' }, { value: '28', label: 'Porte\nmax' }, { value: '1U', label: 'Formato\nrack' }, { value: '3 anni', label: 'Garanzia' }], useCases: ['Data center industriali', 'Aggregazione sala server', 'Backbone di campus', 'Infrastruttura telecom', 'Reti sala controllo', 'Automazione su larga scala'] },
      ar: { title: 'محولات Layer-3 Rack 19"', headline: 'محولات Layer 3\nRack 19" الصناعية', description: 'محولات مُدارة Layer 3 عالية الكثافة لتركيب Rack 19". توجيه IP كامل مع OSPF وVRRP وQoS متقدم.', benefits: ['تركيب Rack 19"، شكل 1U', 'كثافة عالية حتى 28 منفذ', 'توجيه Layer 3 كامل', 'QoS متقدم'], stats: [{ value: '10G', label: 'حتى\n10 جيجابت' }, { value: '28', label: 'منافذ\nكحد أقصى' }, { value: '1U', label: 'شكل\nRack' }, { value: '3 سنوات', label: 'ضمان' }], useCases: ['مراكز بيانات صناعية', 'تجميع غرف الخوادم', 'شبكات الحرم الجامعي', 'بنية تحتية للاتصالات', 'شبكات غرف التحكم', 'أتمتة واسعة النطاق'] },
      ru: { title: 'Коммутаторы Layer-3 Rack 19"', headline: 'Промышленные коммутаторы\nLayer 3 Rack 19"', description: 'Управляемые коммутаторы Layer 3 высокой плотности для монтажа в 19" стойку. Полная IP-маршрутизация с OSPF, VRRP и расширенным QoS.', benefits: ['Монтаж в 19" стойку, формат 1U', 'Высокая плотность до 28 портов', 'Полная маршрутизация Layer 3', 'Расширенный QoS'], stats: [{ value: '10G', label: 'До\n10 Гигабит' }, { value: '28', label: 'Портов\nмакс' }, { value: '1U', label: 'Формат\nстойки' }, { value: '3 года', label: 'Гарантия' }], useCases: ['Промышленные ЦОДы', 'Агрегация серверных', 'Магистральные сети кампуса', 'Телеком-инфраструктура', 'Сети диспетчерских', 'Крупномасштабная автоматизация'] },
    },
    faqs: [
      { question: { fr: 'Quelle est la différence avec les modèles DIN Rail ?', en: 'What is the difference from DIN Rail models?', es: '¿Cuál es la diferencia con los modelos DIN Rail?', it: 'Qual è la differenza con i modelli DIN Rail?', ar: 'ما الفرق مع طرازات DIN Rail؟', ru: 'В чём отличие от моделей DIN Rail?' }, answer: { fr: 'Les modèles Rack 19" offrent une plus haute densité de ports (jusqu\'à 28) et sont conçus pour les salles serveurs avec refroidissement. Les modèles DIN Rail sont plus compacts pour les armoires industrielles.', en: 'Rack 19" models offer higher port density (up to 28) and are designed for server rooms with cooling. DIN Rail models are more compact for industrial cabinets.', es: 'Los modelos Rack 19" ofrecen mayor densidad de puertos (hasta 28) y están diseñados para salas de servidores con refrigeración. Los modelos DIN Rail son más compactos para armarios industriales.', it: 'I modelli Rack 19" offrono una maggiore densità di porte (fino a 28) e sono progettati per sale server con raffreddamento. I modelli DIN Rail sono più compatti per armadi industriali.', ar: 'توفر طرازات Rack 19" كثافة منافذ أعلى (حتى 28) ومصممة لغرف الخوادم مع التبريد. طرازات DIN Rail أكثر إحكاماً للخزائن الصناعية.', ru: 'Модели Rack 19" обеспечивают более высокую плотность портов (до 28) и предназначены для серверных с охлаждением. Модели DIN Rail более компактны для промышленных шкафов.' } },
    ],
  },
  'layer-2-managed-rack': {
    layer: 'layer-2-managed',
    seo: { title: 'Managed Layer 2 Industrial Rack Switches | TSF Technology', description: 'Managed Layer 2 industrial Ethernet switches for 19" rack. VLAN, QoS, RSTP, IGMP. For industrial server rooms.' },
    bannerImage: '/images/products/banner-layer2-managed-rack.jpg',
    landing: {
      en: { title: 'Layer 2 Managed Rack Switches', headline: 'Managed Industrial\nRack Mount Switches', description: 'Feature-rich Layer 2 managed switches for 19" rack installation. VLAN, QoS, RSTP, IGMP snooping and comprehensive network management.', benefits: ['Full VLAN & QoS management', '19" rack mount standard', 'RSTP/MSTP redundancy', 'Web GUI + CLI management'], stats: [{ value: 'L2+', label: 'Managed\nLayer 2' }, { value: '24', label: 'Ports\nmax' }, { value: 'IP40', label: 'Protection\nrating' }, { value: '3yr', label: 'Warranty' }], useCases: ['Industrial server rooms', 'Building automation', 'Campus distribution', 'Surveillance networks', 'Process control', 'Enterprise edge'] },
      fr: { title: 'Switches L2 Managés Rack', headline: 'Switches Managés\nRack 19" Industriels', description: 'Switches managés Layer 2 complets pour installation rack 19". VLAN, QoS, RSTP, IGMP snooping et gestion réseau complète.', benefits: ['Gestion VLAN & QoS complète', 'Montage rack 19" standard', 'Redondance RSTP/MSTP', 'Gestion Web GUI + CLI'], stats: [{ value: 'L2+', label: 'Managé\nLayer 2' }, { value: '24', label: 'Ports\nmax' }, { value: 'IP40', label: 'Indice de\nprotection' }, { value: '3 ans', label: 'Garantie' }], useCases: ['Salles serveurs industrielles', 'Automatisation bâtiments', 'Distribution campus', 'Réseaux vidéosurveillance', 'Contrôle de processus', 'Edge entreprise'] },
      es: { title: 'Switches L2 Managed Rack', headline: 'Switches Gestionados\nRack 19" Industriales', description: 'Switches gestionados Layer 2 para rack 19". VLAN, QoS, RSTP, IGMP snooping.', benefits: ['Gestión VLAN & QoS completa', 'Montaje rack 19" estándar', 'Redundancia RSTP/MSTP', 'Gestión Web GUI + CLI'], stats: [{ value: 'L2+', label: 'Gestionado\nLayer 2' }, { value: '24', label: 'Puertos\nmáx' }, { value: 'IP40', label: 'Protección' }, { value: '3 años', label: 'Garantía' }], useCases: ['Salas de servidores industriales', 'Automatización de edificios', 'Distribución de campus', 'Redes de vigilancia', 'Control de procesos', 'Edge empresarial'] },
      it: { title: 'Switch L2 Managed Rack', headline: 'Switch Gestiti\nRack 19" Industriali', description: 'Switch gestiti Layer 2 per rack 19". VLAN, QoS, RSTP, IGMP snooping.', benefits: ['Gestione VLAN & QoS completa', 'Montaggio rack 19" standard', 'Ridondanza RSTP/MSTP', 'Gestione Web GUI + CLI'], stats: [{ value: 'L2+', label: 'Gestito\nLayer 2' }, { value: '24', label: 'Porte\nmax' }, { value: 'IP40', label: 'Protezione' }, { value: '3 anni', label: 'Garanzia' }], useCases: ['Sale server industriali', 'Automazione edifici', 'Distribuzione campus', 'Reti videosorveglianza', 'Controllo processi', 'Edge aziendale'] },
      ar: { title: 'محولات L2 مُدارة Rack', headline: 'محولات مُدارة\nRack 19" صناعية', description: 'محولات مُدارة Layer 2 لـ Rack 19". VLAN وQoS وRSTP وIGMP snooping.', benefits: ['إدارة VLAN & QoS كاملة', 'تركيب Rack 19" قياسي', 'تكرار RSTP/MSTP', 'إدارة Web GUI + CLI'], stats: [{ value: 'L2+', label: 'مُدار\nLayer 2' }, { value: '24', label: 'منافذ\nكحد أقصى' }, { value: 'IP40', label: 'حماية' }, { value: '3 سنوات', label: 'ضمان' }], useCases: ['غرف خوادم صناعية', 'أتمتة المباني', 'توزيع الحرم', 'شبكات المراقبة', 'التحكم في العمليات', 'Edge المؤسسي'] },
      ru: { title: 'Коммутаторы L2 Managed Rack', headline: 'Управляемые коммутаторы\nRack 19" промышленные', description: 'Управляемые коммутаторы Layer 2 для 19" стойки. VLAN, QoS, RSTP, IGMP snooping.', benefits: ['Полное управление VLAN & QoS', 'Монтаж в 19" стойку', 'Резервирование RSTP/MSTP', 'Управление Web GUI + CLI'], stats: [{ value: 'L2+', label: 'Управляемый\nLayer 2' }, { value: '24', label: 'Портов\nмакс' }, { value: 'IP40', label: 'Защита' }, { value: '3 года', label: 'Гарантия' }], useCases: ['Промышленные серверные', 'Автоматизация зданий', 'Распределение кампуса', 'Сети видеонаблюдения', 'Управление процессами', 'Корпоративный edge'] },
    },
    faqs: [],
  },
  'layer-2-managed-din-rail': {
    layer: 'layer-2-managed',
    seo: { title: 'Managed Layer 2 Industrial DIN Rail Switches | TSF Technology', description: 'Managed Layer 2 industrial Ethernet switches DIN Rail. VLAN, QoS, network redundancy for industrial cabinets.' },
    bannerImage: '/images/products/banner-layer2-managed-din-rail.jpg',
    landing: {
      en: { title: 'Layer 2 Managed DIN Rail Switches', headline: 'Managed Industrial\nDIN Rail Switches', description: 'Compact Layer 2 managed switches for DIN Rail mounting in control panels. Full VLAN, QoS, and RSTP redundancy in a ruggedized form factor.', benefits: ['Compact DIN Rail form factor', 'Full VLAN & QoS management', 'Ring redundancy protocols', 'Fanless design, -40°C to +75°C'], stats: [{ value: 'L2+', label: 'Managed\nLayer 2' }, { value: '16', label: 'Ports\nmax' }, { value: 'IP40', label: 'Protection' }, { value: '3yr', label: 'Warranty' }], useCases: ['Factory floor networking', 'PLC/HMI communication', 'Building management systems', 'Water treatment plants', 'Power distribution', 'Mining operations'] },
      fr: { title: 'Switches L2 Managés DIN Rail', headline: 'Switches Managés\nDIN Rail Industriels', description: 'Switches managés Layer 2 compacts pour montage DIN Rail dans les armoires de commande. VLAN, QoS et redondance RSTP dans un format durci.', benefits: ['Format compact DIN Rail', 'Gestion VLAN & QoS complète', 'Protocoles de redondance en anneau', 'Sans ventilateur, -40°C à +75°C'], stats: [{ value: 'L2+', label: 'Managé\nLayer 2' }, { value: '16', label: 'Ports\nmax' }, { value: 'IP40', label: 'Protection' }, { value: '3 ans', label: 'Garantie' }], useCases: ['Réseau d\'atelier', 'Communication PLC/HMI', 'Gestion technique bâtiment', 'Stations de traitement d\'eau', 'Distribution électrique', 'Opérations minières'] },
      es: { title: 'Switches L2 Managed DIN Rail', headline: 'Switches Gestionados\nDIN Rail Industriales', description: 'Switches gestionados Layer 2 compactos para DIN Rail. VLAN, QoS y redundancia RSTP.', benefits: ['Formato compacto DIN Rail', 'Gestión VLAN & QoS completa', 'Protocolos de redundancia', 'Sin ventilador, -40°C a +75°C'], stats: [{ value: 'L2+', label: 'Gestionado\nLayer 2' }, { value: '16', label: 'Puertos\nmáx' }, { value: 'IP40', label: 'Protección' }, { value: '3 años', label: 'Garantía' }], useCases: ['Redes de planta', 'Comunicación PLC/HMI', 'Gestión técnica de edificios', 'Plantas de tratamiento de agua', 'Distribución eléctrica', 'Operaciones mineras'] },
      it: { title: 'Switch L2 Managed DIN Rail', headline: 'Switch Gestiti\nDIN Rail Industriali', description: 'Switch gestiti Layer 2 compatti per DIN Rail. VLAN, QoS e ridondanza RSTP.', benefits: ['Formato compatto DIN Rail', 'Gestione VLAN & QoS completa', 'Protocolli di ridondanza', 'Senza ventola, -40°C a +75°C'], stats: [{ value: 'L2+', label: 'Gestito\nLayer 2' }, { value: '16', label: 'Porte\nmax' }, { value: 'IP40', label: 'Protezione' }, { value: '3 anni', label: 'Garanzia' }], useCases: ['Reti di stabilimento', 'Comunicazione PLC/HMI', 'Gestione tecnica edifici', 'Impianti trattamento acque', 'Distribuzione elettrica', 'Operazioni minerarie'] },
      ar: { title: 'محولات L2 مُدارة DIN Rail', headline: 'محولات مُدارة\nDIN Rail صناعية', description: 'محولات مُدارة Layer 2 مدمجة لـ DIN Rail. VLAN وQoS وتكرار RSTP.', benefits: ['شكل DIN Rail مدمج', 'إدارة VLAN & QoS كاملة', 'بروتوكولات التكرار', 'بدون مروحة، -40°C إلى +75°C'], stats: [{ value: 'L2+', label: 'مُدار\nLayer 2' }, { value: '16', label: 'منافذ' }, { value: 'IP40', label: 'حماية' }, { value: '3 سنوات', label: 'ضمان' }], useCases: ['شبكات المصانع', 'اتصالات PLC/HMI', 'إدارة المباني', 'محطات معالجة المياه', 'توزيع الكهرباء', 'عمليات التعدين'] },
      ru: { title: 'Коммутаторы L2 Managed DIN Rail', headline: 'Управляемые коммутаторы\nDIN Rail промышленные', description: 'Компактные управляемые коммутаторы Layer 2 для DIN-рейки. VLAN, QoS и резервирование RSTP.', benefits: ['Компактный формат DIN Rail', 'Полное управление VLAN & QoS', 'Протоколы резервирования', 'Безвентиляторный, -40°C до +75°C'], stats: [{ value: 'L2+', label: 'Управляемый\nLayer 2' }, { value: '16', label: 'Портов' }, { value: 'IP40', label: 'Защита' }, { value: '3 года', label: 'Гарантия' }], useCases: ['Сети производственных цехов', 'Связь PLC/HMI', 'Управление зданиями', 'Водоочистные сооружения', 'Электрораспределение', 'Горные работы'] },
    },
    faqs: [],
  },
  'poe': {
    layer: 'poe',
    seo: { title: 'Industrial PoE Ethernet Switches | TSF Technology', description: 'Industrial PoE switches IEEE 802.3af/at. Power IP cameras, sensors and Wi-Fi access points over Ethernet.' },
    bannerImage: '/images/products/banner-poe.jpg',
    landing: {
      en: { title: 'Industrial PoE Switches', headline: 'Industrial PoE\nEthernet Switches', description: 'Power and connect your IP devices with a single cable. IEEE 802.3af/at compliant PoE switches for IP cameras, sensors, access points and VoIP phones in harsh environments.', benefits: ['IEEE 802.3af/at PoE+ up to 30W/port', 'Power + data on single cable', 'Total PoE budget up to 240W', 'Auto-detect PD and power management'], stats: [{ value: 'PoE+', label: 'IEEE\n802.3at' }, { value: '30W', label: 'Per port\nmax' }, { value: '240W', label: 'Total PoE\nbudget' }, { value: '3yr', label: 'Warranty' }], useCases: ['IP surveillance cameras', 'Wi-Fi access points', 'VoIP phones', 'IoT sensors & actuators', 'LED lighting systems', 'Building access control'] },
      fr: { title: 'Switches PoE Industriels', headline: 'Switches PoE\nEthernet Industriels', description: 'Alimentez et connectez vos équipements IP avec un seul câble. Switches PoE IEEE 802.3af/at pour caméras IP, capteurs et points d\'accès Wi-Fi en environnement sévère.', benefits: ['IEEE 802.3af/at PoE+ jusqu\'à 30W/port', 'Alimentation + données sur un câble', 'Budget PoE total jusqu\'à 240W', 'Détection automatique PD'], stats: [{ value: 'PoE+', label: 'IEEE\n802.3at' }, { value: '30W', label: 'Par port\nmax' }, { value: '240W', label: 'Budget PoE\ntotal' }, { value: '3 ans', label: 'Garantie' }], useCases: ['Caméras de vidéosurveillance IP', 'Points d\'accès Wi-Fi', 'Téléphones VoIP', 'Capteurs & actionneurs IoT', 'Éclairage LED', 'Contrôle d\'accès bâtiment'] },
      es: { title: 'Switches PoE Industriales', headline: 'Switches PoE\nEthernet Industriales', description: 'Alimente y conecte sus dispositivos IP con un solo cable. Switches PoE IEEE 802.3af/at para cámaras IP, sensores y puntos de acceso Wi-Fi.', benefits: ['IEEE 802.3af/at PoE+ hasta 30W/puerto', 'Alimentación + datos en un cable', 'Presupuesto PoE total hasta 240W', 'Detección automática PD'], stats: [{ value: 'PoE+', label: 'IEEE\n802.3at' }, { value: '30W', label: 'Por puerto\nmáx' }, { value: '240W', label: 'PoE total' }, { value: '3 años', label: 'Garantía' }], useCases: ['Cámaras de vigilancia IP', 'Puntos de acceso Wi-Fi', 'Teléfonos VoIP', 'Sensores IoT', 'Iluminación LED', 'Control de acceso'] },
      it: { title: 'Switch PoE Industriali', headline: 'Switch PoE\nEthernet Industriali', description: 'Alimenta e collega i tuoi dispositivi IP con un solo cavo. Switch PoE IEEE 802.3af/at per telecamere IP, sensori e access point Wi-Fi.', benefits: ['IEEE 802.3af/at PoE+ fino a 30W/porta', 'Alimentazione + dati su un cavo', 'Budget PoE totale fino a 240W', 'Rilevamento automatico PD'], stats: [{ value: 'PoE+', label: 'IEEE\n802.3at' }, { value: '30W', label: 'Per porta\nmax' }, { value: '240W', label: 'PoE totale' }, { value: '3 anni', label: 'Garanzia' }], useCases: ['Telecamere di sorveglianza IP', 'Access point Wi-Fi', 'Telefoni VoIP', 'Sensori IoT', 'Illuminazione LED', 'Controllo accessi'] },
      ar: { title: 'محولات PoE صناعية', headline: 'محولات PoE\nإيثرنت صناعية', description: 'قم بتزويد وتوصيل أجهزة IP بكابل واحد. محولات PoE IEEE 802.3af/at للكاميرات والمستشعرات ونقاط الوصول.', benefits: ['IEEE 802.3af/at PoE+ حتى 30W/منفذ', 'طاقة + بيانات بكابل واحد', 'ميزانية PoE حتى 240W', 'كشف تلقائي PD'], stats: [{ value: 'PoE+', label: 'IEEE\n802.3at' }, { value: '30W', label: 'لكل منفذ' }, { value: '240W', label: 'PoE إجمالي' }, { value: '3 سنوات', label: 'ضمان' }], useCases: ['كاميرات مراقبة IP', 'نقاط وصول Wi-Fi', 'هواتف VoIP', 'مستشعرات IoT', 'إضاءة LED', 'التحكم في الوصول'] },
      ru: { title: 'Промышленные PoE коммутаторы', headline: 'Промышленные PoE\nEthernet коммутаторы', description: 'Питание и подключение IP-устройств одним кабелем. PoE-коммутаторы IEEE 802.3af/at для IP-камер, датчиков и точек доступа.', benefits: ['IEEE 802.3af/at PoE+ до 30W/порт', 'Питание + данные по одному кабелю', 'Общий бюджет PoE до 240W', 'Автоопределение PD'], stats: [{ value: 'PoE+', label: 'IEEE\n802.3at' }, { value: '30W', label: 'На порт\nмакс' }, { value: '240W', label: 'PoE\nитого' }, { value: '3 года', label: 'Гарантия' }], useCases: ['IP-камеры видеонаблюдения', 'Точки доступа Wi-Fi', 'VoIP-телефоны', 'IoT-датчики', 'LED-освещение', 'Контроль доступа'] },
    },
    faqs: [
      { question: { fr: 'Quelle est la différence entre PoE et PoE+ ?', en: 'What is the difference between PoE and PoE+?', es: '¿Cuál es la diferencia entre PoE y PoE+?', it: 'Qual è la differenza tra PoE e PoE+?', ar: 'ما الفرق بين PoE وPoE+؟', ru: 'В чём разница между PoE и PoE+?' }, answer: { fr: 'PoE (802.3af) fournit jusqu\'à 15.4W par port. PoE+ (802.3at) monte jusqu\'à 30W par port, suffisant pour les caméras PTZ et points d\'accès Wi-Fi 6.', en: 'PoE (802.3af) provides up to 15.4W per port. PoE+ (802.3at) delivers up to 30W per port, sufficient for PTZ cameras and Wi-Fi 6 access points.', es: 'PoE (802.3af) proporciona hasta 15.4W por puerto. PoE+ (802.3at) entrega hasta 30W por puerto, suficiente para cámaras PTZ y puntos de acceso Wi-Fi 6.', it: 'PoE (802.3af) fornisce fino a 15.4W per porta. PoE+ (802.3at) eroga fino a 30W per porta, sufficiente per telecamere PTZ e access point Wi-Fi 6.', ar: 'يوفر PoE (802.3af) حتى 15.4W لكل منفذ. يوفر PoE+ (802.3at) حتى 30W لكل منفذ، كافٍ لكاميرات PTZ ونقاط وصول Wi-Fi 6.', ru: 'PoE (802.3af) обеспечивает до 15.4W на порт. PoE+ (802.3at) — до 30W на порт, достаточно для PTZ-камер и точек доступа Wi-Fi 6.' } },
    ],
  },
  'tsn-ptp': {
    layer: 'tsn-ptp',
    seo: { title: 'TSN & PTP IEEE 1588 Industrial Switches | TSF Technology', description: 'TSN real-time switches and PTP IEEE 1588. Deterministic latency < 1 microsecond for Industry 4.0 and automation.' },
    bannerImage: '/images/products/banner-tsn-ptp.jpg',
    landing: {
      en: { title: 'TSN & PTP IEEE 1588 Switches', headline: 'TSN Time-Sensitive\nNetworking Switches', description: 'Real-time deterministic Ethernet switches with Time-Sensitive Networking (TSN) and PTP IEEE 1588 synchronization. Sub-microsecond latency for Industry 4.0 critical applications.', benefits: ['TSN IEEE 802.1 compliant', 'PTP IEEE 1588v2 synchronization', 'Deterministic latency < 1µs', 'Converged IT/OT networking'], stats: [{ value: '<1µs', label: 'Deterministic\nlatency' }, { value: 'TSN', label: 'IEEE 802.1\ncompliant' }, { value: 'PTP', label: 'IEEE 1588v2\nsync' }, { value: '3yr', label: 'Warranty' }], useCases: ['Industry 4.0 real-time control', 'Robotic cell networking', 'Motion control systems', 'Audio/Video broadcasting', 'Automotive manufacturing', 'Semiconductor fabrication'] },
      fr: { title: 'Switches TSN & PTP IEEE 1588', headline: 'Switches TSN\nTemps-Réel Industriels', description: 'Switches Ethernet déterministes temps-réel avec TSN (Time-Sensitive Networking) et synchronisation PTP IEEE 1588. Latence sub-microseconde pour applications critiques Industrie 4.0.', benefits: ['Conforme TSN IEEE 802.1', 'Synchronisation PTP IEEE 1588v2', 'Latence déterministe < 1µs', 'Réseau IT/OT convergé'], stats: [{ value: '<1µs', label: 'Latence\ndéterministe' }, { value: 'TSN', label: 'IEEE 802.1\nconforme' }, { value: 'PTP', label: 'IEEE 1588v2\nsync' }, { value: '3 ans', label: 'Garantie' }], useCases: ['Contrôle temps-réel Industrie 4.0', 'Réseau cellules robotiques', 'Systèmes motion control', 'Broadcast audio/vidéo', 'Fabrication automobile', 'Fabrication semi-conducteurs'] },
      es: { title: 'Switches TSN & PTP IEEE 1588', headline: 'Switches TSN\nTiempo Real Industriales', description: 'Switches Ethernet determinísticos con TSN y sincronización PTP IEEE 1588. Latencia sub-microsegundo para Industria 4.0.', benefits: ['TSN IEEE 802.1 compatible', 'Sincronización PTP IEEE 1588v2', 'Latencia determinística < 1µs', 'Red IT/OT convergente'], stats: [{ value: '<1µs', label: 'Latencia' }, { value: 'TSN', label: 'IEEE 802.1' }, { value: 'PTP', label: 'IEEE 1588v2' }, { value: '3 años', label: 'Garantía' }], useCases: ['Control tiempo real Industria 4.0', 'Redes de celdas robóticas', 'Sistemas motion control', 'Broadcast audio/video', 'Fabricación automotriz', 'Fabricación semiconductores'] },
      it: { title: 'Switch TSN & PTP IEEE 1588', headline: 'Switch TSN\nTempo Reale Industriali', description: 'Switch Ethernet deterministici con TSN e sincronizzazione PTP IEEE 1588. Latenza sub-microsecondo per Industria 4.0.', benefits: ['TSN IEEE 802.1 conforme', 'Sincronizzazione PTP IEEE 1588v2', 'Latenza deterministica < 1µs', 'Rete IT/OT convergente'], stats: [{ value: '<1µs', label: 'Latenza' }, { value: 'TSN', label: 'IEEE 802.1' }, { value: 'PTP', label: 'IEEE 1588v2' }, { value: '3 anni', label: 'Garanzia' }], useCases: ['Controllo tempo reale Industria 4.0', 'Reti celle robotiche', 'Sistemi motion control', 'Broadcast audio/video', 'Produzione automobilistica', 'Fabbricazione semiconduttori'] },
      ar: { title: 'محولات TSN & PTP IEEE 1588', headline: 'محولات TSN\nالوقت الحقيقي الصناعية', description: 'محولات إيثرنت حتمية مع TSN ومزامنة PTP IEEE 1588. زمن استجابة أقل من ميكروثانية للصناعة 4.0.', benefits: ['متوافق مع TSN IEEE 802.1', 'مزامنة PTP IEEE 1588v2', 'زمن استجابة حتمي < 1µs', 'شبكة IT/OT موحدة'], stats: [{ value: '<1µs', label: 'زمن استجابة' }, { value: 'TSN', label: 'IEEE 802.1' }, { value: 'PTP', label: 'IEEE 1588v2' }, { value: '3 سنوات', label: 'ضمان' }], useCases: ['التحكم بالوقت الحقيقي', 'شبكات الخلايا الروبوتية', 'أنظمة التحكم بالحركة', 'البث الصوتي/المرئي', 'تصنيع السيارات', 'تصنيع أشباه الموصلات'] },
      ru: { title: 'Коммутаторы TSN & PTP IEEE 1588', headline: 'Коммутаторы TSN\nреального времени', description: 'Детерминистические Ethernet-коммутаторы с TSN и синхронизацией PTP IEEE 1588. Задержка менее микросекунды для Индустрии 4.0.', benefits: ['Совместимость с TSN IEEE 802.1', 'Синхронизация PTP IEEE 1588v2', 'Детерминистическая задержка < 1µs', 'Конвергентная сеть IT/OT'], stats: [{ value: '<1µs', label: 'Задержка' }, { value: 'TSN', label: 'IEEE 802.1' }, { value: 'PTP', label: 'IEEE 1588v2' }, { value: '3 года', label: 'Гарантия' }], useCases: ['Управление реального времени', 'Сети роботизированных ячеек', 'Системы motion control', 'Аудио/видео вещание', 'Автомобилестроение', 'Производство полупроводников'] },
    },
    faqs: [],
  },
  'compact': {
    layer: 'compact',
    seo: { title: 'Compact Industrial Ethernet Switches | TSF Technology', description: 'Ultra-compact industrial Ethernet switches. PROFINET, EtherCAT. Designed for tight spaces and edge computing.' },
    bannerImage: '/images/products/banner-compact.jpg',
    landing: {
      en: { title: 'Compact Industrial Switches', headline: 'Ultra-Compact\nIndustrial Switches', description: 'Space-saving industrial Ethernet switches designed for tight installations. PROFINET and EtherCAT ready, perfect for edge computing and embedded applications.', benefits: ['Ultra-compact form factor', 'PROFINET & EtherCAT support', 'Fanless, vibration-resistant', 'Wide power input range'], stats: [{ value: '5-8', label: 'Ports\nrange' }, { value: 'IP40', label: 'Protection\nrating' }, { value: '-40°C', label: 'Min\ntemp' }, { value: '3yr', label: 'Warranty' }], useCases: ['Edge computing nodes', 'Embedded machine networking', 'Compact control cabinets', 'AGV & mobile robots', 'Kiosk & POS systems', 'Small sensor networks'] },
      fr: { title: 'Switches Compacts Industriels', headline: 'Switches Industriels\nUltra-Compacts', description: 'Switches Ethernet industriels compacts pour installations exiguës. Compatibles PROFINET et EtherCAT, parfaits pour l\'edge computing et les applications embarquées.', benefits: ['Format ultra-compact', 'Support PROFINET & EtherCAT', 'Sans ventilateur, anti-vibrations', 'Large plage d\'alimentation'], stats: [{ value: '5-8', label: 'Plage\nde ports' }, { value: 'IP40', label: 'Indice de\nprotection' }, { value: '-40°C', label: 'Temp\nmin' }, { value: '3 ans', label: 'Garantie' }], useCases: ['Nœuds edge computing', 'Réseau machine embarqué', 'Armoires de commande compactes', 'AGV & robots mobiles', 'Systèmes kiosque & POS', 'Petits réseaux de capteurs'] },
      es: { title: 'Switches Compactos Industriales', headline: 'Switches Industriales\nUltra-Compactos', description: 'Switches Ethernet industriales compactos para instalaciones reducidas. Compatibles PROFINET y EtherCAT.', benefits: ['Formato ultra-compacto', 'Soporte PROFINET & EtherCAT', 'Sin ventilador, resistente a vibraciones', 'Amplio rango de alimentación'], stats: [{ value: '5-8', label: 'Rango\nde puertos' }, { value: 'IP40', label: 'Protección' }, { value: '-40°C', label: 'Temp\nmín' }, { value: '3 años', label: 'Garantía' }], useCases: ['Nodos edge computing', 'Red de máquinas embebidas', 'Armarios compactos', 'AGV & robots móviles', 'Sistemas kiosco & POS', 'Pequeñas redes de sensores'] },
      it: { title: 'Switch Compatti Industriali', headline: 'Switch Industriali\nUltra-Compatti', description: 'Switch Ethernet industriali compatti per installazioni ridotte. Compatibili PROFINET e EtherCAT.', benefits: ['Formato ultra-compatto', 'Supporto PROFINET & EtherCAT', 'Senza ventola, resistente alle vibrazioni', 'Ampio range di alimentazione'], stats: [{ value: '5-8', label: 'Range\ndi porte' }, { value: 'IP40', label: 'Protezione' }, { value: '-40°C', label: 'Temp\nmin' }, { value: '3 anni', label: 'Garanzia' }], useCases: ['Nodi edge computing', 'Rete macchine embedded', 'Armadi compatti', 'AGV & robot mobili', 'Sistemi kiosk & POS', 'Piccole reti di sensori'] },
      ar: { title: 'محولات صناعية مدمجة', headline: 'محولات صناعية\nفائقة الصغر', description: 'محولات إيثرنت صناعية مدمجة للتركيبات الضيقة. متوافقة مع PROFINET وEtherCAT.', benefits: ['شكل فائق الصغر', 'دعم PROFINET & EtherCAT', 'بدون مروحة، مقاوم للاهتزاز', 'نطاق تغذية واسع'], stats: [{ value: '5-8', label: 'نطاق\nالمنافذ' }, { value: 'IP40', label: 'حماية' }, { value: '-40°C', label: 'حرارة\nدنيا' }, { value: '3 سنوات', label: 'ضمان' }], useCases: ['عقد edge computing', 'شبكات الآلات المدمجة', 'خزائن تحكم مدمجة', 'AGV والروبوتات', 'أنظمة الأكشاك', 'شبكات مستشعرات صغيرة'] },
      ru: { title: 'Компактные промышленные коммутаторы', headline: 'Ультракомпактные\nпромышленные коммутаторы', description: 'Компактные промышленные Ethernet-коммутаторы для ограниченного пространства. Поддержка PROFINET и EtherCAT.', benefits: ['Ультракомпактный формат', 'Поддержка PROFINET & EtherCAT', 'Безвентиляторный, виброустойчивый', 'Широкий диапазон питания'], stats: [{ value: '5-8', label: 'Диапазон\nпортов' }, { value: 'IP40', label: 'Защита' }, { value: '-40°C', label: 'Мин\nтемп' }, { value: '3 года', label: 'Гарантия' }], useCases: ['Узлы edge computing', 'Сети встроенных машин', 'Компактные шкафы управления', 'AGV и мобильные роботы', 'Киоски и POS-системы', 'Небольшие сенсорные сети'] },
    },
    faqs: [],
  },
  'unmanaged-rack': {
    layer: 'layer-2-unmanaged',
    seo: { title: 'Unmanaged Industrial Rack Switches | TSF Technology', description: 'Plug-and-play unmanaged industrial Ethernet switches for 19" rack. Reliable, IP40, quick installation.' },
    bannerImage: '/images/products/banner-unmanaged-rack.jpg',
    landing: {
      en: { title: 'Unmanaged Rack 19" Switches', headline: 'Plug & Play\nRack Mount Switches', description: 'Zero-configuration industrial Ethernet switches for 19" rack mounting. Plug in and go — no software setup needed. Ideal for simple, reliable industrial networks.', benefits: ['True plug-and-play operation', '19" rack mount, 1U form factor', 'No configuration required', 'Store-and-forward switching'], stats: [{ value: '0', label: 'Config\nneeded' }, { value: '24', label: 'Ports\nmax' }, { value: 'IP40', label: 'Protection' }, { value: '3yr', label: 'Warranty' }], useCases: ['Simple SCADA networks', 'Surveillance camera networks', 'Office/industrial hybrid', 'Quick deployment sites', 'Backup/redundant paths', 'Lab & testing environments'] },
      fr: { title: 'Switches Non-Managés Rack', headline: 'Switches Plug & Play\nRack 19"', description: 'Switches Ethernet industriels sans configuration pour montage rack 19". Branchez et c\'est prêt — aucune configuration logicielle nécessaire.', benefits: ['Fonctionnement plug-and-play', 'Montage rack 19", format 1U', 'Aucune configuration requise', 'Commutation store-and-forward'], stats: [{ value: '0', label: 'Config\nnécessaire' }, { value: '24', label: 'Ports\nmax' }, { value: 'IP40', label: 'Protection' }, { value: '3 ans', label: 'Garantie' }], useCases: ['Réseaux SCADA simples', 'Réseaux caméras surveillance', 'Hybrid bureau/industriel', 'Sites déploiement rapide', 'Chemins backup/redondants', 'Environnements labo & test'] },
      es: { title: 'Switches No Gestionados Rack', headline: 'Switches Plug & Play\nRack 19"', description: 'Switches Ethernet industriales sin configuración para rack 19". Conecte y listo.', benefits: ['Operación plug-and-play', 'Montaje rack 19", formato 1U', 'Sin configuración', 'Conmutación store-and-forward'], stats: [{ value: '0', label: 'Config' }, { value: '24', label: 'Puertos\nmáx' }, { value: 'IP40', label: 'Protección' }, { value: '3 años', label: 'Garantía' }], useCases: ['Redes SCADA simples', 'Redes de cámaras', 'Oficina/industrial híbrido', 'Despliegue rápido', 'Rutas de respaldo', 'Entornos de laboratorio'] },
      it: { title: 'Switch Non Gestiti Rack', headline: 'Switch Plug & Play\nRack 19"', description: 'Switch Ethernet industriali senza configurazione per rack 19". Collega e funziona.', benefits: ['Operazione plug-and-play', 'Montaggio rack 19", formato 1U', 'Nessuna configurazione', 'Commutazione store-and-forward'], stats: [{ value: '0', label: 'Config' }, { value: '24', label: 'Porte\nmax' }, { value: 'IP40', label: 'Protezione' }, { value: '3 anni', label: 'Garanzia' }], useCases: ['Reti SCADA semplici', 'Reti telecamere', 'Ufficio/industriale ibrido', 'Distribuzione rapida', 'Percorsi di backup', 'Ambienti lab & test'] },
      ar: { title: 'محولات غير مُدارة Rack', headline: 'محولات Plug & Play\nRack 19"', description: 'محولات إيثرنت صناعية بدون إعداد لـ Rack 19". وصّل وشغّل.', benefits: ['تشغيل plug-and-play', 'تركيب Rack 19"', 'بدون إعداد', 'تحويل store-and-forward'], stats: [{ value: '0', label: 'إعداد' }, { value: '24', label: 'منافذ' }, { value: 'IP40', label: 'حماية' }, { value: '3 سنوات', label: 'ضمان' }], useCases: ['شبكات SCADA بسيطة', 'شبكات كاميرات', 'هجين مكتب/صناعي', 'نشر سريع', 'مسارات احتياطية', 'بيئات مختبرية'] },
      ru: { title: 'Неуправляемые коммутаторы Rack', headline: 'Plug & Play\nRack 19" коммутаторы', description: 'Промышленные Ethernet-коммутаторы без настройки для 19" стойки. Подключи и работай.', benefits: ['Работа plug-and-play', 'Монтаж в 19" стойку, 1U', 'Без настройки', 'Коммутация store-and-forward'], stats: [{ value: '0', label: 'Настройка' }, { value: '24', label: 'Портов' }, { value: 'IP40', label: 'Защита' }, { value: '3 года', label: 'Гарантия' }], useCases: ['Простые сети SCADA', 'Сети камер наблюдения', 'Офис/производство гибрид', 'Быстрое развёртывание', 'Резервные маршруты', 'Лабораторные среды'] },
    },
    faqs: [],
  },
  'unmanaged-din-rail': {
    layer: 'layer-2-unmanaged',
    seo: { title: 'Unmanaged Industrial DIN Rail Switches | TSF Technology', description: 'Plug-and-play unmanaged industrial Ethernet switches for DIN Rail. Compact, reliable, IP40.' },
    bannerImage: '/images/products/banner-unmanaged-din-rail.jpg',
    landing: {
      en: { title: 'Unmanaged DIN Rail Switches', headline: 'Plug & Play\nDIN Rail Switches', description: 'Simple, reliable industrial Ethernet switches for DIN Rail mounting. Zero configuration — just connect cables and power up.', benefits: ['Plug-and-play, zero config', 'Compact DIN Rail mounting', 'Fanless, -40°C to +75°C', 'LED port status indicators'], stats: [{ value: '0', label: 'Config\nneeded' }, { value: '8', label: 'Ports\nmax' }, { value: 'IP40', label: 'Protection' }, { value: '3yr', label: 'Warranty' }], useCases: ['Small industrial networks', 'Field device connectivity', 'Simple PLC networks', 'Remote I/O expansion', 'Sensor aggregation', 'Quick temporary setups'] },
      fr: { title: 'Switches Non-Managés DIN Rail', headline: 'Switches Plug & Play\nDIN Rail', description: 'Switches Ethernet industriels simples et fiables pour montage DIN Rail. Zéro configuration — branchez les câbles et allumez.', benefits: ['Plug-and-play, zéro config', 'Montage DIN Rail compact', 'Sans ventilateur, -40°C à +75°C', 'Indicateurs LED par port'], stats: [{ value: '0', label: 'Config\nnécessaire' }, { value: '8', label: 'Ports\nmax' }, { value: 'IP40', label: 'Protection' }, { value: '3 ans', label: 'Garantie' }], useCases: ['Petits réseaux industriels', 'Connectivité équipements terrain', 'Réseaux PLC simples', 'Extension E/S distantes', 'Agrégation capteurs', 'Installations temporaires'] },
      es: { title: 'Switches No Gestionados DIN Rail', headline: 'Switches Plug & Play\nDIN Rail', description: 'Switches Ethernet industriales simples para DIN Rail. Sin configuración.', benefits: ['Plug-and-play', 'Montaje DIN Rail compacto', 'Sin ventilador, -40°C a +75°C', 'Indicadores LED por puerto'], stats: [{ value: '0', label: 'Config' }, { value: '8', label: 'Puertos' }, { value: 'IP40', label: 'Protección' }, { value: '3 años', label: 'Garantía' }], useCases: ['Pequeñas redes industriales', 'Conectividad de campo', 'Redes PLC simples', 'Expansión E/S remota', 'Agregación de sensores', 'Instalaciones temporales'] },
      it: { title: 'Switch Non Gestiti DIN Rail', headline: 'Switch Plug & Play\nDIN Rail', description: 'Switch Ethernet industriali semplici per DIN Rail. Nessuna configurazione.', benefits: ['Plug-and-play', 'Montaggio DIN Rail compatto', 'Senza ventola, -40°C a +75°C', 'Indicatori LED per porta'], stats: [{ value: '0', label: 'Config' }, { value: '8', label: 'Porte' }, { value: 'IP40', label: 'Protezione' }, { value: '3 anni', label: 'Garanzia' }], useCases: ['Piccole reti industriali', 'Connettività dispositivi campo', 'Reti PLC semplici', 'Espansione I/O remoto', 'Aggregazione sensori', 'Installazioni temporanee'] },
      ar: { title: 'محولات غير مُدارة DIN Rail', headline: 'محولات Plug & Play\nDIN Rail', description: 'محولات إيثرنت صناعية بسيطة لـ DIN Rail. بدون إعداد.', benefits: ['Plug-and-play', 'تركيب DIN Rail مدمج', 'بدون مروحة، -40°C إلى +75°C', 'مؤشرات LED لكل منفذ'], stats: [{ value: '0', label: 'إعداد' }, { value: '8', label: 'منافذ' }, { value: 'IP40', label: 'حماية' }, { value: '3 سنوات', label: 'ضمان' }], useCases: ['شبكات صناعية صغيرة', 'توصيل أجهزة الميدان', 'شبكات PLC بسيطة', 'توسيع I/O بعيد', 'تجميع المستشعرات', 'تركيبات مؤقتة'] },
      ru: { title: 'Неуправляемые коммутаторы DIN Rail', headline: 'Plug & Play\nDIN Rail коммутаторы', description: 'Простые промышленные Ethernet-коммутаторы для DIN-рейки. Без настройки.', benefits: ['Plug-and-play', 'Компактный DIN Rail', 'Безвентиляторный, -40°C до +75°C', 'LED-индикаторы портов'], stats: [{ value: '0', label: 'Настройка' }, { value: '8', label: 'Портов' }, { value: 'IP40', label: 'Защита' }, { value: '3 года', label: 'Гарантия' }], useCases: ['Небольшие промышленные сети', 'Подключение полевых устройств', 'Простые сети PLC', 'Расширение удалённого I/O', 'Агрегация датчиков', 'Временные установки'] },
    },
    faqs: [],
  },
};

/* ═══════ Helper ═══════ */

/**
 * Get products for a given category slug, applying the same mounting filter
 * as the category page (din-rail → mounting=din-rail, rack → mounting=rack-19).
 */
export function getProductsByCategory(category: string): Product[] {
  const config = CATEGORY_MAP[category];
  if (!config) return [];

  let products = getProductsByLayer(config.layer);

  if (category.includes('din-rail')) {
    products = products.filter((p) => p.mounting === 'din-rail');
  } else if (category.includes('rack')) {
    products = products.filter((p) => p.mounting === 'rack-19');
  }

  return products;
}
