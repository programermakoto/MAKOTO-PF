/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "株式会社KANOA GROUP設立",
    description: "",
    date: "2023-07-22",
    demoLink: "https://kanoa-group.com",
    blog: {
      title: "株式会社KANOA GROUP設立",
      content: `
        <p>2023年7月22日、株式会社KANOA GROUPを設立いたしました。</p>
        <p>私たちは、Web制作、オンラインスクール、通信事業など、多岐にわたる事業を展開しています。</p>
        <p>これからも皆様に価値あるサービスを提供してまいります。</p>
      `,
    },
  },
  {
    id: 2,
    name: "HP-CREATE",
    description: "Webサイト制作行っています。",
    date: "2025-12-07",
    demoLink: "https://kanoa-group.com/hp-create",
    blog: {
      title: "HP-CREATE - Webサイト制作サービス",
      content: `
        <p>HP-CREATEでは、お客様のビジネスに最適なWebサイトを制作いたします。</p>
        <p>私たちのサービス内容：</p>
        <ul>
          <li>あなたが叶えたいものすべて叶えます</li>
          <li>見てるサイトのクオリティーが全て</li>
        </ul>
        <p>お気軽にお問い合わせください。</p>
      `,
    },
  },
  {
    id: 3,
    name: "TikTokで料理を投稿中!",
    description: "詳しいレシピはこちら",
    date: "2022-09-10",
    demoLink: "/cooking",
    blog: {
      title: "TikTokで料理を投稿中！",
      content: `
        <p>毎日、簡単で美味しいレシピをTikTokで公開しています。</p>
        <p>初心者でも作れる料理から、本格的な料理まで幅広く紹介しています。</p>
        <p>ぜひフォローして、一緒に料理を楽しみましょう！</p>
        <p>詳しいレシピやコツも随時更新していますので、お楽しみに。</p>
      `,
    },
  },
  {
    id: 4,
    name: "GK-Uオンラインスクール",
    description: "社会人の大学！サブスク始めました",
    date: "2022-05-30",
    demoLink: "https://kanoa-group.com/gku",
    blog: {
      title: "GK-Uオンラインスクール - 社会人の大学",
      content: `
        <p>GK-Uオンラインスクールでは、社会人の方々がスキルアップできる環境を提供しています。</p>
        <p>サブスクリプションサービスを開始しました！</p>
        <h3>サービス内容：</h3>
        <ul>
          <li>全ビジネスのスキルが動画で学べる</li>
          <li>現役経営者や技術者に質問可能</li>
          <li>スクールがお金をお客さんに支払う仕組み</li>
          <li>案件がスキル不要で取得可能</li>
        </ul>
        <h3>報酬例：</h3>
        <ul>
          <li>公式LINEで提示されたブログ更新で3000円</li>
          <li>公式LINEで提示されたSNSに「コメント&いいね」で100円</li>
          <li>公式LINEで提示されたHP制作で20000円〜</li>
          <li>公式LINEで提示されたアプリ開発で100,000円〜</li>
          <li>公式LINEで提示された商品購入代行:1商品あたり100,000円〜</li>
        </ul>
      `,
    },
  },
  {
    id: 5,
    name: "通信事業メンバー募集",
    description: "月30万円貰いながら楽しくお仕事しよう",
    date: "2022-07-12",
    demoLink: "https://kanoa-group.com/optical-fiber",
    blog: {
      title: "通信事業メンバー募集",
      content: `
        <p>通信事業のメンバーを募集しています！</p>
        <p>月30万円を貰いながら、楽しくお仕事をしませんか？</p>
        <h3>募集要項：</h3>
        <ul>
          <li>未経験者歓迎</li>
          <li>在宅勤務可能</li>
          <li>フレキシブルな働き方</li>
          <li>充実したサポート体制</li>
        </ul>
        <p>興味のある方は、公式LINEまでお気軽にお問い合わせください。</p>
      `,
    },
  },
  
];

export const BtnList = [
  { label: "メイン画面", link: "/", icon: "home", newTab: false },
  { label: "寺内誠将", link: "/about", icon: "about", newTab: false },
  { label: "最新情報", link: "/projects", icon: "projects", newTab: false },
  { label: "公式LINE", link: "https://page.line.me/527qtybu?oat_content=url&openQrModal=true", icon: "contact", newTab: false },
  {
    label: "Le Repas MAKØTO's レシピ本",
    link: "/cooking",
    icon: "cooking",
    newTab: true,
  },
  {
    label: "TikTok【料理】",
    link: "https://www.tiktok.com/@only.eats.at.night?_r=1&_t=ZS-920ocNAK3tM",
    icon: "TikTok1",
    newTab: true,
  },
  {
    label: "TikTok【プログラミング】",
    link: "https://www.tiktok.com/@only.eats.at.night?_r=1&_t=ZS-920ocNAK3tM",
    icon: "TikTok2",
    newTab: true,
  },
  {
    label: "株式会社KANOA GROUP",
    link: "https:kanoa-group.com",
    icon: "kanoa",
    newTab: true,
  },
];


