import type { FAQ } from '@/lib/types';
import type { PageFaqMap } from './index';

/* ── Blog listing (3 FAQ) ────────────────────────────────────── */
const blogListing: FAQ[] = [
  {
    question: {
      fr: 'Où trouver des guides techniques sur les switches Ethernet industriels ?',
      en: 'Where to find technical guides on industrial Ethernet switches?',
      es: '¿Dónde encontrar guías técnicas sobre switches Ethernet industriales?',
      it: 'Dove trovare guide tecniche sugli switch Ethernet industriali?',
      ar: 'أين يمكن العثور على أدلة تقنية حول محولات إيثرنت الصناعية؟',
      ru: 'Где найти технические руководства по промышленным Ethernet-коммутаторам?',
    },
    answer: {
      fr: 'Le blog TSF Technology publie régulièrement des articles techniques, guides d\'achat et comparatifs sur les switches Ethernet industriels. Vous y trouverez des conseils pour choisir votre switch, comprendre les technologies TSN et PoE, et optimiser vos réseaux industriels. Tous les articles sont rédigés par nos ingénieurs réseau.',
      en: 'The TSF Technology blog regularly publishes technical articles, buying guides and comparisons on industrial Ethernet switches. You\'ll find advice on choosing your switch, understanding TSN and PoE technologies, and optimizing your industrial networks. All articles are written by our network engineers.',
      es: 'El blog de TSF Technology publica regularmente artículos técnicos, guías de compra y comparativas sobre switches Ethernet industriales. Todos los artículos están escritos por nuestros ingenieros de red.',
      it: 'Il blog di TSF Technology pubblica regolarmente articoli tecnici, guide all\'acquisto e confronti sugli switch Ethernet industriali. Tutti gli articoli sono scritti dai nostri ingegneri di rete.',
      ar: 'ينشر مدونة TSF Technology بانتظام مقالات تقنية وأدلة شراء ومقارنات حول محولات إيثرنت الصناعية. جميع المقالات مكتوبة من قبل مهندسي الشبكات لدينا.',
      ru: 'Блог TSF Technology регулярно публикует технические статьи, руководства по выбору и сравнения промышленных Ethernet-коммутаторов. Все статьи написаны нашими сетевыми инженерами.',
    },
  },
  {
    question: {
      fr: 'Quels sujets sont traités dans le blog TSF Technology ?',
      en: 'What topics are covered in the TSF Technology blog?',
      es: '¿Qué temas se tratan en el blog de TSF Technology?',
      it: 'Quali argomenti vengono trattati nel blog di TSF Technology?',
      ar: 'ما هي المواضيع التي يغطيها مدونة TSF Technology؟',
      ru: 'Какие темы освещаются в блоге TSF Technology?',
    },
    answer: {
      fr: 'Notre blog couvre des sujets variés : guides d\'achat de switches industriels, comparaisons entre technologies (TSN vs Ethernet classique, IP40 vs IP30), bonnes pratiques de déploiement réseau, tendances de l\'Industrie 4.0 et des smart cities, et analyses techniques détaillées des protocoles industriels.',
      en: 'Our blog covers various topics: industrial switch buying guides, technology comparisons (TSN vs classic Ethernet, IP40 vs IP30), network deployment best practices, Industry 4.0 and smart city trends, and detailed technical analyses of industrial protocols.',
      es: 'Nuestro blog cubre temas variados: guías de compra de switches industriales, comparaciones entre tecnologías (TSN vs Ethernet clásico, IP40 vs IP30), mejores prácticas de despliegue de red.',
      it: 'Il nostro blog copre argomenti vari: guide all\'acquisto di switch industriali, confronti tra tecnologie (TSN vs Ethernet classico, IP40 vs IP30), best practice di deployment di rete.',
      ar: 'تغطي مدونتنا مواضيع متنوعة: أدلة شراء المحولات الصناعية، مقارنات بين التقنيات (TSN مقابل إيثرنت التقليدي، IP40 مقابل IP30)، وأفضل الممارسات لنشر الشبكات.',
      ru: 'Наш блог охватывает разнообразные темы: руководства по выбору промышленных коммутаторов, сравнения технологий (TSN vs классический Ethernet, IP40 vs IP30), лучшие практики развёртывания сетей.',
    },
  },
  {
    question: {
      fr: 'Les articles du blog TSF Technology sont-ils disponibles en plusieurs langues ?',
      en: 'Are TSF Technology blog articles available in multiple languages?',
      es: '¿Los artículos del blog de TSF Technology están disponibles en varios idiomas?',
      it: 'Gli articoli del blog TSF Technology sono disponibili in più lingue?',
      ar: 'هل مقالات مدونة TSF Technology متوفرة بعدة لغات؟',
      ru: 'Доступны ли статьи блога TSF Technology на нескольких языках?',
    },
    answer: {
      fr: 'Oui, tous nos articles et guides techniques sont disponibles en français, anglais, espagnol, italien, arabe et russe. Cette approche multilingue permet à nos clients internationaux d\'accéder à des contenus techniques de qualité dans leur langue maternelle.',
      en: 'Yes, all our articles and technical guides are available in French, English, Spanish, Italian, Arabic and Russian. This multilingual approach allows our international customers to access quality technical content in their native language.',
      es: 'Sí, todos nuestros artículos y guías técnicas están disponibles en francés, inglés, español, italiano, árabe y ruso. Este enfoque multilingüe permite a nuestros clientes internacionales acceder a contenidos técnicos de calidad en su idioma nativo.',
      it: 'Sì, tutti i nostri articoli e guide tecniche sono disponibili in francese, inglese, spagnolo, italiano, arabo e russo. Questo approccio multilingue consente ai nostri clienti internazionali di accedere a contenuti tecnici di qualità nella loro lingua madre.',
      ar: 'نعم، جميع مقالاتنا وأدلتنا التقنية متوفرة بالفرنسية والإنجليزية والإسبانية والإيطالية والعربية والروسية. يتيح هذا النهج متعدد اللغات لعملائنا الدوليين الوصول إلى محتوى تقني عالي الجودة بلغتهم الأم.',
      ru: 'Да, все наши статьи и технические руководства доступны на французском, английском, испанском, итальянском, арабском и русском языках. Этот многоязычный подход позволяет нашим международным клиентам получать качественный технический контент на родном языке.',
    },
  },
];

