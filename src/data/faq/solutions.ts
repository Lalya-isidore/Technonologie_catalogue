import type { FAQ } from '@/lib/types';
import type { PageFaqMap } from './index';

/* ── Énergies Renouvelables (6 FAQ) ──────────────────────────── */
const energiesRenouvelables: FAQ[] = [
  {
    question: {
      fr: 'Quel switch Ethernet choisir pour une centrale solaire photovoltaïque ?',
      en: 'Which Ethernet switch to choose for a solar photovoltaic power plant?',
      es: '¿Qué switch Ethernet elegir para una central solar fotovoltaica?',
      it: 'Quale switch Ethernet scegliere per un impianto solare fotovoltaico?',
      ar: 'أي محول إيثرنت يجب اختياره لمحطة طاقة شمسية كهروضوئية؟',
      ru: 'Какой Ethernet-коммутатор выбрать для солнечной фотоэлектрической станции?',
    },
    answer: {
      fr: 'Pour une centrale solaire, privilégiez un switch managé DIN-Rail avec une plage de température étendue (-40°C à +75°C) et des fonctionnalités de redondance RSTP/ERPS. Les modèles avec ports fibre SFP permettent de couvrir de longues distances entre les onduleurs et le centre de contrôle.',
      en: 'For a solar plant, choose a managed DIN-Rail switch with extended temperature range (-40°C to +75°C) and RSTP/ERPS redundancy features. Models with SFP fiber ports enable long-distance connections between inverters and the control center.',
      es: 'Para una central solar, elija un switch gestionado DIN-Rail con rango de temperatura extendido (-40°C a +75°C) y funciones de redundancia RSTP/ERPS. Los modelos con puertos de fibra SFP permiten largas distancias entre inversores y el centro de control.',
      it: 'Per un impianto solare, scegli uno switch managed DIN-Rail con range di temperatura esteso (-40°C a +75°C) e funzionalità di ridondanza RSTP/ERPS. I modelli con porte fibra SFP consentono lunghe distanze tra inverter e centro di controllo.',
      ar: 'لمحطة الطاقة الشمسية، اختر محولاً مُداراً DIN-Rail مع نطاق حرارة ممتد (-40 درجة مئوية إلى +75 درجة مئوية) وميزات التكرار RSTP/ERPS. النماذج ذات منافذ الألياف SFP تتيح مسافات طويلة بين المحولات العاكسة ومركز التحكم.',
      ru: 'Для солнечной станции выбирайте управляемый коммутатор DIN-Rail с расширенным температурным диапазоном (-40°C до +75°C) и функциями резервирования RSTP/ERPS. Модели с оптическими портами SFP обеспечивают подключение на большие расстояния.',
    },
  },
  {
    question: {
      fr: 'Les switches TSF Technology résistent-ils aux conditions des parcs éoliens ?',
      en: 'Can TSF Technology switches withstand wind farm conditions?',
      es: '¿Los switches TSF Technology resisten las condiciones de los parques eólicos?',
      it: 'Gli switch TSF Technology resistono alle condizioni dei parchi eolici?',
      ar: 'هل تتحمل محولات TSF Technology ظروف مزارع الرياح؟',
      ru: 'Выдерживают ли коммутаторы TSF Technology условия ветроэлектростанций?',
    },
    answer: {
      fr: 'Oui, nos switches industriels sont conçus pour résister aux vibrations, aux variations de température et aux interférences électromagnétiques courantes dans les éoliennes. La plage de fonctionnement -40°C à +75°C et la protection IP40 les rendent parfaitement adaptés aux nacelles et armoires techniques des parcs éoliens.',
      en: 'Yes, our industrial switches are designed to withstand vibrations, temperature variations and electromagnetic interference common in wind turbines. The -40°C to +75°C operating range and IP40 protection make them perfectly suited for nacelles and technical cabinets in wind farms.',
      es: 'Sí, nuestros switches industriales están diseñados para resistir vibraciones, variaciones de temperatura e interferencias electromagnéticas comunes en aerogeneradores. El rango de operación de -40°C a +75°C y protección IP40 los hace perfectamente adaptados.',
      it: 'Sì, i nostri switch industriali sono progettati per resistere a vibrazioni, variazioni di temperatura e interferenze elettromagnetiche comuni nelle turbine eoliche. Il range operativo da -40°C a +75°C e la protezione IP40 li rendono perfettamente adatti.',
      ar: 'نعم، محولاتنا الصناعية مصممة لتحمل الاهتزازات وتغيرات درجة الحرارة والتداخلات الكهرومغناطيسية الشائعة في توربينات الرياح. نطاق العمل من -40 درجة مئوية إلى +75 درجة مئوية وحماية IP40 تجعلها مناسبة تمامًا.',
      ru: 'Да, наши промышленные коммутаторы рассчитаны на вибрации, перепады температур и электромагнитные помехи, характерные для ветрогенераторов. Рабочий диапазон от -40°C до +75°C и защита IP40 делают их идеальными для гондол и технических шкафов.',
    },
  },
  {
    question: {
      fr: 'Comment assurer la redondance réseau dans une installation d\'énergie renouvelable ?',
      en: 'How to ensure network redundancy in a renewable energy installation?',
      es: '¿Cómo garantizar la redundancia de red en una instalación de energía renovable?',
      it: 'Come garantire la ridondanza di rete in un impianto di energia rinnovabile?',
      ar: 'كيف يمكن ضمان تكرار الشبكة في منشأة طاقة متجددة؟',
      ru: 'Как обеспечить резервирование сети в установке возобновляемой энергии?',
    },
    answer: {
      fr: 'Nos switches managés supportent les protocoles RSTP, MSTP et ERPS (anneau Ethernet) pour un temps de basculement inférieur à 20ms. En combinant des topologies en anneau avec des liens fibre optique, vous obtenez une infrastructure réseau hautement disponible, essentielle pour la supervision SCADA des centrales renouvelables.',
      en: 'Our managed switches support RSTP, MSTP and ERPS (Ethernet ring) protocols for failover times under 20ms. By combining ring topologies with fiber optic links, you achieve a highly available network infrastructure essential for SCADA supervision of renewable plants.',
      es: 'Nuestros switches gestionados soportan los protocolos RSTP, MSTP y ERPS (anillo Ethernet) con tiempos de conmutación inferiores a 20ms. Combinando topologías en anillo con enlaces de fibra óptica, se obtiene una infraestructura de red altamente disponible.',
      it: 'I nostri switch managed supportano i protocolli RSTP, MSTP ed ERPS (anello Ethernet) per tempi di failover inferiori a 20ms. Combinando topologie ad anello con collegamenti in fibra ottica, si ottiene un\'infrastruttura di rete altamente disponibile.',
      ar: 'تدعم محولاتنا المُدارة بروتوكولات RSTP وMSTP وERPS (حلقة إيثرنت) لأوقات تبديل أقل من 20 مللي ثانية. من خلال الجمع بين طوبولوجيات الحلقة وروابط الألياف الضوئية، تحصل على بنية تحتية شبكية عالية التوفر.',
      ru: 'Наши управляемые коммутаторы поддерживают протоколы RSTP, MSTP и ERPS (кольцо Ethernet) с временем переключения менее 20 мс. Комбинируя кольцевые топологии с оптоволоконными линиями, вы получаете высокодоступную сетевую инфраструктуру.',
    },
  },
  {
    question: {
      fr: 'Quelle est la portée maximale avec les ports fibre des switches TSF ?',
      en: 'What is the maximum range with TSF switch fiber ports?',
      es: '¿Cuál es el alcance máximo con los puertos de fibra de los switches TSF?',
      it: 'Qual è la portata massima con le porte fibra degli switch TSF?',
      ar: 'ما هو المدى الأقصى لمنافذ الألياف في محولات TSF؟',
      ru: 'Какова максимальная дальность с оптическими портами коммутаторов TSF?',
    },
    answer: {
      fr: 'Avec les modules SFP fibre monomode, nos switches peuvent atteindre des distances de 20 à 120 km selon le module utilisé. En fibre multimode, la portée typique est de 550 m à 2 km. Cela permet de connecter des équipements distants dans les vastes sites de production d\'énergie renouvelable.',
      en: 'With single-mode fiber SFP modules, our switches can reach distances of 20 to 120 km depending on the module. In multimode fiber, typical range is 550 m to 2 km. This enables connecting remote equipment across large renewable energy production sites.',
      es: 'Con módulos SFP de fibra monomodo, nuestros switches pueden alcanzar distancias de 20 a 120 km según el módulo. En fibra multimodo, el alcance típico es de 550 m a 2 km.',
      it: 'Con moduli SFP in fibra monomodale, i nostri switch possono raggiungere distanze da 20 a 120 km a seconda del modulo. In fibra multimodale, la portata tipica è da 550 m a 2 km.',
      ar: 'مع وحدات SFP للألياف أحادية الوضع، يمكن لمحولاتنا الوصول إلى مسافات تتراوح من 20 إلى 120 كم حسب الوحدة. في الألياف متعددة الأوضاع، يتراوح المدى النموذجي من 550 متر إلى 2 كم.',
      ru: 'С одномодовыми оптическими модулями SFP наши коммутаторы обеспечивают дальность от 20 до 120 км в зависимости от модуля. При многомодовом волокне типичная дальность составляет от 550 м до 2 км.',
    },
  },
  {
    question: {
      fr: 'Les switches TSF sont-ils compatibles avec les protocoles SCADA utilisés dans l\'énergie ?',
      en: 'Are TSF switches compatible with SCADA protocols used in energy?',
      es: '¿Son compatibles los switches TSF con los protocolos SCADA utilizados en energía?',
      it: 'Gli switch TSF sono compatibili con i protocolli SCADA usati nell\'energia?',
      ar: 'هل محولات TSF متوافقة مع بروتوكولات SCADA المستخدمة في الطاقة؟',
      ru: 'Совместимы ли коммутаторы TSF с протоколами SCADA, используемыми в энергетике?',
    },
    answer: {
      fr: 'Oui, nos switches sont transparents aux protocoles SCADA tels que Modbus TCP, IEC 61850, DNP3 et IEC 60870-5-104. Les switches managés offrent en plus la priorisation QoS pour garantir que les trames de contrôle critiques sont traitées en priorité sur le réseau.',
      en: 'Yes, our switches are transparent to SCADA protocols such as Modbus TCP, IEC 61850, DNP3 and IEC 60870-5-104. Managed switches additionally offer QoS prioritization to ensure critical control frames are processed with priority on the network.',
      es: 'Sí, nuestros switches son transparentes a los protocolos SCADA como Modbus TCP, IEC 61850, DNP3 e IEC 60870-5-104. Los switches gestionados ofrecen además priorización QoS.',
      it: 'Sì, i nostri switch sono trasparenti ai protocolli SCADA come Modbus TCP, IEC 61850, DNP3 e IEC 60870-5-104. Gli switch managed offrono inoltre la prioritizzazione QoS.',
      ar: 'نعم، محولاتنا شفافة لبروتوكولات SCADA مثل Modbus TCP وIEC 61850 وDNP3 وIEC 60870-5-104. توفر المحولات المُدارة أيضًا تحديد أولويات QoS لضمان معالجة إطارات التحكم الحرجة بأولوية.',
      ru: 'Да, наши коммутаторы прозрачны для протоколов SCADA, таких как Modbus TCP, IEC 61850, DNP3 и IEC 60870-5-104. Управляемые коммутаторы дополнительно предлагают приоритизацию QoS.',
    },
  },
  {
    question: {
      fr: 'Quelle alimentation choisir pour un switch industriel sur site isolé ?',
      en: 'Which power supply to choose for an industrial switch at a remote site?',
      es: '¿Qué alimentación elegir para un switch industrial en un sitio aislado?',
      it: 'Quale alimentazione scegliere per uno switch industriale in un sito isolato?',
      ar: 'أي مصدر طاقة يجب اختياره لمحول صناعي في موقع معزول؟',
      ru: 'Какой источник питания выбрать для промышленного коммутатора на удалённом объекте?',
    },
    answer: {
      fr: 'Nos switches DIN-Rail acceptent une alimentation DC large plage (12-48V DC, certains modèles jusqu\'à 57V). Pour les sites isolés, vous pouvez les alimenter directement depuis des panneaux solaires via un régulateur. Les modèles avec double alimentation redondante offrent une sécurité supplémentaire.',
      en: 'Our DIN-Rail switches accept wide-range DC power supply (12-48V DC, some models up to 57V). For remote sites, you can power them directly from solar panels via a regulator. Models with dual redundant power supply offer additional security.',
      es: 'Nuestros switches DIN-Rail aceptan alimentación DC de amplio rango (12-48V DC, algunos modelos hasta 57V). Para sitios aislados, pueden alimentarse directamente desde paneles solares mediante un regulador.',
      it: 'I nostri switch DIN-Rail accettano alimentazione DC ad ampio range (12-48V DC, alcuni modelli fino a 57V). Per siti isolati, possono essere alimentati direttamente da pannelli solari tramite un regolatore.',
      ar: 'تقبل محولات DIN-Rail لدينا إمدادات طاقة DC واسعة النطاق (12-48 فولت DC، بعض النماذج حتى 57 فولت). للمواقع المعزولة، يمكنك تشغيلها مباشرة من الألواح الشمسية عبر منظم.',
      ru: 'Наши коммутаторы DIN-Rail принимают питание постоянного тока широкого диапазона (12-48В DC, некоторые модели до 57В). Для удалённых объектов их можно запитать от солнечных панелей через регулятор.',
    },
  },
];

