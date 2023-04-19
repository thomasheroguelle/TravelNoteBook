export interface IArticle {
  id: number;
  country: string;
  city: string;
  beginDate: string;
  endDate: string;
  image: string;
  secondaryImages: string[];
  description: string;
  negativePoints: string[];
  positivePoints: string[];
  tips: string[];
  summary: string;
  articleTop: boolean,
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
    image: "assets/albanie.png",
    secondaryImages: [
      "assets/albanie.png"
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
  }
];