/* ── Article: Comment choisir un switch (3 FAQ) ──────────────── */
const articleChoisirSwitch: FAQ[] = [
  {
    question: {
      fr: 'Quels critères pour choisir un switch Ethernet industriel ?',
      en: 'What criteria for choosing an industrial Ethernet switch?',
      es: '¿Qué criterios para elegir un switch Ethernet industrial?',
      it: 'Quali criteri per scegliere uno switch Ethernet industriale?',
      ar: 'ما هي معايير اختيار محول إيثرنت صناعي؟',
      ru: 'Какие критерии выбора промышленного Ethernet-коммутатора?',
    },
    answer: {
      fr: 'Les critères principaux sont : le nombre et type de ports (cuivre, fibre, PoE), le niveau de management (non managé, L2, L3), la plage de température, le format de montage (DIN-Rail, rack), les protocoles de redondance supportés, et les certifications requises pour votre secteur. Notre guide complet détaille chaque critère.',
      en: 'The main criteria are: number and type of ports (copper, fiber, PoE), management level (unmanaged, L2, L3), temperature range, mounting format (DIN-Rail, rack), supported redundancy protocols, and certifications required for your sector.',
      es: 'Los criterios principales son: número y tipo de puertos (cobre, fibra, PoE), nivel de gestión (no gestionado, L2, L3), rango de temperatura, formato de montaje (DIN-Rail, rack) y certificaciones requeridas.',
      it: 'I criteri principali sono: numero e tipo di porte (rame, fibra, PoE), livello di management (unmanaged, L2, L3), range di temperatura, formato di montaggio (DIN-Rail, rack) e certificazioni richieste.',
      ar: 'المعايير الرئيسية هي: عدد ونوع المنافذ (نحاس، ألياف، PoE)، مستوى الإدارة (غير مُدار، L2، L3)، نطاق الحرارة، شكل التركيب (DIN-Rail، رف)، والشهادات المطلوبة.',
      ru: 'Основные критерии: количество и тип портов (медь, оптика, PoE), уровень управления (неуправляемый, L2, L3), температурный диапазон, формат монтажа (DIN-Rail, стойка) и требуемые сертификаты.',
    },
  },
  {
    question: {
      fr: 'Switch DIN-Rail ou Rack : lequel choisir pour mon installation ?',
      en: 'DIN-Rail or Rack switch: which one to choose for my installation?',
      es: '¿Switch DIN-Rail o Rack: cuál elegir para mi instalación?',
      it: 'Switch DIN-Rail o Rack: quale scegliere per la mia installazione?',
      ar: 'محول DIN-Rail أو Rack: أيهما أختار لمنشأتي؟',
      ru: 'Коммутатор DIN-Rail или Rack: какой выбрать для моей установки?',
    },
    answer: {
      fr: 'Le switch DIN-Rail s\'installe dans les armoires industrielles et convient aux déploiements terrain (usines, sous-stations, cabinets techniques). Le switch Rack s\'intègre dans les baies 19" des salles serveurs et centres de données. Choisissez DIN-Rail pour les environnements terrain et Rack pour les salles techniques centralisées.',
      en: 'DIN-Rail switches install in industrial cabinets and suit field deployments (factories, substations, technical cabinets). Rack switches integrate into 19" server room bays and data centers. Choose DIN-Rail for field environments and Rack for centralized technical rooms.',
      es: 'El switch DIN-Rail se instala en armarios industriales y es adecuado para despliegues en campo. El switch Rack se integra en bahías de 19". Elija DIN-Rail para entornos de campo y Rack para salas técnicas centralizadas.',
      it: 'Lo switch DIN-Rail si installa negli armadi industriali ed è adatto ai deployment sul campo. Lo switch Rack si integra nei bay 19". Scegli DIN-Rail per ambienti sul campo e Rack per sale tecniche centralizzate.',
      ar: 'يُركب محول DIN-Rail في الخزائن الصناعية ويناسب النشر الميداني. يندمج محول Rack في حوامل 19 بوصة. اختر DIN-Rail للبيئات الميدانية وRack لغرف التقنية المركزية.',
      ru: 'Коммутаторы DIN-Rail монтируются в промышленных шкафах и подходят для полевых развёртываний. Стоечные коммутаторы устанавливаются в 19-дюймовые стойки серверных и ЦОД. Выбирайте DIN-Rail для полевых условий и Rack для централизованных техпомещений.',
    },
  },
  {
    question: {
      fr: 'Faut-il un switch Layer 2 ou Layer 3 pour un réseau industriel ?',
      en: 'Do I need a Layer 2 or Layer 3 switch for an industrial network?',
      es: '¿Necesito un switch Layer 2 o Layer 3 para una red industrial?',
      it: 'Serve uno switch Layer 2 o Layer 3 per una rete industriale?',
      ar: 'هل أحتاج محول Layer 2 أو Layer 3 لشبكة صناعية؟',
      ru: 'Нужен ли коммутатор Layer 2 или Layer 3 для промышленной сети?',
    },
    answer: {
      fr: 'Un switch Layer 2 suffit pour la plupart des réseaux industriels avec segmentation VLAN et redondance. Un switch Layer 3 est nécessaire quand vous devez router entre plusieurs sous-réseaux (routage inter-VLAN), gérer des topologies multi-sites avec OSPF, ou assurer une redondance de passerelle avec VRRP.',
      en: 'A Layer 2 switch suffices for most industrial networks with VLAN segmentation and redundancy. A Layer 3 switch is needed when routing between multiple subnets (inter-VLAN routing), managing multi-site topologies with OSPF, or ensuring gateway redundancy with VRRP.',
      es: 'Un switch Layer 2 es suficiente para la mayoría de redes industriales con segmentación VLAN. Un switch Layer 3 es necesario para enrutamiento inter-VLAN, gestión multi-sitio con OSPF o redundancia de puerta de enlace con VRRP.',
      it: 'Uno switch Layer 2 è sufficiente per la maggior parte delle reti industriali con segmentazione VLAN. Uno switch Layer 3 è necessario per il routing inter-VLAN, gestione multi-sito con OSPF o ridondanza gateway con VRRP.',
      ar: 'محول Layer 2 كافٍ لمعظم الشبكات الصناعية مع تقسيم VLAN. محول Layer 3 ضروري عند التوجيه بين شبكات فرعية متعددة أو إدارة طوبولوجيات متعددة المواقع مع OSPF.',
      ru: 'Коммутатора Layer 2 достаточно для большинства промышленных сетей с сегментацией VLAN. Коммутатор Layer 3 необходим для маршрутизации между подсетями, управления многосайтовыми топологиями с OSPF или резервирования шлюза с VRRP.',
    },
  },
];