/* ── Industrie 4.0 (6 FAQ) ──────────────────────────────────── */
const industrie40: FAQ[] = [
  {
    question: {
      fr: 'Quel rôle joue le switch Ethernet dans une usine Industrie 4.0 ?',
      en: 'What role does an Ethernet switch play in an Industry 4.0 factory?',
      es: '¿Qué papel desempeña un switch Ethernet en una fábrica Industria 4.0?',
      it: 'Che ruolo svolge uno switch Ethernet in una fabbrica Industria 4.0?',
      ar: 'ما هو دور محول إيثرنت في مصنع الصناعة 4.0؟',
      ru: 'Какую роль играет Ethernet-коммутатор на заводе Индустрии 4.0?',
    },
    answer: {
      fr: 'Le switch Ethernet est la colonne vertébrale du réseau Industrie 4.0. Il connecte les automates (PLC), capteurs IoT, caméras de vision industrielle et systèmes SCADA/MES. Un switch managé Layer 2+ avec support VLAN et QoS permet de segmenter et prioriser les flux IT et OT sur un même réseau convergé.',
      en: 'The Ethernet switch is the backbone of the Industry 4.0 network. It connects PLCs, IoT sensors, industrial vision cameras and SCADA/MES systems. A Layer 2+ managed switch with VLAN and QoS support enables segmenting and prioritizing IT and OT traffic on a single converged network.',
      es: 'El switch Ethernet es la columna vertebral de la red Industria 4.0. Conecta PLCs, sensores IoT, cámaras de visión industrial y sistemas SCADA/MES. Un switch gestionado Layer 2+ con soporte VLAN y QoS permite segmentar y priorizar tráfico IT y OT.',
      it: 'Lo switch Ethernet è la spina dorsale della rete Industria 4.0. Collega PLC, sensori IoT, telecamere di visione industriale e sistemi SCADA/MES. Uno switch managed Layer 2+ con supporto VLAN e QoS consente di segmentare e prioritizzare il traffico IT e OT.',
      ar: 'محول إيثرنت هو العمود الفقري لشبكة الصناعة 4.0. يربط وحدات التحكم المنطقية القابلة للبرمجة ومستشعرات إنترنت الأشياء وكاميرات الرؤية الصناعية وأنظمة SCADA/MES.',
      ru: 'Ethernet-коммутатор — основа сети Индустрии 4.0. Он соединяет ПЛК, IoT-датчики, камеры машинного зрения и системы SCADA/MES. Управляемый коммутатор Layer 2+ с поддержкой VLAN и QoS позволяет сегментировать и приоритизировать трафик IT и OT.',
    },
  },
  {
    question: {
      fr: 'Les switches TSF Technology supportent-ils les protocoles industriels Profinet et EtherCAT ?',
      en: 'Do TSF Technology switches support Profinet and EtherCAT industrial protocols?',
      es: '¿Los switches TSF Technology soportan los protocolos industriales Profinet y EtherCAT?',
      it: 'Gli switch TSF Technology supportano i protocolli industriali Profinet ed EtherCAT?',
      ar: 'هل تدعم محولات TSF Technology بروتوكولات Profinet وEtherCAT الصناعية؟',
      ru: 'Поддерживают ли коммутаторы TSF Technology промышленные протоколы Profinet и EtherCAT?',
    },
    answer: {
      fr: 'Oui, notre gamme Compact inclut des switches certifiés Profinet (TSF-C205PN, TSF-C208PN, TSF-C305PN, TSF-C308PN) et EtherCAT (TSF-C203EC, TSF-C206EC). Ces modèles sont spécialement conçus pour l\'intégration directe dans les architectures d\'automatisation industrielle avec des temps de cycle déterministes.',
      en: 'Yes, our Compact range includes Profinet certified switches (TSF-C205PN, TSF-C208PN, TSF-C305PN, TSF-C308PN) and EtherCAT switches (TSF-C203EC, TSF-C206EC). These models are specifically designed for direct integration into industrial automation architectures with deterministic cycle times.',
      es: 'Sí, nuestra gama Compact incluye switches certificados Profinet (TSF-C205PN, TSF-C208PN, TSF-C305PN, TSF-C308PN) y EtherCAT (TSF-C203EC, TSF-C206EC). Estos modelos están especialmente diseñados para la integración directa en arquitecturas de automatización industrial.',
      it: 'Sì, la nostra gamma Compact include switch certificati Profinet (TSF-C205PN, TSF-C208PN, TSF-C305PN, TSF-C308PN) ed EtherCAT (TSF-C203EC, TSF-C206EC). Questi modelli sono specificamente progettati per l\'integrazione diretta nelle architetture di automazione industriale.',
      ar: 'نعم، تتضمن مجموعتنا Compact محولات معتمدة Profinet (TSF-C205PN, TSF-C208PN, TSF-C305PN, TSF-C308PN) ومحولات EtherCAT (TSF-C203EC, TSF-C206EC). هذه النماذج مصممة خصيصًا للتكامل المباشر في بنيات الأتمتة الصناعية.',
      ru: 'Да, наша линейка Compact включает сертифицированные коммутаторы Profinet (TSF-C205PN, TSF-C208PN, TSF-C305PN, TSF-C308PN) и EtherCAT (TSF-C203EC, TSF-C206EC). Эти модели специально разработаны для интеграции в архитектуры промышленной автоматизации.',
    },
  },
  {
    question: {
      fr: 'Qu\'est-ce que le TSN et pourquoi est-il important pour l\'Industrie 4.0 ?',
      en: 'What is TSN and why is it important for Industry 4.0?',
      es: '¿Qué es TSN y por qué es importante para la Industria 4.0?',
      it: 'Cos\'è il TSN e perché è importante per l\'Industria 4.0?',
      ar: 'ما هو TSN ولماذا هو مهم للصناعة 4.0؟',
      ru: 'Что такое TSN и почему это важно для Индустрии 4.0?',
    },
    answer: {
      fr: 'Le TSN (Time-Sensitive Networking) est un ensemble de standards IEEE qui apportent des garanties de latence et de synchronisation au réseau Ethernet. Pour l\'Industrie 4.0, le TSN permet de faire cohabiter trafic temps réel (contrôle machine) et trafic best-effort (données IT) sur un même réseau. TSF Technology propose des switches TSN DIN-Rail et Rack.',
      en: 'TSN (Time-Sensitive Networking) is a set of IEEE standards that provide latency and synchronization guarantees to Ethernet networks. For Industry 4.0, TSN enables real-time traffic (machine control) and best-effort traffic (IT data) to coexist on a single network. TSF Technology offers TSN switches in both DIN-Rail and Rack formats.',
      es: 'TSN (Time-Sensitive Networking) es un conjunto de estándares IEEE que aportan garantías de latencia y sincronización a las redes Ethernet. Para la Industria 4.0, TSN permite la coexistencia de tráfico en tiempo real y tráfico best-effort en una misma red.',
      it: 'TSN (Time-Sensitive Networking) è un insieme di standard IEEE che forniscono garanzie di latenza e sincronizzazione alle reti Ethernet. Per l\'Industria 4.0, il TSN consente la coesistenza di traffico real-time e traffico best-effort sulla stessa rete.',
      ar: 'TSN (الشبكات الحساسة للوقت) هي مجموعة من معايير IEEE التي توفر ضمانات زمن الاستجابة والمزامنة لشبكات إيثرنت. للصناعة 4.0، يتيح TSN التعايش بين حركة المرور في الوقت الفعلي وحركة المرور العادية على نفس الشبكة.',
      ru: 'TSN (Time-Sensitive Networking) — набор стандартов IEEE, обеспечивающих гарантии задержки и синхронизации в сетях Ethernet. Для Индустрии 4.0 TSN позволяет трафику реального времени и обычному трафику сосуществовать в одной сети.',
    },
  },
  {
    question: {
      fr: 'Comment sécuriser un réseau OT industriel avec des switches managés ?',
      en: 'How to secure an industrial OT network with managed switches?',
      es: '¿Cómo asegurar una red OT industrial con switches gestionados?',
      it: 'Come proteggere una rete OT industriale con switch managed?',
      ar: 'كيف يمكن تأمين شبكة OT صناعية بمحولات مُدارة؟',
      ru: 'Как защитить промышленную сеть OT с помощью управляемых коммутаторов?',
    },
    answer: {
      fr: 'Nos switches managés offrent plusieurs niveaux de sécurité réseau : segmentation par VLAN, contrôle d\'accès par port (IEEE 802.1X), listes de contrôle d\'accès (ACL), filtrage MAC et protection contre les attaques ARP. Ces fonctionnalités permettent d\'isoler les zones OT critiques du réseau IT tout en maintenant la connectivité nécessaire.',
      en: 'Our managed switches offer multiple network security layers: VLAN segmentation, port-based access control (IEEE 802.1X), access control lists (ACL), MAC filtering and ARP attack protection. These features isolate critical OT zones from the IT network while maintaining necessary connectivity.',
      es: 'Nuestros switches gestionados ofrecen múltiples niveles de seguridad: segmentación por VLAN, control de acceso por puerto (IEEE 802.1X), listas de control de acceso (ACL), filtrado MAC y protección contra ataques ARP.',
      it: 'I nostri switch managed offrono più livelli di sicurezza: segmentazione VLAN, controllo accessi per porta (IEEE 802.1X), liste di controllo accessi (ACL), filtraggio MAC e protezione contro attacchi ARP.',
      ar: 'توفر محولاتنا المُدارة عدة مستويات من أمان الشبكة: تقسيم VLAN، والتحكم في الوصول عبر المنفذ (IEEE 802.1X)، وقوائم التحكم في الوصول (ACL)، وتصفية MAC، والحماية من هجمات ARP.',
      ru: 'Наши управляемые коммутаторы предлагают несколько уровней сетевой безопасности: сегментация VLAN, контроль доступа по портам (IEEE 802.1X), списки контроля доступа (ACL), фильтрация MAC и защита от ARP-атак.',
    },
  },
  {
    question: {
      fr: 'Peut-on superviser les switches TSF Technology via SNMP ?',
      en: 'Can TSF Technology switches be monitored via SNMP?',
      es: '¿Se pueden supervisar los switches TSF Technology mediante SNMP?',
      it: 'È possibile monitorare gli switch TSF Technology tramite SNMP?',
      ar: 'هل يمكن مراقبة محولات TSF Technology عبر SNMP؟',
      ru: 'Можно ли контролировать коммутаторы TSF Technology через SNMP?',
    },
    answer: {
      fr: 'Oui, tous nos switches managés (Layer 2 et Layer 3) supportent SNMP v1/v2c/v3, permettant la supervision centralisée via des plateformes NMS comme Nagios, Zabbix ou PRTG. Ils sont également configurables via interface web, CLI et Telnet/SSH pour une gestion complète du réseau.',
      en: 'Yes, all our managed switches (Layer 2 and Layer 3) support SNMP v1/v2c/v3, enabling centralized monitoring via NMS platforms like Nagios, Zabbix or PRTG. They are also configurable via web interface, CLI and Telnet/SSH for complete network management.',
      es: 'Sí, todos nuestros switches gestionados (Layer 2 y Layer 3) soportan SNMP v1/v2c/v3, permitiendo la supervisión centralizada mediante plataformas NMS como Nagios, Zabbix o PRTG.',
      it: 'Sì, tutti i nostri switch managed (Layer 2 e Layer 3) supportano SNMP v1/v2c/v3, consentendo il monitoraggio centralizzato tramite piattaforme NMS come Nagios, Zabbix o PRTG.',
      ar: 'نعم، جميع محولاتنا المُدارة (الطبقة 2 والطبقة 3) تدعم SNMP v1/v2c/v3، مما يتيح المراقبة المركزية عبر منصات NMS مثل Nagios وZabbix وPRTG.',
      ru: 'Да, все наши управляемые коммутаторы (Layer 2 и Layer 3) поддерживают SNMP v1/v2c/v3, обеспечивая централизованный мониторинг через NMS-платформы, такие как Nagios, Zabbix или PRTG.',
    },
  },
  {
    question: {
      fr: 'Quelle bande passante recommander pour un réseau Industrie 4.0 ?',
      en: 'What bandwidth to recommend for an Industry 4.0 network?',
      es: '¿Qué ancho de banda recomendar para una red Industria 4.0?',
      it: 'Quale larghezza di banda consigliare per una rete Industria 4.0?',
      ar: 'ما عرض النطاق الترددي الموصى به لشبكة الصناعة 4.0؟',
      ru: 'Какую пропускную способность рекомендовать для сети Индустрии 4.0?',
    },
    answer: {
      fr: 'Pour un réseau Industrie 4.0 moderne, nous recommandons minimum du Gigabit Ethernet (1 Gbps) pour les liens d\'accès et du 10 Gbps pour les uplinks backbone. Nos switches Layer 3 avec ports 10G SFP+ sont idéaux comme switches de cœur de réseau, tandis que les switches Gigabit managés DIN-Rail conviennent pour les accès terrain.',
      en: 'For a modern Industry 4.0 network, we recommend minimum Gigabit Ethernet (1 Gbps) for access links and 10 Gbps for backbone uplinks. Our Layer 3 switches with 10G SFP+ ports are ideal as core network switches, while managed Gigabit DIN-Rail switches suit field access.',
      es: 'Para una red Industria 4.0 moderna, recomendamos mínimo Gigabit Ethernet (1 Gbps) para enlaces de acceso y 10 Gbps para uplinks backbone. Nuestros switches Layer 3 con puertos 10G SFP+ son ideales como switches de núcleo.',
      it: 'Per una rete Industria 4.0 moderna, raccomandiamo minimo Gigabit Ethernet (1 Gbps) per i link di accesso e 10 Gbps per gli uplink backbone. I nostri switch Layer 3 con porte 10G SFP+ sono ideali come switch di core.',
      ar: 'لشبكة الصناعة 4.0 الحديثة، نوصي بحد أدنى من جيجابت إيثرنت (1 جيجابت في الثانية) لروابط الوصول و10 جيجابت في الثانية لوصلات backbone. محولات Layer 3 لدينا مع منافذ 10G SFP+ مثالية كمحولات نواة الشبكة.',
      ru: 'Для современной сети Индустрии 4.0 мы рекомендуем минимум Gigabit Ethernet (1 Гбит/с) для линий доступа и 10 Гбит/с для магистральных соединений. Наши коммутаторы Layer 3 с портами 10G SFP+ идеальны в качестве ядра сети.',
    },
  },
];

