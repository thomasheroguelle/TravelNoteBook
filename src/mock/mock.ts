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
        image: "assets/New-Zeland/1.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/2.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/3.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/4.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/5.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/6.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/7.jpg",

      },
      {
        title: "Nouvelle-Zeland",
        image: "assets/New-Zeland/8.jpg",

      },

    ],
    description: "La Nouvelle-Zélande est une destination de rêve pour les amoureux de la nature et les aventuriers. Les paysages sont à couper le souffle, avec des montagnes majestueuses, des fjords spectaculaires et des plages de sable blanc. \n\n Vous pourrez explorer les nombreux parcs nationaux, comme le célèbre parc national de Fiordland, ou encore les glaciers de la côte ouest. Vous pourrez également découvrir les villes dynamiques, comme Auckland et Wellington, qui offrent une vie culturelle riche et animée. Les amateurs de sports de plein air seront comblés par les nombreuses activités proposées, comme la randonnée, le kayak, le ski, le surf et bien d'autres encore. La Nouvelle-Zélande est également célèbre pour sa cuisine délicieuse, qui met en avant les produits locaux, comme les fruits de mer, les viandes et les vins.  \n\n Venez découvrir la Nouvelle-Zélande et vous serez certainement émerveillé par la beauté de ce pays unique au monde.",
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
    summary: "Le mont Taranaki est un lieu incroyable pour les amateurs de randonnée et de paysages à couper le souffle. Avec ses nombreux itinéraires de randonnée pour tous les niveaux et ses activités de plein air variées, il y a toujours quelque chose à faire pour s'amuser.  \n\n Cependant, il est important de se préparer pour le froid et la difficulté physique de la randonnée en montagne. Mon conseil serait donc de s'assurer d'avoir des vêtements chauds et de commencer avec une randonnée plus facile si vous êtes novice en la matière.",
    articleTop: false,
  },
  {
    id: 2,
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
        image: "assets/Iran/1.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/2.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/3.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/4.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/5.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/6.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/7.jpg",

      },
      {
        title: "Iran",
        image: "assets/Iran/8.jpg",

      },

    ],
    description: "Shiraz est une ville historique située dans la province de Fars, en Iran.Elle est connue pour être la ville natale de nombreux poètes iraniens célèbres tels que Hafez et Saadi. \n\n La ville regorge également de magnifiques jardins persans, de mosquées et de bâtiments historiques, notamment la forteresse de Karim Khan et le mausolée de Shah-e Cheragh.",
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
    summary: "Shiraz est une ville historique en Iran, riche en histoire et en culture. Avec ses magnifiques jardins persans, ses bâtiments historiques et ses mosquées, la ville offre de nombreuses attractions touristiques. \n\n Il est important de respecter les coutumes et les croyances locales en raison de la forte influence religieuse dans la ville. Assurez-vous d'avoir des vêtements légers et respirants pour vous protéger du soleil et de la chaleur en été, et ne manquez pas de goûter la nourriture locale délicieuse. Mon conseil serait de visiter également les montagnes et les vignobles environnants pour profiter de belles vues panoramiques.",
    articleTop: false,
  },
  {
    id: 3,
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
        image: "assets/Japon/1.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/2.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/3.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/4.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/5.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/6.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/7.jpg",

      },
      {
        title: "Japon",
        image: "assets/Japon/8.jpg",

      },

    ],
    description: "Hiroshima est une ville japonaise qui a une histoire riche et complexe. Elle a été le théâtre d'un événement tragique qui a marqué l'histoire de l'humanité. Cependant, la ville a surmonté cette épreuve et a su se reconstruire pour devenir un lieu de paix et de réconciliation. Aujourd'hui, Hiroshima est une destination touristique populaire qui offre une culture fascinante, une cuisine délicieuse et une architecture unique. \n\n Venez découvrir cette ville vibrante et laissez-vous surprendre par son charme. Vous pourrez visiter le Parc de la Paix, qui abrite le célèbre Dôme de Genbaku, symbole de la destruction de la ville. Vous pourrez également découvrir les nombreux musées, temples et sanctuaires de la ville, ainsi que les marchés animés et les restaurants proposant des spécialités locales. Vous serez émerveillé par la beauté de la ville et touché par l'esprit de réconciliation qui y règne. Venez découvrir Hiroshima et vous serez certainement séduit par cette ville fascinante.",
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
    summary: "Hiroshima est une ville japonaise chargée d'histoire et de mémoire, connue pour avoir été détruite par une bombe atomique lors de la Seconde Guerre mondiale. Aujourd'hui, la ville offre une culture fascinante, des attractions touristiques variées et une cuisine locale délicieuse. \n\n Cependant, les sites commémoratifs peuvent être émotionnellement difficiles pour certaines personnes et la ville peut être coûteuse pour les voyageurs avec un budget serré. Mon conseil serait donc de visiter le parc du Mémorial de la Paix et le dôme de Genbaku pour comprendre l'histoire de la ville, ainsi que de goûter les spécialités culinaires locales.",
    articleTop: false,
  },
  {
    id: 4,
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
    description: " L'Albanie est une destination touristique émergente avec des plages de sable fin, des montagnes majestueuses et une culture riche. Les habitants sont accueillants et la cuisine est délicieuse. Bien que le pays ait connu des difficultés économiques et politiques, il se redresse et devient une destination touristique de plus en plus populaire. \n\n Les voyageurs peuvent explorer des sites archéologiques, des villes historiques et des parcs nationaux. Les prix sont abordables et la nature est préservée. L'Albanie est un joyau caché des Balkans qui mérite d'être découvert.",    
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
    summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. \n\n Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
    articleTop: true,
  },

];