/* ── Article: TSN & Industrie 4.0 (3 FAQ) ────────────────────── */
const articleTsn: FAQ[] = [
  {
    question: {
      fr: 'Le TSN remplace-t-il les bus de terrain industriels (Profibus, CAN) ?',
      en: 'Does TSN replace industrial fieldbuses (Profibus, CAN)?',
      es: '¿El TSN reemplaza los buses de campo industriales (Profibus, CAN)?',
      it: 'Il TSN sostituisce i bus di campo industriali (Profibus, CAN)?',
      ar: 'هل يحل TSN محل حافلات الميدان الصناعية (Profibus، CAN)؟',
      ru: 'Заменяет ли TSN промышленные полевые шины (Profibus, CAN)?',
    },
    answer: {
      fr: 'Le TSN ne remplace pas directement les bus de terrain existants mais offre une alternative Ethernet standard pour les nouveaux déploiements. Il unifie les communications IT et OT sur un seul réseau Ethernet avec des garanties temps réel. La transition est progressive : les passerelles permettent l\'interopérabilité avec les bus legacy.',
      en: 'TSN doesn\'t directly replace existing fieldbuses but offers a standard Ethernet alternative for new deployments. It unifies IT and OT communications on a single Ethernet network with real-time guarantees. The transition is gradual: gateways enable interoperability with legacy buses.',
      es: 'TSN no reemplaza directamente los buses de campo existentes, pero ofrece una alternativa Ethernet estándar para nuevos despliegues. Unifica las comunicaciones IT y OT en una sola red Ethernet con garantías de tiempo real.',
      it: 'Il TSN non sostituisce direttamente i bus di campo esistenti ma offre un\'alternativa Ethernet standard per i nuovi deployment. Unifica le comunicazioni IT e OT su un\'unica rete Ethernet con garanzie real-time.',
      ar: 'لا يحل TSN محل حافلات الميدان الحالية مباشرة ولكنه يقدم بديلاً إيثرنت قياسيًا للنشرات الجديدة. يوحد اتصالات IT وOT على شبكة إيثرنت واحدة مع ضمانات الوقت الفعلي.',
      ru: 'TSN не заменяет напрямую существующие полевые шины, но предлагает стандартную Ethernet-альтернативу для новых развёртываний. Он объединяет коммуникации IT и OT в единой сети Ethernet с гарантиями реального времени.',
    },
  },
  {
    question: {
      fr: 'Quels standards IEEE composent le TSN ?',
      en: 'Which IEEE standards make up TSN?',
      es: '¿Qué estándares IEEE componen el TSN?',
      it: 'Quali standard IEEE compongono il TSN?',
      ar: 'ما هي معايير IEEE التي يتكون منها TSN؟',
      ru: 'Какие стандарты IEEE составляют TSN?',
    },
    answer: {
      fr: 'Le TSN regroupe plusieurs standards IEEE 802.1 : Qbv (planification temporelle), Qbu (préemption de trames), AS (synchronisation horaire PTP), CB (redondance de trames) et Qci (filtrage et politique). Ensemble, ils garantissent une communication Ethernet déterministe avec des latences prévisibles.',
      en: 'TSN encompasses several IEEE 802.1 standards: Qbv (time-aware scheduling), Qbu (frame preemption), AS (PTP time synchronization), CB (frame redundancy) and Qci (filtering and policing). Together they guarantee deterministic Ethernet communication with predictable latencies.',
      es: 'TSN agrupa varios estándares IEEE 802.1: Qbv (planificación temporal), Qbu (preempción de tramas), AS (sincronización horaria PTP), CB (redundancia de tramas) y Qci (filtrado y políticas).',
      it: 'Il TSN raggruppa diversi standard IEEE 802.1: Qbv (schedulazione time-aware), Qbu (frame preemption), AS (sincronizzazione PTP), CB (ridondanza frame) e Qci (filtraggio e policy).',
      ar: 'يشمل TSN عدة معايير IEEE 802.1: Qbv (الجدولة الزمنية)، Qbu (استباق الإطارات)، AS (مزامنة الوقت PTP)، CB (تكرار الإطارات) وQci (التصفية والسياسات).',
      ru: 'TSN объединяет несколько стандартов IEEE 802.1: Qbv (временное планирование), Qbu (вытеснение кадров), AS (синхронизация PTP), CB (резервирование кадров) и Qci (фильтрация и политики).',
    },
  },
  {
    question: {
      fr: 'Les switches TSN TSF Technology sont-ils rétrocompatibles avec l\'Ethernet standard ?',
      en: 'Are TSF Technology TSN switches backward compatible with standard Ethernet?',
      es: '¿Los switches TSN de TSF Technology son retrocompatibles con Ethernet estándar?',
      it: 'Gli switch TSN TSF Technology sono retrocompatibili con l\'Ethernet standard?',
      ar: 'هل محولات TSN من TSF Technology متوافقة مع إيثرنت القياسي؟',
      ru: 'Совместимы ли TSN-коммутаторы TSF Technology с обычным Ethernet?',
    },
    answer: {
      fr: 'Oui, les switches TSN sont entièrement rétrocompatibles avec l\'Ethernet IEEE 802.3 standard. Les ports qui ne sont pas configurés en mode TSN fonctionnent comme des ports Ethernet classiques. Cela permet une migration progressive vers le TSN sans remplacement intégral de l\'infrastructure existante.',
      en: 'Yes, TSN switches are fully backward compatible with standard IEEE 802.3 Ethernet. Ports not configured in TSN mode function as standard Ethernet ports. This enables gradual migration to TSN without complete replacement of existing infrastructure.',
      es: 'Sí, los switches TSN son totalmente retrocompatibles con Ethernet IEEE 802.3 estándar. Los puertos no configurados en modo TSN funcionan como puertos Ethernet clásicos.',
      it: 'Sì, gli switch TSN sono completamente retrocompatibili con l\'Ethernet IEEE 802.3 standard. Le porte non configurate in modalità TSN funzionano come porte Ethernet classiche.',
      ar: 'نعم، محولات TSN متوافقة تمامًا مع إيثرنت IEEE 802.3 القياسي. المنافذ غير المهيأة في وضع TSN تعمل كمنافذ إيثرنت عادية.',
      ru: 'Да, коммутаторы TSN полностью обратно совместимы со стандартным Ethernet IEEE 802.3. Порты, не настроенные в режиме TSN, работают как обычные Ethernet-порты.',
    },
  },
];

