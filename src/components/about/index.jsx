import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Grid from "./grid";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-sm md:text-2xl text-left w-full capitalize">
            Founder of KANOA GROUP Co., Ltd.
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            私のWeb開発の歩みは、常にJavaScriptに支えられてきました。
            React.js や Next.js といったフレームワークを精密に扱い、デジタル空間の多様な領域（ユーザー）をつなぐシームレスなポータル（Webサイト）を構築しております。
            <br></br><br></br>
            23歳で会社を設立して以来、「ホームページ制作事業」「システム開発事業」「宅内光ファイバー開通事業」を基盤に、「営業代行」などの事業も展開し、現在に至ります。
            創業当初から変わらない私たちのVisionは、KANOA GROUPおよび私（寺内誠将）に関わるすべてのお客様・仲間が、創造と挑戦を通じて “これは面白い！” を生み出し、自由を広げていくことです。
            <br></br> <br></br>
            また、会社経営やエンジニアとしての活動に加え、「料理アカウント」や「経理・個人事業主・法人の税金対策・プログラミング・動画編集・UI/UXデザイン・Webマーケティングのオンラインスクール」なども運営しております。
            ぜひ、当サイト内の各ページをご覧いただけますと幸いです。</p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">クライアント</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">IT経験年数</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <div className="text-center p-3">
            <h2 className="py-2   text-xl  capitalize">IT事業としての実績</h2>
            <p className="text-sm">個人事業主&法人での制作したホームページ一覧</p>
            <br></br>

            <Link href="https://github.com/programermakoto" className="border rounded-3xl block m-2 border-solid hover:bg-gray-900 hover:text-white border-white py-2 px-4">GitHubで確認</Link>
            <Link href="https://kanoa-group.com/hp-create" className="border rounded-3xl m-2 block border-solid hover:bg-gray-900 hover:text-white border-white px-4 py-2">会社HPで確認</Link>

          </div>

        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <div className=" p-3 flex justify-center items-center">
            <div className="py-10">
              <h2 className="py-2 text-center  text-xl  capitalize">どんな会社？？</h2>
              <p className="text-sm py-3"><span className="text-xl block text-left">【IT教育】</span>・プログラミングスクール・アプリ教育[GK-U]</p>
              <p className="text-sm py-3"><span className="text-xl block text-left">【WEB制作】</span>・ホームページ制作・システム・アプリ開発</p>
              <p className="text-sm py-3"><span className="text-xl block text-left">【通信インフラ】</span>・宅内光ファイバー業務・電気通信工事</p>
              <Link href="https://kanoa-group.com" className="border block rounded-3xl  border-solid hover:bg-gray-900 hover:text-white border-white my-10 px-4 py-2">株式会社KANOA GROUPのHPを確認</Link>
            </div>
          </div>

        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <div className=" p-3">
            <h2 className="py-4 text-center  text-xl  capitalize">こんなことできたらいいな💭</h2>
            <div className="space-y-3">
              <p className="text-sm">・料理のプロと繋がりTikTok更新やお店の紹介させて貰えば喜びます</p>
              <p className="text-sm">・通信事業(30万の固定給)社員さん募集！紹介してもらうと喜びます</p>
              <p className="text-sm">・当社に投資：一口10万円の一回のみの投資で月々3000円の配当</p>
              <p className="text-sm">・副業でスキルなしでの商品購入代行できる人材紹介で喜びます</p>
              <p className="text-sm">・個人事業主・人材紹介業の方・ゴルフ好きの紹介で喜びます</p>
              <p className="text-sm">・Webサイト/アプリ開発/動画編集の依頼を貰うと喜びます</p>
              <p className="text-sm">・自社でアパレル販売をしたい〜！笑</p>
            </div>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Grid />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>

          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full block"
          >
            <div className="text-center p-3">
              <h2 className="py-2   text-xl  capitalize">GK-Uオンラインスクールサービス</h2>
              <p className="text-sm">全ビジネスのスキルが
              <br className="sm:hidden"></br>動画で学べ&現役経営者や技術者に質問可能。<br></br>更にスクールがお金をお客さんに<br className="sm:hidden"></br>支払う仕組み=案件がスキル不要で取得可能</p>
              <br className="sm:hidden"></br>
              <hr></hr>
              <br className="sm:hidden"></br>
              <ul className="p-5 text-left space-y-2">
                <li>・公式LINEで提示されたブログ更新で3000円</li>
                <li>・公式LINEで提示されたSNSに「コメント&いいね」で100円</li>
                <li>・公式LINEで提示されたHP制作で20000円〜</li>
                <li>・公式LINEで提示されたアプリ開発で100,000円〜</li>
                <li>・公式LINEで提示された商品購入代行:1商品あたり100,000円〜</li>
              </ul>

              <small>詳細はClick📍</small>


            </div>
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
