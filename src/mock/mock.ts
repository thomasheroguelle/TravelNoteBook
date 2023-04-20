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
    image: "assets/New-Zeland/Taranaki.jpg",
    galerie: [
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/Taranaki.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/Taranaki.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/Taranaki.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/Taranaki.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/Taranaki.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/Taranaki.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/Taranaki.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/Taranaki.jpg",

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
    image: "assets/Iran/Shiraz.jpg",
    galerie: [
      {
        title: "Iran",
        image: "assets/Iran/Shiraz.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/Shiraz.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/Shiraz.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/Shiraz.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/Shiraz.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/Shiraz.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/Shiraz.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/Shiraz.jpg",

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
    image: "assets/Japon/Hiroshima.jpg",
    galerie: [
      {
        title: "Japon",
        image: "assets/Japon/Hiroshima.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/Hiroshima.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/Hiroshima.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/Hiroshima.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/Hiroshima.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/Hiroshima.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/Hiroshima.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/Hiroshima.jpg",

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

];