/* ── Article: IP40 vs IP30 (3 FAQ) ───────────────────────────── */
const articleIp40: FAQ[] = [
  {
    question: {
      fr: 'Quelle est la différence entre IP40 et IP30 pour un switch industriel ?',
      en: 'What is the difference between IP40 and IP30 for an industrial switch?',
      es: '¿Cuál es la diferencia entre IP40 e IP30 para un switch industrial?',
      it: 'Qual è la differenza tra IP40 e IP30 per uno switch industriale?',
      ar: 'ما الفرق بين IP40 وIP30 لمحول صناعي؟',
      ru: 'В чём разница между IP40 и IP30 для промышленного коммутатора?',
    },
    answer: {
      fr: 'IP40 protège contre les objets solides ≥ 1mm (fils, vis, poussières grossières) tandis que IP30 ne protège que contre les objets ≥ 2,5mm. Pour les environnements industriels avec présence de poussière métallique ou de particules fines, IP40 est le minimum recommandé. Tous les switches TSF Technology sont classés IP40.',
      en: 'IP40 protects against solid objects ≥ 1mm (wires, screws, coarse dust) while IP30 only protects against objects ≥ 2.5mm. For industrial environments with metallic dust or fine particles, IP40 is the recommended minimum. All TSF Technology switches are rated IP40.',
      es: 'IP40 protege contra objetos sólidos ≥ 1mm (cables, tornillos, polvo grueso) mientras que IP30 solo protege contra objetos ≥ 2,5mm. Todos los switches TSF Technology tienen clasificación IP40.',
      it: 'IP40 protegge da oggetti solidi ≥ 1mm (fili, viti, polvere grossolana) mentre IP30 protegge solo da oggetti ≥ 2,5mm. Tutti gli switch TSF Technology sono classificati IP40.',
      ar: 'يحمي IP40 من الأجسام الصلبة ≥ 1 مم (أسلاك، براغي، غبار خشن) بينما IP30 يحمي فقط من الأجسام ≥ 2.5 مم. جميع محولات TSF Technology مصنفة IP40.',
      ru: 'IP40 защищает от твёрдых предметов ≥ 1 мм (провода, винты, крупная пыль), а IP30 — только от предметов ≥ 2,5 мм. Все коммутаторы TSF Technology имеют класс защиты IP40.',
    },
  },
  {
    question: {
      fr: 'L\'indice IP40 est-il suffisant pour une utilisation en extérieur ?',
      en: 'Is IP40 rating sufficient for outdoor use?',
      es: '¿Es suficiente la clasificación IP40 para uso en exteriores?',
      it: 'La classificazione IP40 è sufficiente per l\'uso esterno?',
      ar: 'هل تصنيف IP40 كافٍ للاستخدام في الخارج؟',
      ru: 'Достаточна ли защита IP40 для наружного использования?',
    },
    answer: {
      fr: 'L\'IP40 n\'offre pas de protection contre l\'eau (second chiffre = 0). Pour une utilisation extérieure, les switches IP40 doivent être installés dans une armoire étanche (IP65 ou IP67). C\'est la pratique standard dans les déploiements terrain : le switch IP40 est protégé par l\'enceinte de l\'armoire technique extérieure.',
      en: 'IP40 offers no water protection (second digit = 0). For outdoor use, IP40 switches must be installed in a waterproof enclosure (IP65 or IP67). This is standard practice in field deployments: the IP40 switch is protected by the outdoor technical cabinet enclosure.',
      es: 'IP40 no ofrece protección contra el agua (segundo dígito = 0). Para uso exterior, los switches IP40 deben instalarse en un armario estanco (IP65 o IP67). Esta es la práctica estándar en despliegues de campo.',
      it: 'L\'IP40 non offre protezione contro l\'acqua (secondo cifra = 0). Per uso esterno, gli switch IP40 devono essere installati in un armadio stagno (IP65 o IP67). Questa è la pratica standard nei deployment sul campo.',
      ar: 'لا يوفر IP40 حماية ضد الماء (الرقم الثاني = 0). للاستخدام الخارجي، يجب تركيب محولات IP40 في خزانة مقاومة للماء (IP65 أو IP67). هذه هي الممارسة القياسية في النشر الميداني.',
      ru: 'IP40 не обеспечивает защиту от воды (вторая цифра = 0). Для наружного использования коммутаторы IP40 должны быть установлены в герметичном шкафу (IP65 или IP67). Это стандартная практика при полевых развёртываниях.',
    },
  },
  {
    question: {
      fr: 'Que signifient les chiffres dans l\'indice de protection IP ?',
      en: 'What do the digits in the IP protection rating mean?',
      es: '¿Qué significan los dígitos en la clasificación de protección IP?',
      it: 'Cosa significano le cifre nella classificazione di protezione IP?',
      ar: 'ماذا تعني الأرقام في تصنيف الحماية IP؟',
      ru: 'Что означают цифры в степени защиты IP?',
    },
    answer: {
      fr: 'Dans IP XY, le premier chiffre (X) indique la protection contre les solides (0-6, où 6 = étanche à la poussière) et le second (Y) la protection contre les liquides (0-9K, où 9K = jets haute pression à chaud). IP40 signifie donc : protection contre les objets > 1mm, aucune protection contre l\'eau.',
      en: 'In IP XY, the first digit (X) indicates protection against solids (0-6, where 6 = dust-tight) and the second (Y) against liquids (0-9K, where 9K = hot high-pressure jets). IP40 means: protection against objects > 1mm, no water protection.',
      es: 'En IP XY, el primer dígito (X) indica protección contra sólidos (0-6, donde 6 = estanco al polvo) y el segundo (Y) contra líquidos (0-9K). IP40 significa: protección contra objetos > 1mm, sin protección contra agua.',
      it: 'In IP XY, la prima cifra (X) indica la protezione contro i solidi (0-6, dove 6 = a tenuta di polvere) e la seconda (Y) contro i liquidi (0-9K). IP40 significa: protezione contro oggetti > 1mm, nessuna protezione contro l\'acqua.',
      ar: 'في IP XY، يشير الرقم الأول (X) إلى الحماية ضد المواد الصلبة (0-6، حيث 6 = محكم ضد الغبار) والثاني (Y) ضد السوائل (0-9K). IP40 يعني: حماية ضد الأجسام > 1 مم، بدون حماية ضد الماء.',
      ru: 'В IP XY первая цифра (X) означает защиту от твёрдых тел (0-6, где 6 = пыленепроницаемость), а вторая (Y) — от жидкостей (0-9K). IP40 означает: защита от предметов > 1 мм, без защиты от воды.',
    },
  },
];

export const blogFaqs: PageFaqMap = {
  blog: blogListing,
  'comment-choisir-switch-ethernet-industriel': articleChoisirSwitch,
  'tsn-revolution-industrie-4-0': articleTsn,
  'ip40-vs-ip30-protection-industrielle': articleIp40,
};