/* ── Smart City (6 FAQ) ──────────────────────────────────────── */
const smartCity: FAQ[] = [
  {
    question: {
      fr: 'Quels switches Ethernet utiliser pour un projet de ville intelligente ?',
      en: 'Which Ethernet switches to use for a smart city project?',
      es: '¿Qué switches Ethernet utilizar para un proyecto de ciudad inteligente?',
      it: 'Quali switch Ethernet usare per un progetto di smart city?',
      ar: 'أي محولات إيثرنت يجب استخدامها لمشروع مدينة ذكية؟',
      ru: 'Какие Ethernet-коммутаторы использовать для проекта умного города?',
    },
    answer: {
      fr: 'Pour un projet smart city, nous recommandons nos switches managés avec ports PoE pour alimenter les caméras de vidéosurveillance, points d\'accès Wi-Fi et capteurs IoT. Les modèles rack conviennent pour les centres de données municipaux, tandis que les modèles DIN-Rail s\'installent dans les armoires de rue.',
      en: 'For a smart city project, we recommend our managed switches with PoE ports to power surveillance cameras, Wi-Fi access points and IoT sensors. Rack models suit municipal data centers, while DIN-Rail models install in street cabinets.',
      es: 'Para un proyecto de ciudad inteligente, recomendamos nuestros switches gestionados con puertos PoE para alimentar cámaras de vigilancia, puntos de acceso Wi-Fi y sensores IoT. Los modelos rack son adecuados para centros de datos municipales.',
      it: 'Per un progetto smart city, consigliamo i nostri switch managed con porte PoE per alimentare telecamere di sorveglianza, punti di accesso Wi-Fi e sensori IoT. I modelli rack sono adatti per i data center municipali.',
      ar: 'لمشروع مدينة ذكية، نوصي بمحولاتنا المُدارة مع منافذ PoE لتشغيل كاميرات المراقبة ونقاط وصول Wi-Fi ومستشعرات إنترنت الأشياء. نماذج الرف مناسبة لمراكز البيانات البلدية.',
      ru: 'Для проекта умного города мы рекомендуем наши управляемые коммутаторы с портами PoE для питания камер видеонаблюдения, точек доступа Wi-Fi и IoT-датчиков. Стоечные модели подходят для муниципальных ЦОД, а модели DIN-Rail устанавливаются в уличных шкафах.',
    },
  },
  {
    question: {
      fr: 'Qu\'est-ce que le PoE et pourquoi est-il essentiel pour les smart cities ?',
      en: 'What is PoE and why is it essential for smart cities?',
      es: '¿Qué es PoE y por qué es esencial para las ciudades inteligentes?',
      it: 'Cos\'è il PoE e perché è essenziale per le smart city?',
      ar: 'ما هو PoE ولماذا هو ضروري للمدن الذكية؟',
      ru: 'Что такое PoE и почему это важно для умных городов?',
    },
    answer: {
      fr: 'Le PoE (Power over Ethernet) permet d\'alimenter des équipements à travers le câble réseau, éliminant le besoin d\'une alimentation électrique séparée. C\'est essentiel en smart city pour les caméras, points Wi-Fi, capteurs et éclairage connecté. Nos switches PoE fournissent jusqu\'à 30W (PoE+) ou 90W (PoE++) par port.',
      en: 'PoE (Power over Ethernet) allows powering devices through the network cable, eliminating the need for separate power supply. It\'s essential in smart cities for cameras, Wi-Fi points, sensors and connected lighting. Our PoE switches provide up to 30W (PoE+) or 90W (PoE++) per port.',
      es: 'PoE (Power over Ethernet) permite alimentar equipos a través del cable de red, eliminando la necesidad de alimentación eléctrica separada. Es esencial en ciudades inteligentes para cámaras, puntos Wi-Fi, sensores e iluminación conectada.',
      it: 'Il PoE (Power over Ethernet) consente di alimentare i dispositivi attraverso il cavo di rete, eliminando la necessità di un\'alimentazione elettrica separata. È essenziale nelle smart city per telecamere, punti Wi-Fi, sensori e illuminazione connessa.',
      ar: 'يتيح PoE (الطاقة عبر إيثرنت) تشغيل الأجهزة من خلال كابل الشبكة، مما يلغي الحاجة إلى مصدر طاقة منفصل. وهو ضروري في المدن الذكية للكاميرات ونقاط Wi-Fi والمستشعرات والإضاءة المتصلة.',
      ru: 'PoE (Power over Ethernet) позволяет питать устройства через сетевой кабель, устраняя необходимость в отдельном электропитании. Это важно для умных городов: камер, точек Wi-Fi, датчиков и умного освещения.',
    },
  },
  {
    question: {
      fr: 'Comment déployer un réseau fibre optique pour une infrastructure smart city ?',
      en: 'How to deploy a fiber optic network for smart city infrastructure?',
      es: '¿Cómo desplegar una red de fibra óptica para una infraestructura de ciudad inteligente?',
      it: 'Come implementare una rete in fibra ottica per un\'infrastruttura smart city?',
      ar: 'كيف يمكن نشر شبكة ألياف ضوئية للبنية التحتية للمدينة الذكية؟',
      ru: 'Как развернуть оптоволоконную сеть для инфраструктуры умного города?',
    },
    answer: {
      fr: 'Pour une infrastructure smart city, déployez un backbone fibre avec nos switches rack équipés de ports 10G SFP+ comme nœuds principaux. Connectez ensuite les armoires de distribution avec des switches DIN-Rail à ports fibre SFP pour les liaisons longue distance. La topologie en anneau avec ERPS assure une résilience optimale.',
      en: 'For smart city infrastructure, deploy a fiber backbone with our rack switches equipped with 10G SFP+ ports as main nodes. Then connect distribution cabinets with DIN-Rail switches with SFP fiber ports for long-distance links. Ring topology with ERPS ensures optimal resilience.',
      es: 'Para una infraestructura de ciudad inteligente, despliegue un backbone de fibra con nuestros switches rack equipados con puertos 10G SFP+ como nodos principales. Conecte los armarios de distribución con switches DIN-Rail con puertos de fibra SFP.',
      it: 'Per un\'infrastruttura smart city, implementa un backbone in fibra con i nostri switch rack dotati di porte 10G SFP+ come nodi principali. Collega poi gli armadi di distribuzione con switch DIN-Rail con porte fibra SFP.',
      ar: 'للبنية التحتية للمدينة الذكية، انشر عمود فقري من الألياف مع محولات الرف لدينا المزودة بمنافذ 10G SFP+ كعقد رئيسية. ثم قم بتوصيل خزائن التوزيع بمحولات DIN-Rail مع منافذ ألياف SFP.',
      ru: 'Для инфраструктуры умного города разверните магистраль на оптоволокне с нашими стоечными коммутаторами с портами 10G SFP+ в качестве главных узлов. Затем подключите распределительные шкафы коммутаторами DIN-Rail с оптическими портами SFP.',
    },
  },
  {
    question: {
      fr: 'Les switches industriels conviennent-ils pour la gestion du trafic routier ?',
      en: 'Are industrial switches suitable for road traffic management?',
      es: '¿Son adecuados los switches industriales para la gestión del tráfico vial?',
      it: 'Gli switch industriali sono adatti alla gestione del traffico stradale?',
      ar: 'هل المحولات الصناعية مناسبة لإدارة حركة المرور على الطرق؟',
      ru: 'Подходят ли промышленные коммутаторы для управления дорожным движением?',
    },
    answer: {
      fr: 'Absolument. Nos switches DIN-Rail résistent aux conditions des armoires de signalisation routière (températures extrêmes, vibrations). Ils connectent les contrôleurs de feux, panneaux à message variable et capteurs de comptage. La redondance réseau ERPS garantit la continuité du service de gestion du trafic.',
      en: 'Absolutely. Our DIN-Rail switches withstand conditions in road signaling cabinets (extreme temperatures, vibrations). They connect traffic light controllers, variable message signs and counting sensors. ERPS network redundancy ensures traffic management service continuity.',
      es: 'Absolutamente. Nuestros switches DIN-Rail resisten las condiciones de los armarios de señalización vial (temperaturas extremas, vibraciones). Conectan controladores de semáforos, paneles de mensaje variable y sensores de conteo.',
      it: 'Assolutamente. I nostri switch DIN-Rail resistono alle condizioni degli armadi di segnalazione stradale (temperature estreme, vibrazioni). Collegano controllori semaforici, pannelli a messaggio variabile e sensori di conteggio.',
      ar: 'بالتأكيد. تتحمل محولات DIN-Rail لدينا ظروف خزائن الإشارات المرورية (درجات حرارة قصوى، اهتزازات). تربط وحدات التحكم في إشارات المرور ولوحات الرسائل المتغيرة ومستشعرات العد.',
      ru: 'Безусловно. Наши коммутаторы DIN-Rail выдерживают условия шкафов дорожной сигнализации (экстремальные температуры, вибрации). Они подключают контроллеры светофоров, табло переменных сообщений и счётные датчики.',
    },
  },
  {
    question: {
      fr: 'Comment alimenter des caméras de vidéosurveillance urbaine via PoE ?',
      en: 'How to power urban video surveillance cameras via PoE?',
      es: '¿Cómo alimentar cámaras de videovigilancia urbana mediante PoE?',
      it: 'Come alimentare telecamere di videosorveglianza urbana tramite PoE?',
      ar: 'كيف يمكن تشغيل كاميرات المراقبة الحضرية عبر PoE؟',
      ru: 'Как запитать городские камеры видеонаблюдения через PoE?',
    },
    answer: {
      fr: 'Connectez vos caméras IP directement aux ports PoE de nos switches. Les caméras fixes standard nécessitent 15W (PoE 802.3af), les caméras PTZ jusqu\'à 30W (PoE+ 802.3at). Notre switch PoE managé TSF-M7210GP DIN-Rail est idéal pour les armoires extérieures avec son budget PoE total de 240W.',
      en: 'Connect your IP cameras directly to the PoE ports of our switches. Standard fixed cameras need 15W (PoE 802.3af), PTZ cameras up to 30W (PoE+ 802.3at). Our managed PoE switch TSF-M7210GP DIN-Rail is ideal for outdoor cabinets with its 240W total PoE budget.',
      es: 'Conecte sus cámaras IP directamente a los puertos PoE de nuestros switches. Las cámaras fijas estándar necesitan 15W (PoE 802.3af), las cámaras PTZ hasta 30W (PoE+ 802.3at).',
      it: 'Collega le telecamere IP direttamente alle porte PoE dei nostri switch. Le telecamere fisse standard richiedono 15W (PoE 802.3af), le telecamere PTZ fino a 30W (PoE+ 802.3at).',
      ar: 'قم بتوصيل كاميرات IP مباشرة بمنافذ PoE في محولاتنا. تحتاج الكاميرات الثابتة القياسية إلى 15 واط (PoE 802.3af)، وكاميرات PTZ حتى 30 واط (PoE+ 802.3at).',
      ru: 'Подключите IP-камеры напрямую к PoE-портам наших коммутаторов. Стандартным стационарным камерам нужно 15 Вт (PoE 802.3af), PTZ-камерам — до 30 Вт (PoE+ 802.3at).',
    },
  },
  {
    question: {
      fr: 'Peut-on intégrer des capteurs IoT sur le réseau Ethernet d\'une smart city ?',
      en: 'Can IoT sensors be integrated into a smart city Ethernet network?',
      es: '¿Se pueden integrar sensores IoT en la red Ethernet de una ciudad inteligente?',
      it: 'È possibile integrare sensori IoT nella rete Ethernet di una smart city?',
      ar: 'هل يمكن دمج مستشعرات إنترنت الأشياء في شبكة إيثرنت المدينة الذكية؟',
      ru: 'Можно ли интегрировать IoT-датчики в сеть Ethernet умного города?',
    },
    answer: {
      fr: 'Oui, nos switches supportent la segmentation VLAN qui permet d\'isoler le trafic IoT (qualité de l\'air, bruit, éclairage, stationnement) sur des réseaux virtuels dédiés. Les capteurs Ethernet ou avec passerelle Modbus/Ethernet se connectent directement. Le PoE simplifie le déploiement en éliminant le câblage électrique séparé.',
      en: 'Yes, our switches support VLAN segmentation which isolates IoT traffic (air quality, noise, lighting, parking) on dedicated virtual networks. Ethernet sensors or those with Modbus/Ethernet gateways connect directly. PoE simplifies deployment by eliminating separate power cabling.',
      es: 'Sí, nuestros switches soportan segmentación VLAN que permite aislar el tráfico IoT (calidad del aire, ruido, iluminación, estacionamiento) en redes virtuales dedicadas.',
      it: 'Sì, i nostri switch supportano la segmentazione VLAN che consente di isolare il traffico IoT (qualità dell\'aria, rumore, illuminazione, parcheggio) su reti virtuali dedicate.',
      ar: 'نعم، تدعم محولاتنا تقسيم VLAN الذي يعزل حركة مرور إنترنت الأشياء (جودة الهواء، الضوضاء، الإضاءة، مواقف السيارات) على شبكات افتراضية مخصصة.',
      ru: 'Да, наши коммутаторы поддерживают сегментацию VLAN, которая изолирует IoT-трафик (качество воздуха, шум, освещение, парковка) в выделенных виртуальных сетях.',
    },
  },
];

