export interface IArticle {
  id: number;
  country: string;
  city: string;
  beginDate: string;
  endDate: string;
  image: string;
  galerie: IGalerie[];
  description: string;
  negativePoints: string[];
  positivePoints: string[];
  tips: string[];
  summary: string;
  articleTop: boolean,
}

export interface IGalerie {
  title: string,
  image: string
}

export const ARTICLES: IArticle[] = [
  {
    id: 1,
    country: "Albanie",
    city: "Tirana",
    beginDate: new Date(2022, 3, 14).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    endDate: new Date(2022, 4, 17).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    image: "assets/Albanie/albanie.png",
    galerie: [
      {
        title: "Albanie",
        image: "assets/Albanie/1.jpg",

      },
      {
        title: "Albanie",
        image: "assets/Albanie/2.jpg",

      },
      {
        title: "Albanie",
        image: "assets/Albanie/3.jpg",
      },
      {
        title: "Albanie",
        image: "assets/Albanie/4.jpg",

      },
      {
        title: "Albanie",
        image: "assets/Albanie/5.jpg",

      },
      {
        title: "Albanie",
        image: "assets/Albanie/6.jpg",
      },
      {
        title: "Albanie",
        image: "assets/Albanie/7.jpg",

      },
      {
        title: "Albanie",
        image: "assets/Albanie/8.jpg",

      },
    

    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit. Dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    negativePoints: [
      "Les moins",
      "Le climat torride en juillet-août, sauf en montagne",
      "La côte très fréquentée l’été et de plus en plus bétonnée",
    ],
    positivePoints: [
      "Les plus",
      "Un pays très simple à sillonner, sans embrouilles ni complexité",
      "Des habitants gentils, spontanés et qui cherchent le contact",
      "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques",
    ],
    tips: [
      "Mon conseil",
      "Prenez une paire de tong !",
    ],
    summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
    articleTop: true,
  },
  {

    id: 2,
    country: "Nouvelle-Zélande",
    city: "Taranaki",
    beginDate: new Date(2023, 3, 14).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    endDate: new Date(2023, 4, 17).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    image: "assets/nouvelle-zelande.png",
    galerie: [
      {
        title: "Nouvelle-Zeland",
        image: "assets/nouvelle-zelande.png",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/nouvelle-zelande.png",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/nouvelle-zelande.png",

      },

    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit. Dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    negativePoints: [
      "Les moins",
      "Les températures peuvent être basses en montagne, donc il faut se préparer en conséquence.",
      "La randonnée peut être difficile pour les personnes qui ne sont pas habituées à une activité physique intense.",
    ],
    positivePoints: [
      "Les plus",
      "La vue sur le mont Taranaki est magnifique.",
      "Il y a plusieurs itinéraires de randonnée pour tous les niveaux.",
      "La région offre de nombreuses activités de plein air, comme le kayak et le parapente.",
    ],
    tips: [
      "Mon conseil",
      "Prévoyez des vêtements chauds pour la randonnée, même en été.",
    ],
    summary: "Le mont Taranaki est un lieu incroyable pour les amateurs de randonnée et de paysages à couper le souffle. Avec ses nombreux itinéraires de randonnée pour tous les niveaux et ses activités de plein air variées, il y a toujours quelque chose à faire pour s'amuser. Cependant, il est important de se préparer pour le froid et la difficulté physique de la randonnée en montagne. Mon conseil serait donc de s'assurer d'avoir des vêtements chauds et de commencer avec une randonnée plus facile si vous êtes novice en la matière.",
    articleTop: false,
  },
  {
    id: 3,
    country: "Iran",
    city: "Shiraz, Province de Fars",
    beginDate: new Date(2023, 3, 14).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    endDate: new Date(2023, 4, 17).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    image: "assets/iran.png",
    galerie: [
      {
        title: "Iran",
        image: "assets/iran.png",

      },
      {
        title: "Iran",
        image: "assets/iran.png",

      },
      {
        title: "Iran",
        image: "assets/iran.png",

      },

    ],
    description: "Shiraz est une ville historique située dans la province de Fars, en Iran. Elle est connue pour être la ville natale de nombreux poètes iraniens célèbres tels que Hafez et Saadi. La ville regorge également de magnifiques jardins persans, de mosquées et de bâtiments historiques, notamment la forteresse de Karim Khan et le mausolée de Shah-e Cheragh.",
    negativePoints: [
      "Les moins",
      "Il peut faire très chaud en été, donc il est important de se protéger du soleil.",
      "Il y a une forte influence religieuse dans la ville, donc il est important de respecter les coutumes et les croyances locales.",
    ],
    positivePoints: [
      "Les plus",
      "La ville est riche en histoire et en culture, offrant de nombreuses attractions touristiques.",
      "La nourriture iranienne est délicieuse et variée.",
      "La ville est entourée de montagnes et de vignobles, offrant de belles vues panoramiques.",
    ],
    tips: [
      "Mon conseil",
      "Assurez-vous d'avoir des vêtements légers et respirants pour vous protéger du soleil et de la chaleur en été.",
      "Essayez la nourriture locale, notamment le kebab et le riz safrané.",
    ],
    summary: "Shiraz est une ville historique en Iran, riche en histoire et en culture. Avec ses magnifiques jardins persans, ses bâtiments historiques et ses mosquées, la ville offre de nombreuses attractions touristiques. Il est important de respecter les coutumes et les croyances locales en raison de la forte influence religieuse dans la ville. Assurez-vous d'avoir des vêtements légers et respirants pour vous protéger du soleil et de la chaleur en été, et ne manquez pas de goûter la nourriture locale délicieuse. Mon conseil serait de visiter également les montagnes et les vignobles environnants pour profiter de belles vues panoramiques.",
    articleTop: false,
  },
  {
    id: 4,
    country: "Japon",
    city: "Hiroshima",
    beginDate: new Date(2023, 3, 14).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    endDate: new Date(2023, 4, 17).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    image: "assets/japon.png",
    galerie: [
      {
        title: "Japon",
        image: "assets/japon.png",

      },
      {
        title: "Japon",
        image: "assets/japon.png",

      },
      {
        title: "Japon",
        image: "assets/japon.png",

      },

    ],
    description: "Hiroshima est une ville japonaise située dans la région du Chugoku. Elle est connue pour avoir été détruite par une bombe atomique lors de la Seconde Guerre mondiale. Aujourd'hui, la ville est un symbole de paix et d'espoir, avec de nombreux sites commémoratifs et musées. Outre son passé tragique, Hiroshima offre également une culture riche et diverses attractions touristiques.",
    negativePoints: [
      "Les moins",
      "La ville peut être très touristique, en particulier pendant les périodes de vacances.",
      "Les sites commémoratifs peuvent être émotionnellement difficiles pour certaines personnes.",
      "La ville peut être coûteuse pour les voyageurs avec un budget serré."
    ],
    positivePoints: [
      "Les plus",
      "Hiroshima est un lieu de mémoire et de réflexion pour les visiteurs du monde entier.",
      "La ville possède une culture et une histoire fascinantes.",
      "Il y a de nombreuses attractions touristiques, y compris des musées, des temples et des parcs.",
    ],
    tips: [
      "Mon conseil",
      "Assurez-vous de visiter le parc du Mémorial de la Paix et le dôme de Genbaku pour comprendre l'histoire de la ville.",
      "Goûtez les spécialités culinaires locales, comme l'okonomiyaki et les huîtres d'Hiroshima.",
    ],
    summary: "Hiroshima est une ville japonaise chargée d'histoire et de mémoire, connue pour avoir été détruite par une bombe atomique lors de la Seconde Guerre mondiale. Aujourd'hui, la ville offre une culture fascinante, des attractions touristiques variées et une cuisine locale délicieuse. Cependant, les sites commémoratifs peuvent être émotionnellement difficiles pour certaines personnes et la ville peut être coûteuse pour les voyageurs avec un budget serré. Mon conseil serait donc de visiter le parc du Mémorial de la Paix et le dôme de Genbaku pour comprendre l'histoire de la ville, ainsi que de goûter les spécialités culinaires locales.",
    articleTop: false,
  },
  {
    id: 5,
    country: "Népal",
    city: "Annapurna, Narchyang",
    beginDate: new Date(2023, 3, 14).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    endDate: new Date(2023, 4, 17).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    image: "assets/nepal.png",
    galerie: [
      {
        title: "Nepal",
        image: "assets/nepal.png",

      },
      {
        title: "Nepal",
        image: "assets/nepal.png",

      },
      {
        title: "Nepal",
        image: "assets/nepal.png",

      },

    ],
    description: "Annapurna est une région de montagne dans le centre du Népal, connue pour ses paysages à couper le souffle et ses sentiers de randonnée populaires. Narchyang est un petit village pittoresque situé dans cette région, offrant une vue imprenable sur les montagnes environnantes. Si vous êtes un amoureux de la nature et que vous cherchez une expérience de trekking inoubliable, Annapurna est un endroit idéal à visiter.",
    negativePoints: [
      "Les moins",
      "Le trekking peut être difficile et fatigant, il est donc important d'être en bonne condition physique avant de partir.",
      "La région peut être sujette aux intempéries et aux avalanches en hiver, il est donc important de bien se renseigner sur les conditions météorologiques avant de partir en trekking.",
      "Le trekking peut être coûteux en raison des frais de permis et des guides nécessaires pour certains itinéraires.",
    ],
    positivePoints: [
      "Les plus",
      "Les paysages de montagne sont à couper le souffle et offrent une expérience inoubliable.",
      "Il y a plusieurs itinéraires de trekking à choisir en fonction de votre niveau d'expérience et de vos intérêts.",
      "Les gens locaux sont très accueillants et chaleureux, offrant une expérience culturelle unique.",
    ],
    tips: [
      "Mon conseil",
      "Assurez-vous d'être en bonne condition physique avant de partir en trekking, et d'apporter des vêtements chauds et imperméables pour faire face aux conditions météorologiques imprévisibles.",
    ],
    summary: "Le trek d'Annapurna dans le village de Narchyang est une expérience unique pour les amoureux de la nature et de l'aventure. Avec ses paysages à couper le souffle, ses sommets enneigés et ses vallées verdoyantes, ce trek est une occasion unique de découvrir les beautés naturelles du Népal. Les voyageurs pourront également découvrir la culture locale en visitant les villages traditionnels et en rencontrant les habitants. Cependant, il est important de se préparer physiquement et mentalement pour cette aventure, car les sentiers sont exigeants et les conditions peuvent être difficiles. En somme, le trek d'Annapurna à Narchyang est une expérience inoubliable pour les amateurs de randonnée et de découverte culturelle, mais il nécessite une bonne préparation et une bonne condition physique pour être apprécié pleinement.",
    articleTop: false,
  },
  {
    id: 6,
    country: "Islande",
    city: "Reykjavik",
    beginDate: new Date(2023, 3, 14).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    endDate: new Date(2023, 4, 17).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    image: "assets/iceland.png",
    galerie: [
      {
        title: "Iceland",
        image: "assets/iceland.png",

      },
      {
        title: "Nepal",
        image: "assets/iceland.png",

      },
      {
        title: "Nepal",
        image: "assets/iceland.png",

      },

    ],
    description: "L'Islande est une île située dans l'océan Atlantique Nord, célèbre pour ses paysages naturels étonnants, ses glaciers, ses geysers et ses sources chaudes. Reykjavik est la capitale islandaise, qui offre une expérience culturelle unique avec ses musées, ses galeries d'art, ses restaurants et ses bars. Si vous cherchez à découvrir la beauté naturelle et la culture islandaise, Reykjavik est l'endroit idéal à visiter.",
    negativePoints: [
      "Les moins",
      "Le climat peut être froid et venteux, il est donc important de s'habiller chaudement.",
      "Le coût de la vie en Islande peut être élevé, il est donc important de prévoir un budget suffisant.",
      "La conduite sur les routes de campagne peut être difficile et nécessite une bonne préparation et une bonne condition physique.",
    ],
    positivePoints: [
      "Les plus",
      "Les paysages naturels de l'Islande sont époustouflants, avec ses glaciers, ses geysers et ses sources chaudes.",
      "Reykjavik offre une expérience culturelle unique avec ses musées, ses galeries d'art, ses restaurants et ses bars.",
      "Les Islandais sont accueillants et chaleureux, offrant une expérience de voyage agréable.",
    ],
    tips: [
      "Mon conseil",
      "Prévoir des vêtements chauds et imperméables pour faire face aux conditions météorologiques imprévisibles de l'Islande. Pensez également à louer une voiture pour découvrir les paysages naturels incroyables de l'île.",
    ],
    summary: "L'Islande est un pays incroyable avec des paysages naturels époustouflants, des glaciers, des geysers et des sources chaudes. Reykjavik, la capitale islandaise, offre une expérience culturelle unique avec ses musées, ses galeries d'art, ses restaurants et ses bars. Les voyageurs peuvent découvrir la beauté naturelle de l'Islande en conduisant sur les routes de campagne ou en participant à des visites guidées. Les Islandais sont accueillants et chaleureux, offrant une expérience de voyage agréable. Cependant, il est important de se préparer aux conditions météorologiques imprévisibles de l'Islande en prévoyant des vêtements chauds et imperméables.",
    articleTop: false,
  },
  {
    id: 7,
    country: "Colombie",
    city: "Cartagena",
    beginDate: new Date(2023, 7, 1).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    endDate: new Date(2023, 7, 8).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    image: "assets/colombia.png",
    galerie: [
      {
        title: "Colombia",
        image: "assets/colombia.png",

      },
      {
        title: "Colombia",
        image: "assets/colombia.png",

      },
      {
        title: "Colombia",
        image: "assets/colombia.png",

      },

    ],
    description: "Cartagena est une ville portuaire située sur la côte caribéenne de la Colombie, connue pour sa beauté coloniale et son atmosphère animée. La ville est entourée de murailles du XVIIe siècle et de forts qui rappellent son passé tumultueux. Elle est également réputée pour ses plages de sable blanc, ses restaurants gastronomiques et ses rues colorées.",
    negativePoints: [
      "Les moins",
      "La ville peut être très touristique, ce qui peut rendre certaines attractions bondées et bruyantes.",
      "La chaleur peut être intense pendant la journée, il est donc important de s'hydrater régulièrement et de prendre des précautions contre le soleil.",
      "Il y a des quartiers de la ville qui peuvent être dangereux pour les touristes, il est donc important de se renseigner sur les zones sûres et d'être vigilant.",
    ],
    positivePoints: [
      "Les plus",
      "La ville est pleine de charme colonial et offre de nombreuses opportunités de découvrir l'histoire et la culture de la Colombie.",
      "Les plages de sable blanc et les eaux cristallines de la mer des Caraïbes sont uniques en leur genre et offrent une expérience de détente et de baignade inoubliable.",
      "La ville regorge de restaurants de fruits de mer frais et de plats typiques de la région, offrant une expérience culinaire riche en saveurs.",
    ],
    tips: [
      "Mon conseil",
      "Prenez le temps de vous promener dans les rues colorées de la vieille ville, de visiter les musées et les églises historiques, et de goûter aux plats locaux pour une expérience complète de la ville.",
    ],
    summary: "Cartagena est une ville colombienne pleine de charme colonial, avec des rues colorées, des plages de sable blanc et une scène culinaire dynamique. Les visiteurs peuvent découvrir l'histoire et la culture de la Colombie en visitant les musées et les églises historiques de la ville, tout en profitant des plages de la mer des Caraïbes et des restaurants de fruits de mer frais. Cependant, les touristes doivent être vigilants et se renseigner sur les zones sûres de la ville, car certaines zones peuvent être dangereuses. En somme, Cartagena est une destination de vacances passionnante pour les amateurs d'histoire, de culture, de plage et de gastronomie, offrant une expérience unique en Amérique latine.",
    articleTop: false,
  },
  {
    id: 8,
    country: "Myanmar",
    city: "Bagan",
    beginDate: new Date(2023, 7, 1).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    endDate: new Date(2023, 7, 8).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    image: "assets/myanmar.png",
    galerie: [
      {
        title: "Myanmar",
        image: "assets/myanmar.png",

      },
      {
        title: "Myanmar",
        image: "assets/myanmar.png",

      },
      {
        title: "Myanmar",
        image: "assets/myanmar.png",

      },

    ],
    description: "Bagan est une ville ancienne située dans la région de Mandalay en Birmanie, connue pour ses temples bouddhistes historiques et son atmosphère mystique. La ville est célèbre pour sa vaste plaine de temples, qui contient des milliers de pagodes et de stupas datant du 11ème siècle. La région de Bagan est également réputée pour ses couchers de soleil spectaculaires et ses ballons à air chaud qui survolent la plaine de temples au lever du soleil.",
    negativePoints: [
      "Les moins",
      "La ville peut être très touristique pendant la haute saison, ce qui peut rendre certains temples bondés et bruyants.",
      "Les températures peuvent être élevées pendant la journée, il est donc important de s'hydrater régulièrement et de porter des vêtements appropriés.",
      "Il y a des restrictions sur les vols en montgolfière pendant certaines périodes de l'année en raison des conditions météorologiques.",
    ],
    positivePoints: [
      "Les plus",
      "La région de Bagan offre une expérience unique pour les amateurs de culture et d'histoire, avec ses milliers de temples et ses traditions bouddhistes profondément enracinées.",
      "Les couchers de soleil et les ballons à air chaud offrent des vues spectaculaires de la plaine de temples et de la région environnante.",
      "Les habitants de Bagan sont connus pour leur hospitalité chaleureuse et leur accueil amical envers les visiteurs étrangers.",
    ],
    tips: [
      "Mon conseil",
      "Assurez-vous de visiter certains des temples les plus importants de la région de Bagan, tels que le temple Ananda et le temple Shwezigon, pour une expérience complète de la culture et de l'histoire de la région.",
    ],
    summary: "Bagan est une ville historique de la Birmanie, célèbre pour sa vaste plaine de temples bouddhistes datant du 11ème siècle et pour son atmosphère mystique. Les visiteurs peuvent découvrir la culture et l'histoire de la région en visitant les milliers de temples de la plaine, en observant les couchers de soleil spectaculaires et en faisant un tour en ballon à air chaud. Les habitants de Bagan sont connus pour leur hospitalité chaleureuse et leur accueil amical envers les visiteurs étrangers. Cependant, les touristes doivent être conscients des conditions météorologiques et des restrictions sur les vols en montgolfière pendant certaines périodes de l'année.",
    articleTop: false,
  },
  {
    id: 9,
    country: "Turquie",
    city: "Sultanahmet",
    beginDate: new Date(2023, 10, 1).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    endDate: new Date(2023, 10, 8).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    image: "assets/turquie.png",
    galerie: [
      {
        title: "Turquie",
        image: "assets/turquie.png",

      },
      {
        title: "Turquie",
        image: "assets/turquie.png",

      },
      {
        title: "Turquie",
        image: "assets/turquie.png",

      },

    ],
    description: "Sultanahmet est un quartier historique d'Istanbul, en Turquie, qui abrite certains des sites touristiques les plus célèbres de la ville. La place Sultanahmet est entourée de bâtiments anciens, tels que la Mosquée Bleue, le Palais de Topkapi et l'église Sainte-Sophie, qui témoignent de l'histoire riche et diversifiée de la ville. Le quartier est également réputé pour ses bazars animés, ses restaurants locaux et ses cafés traditionnels.",
    negativePoints: [
      "Les moins",
      "Le quartier peut être très touristique, ce qui peut rendre certains sites bondés et bruyants.",
      "Les prix peuvent être élevés dans les restaurants et les magasins pour touristes.",
      "La circulation peut être dense et chaotique dans les rues étroites du quartier, il est donc important d'être vigilant lorsque l'on se déplace à pied ou en voiture.",
    ],
    positivePoints: [
      "Les plus",
      "Le quartier est plein de charme et offre de nombreuses opportunités de découvrir l'histoire, la culture et la cuisine de la Turquie.",
      "Les sites historiques, tels que la Mosquée Bleue, l'église Sainte-Sophie et le Palais de Topkapi, sont incroyablement impressionnants et méritent d'être visités.",
      "Les bazars traditionnels, tels que le Grand Bazar et le Bazar aux épices, sont des endroits fascinants pour faire du shopping et découvrir la culture locale.",
    ],
    tips: [
      "Mon conseil",
      "Prenez le temps de vous promener dans les rues étroites du quartier, de goûter aux plats locaux et de boire du thé turc dans les cafés traditionnels pour une expérience complète de Sultanahmet.",
    ],
    summary: "Sultanahmet est un quartier historique d'Istanbul, en Turquie, connu pour ses sites touristiques célèbres, tels que la Mosquée Bleue, l'église Sainte-Sophie et le Palais de Topkapi. Les visiteurs peuvent découvrir l'histoire, la culture et la cuisine de la Turquie en explorant les bazars animés, les restaurants locaux et les cafés traditionnels du quartier.",
    articleTop: false,
  }
];

