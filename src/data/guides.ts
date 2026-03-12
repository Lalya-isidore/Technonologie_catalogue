export type Guide = {
  slug: string;
  title: string;
  description: string;
  readTime: number;
  sections: { heading: string; content: string }[];
  relatedLinks: { label: string; href: string }[];
};

export const guides: Guide[] = [
  {
    slug: 'dimensionner-reseau-poe-industriel',
    title: 'Dimensionner un réseau PoE industriel',
    description: 'Calcul du budget PoE, choix des switches, câblage et alimentation redondante.',
    readTime: 6,
    sections: [
      {
        heading: 'Comprendre le budget PoE',
        content: 'Le Power over Ethernet (PoE) permet d\'alimenter des équipements réseau via le câble Ethernet. Le standard IEEE 802.3af fournit jusqu\'à 15.4W par port, tandis que 802.3at (PoE+) monte à 30W et 802.3bt (PoE++) jusqu\'à 90W. Pour dimensionner correctement votre réseau, additionnez la consommation de chaque équipement connecté (caméras IP, points d\'accès Wi-Fi, capteurs IoT) et ajoutez une marge de 20% pour les pics de consommation.',
      },
      {
        heading: 'Choisir le bon switch PoE industriel',
        content: 'Un switch PoE industriel doit supporter les conditions environnementales de votre site : température étendue (-40°C à +75°C), protection IP40 minimum, alimentation DC redondante. Les switches TSF Technology de la gamme PoE offrent un budget total allant de 120W à 400W selon les modèles. Pour les installations critiques (vidéosurveillance, contrôle d\'accès), privilégiez les modèles managed avec QoS pour prioriser le trafic vidéo.',
      },
      {
        heading: 'Architecture et câblage',
        content: 'Le PoE est limité à 100 mètres sur câble Cat5e/Cat6. Pour les distances supérieures, utilisez des extendeurs PoE ou des switches intermédiaires. En milieu industriel, préférez le câble blindé (STP) pour résister aux interférences électromagnétiques. Prévoyez un parcours de câble séparé des câbles de puissance pour éviter les perturbations.',
      },
      {
        heading: 'Alimentation redondante',
        content: 'En milieu industriel, l\'alimentation redondante est essentielle. Les switches TSF Technology disposent de deux entrées d\'alimentation DC (9~60V). Connectez chaque entrée à une source différente (alimentation secteur + batterie, ou deux alimentations indépendantes) pour garantir la continuité de service même en cas de panne d\'une source.',
      },
    ],
    relatedLinks: [
      { label: 'Switches PoE Industriels', href: '/produits/switches-ethernet/poe' },
      { label: 'Comment choisir son switch', href: '/blog/comment-choisir-switch-ethernet-industriel' },
    ],
  },
  {
    slug: 'configurer-redondance-rstp-ring',
    title: 'Configurer la redondance réseau (RSTP/Ring)',
    description: 'Mise en place de la redondance réseau pour garantir la haute disponibilité.',
    readTime: 7,
    sections: [
      {
        heading: 'Pourquoi la redondance réseau ?',
        content: 'Dans un réseau industriel, une panne de lien peut arrêter une ligne de production entière. La redondance réseau crée des chemins alternatifs pour que le trafic soit automatiquement redirigé en cas de défaillance d\'un lien ou d\'un switch. L\'objectif : un temps de recovery inférieur à 50ms pour les applications critiques.',
      },
      {
        heading: 'RSTP (Rapid Spanning Tree Protocol)',
        content: 'RSTP (IEEE 802.1w) est le protocole de redondance le plus répandu. Il élimine les boucles réseau en désactivant certains ports, puis les réactive rapidement en cas de panne (convergence < 2 secondes). Configuration sur les switches TSF managed : activez RSTP globalement, définissez les priorités de bridge (le switch racine doit avoir la priorité la plus basse), et configurez les coûts de port pour contrôler les chemins préférés.',
      },
      {
        heading: 'Ring industriel',
        content: 'Pour des temps de recovery encore plus rapides (< 20ms), les protocoles de ring propriétaires ou standards (MRP, DLR) sont préférables. La topologie en anneau connecte les switches en boucle fermée. En cas de coupure, le trafic est rerouté instantanément par le chemin inverse. Les switches TSF Technology supportent le ring industriel avec un temps de recovery garanti < 20ms pour les anneaux jusqu\'à 250 switches.',
      },
      {
        heading: 'Bonnes pratiques',
        content: 'Combinez RSTP pour le backbone et le ring pour les boucles locales. Surveillez l\'état des liens via SNMP et configurez des alertes en cas de basculement. Testez régulièrement la redondance en déconnectant volontairement un lien pour vérifier le temps de recovery. Documentez la topologie réseau et les configurations pour faciliter le dépannage.',
      },
    ],
    relatedLinks: [
      { label: 'Switches Managed DIN-Rail', href: '/produits/switches-ethernet/layer-2-managed-din-rail' },
      { label: 'Switches Layer-3 DIN-Rail', href: '/produits/switches-ethernet/layer-3-din-rail' },
    ],
  },
  {
    slug: 'migration-tsn-guide-pratique',
    title: 'Migration vers TSN : guide pratique',
    description: 'Étapes clés pour migrer vos réseaux industriels vers le Time-Sensitive Networking.',
    readTime: 8,
    sections: [
      {
        heading: 'Qu\'est-ce que TSN ?',
        content: 'TSN (Time-Sensitive Networking) est un ensemble de standards IEEE 802.1 qui apportent des garanties de latence déterministe, de synchronisation précise et de haute disponibilité au réseau Ethernet standard. TSN permet la convergence IT/OT : un seul réseau pour le contrôle temps-réel, la vidéo, le trafic bureautique et le cloud.',
      },
      {
        heading: 'Les standards TSN essentiels',
        content: 'IEEE 802.1AS (synchronisation horaire précise), IEEE 802.1Qbv (ordonnancement temporel des trames — Time-Aware Shaper), IEEE 802.1Qci (filtrage et policing par flux), IEEE 802.1CB (redondance de trames — Frame Replication and Elimination). Les switches TSF Technology TSN supportent l\'ensemble de ces standards pour une latence garantie < 1µs.',
      },
      {
        heading: 'Étapes de migration',
        content: '1. Audit du réseau existant : identifiez les flux critiques et leurs exigences de latence. 2. Design de la topologie TSN : planifiez les domaines de synchronisation et les flux programmés. 3. Déploiement progressif : commencez par un segment pilote avant de généraliser. 4. Configuration des flux : définissez les schedules Qbv pour chaque flux temps-réel. 5. Validation : mesurez les latences et jitters pour confirmer le respect des exigences.',
      },
      {
        heading: 'TSN et protocoles industriels',
        content: 'TSN est compatible avec PROFINET IRT, EtherCAT et OPC UA FX. La migration vers TSN ne nécessite pas de remplacer vos automates existants : les switches TSN assurent la coexistence des protocoles legacy et TSN sur le même réseau physique. Les switches compacts TSF Technology avec support PROFINET natif facilitent cette transition.',
      },
    ],
    relatedLinks: [
      { label: 'Switches TSN & PTP', href: '/produits/switches-ethernet/tsn-ptp' },
      { label: 'Article : TSN et Industrie 4.0', href: '/blog/tsn-revolution-industrie-4-0' },
    ],
  },
  {
    slug: 'securiser-reseau-ethernet-industriel',
    title: 'Sécuriser un réseau Ethernet industriel',
    description: 'VLAN, ACL, 802.1X et bonnes pratiques de cybersécurité industrielle.',
    readTime: 7,
    sections: [
      {
        heading: 'Les menaces sur les réseaux industriels',
        content: 'Les réseaux OT (Operational Technology) sont de plus en plus connectés au réseau IT et à Internet, les exposant aux cyberattaques. Ransomware, accès non autorisé, sniffing de protocoles industriels (Modbus, PROFINET) sont des menaces réelles. La norme IEC 62443 définit les exigences de cybersécurité pour les systèmes industriels.',
      },
      {
        heading: 'Segmentation par VLAN',
        content: 'La première ligne de défense est la segmentation réseau via les VLANs (Virtual LANs). Isolez les automates et systèmes SCADA dans un VLAN dédié, séparé du trafic bureautique. Les switches TSF managed supportent jusqu\'à 4094 VLANs IEEE 802.1Q avec gestion par port et par tag. Configurez des VLANs distincts pour : contrôle/commande, vidéosurveillance, accès Internet, maintenance.',
      },
      {
        heading: 'Contrôle d\'accès (802.1X et ACL)',
        content: 'IEEE 802.1X authentifie chaque équipement avant de lui accorder l\'accès au réseau. Combiné avec un serveur RADIUS, il empêche la connexion d\'appareils non autorisés. Les ACL (Access Control Lists) filtrent le trafic par adresse IP, MAC ou port TCP/UDP pour bloquer les communications non souhaitées entre zones.',
      },
      {
        heading: 'Surveillance et bonnes pratiques',
        content: 'Activez le port security pour limiter le nombre d\'adresses MAC par port. Utilisez SNMP v3 (chiffré) pour la supervision. Désactivez les ports physiques non utilisés. Changez les mots de passe par défaut de tous les équipements. Mettez à jour régulièrement les firmwares. Sauvegardez les configurations des switches. Implémentez un système de détection d\'intrusion (IDS) sur le réseau industriel.',
      },
    ],
    relatedLinks: [
      { label: 'Switches Managed Rack', href: '/produits/switches-ethernet/layer-2-managed-rack' },
      { label: 'Switches Layer-3 Rack', href: '/produits/switches-ethernet/layer-3-rack' },
    ],
  },
  {
    slug: 'fibre-optique-milieu-industriel',
    title: 'Fibre optique en milieu industriel',
    description: 'Choix des modules SFP, types de fibres et distances maximales.',
    readTime: 6,
    sections: [
      {
        heading: 'Pourquoi la fibre optique en industrie ?',
        content: 'La fibre optique offre trois avantages majeurs en milieu industriel : immunité totale aux interférences électromagnétiques (EMI), distances de transmission très supérieures au cuivre (jusqu\'à 120 km en monomode), et bande passante élevée (10 Gbps et plus). Elle est idéale pour les environnements avec de forts champs électromagnétiques (moteurs, variateurs de fréquence, soudure).',
      },
      {
        heading: 'Multimode vs Monomode',
        content: 'Fibre multimode (OM1 à OM5) : cœur large (50 ou 62.5µm), distances courtes (550m à 2km), connecteurs LC/SC orange. Idéale pour les connexions intra-bâtiment. Fibre monomode (OS1/OS2) : cœur fin (9µm), longues distances (20 à 120km), connecteurs LC/SC jaunes. Nécessaire pour les liaisons entre bâtiments ou sites distants.',
      },
      {
        heading: 'Choisir ses modules SFP',
        content: 'Les modules SFP (Small Form-factor Pluggable) s\'insèrent dans les ports SFP des switches. SFP 1G multimode (SX) : 850nm, jusqu\'à 550m. SFP 1G monomode (LX) : 1310nm, jusqu\'à 20km. SFP 1G monomode longue distance (ZX) : 1550nm, jusqu\'à 80-120km. SFP+ 10G : mêmes variantes en 10 Gigabit. Les switches TSF Technology supportent les modules SFP standard compatibles MSA.',
      },
      {
        heading: 'Installation et précautions',
        content: 'Les connecteurs fibre doivent être nettoyés avant chaque connexion (lingettes alcool + air sec). Respectez le rayon de courbure minimum (30mm pour les fibres standard). Protégez les câbles fibre avec des chemins de câble dédiés. En extérieur, utilisez des fibres armées (avec gaine métallique). Testez chaque liaison avec un réflectomètre optique (OTDR) après installation pour vérifier la qualité du signal.',
      },
    ],
    relatedLinks: [
      { label: 'Switches Layer-3 Rack (SFP)', href: '/produits/switches-ethernet/layer-3-rack' },
      { label: 'Glossaire : SFP', href: '/ressources/glossaire#sfp' },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuides(): Guide[] {
  return guides;
}