/* ── Transports Intelligents (6 FAQ) ─────────────────────────── */
const transportsIntelligents: FAQ[] = [
  {
    question: {
      fr: 'Quels switches conviennent pour les applications ferroviaires ?',
      en: 'Which switches are suitable for railway applications?',
      es: '¿Qué switches son adecuados para aplicaciones ferroviarias?',
      it: 'Quali switch sono adatti per applicazioni ferroviarie?',
      ar: 'أي المحولات مناسبة لتطبيقات السكك الحديدية؟',
      ru: 'Какие коммутаторы подходят для железнодорожных приложений?',
    },
    answer: {
      fr: 'Pour les applications ferroviaires, nos switches DIN-Rail managés conformes IEC 61850-3 et IEEE 1613 sont recommandés. Ils résistent aux vibrations selon EN 50155, aux plages de température étendues et aux perturbations EMC des environnements ferroviaires. Les modèles avec alimentation DC large plage (24-110V) s\'adaptent aux tensions ferroviaires.',
      en: 'For railway applications, our managed DIN-Rail switches compliant with IEC 61850-3 and IEEE 1613 are recommended. They withstand vibrations per EN 50155, extended temperature ranges and EMC disturbances of railway environments. Models with wide-range DC power (24-110V) adapt to railway voltages.',
      es: 'Para aplicaciones ferroviarias, se recomiendan nuestros switches DIN-Rail gestionados conformes con IEC 61850-3 e IEEE 1613. Resisten vibraciones según EN 50155 y perturbaciones EMC de entornos ferroviarios.',
      it: 'Per le applicazioni ferroviarie, sono consigliati i nostri switch DIN-Rail managed conformi a IEC 61850-3 e IEEE 1613. Resistono alle vibrazioni secondo EN 50155 e alle perturbazioni EMC degli ambienti ferroviari.',
      ar: 'لتطبيقات السكك الحديدية، يُوصى بمحولات DIN-Rail المُدارة لدينا المتوافقة مع IEC 61850-3 وIEEE 1613. تتحمل الاهتزازات وفقًا لـ EN 50155 واضطرابات EMC في بيئات السكك الحديدية.',
      ru: 'Для железнодорожных приложений рекомендуются наши управляемые коммутаторы DIN-Rail, соответствующие IEC 61850-3 и IEEE 1613. Они выдерживают вибрации по EN 50155 и ЭМС-помехи железнодорожной среды.',
    },
  },
  {
    question: {
      fr: 'Comment créer un réseau Ethernet embarqué pour les transports ?',
      en: 'How to create an onboard Ethernet network for transportation?',
      es: '¿Cómo crear una red Ethernet embarcada para el transporte?',
      it: 'Come creare una rete Ethernet a bordo per i trasporti?',
      ar: 'كيف يمكن إنشاء شبكة إيثرنت مدمجة للنقل؟',
      ru: 'Как создать бортовую сеть Ethernet для транспорта?',
    },
    answer: {
      fr: 'Utilisez nos switches compacts ou DIN-Rail avec alimentation DC large plage pour les installations embarquées (bus, tramway, train). Privilégiez les modèles avec boîtier renforcé, plage de température étendue et montage DIN-Rail ou mural. La redondance réseau RSTP assure la continuité des services embarqués (vidéosurveillance, information voyageurs, Wi-Fi).',
      en: 'Use our compact or DIN-Rail switches with wide-range DC power for onboard installations (bus, tram, train). Choose models with reinforced casing, extended temperature range and DIN-Rail or wall mounting. RSTP network redundancy ensures continuity of onboard services (surveillance, passenger information, Wi-Fi).',
      es: 'Utilice nuestros switches compactos o DIN-Rail con alimentación DC de amplio rango para instalaciones embarcadas (autobús, tranvía, tren). La redundancia de red RSTP asegura la continuidad de los servicios a bordo.',
      it: 'Utilizza i nostri switch compatti o DIN-Rail con alimentazione DC ad ampio range per installazioni a bordo (autobus, tram, treno). La ridondanza di rete RSTP garantisce la continuità dei servizi di bordo.',
      ar: 'استخدم محولاتنا المدمجة أو DIN-Rail مع إمدادات طاقة DC واسعة النطاق للتركيبات على متن المركبات (حافلة، ترام، قطار). يضمن تكرار الشبكة RSTP استمرارية الخدمات على متن المركبة.',
      ru: 'Используйте наши компактные коммутаторы или модели DIN-Rail с питанием DC широкого диапазона для бортовых установок (автобус, трамвай, поезд). Резервирование сети RSTP обеспечивает непрерывность бортовых сервисов.',
    },
  },
  {
    question: {
      fr: 'Les switches PoE sont-ils adaptés aux systèmes de transport intelligent (ITS) ?',
      en: 'Are PoE switches suitable for Intelligent Transport Systems (ITS)?',
      es: '¿Son adecuados los switches PoE para sistemas de transporte inteligente (ITS)?',
      it: 'Gli switch PoE sono adatti ai sistemi di trasporto intelligente (ITS)?',
      ar: 'هل محولات PoE مناسبة لأنظمة النقل الذكي (ITS)؟',
      ru: 'Подходят ли PoE-коммутаторы для интеллектуальных транспортных систем (ИТС)?',
    },
    answer: {
      fr: 'Oui, les switches PoE sont idéaux pour les ITS. Ils alimentent directement les caméras LAPI, panneaux à message variable, bornes d\'appel d\'urgence et détecteurs de véhicules. Notre gamme PoE industrielle offre jusqu\'à 30W par port avec un budget PoE total suffisant pour équiper un carrefour ou une section autoroutière complète.',
      en: 'Yes, PoE switches are ideal for ITS. They directly power ANPR cameras, variable message signs, emergency call stations and vehicle detectors. Our industrial PoE range offers up to 30W per port with sufficient total PoE budget to equip a junction or complete highway section.',
      es: 'Sí, los switches PoE son ideales para ITS. Alimentan directamente cámaras LAPI, paneles de mensaje variable, terminales de llamada de emergencia y detectores de vehículos.',
      it: 'Sì, gli switch PoE sono ideali per gli ITS. Alimentano direttamente telecamere ANPR, pannelli a messaggio variabile, colonnine SOS e rilevatori di veicoli.',
      ar: 'نعم، محولات PoE مثالية لأنظمة النقل الذكي. تغذي مباشرة كاميرات التعرف على لوحات الترخيص ولوحات الرسائل المتغيرة ومحطات الاتصال الطارئ وأجهزة كشف المركبات.',
      ru: 'Да, PoE-коммутаторы идеальны для ИТС. Они напрямую питают камеры распознавания номеров, табло переменных сообщений, станции экстренного вызова и детекторы транспорта.',
    },
  },
  {
    question: {
      fr: 'Quelle est la durée de vie des switches industriels TSF Technology ?',
      en: 'What is the lifespan of TSF Technology industrial switches?',
      es: '¿Cuál es la vida útil de los switches industriales TSF Technology?',
      it: 'Qual è la durata di vita degli switch industriali TSF Technology?',
      ar: 'ما هو العمر الافتراضي لمحولات TSF Technology الصناعية؟',
      ru: 'Каков срок службы промышленных коммутаторов TSF Technology?',
    },
    answer: {
      fr: 'Nos switches industriels sont conçus pour une durée de vie supérieure à 10 ans en fonctionnement continu 24/7. L\'absence de ventilateur (refroidissement passif) élimine les pièces mobiles sujettes à l\'usure. Les composants industriels sélectionnés et les tests de vieillissement accéléré garantissent une fiabilité MTBF supérieure à 200 000 heures.',
      en: 'Our industrial switches are designed for a lifespan exceeding 10 years in continuous 24/7 operation. Fanless design (passive cooling) eliminates moving parts prone to wear. Industrial-grade components and accelerated aging tests guarantee MTBF reliability exceeding 200,000 hours.',
      es: 'Nuestros switches industriales están diseñados para una vida útil superior a 10 años en funcionamiento continuo 24/7. El diseño sin ventilador elimina piezas móviles sujetas a desgaste.',
      it: 'I nostri switch industriali sono progettati per una durata superiore a 10 anni in funzionamento continuo 24/7. Il design fanless (raffreddamento passivo) elimina le parti mobili soggette a usura.',
      ar: 'محولاتنا الصناعية مصممة لعمر افتراضي يتجاوز 10 سنوات في التشغيل المستمر على مدار الساعة. تصميم بدون مروحة (تبريد سلبي) يلغي الأجزاء المتحركة المعرضة للتآكل.',
      ru: 'Наши промышленные коммутаторы рассчитаны на срок службы более 10 лет при непрерывной работе 24/7. Безвентиляторная конструкция (пассивное охлаждение) исключает движущиеся части. MTBF превышает 200 000 часов.',
    },
  },
  {
    question: {
      fr: 'Comment connecter des équipements série RS-232/RS-485 sur un réseau Ethernet de transport ?',
      en: 'How to connect RS-232/RS-485 serial devices to a transport Ethernet network?',
      es: '¿Cómo conectar equipos serie RS-232/RS-485 a una red Ethernet de transporte?',
      it: 'Come collegare dispositivi seriali RS-232/RS-485 a una rete Ethernet di trasporto?',
      ar: 'كيف يمكن توصيل أجهزة RS-232/RS-485 التسلسلية بشبكة إيثرنت النقل؟',
      ru: 'Как подключить последовательные устройства RS-232/RS-485 к транспортной сети Ethernet?',
    },
    answer: {
      fr: 'Nos switches gateway TSF-GW5205C intègrent des ports série RS-232 et RS-485 avec conversion vers Ethernet. Ils permettent de connecter des équipements legacy (automates anciens, panneaux d\'affichage, capteurs série) au réseau Ethernet industriel sans remplacement matériel. Le mode serveur série Modbus est supporté nativement.',
      en: 'Our TSF-GW5205C gateway switches integrate RS-232 and RS-485 serial ports with Ethernet conversion. They connect legacy equipment (old PLCs, display panels, serial sensors) to the industrial Ethernet network without hardware replacement. Native Modbus serial server mode is supported.',
      es: 'Nuestros switches gateway TSF-GW5205C integran puertos serie RS-232 y RS-485 con conversión a Ethernet. Permiten conectar equipos legacy al red Ethernet industrial sin reemplazo de hardware.',
      it: 'I nostri switch gateway TSF-GW5205C integrano porte seriali RS-232 e RS-485 con conversione Ethernet. Consentono di collegare apparecchiature legacy alla rete Ethernet industriale senza sostituzione hardware.',
      ar: 'تدمج محولات البوابة TSF-GW5205C لدينا منافذ تسلسلية RS-232 وRS-485 مع تحويل إلى إيثرنت. تتيح توصيل المعدات القديمة بشبكة إيثرنت الصناعية دون استبدال الأجهزة.',
      ru: 'Наши шлюзовые коммутаторы TSF-GW5205C интегрируют последовательные порты RS-232 и RS-485 с конвертацией в Ethernet. Они подключают устаревшее оборудование к промышленной сети Ethernet без замены оборудования.',
    },
  },
  {
    question: {
      fr: 'Quelles topologies réseau recommander pour les infrastructures de transport ?',
      en: 'Which network topologies to recommend for transport infrastructure?',
      es: '¿Qué topologías de red recomendar para infraestructuras de transporte?',
      it: 'Quali topologie di rete consigliare per le infrastrutture di trasporto?',
      ar: 'ما هي طوبولوجيات الشبكة الموصى بها للبنى التحتية للنقل؟',
      ru: 'Какие сетевые топологии рекомендовать для транспортной инфраструктуры?',
    },
    answer: {
      fr: 'Pour les infrastructures de transport linéaires (autoroutes, voies ferrées), la topologie en anneau avec ERPS est optimale : temps de basculement < 20ms et résilience en cas de coupure de câble. Pour les nœuds (gares, dépôts), une topologie étoile avec switches Layer 3 en cœur offre la meilleure flexibilité et performances.',
      en: 'For linear transport infrastructure (highways, railways), ring topology with ERPS is optimal: failover time < 20ms and resilience in case of cable cut. For nodes (stations, depots), a star topology with Layer 3 core switches offers the best flexibility and performance.',
      es: 'Para infraestructuras de transporte lineales (autopistas, vías férreas), la topología en anillo con ERPS es óptima: tiempo de conmutación < 20ms. Para nodos (estaciones, depósitos), una topología en estrella con switches Layer 3.',
      it: 'Per infrastrutture di trasporto lineari (autostrade, ferrovie), la topologia ad anello con ERPS è ottimale: tempo di failover < 20ms. Per i nodi (stazioni, depositi), una topologia a stella con switch Layer 3.',
      ar: 'للبنى التحتية للنقل الخطية (الطرق السريعة، السكك الحديدية)، طوبولوجيا الحلقة مع ERPS هي الأمثل: زمن التبديل < 20 مللي ثانية. للعقد (المحطات، المستودعات)، طوبولوجيا النجمة مع محولات Layer 3.',
      ru: 'Для линейной транспортной инфраструктуры (автострады, железные дороги) оптимальна кольцевая топология с ERPS: время переключения < 20 мс. Для узлов (станции, депо) — звёздная топология с коммутаторами Layer 3.',
    },
  },
];

export const solutionsFaqs: PageFaqMap = {
  'energies-renouvelables': energiesRenouvelables,
  'industrie-4-0': industrie40,
  'smart-city': smartCity,
  'transports-intelligents': transportsIntelligents,
};
