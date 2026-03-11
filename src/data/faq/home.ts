import type { FAQ } from '@/lib/types';
import type { PageFaqMap } from './index';

const faqs: FAQ[] = [
  {
    question: {
      fr: 'Qu\'est-ce qu\'un switch Ethernet industriel et à quoi sert-il ?',
      en: 'What is an industrial Ethernet switch and what is it used for?',
      es: '¿Qué es un switch Ethernet industrial y para qué sirve?',
      it: 'Cos\'è uno switch Ethernet industriale e a cosa serve?',
      ar: 'ما هو محول إيثرنت الصناعي وما هي استخداماته؟',
      ru: 'Что такое промышленный Ethernet-коммутатор и для чего он используется?',
    },
    answer: {
      fr: 'Un switch Ethernet industriel est un équipement réseau conçu pour fonctionner dans des environnements exigeants (usines, centrales, transports). Contrairement aux switches bureautiques, il résiste aux températures extrêmes (-40°C à +75°C), aux vibrations et à la poussière (indice IP40). TSF Technology propose une gamme complète de switches industriels adaptés à chaque besoin.',
      en: 'An industrial Ethernet switch is a networking device designed to operate in harsh environments (factories, power plants, transportation). Unlike office switches, it withstands extreme temperatures (-40°C to +75°C), vibrations and dust (IP40 rated). TSF Technology offers a complete range of industrial switches suited to every need.',
      es: 'Un switch Ethernet industrial es un equipo de red diseñado para funcionar en entornos exigentes (fábricas, centrales, transporte). A diferencia de los switches de oficina, resiste temperaturas extremas (-40°C a +75°C), vibraciones y polvo (clasificación IP40). TSF Technology ofrece una gama completa de switches industriales.',
      it: 'Uno switch Ethernet industriale è un dispositivo di rete progettato per funzionare in ambienti gravosi (fabbriche, centrali, trasporti). A differenza degli switch da ufficio, resiste a temperature estreme (-40°C a +75°C), vibrazioni e polvere (grado IP40). TSF Technology offre una gamma completa di switch industriali.',
      ar: 'محول إيثرنت الصناعي هو جهاز شبكات مصمم للعمل في البيئات القاسية (المصانع، محطات الطاقة، النقل). على عكس المحولات المكتبية، يتحمل درجات حرارة متطرفة (-40 درجة مئوية إلى +75 درجة مئوية) والاهتزازات والغبار (تصنيف IP40). تقدم TSF Technology مجموعة كاملة من المحولات الصناعية.',
      ru: 'Промышленный Ethernet-коммутатор — это сетевое устройство, предназначенное для работы в жёстких условиях (заводы, электростанции, транспорт). В отличие от офисных коммутаторов, он выдерживает экстремальные температуры (от -40°C до +75°C), вибрации и пыль (степень защиты IP40). TSF Technology предлагает полную линейку промышленных коммутаторов.',
    },
  },
  {
    question: {
      fr: 'Pourquoi choisir TSF Technology comme fournisseur de switches industriels ?',
      en: 'Why choose TSF Technology as your industrial switch supplier?',
      es: '¿Por qué elegir TSF Technology como proveedor de switches industriales?',
      it: 'Perché scegliere TSF Technology come fornitore di switch industriali?',
      ar: 'لماذا تختار TSF Technology كمورد للمحولات الصناعية؟',
      ru: 'Почему стоит выбрать TSF Technology как поставщика промышленных коммутаторов?',
    },
    answer: {
      fr: 'TSF Technology est un fournisseur européen spécialisé offrant plus de 100 références de switches Ethernet industriels. Nous garantissons un support technique 24/7, des délais de livraison rapides et un excellent rapport qualité-prix. Tous nos produits sont certifiés CE et conformes aux normes industrielles internationales.',
      en: 'TSF Technology is a specialized European supplier offering over 100 references of industrial Ethernet switches. We guarantee 24/7 technical support, fast delivery times and excellent value for money. All our products are CE certified and comply with international industrial standards.',
      es: 'TSF Technology es un proveedor europeo especializado que ofrece más de 100 referencias de switches Ethernet industriales. Garantizamos soporte técnico 24/7, tiempos de entrega rápidos y excelente relación calidad-precio. Todos nuestros productos están certificados CE.',
      it: 'TSF Technology è un fornitore europeo specializzato che offre oltre 100 riferimenti di switch Ethernet industriali. Garantiamo supporto tecnico 24/7, tempi di consegna rapidi e un eccellente rapporto qualità-prezzo. Tutti i nostri prodotti sono certificati CE.',
      ar: 'TSF Technology هي مورد أوروبي متخصص يقدم أكثر من 100 مرجع من محولات إيثرنت الصناعية. نضمن دعمًا فنيًا على مدار الساعة طوال أيام الأسبوع وأوقات تسليم سريعة وقيمة ممتازة مقابل المال. جميع منتجاتنا حاصلة على شهادة CE.',
      ru: 'TSF Technology — специализированный европейский поставщик, предлагающий более 100 наименований промышленных Ethernet-коммутаторов. Мы гарантируем техническую поддержку 24/7, быстрые сроки доставки и отличное соотношение цены и качества. Вся продукция сертифицирована CE.',
    },
  },
  {
    question: {
      fr: 'Quelle est la différence entre un switch managé et non managé ?',
      en: 'What is the difference between a managed and unmanaged switch?',
      es: '¿Cuál es la diferencia entre un switch gestionado y no gestionado?',
      it: 'Qual è la differenza tra uno switch managed e unmanaged?',
      ar: 'ما الفرق بين المحول المُدار وغير المُدار؟',
      ru: 'В чём разница между управляемым и неуправляемым коммутатором?',
    },
    answer: {
      fr: 'Un switch non managé fonctionne en plug-and-play sans configuration. Un switch managé (Layer 2 ou Layer 3) offre des fonctionnalités avancées : VLAN, QoS, RSTP/ERPS pour la redondance, SNMP pour la supervision. Pour les réseaux industriels critiques, nous recommandons un switch managé. Consultez notre catalogue pour comparer les options.',
      en: 'An unmanaged switch works plug-and-play without configuration. A managed switch (Layer 2 or Layer 3) offers advanced features: VLAN, QoS, RSTP/ERPS for redundancy, SNMP for monitoring. For critical industrial networks, we recommend a managed switch. Browse our catalog to compare options.',
      es: 'Un switch no gestionado funciona plug-and-play sin configuración. Un switch gestionado (Layer 2 o Layer 3) ofrece funciones avanzadas: VLAN, QoS, RSTP/ERPS para redundancia, SNMP para supervisión. Para redes industriales críticas, recomendamos un switch gestionado.',
      it: 'Uno switch unmanaged funziona in modalità plug-and-play senza configurazione. Uno switch managed (Layer 2 o Layer 3) offre funzionalità avanzate: VLAN, QoS, RSTP/ERPS per la ridondanza, SNMP per il monitoraggio. Per le reti industriali critiche, consigliamo uno switch managed.',
      ar: 'يعمل المحول غير المُدار بنظام التوصيل والتشغيل دون تكوين. يوفر المحول المُدار (الطبقة 2 أو الطبقة 3) ميزات متقدمة: VLAN وQoS وRSTP/ERPS للتكرار وSNMP للمراقبة. للشبكات الصناعية الحرجة، نوصي بمحول مُدار.',
      ru: 'Неуправляемый коммутатор работает по принципу plug-and-play без настройки. Управляемый коммутатор (Layer 2 или Layer 3) предлагает расширенные функции: VLAN, QoS, RSTP/ERPS для резервирования, SNMP для мониторинга. Для критически важных промышленных сетей мы рекомендуем управляемый коммутатор.',
    },
  },
  {
    question: {
      fr: 'Quelles certifications ont les switches industriels TSF Technology ?',
      en: 'What certifications do TSF Technology industrial switches have?',
      es: '¿Qué certificaciones tienen los switches industriales TSF Technology?',
      it: 'Quali certificazioni hanno gli switch industriali TSF Technology?',
      ar: 'ما هي الشهادات التي تحملها محولات TSF Technology الصناعية؟',
      ru: 'Какие сертификаты имеют промышленные коммутаторы TSF Technology?',
    },
    answer: {
      fr: 'Nos switches industriels sont certifiés CE, FCC et conformes aux normes IEEE 802.3. Ils répondent aux exigences EMC industrielles (EN 61000-6-2/4) et sont testés pour les environnements sévères selon IEC 61850-3 et IEEE 1613. La protection IP40 garantit une résistance à la poussière et aux particules.',
      en: 'Our industrial switches are CE, FCC certified and comply with IEEE 802.3 standards. They meet industrial EMC requirements (EN 61000-6-2/4) and are tested for harsh environments per IEC 61850-3 and IEEE 1613. IP40 protection ensures resistance to dust and particles.',
      es: 'Nuestros switches industriales están certificados CE, FCC y cumplen con las normas IEEE 802.3. Cumplen los requisitos EMC industriales (EN 61000-6-2/4) y están probados para entornos severos según IEC 61850-3 e IEEE 1613. La protección IP40 garantiza resistencia al polvo.',
      it: 'I nostri switch industriali sono certificati CE, FCC e conformi agli standard IEEE 802.3. Soddisfano i requisiti EMC industriali (EN 61000-6-2/4) e sono testati per ambienti gravosi secondo IEC 61850-3 e IEEE 1613. La protezione IP40 garantisce resistenza a polvere e particelle.',
      ar: 'محولاتنا الصناعية حاصلة على شهادات CE وFCC ومتوافقة مع معايير IEEE 802.3. تلبي متطلبات التوافق الكهرومغناطيسي الصناعي (EN 61000-6-2/4) ومختبرة للبيئات القاسية وفقًا لـ IEC 61850-3 وIEEE 1613. حماية IP40 تضمن مقاومة الغبار.',
      ru: 'Наши промышленные коммутаторы сертифицированы CE, FCC и соответствуют стандартам IEEE 802.3. Они отвечают промышленным требованиям ЭМС (EN 61000-6-2/4) и протестированы для суровых условий по IEC 61850-3 и IEEE 1613. Защита IP40 обеспечивает устойчивость к пыли и частицам.',
    },
  },
  {
    question: {
      fr: 'Comment commander un switch industriel sur TSF Technology ?',
      en: 'How to order an industrial switch from TSF Technology?',
      es: '¿Cómo pedir un switch industrial en TSF Technology?',
      it: 'Come ordinare uno switch industriale su TSF Technology?',
      ar: 'كيف يمكن طلب محول صناعي من TSF Technology؟',
      ru: 'Как заказать промышленный коммутатор у TSF Technology?',
    },
    answer: {
      fr: 'Vous pouvez demander un devis personnalisé directement via notre page de demande de devis. Sélectionnez les produits souhaités, précisez les quantités et nous vous répondrons sous 24h avec une offre sur mesure. Pour les projets complexes, notre équipe technique peut vous accompagner dans le dimensionnement.',
      en: 'You can request a personalized quote directly through our quote request page. Select the desired products, specify quantities and we will respond within 24 hours with a tailored offer. For complex projects, our technical team can assist you with sizing.',
      es: 'Puede solicitar un presupuesto personalizado directamente a través de nuestra página de solicitud de presupuesto. Seleccione los productos deseados, especifique las cantidades y le responderemos en 24 horas con una oferta personalizada.',
      it: 'Puoi richiedere un preventivo personalizzato direttamente tramite la nostra pagina di richiesta preventivo. Seleziona i prodotti desiderati, specifica le quantità e ti risponderemo entro 24 ore con un\'offerta su misura.',
      ar: 'يمكنك طلب عرض أسعار مخصص مباشرة من خلال صفحة طلب عرض الأسعار. حدد المنتجات المطلوبة والكميات وسنرد عليك خلال 24 ساعة بعرض مخصص. للمشاريع المعقدة، يمكن لفريقنا التقني مساعدتك.',
      ru: 'Вы можете запросить персонализированное коммерческое предложение через нашу страницу запроса. Выберите нужные продукты, укажите количество, и мы ответим в течение 24 часов с индивидуальным предложением.',
    },
  },
  {
    question: {
      fr: 'Quels secteurs industriels utilisent les switches Ethernet TSF Technology ?',
      en: 'Which industrial sectors use TSF Technology Ethernet switches?',
      es: '¿Qué sectores industriales utilizan los switches Ethernet TSF Technology?',
      it: 'Quali settori industriali utilizzano gli switch Ethernet TSF Technology?',
      ar: 'ما هي القطاعات الصناعية التي تستخدم محولات إيثرنت TSF Technology؟',
      ru: 'Какие промышленные отрасли используют Ethernet-коммутаторы TSF Technology?',
    },
    answer: {
      fr: 'Nos switches équipent de nombreux secteurs : énergie et sous-stations électriques, transports ferroviaires et routiers, automatisation industrielle et Industrie 4.0, villes intelligentes (smart city), et énergies renouvelables (solaire, éolien). Découvrez nos solutions sectorielles pour en savoir plus.',
      en: 'Our switches serve numerous sectors: energy and electrical substations, rail and road transportation, industrial automation and Industry 4.0, smart cities, and renewable energy (solar, wind). Discover our industry solutions to learn more.',
      es: 'Nuestros switches equipan numerosos sectores: energía y subestaciones eléctricas, transporte ferroviario y por carretera, automatización industrial e Industria 4.0, ciudades inteligentes y energías renovables (solar, eólica).',
      it: 'I nostri switch servono numerosi settori: energia e sottostazioni elettriche, trasporti ferroviari e stradali, automazione industriale e Industria 4.0, smart city ed energie rinnovabili (solare, eolico).',
      ar: 'تخدم محولاتنا العديد من القطاعات: الطاقة والمحطات الفرعية الكهربائية، النقل بالسكك الحديدية والطرق، الأتمتة الصناعية والصناعة 4.0، المدن الذكية، والطاقات المتجددة (الشمسية، الرياح).',
      ru: 'Наши коммутаторы обслуживают множество отраслей: энергетика и электрические подстанции, железнодорожный и автомобильный транспорт, промышленная автоматизация и Индустрия 4.0, умные города и возобновляемая энергетика (солнечная, ветровая).',
    },
  },
  {
    question: {
      fr: 'TSF Technology propose-t-il un support technique pour l\'installation ?',
      en: 'Does TSF Technology offer technical support for installation?',
      es: '¿TSF Technology ofrece soporte técnico para la instalación?',
      it: 'TSF Technology offre supporto tecnico per l\'installazione?',
      ar: 'هل تقدم TSF Technology دعمًا فنيًا للتركيب؟',
      ru: 'Предоставляет ли TSF Technology техническую поддержку при установке?',
    },
    answer: {
      fr: 'Oui, TSF Technology offre un support technique 24/7 incluant l\'aide à la configuration, le dimensionnement réseau et le dépannage. Notre équipe d\'ingénieurs peut vous assister par téléphone, email ou visioconférence. Nous fournissons également une documentation technique complète et des guides d\'installation pour chaque produit.',
      en: 'Yes, TSF Technology offers 24/7 technical support including configuration assistance, network sizing and troubleshooting. Our engineering team can assist you by phone, email or video conference. We also provide comprehensive technical documentation and installation guides for each product.',
      es: 'Sí, TSF Technology ofrece soporte técnico 24/7 incluyendo asistencia en configuración, dimensionamiento de red y resolución de problemas. Nuestro equipo de ingenieros puede asistirle por teléfono, email o videoconferencia.',
      it: 'Sì, TSF Technology offre supporto tecnico 24/7 inclusa assistenza alla configurazione, dimensionamento della rete e risoluzione dei problemi. Il nostro team di ingegneri può assistervi per telefono, email o videoconferenza.',
      ar: 'نعم، تقدم TSF Technology دعمًا فنيًا على مدار الساعة طوال أيام الأسبوع يشمل المساعدة في التكوين وتحديد حجم الشبكة واستكشاف الأخطاء وإصلاحها. يمكن لفريق المهندسين لدينا مساعدتك عبر الهاتف أو البريد الإلكتروني أو مؤتمر الفيديو.',
      ru: 'Да, TSF Technology предоставляет техническую поддержку 24/7, включая помощь в настройке, проектирование сети и устранение неполадок. Наша команда инженеров может помочь вам по телефону, электронной почте или видеоконференции.',
    },
  },
];

export const homeFaqs: PageFaqMap = {
  home: faqs,
};
