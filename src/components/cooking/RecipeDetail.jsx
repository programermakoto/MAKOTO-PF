"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, MessageCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";

const RecipeDetail = ({ recipe, isOpen, onClose }) => {
  if (!recipe) return null;

  const officialLineUrl =
    "https://page.line.me/527qtybu?oat_content=url&openQrModal=true";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* オーバーレイ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* モーダル */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-bg rounded-lg p-4 sm:p-5 md:p-6 lg:p-8">
              {/* 閉じるボタン */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-foreground hover:text-accent transition-colors z-10"
                aria-label="閉じる"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* レシピコンテンツ */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground pr-8 sm:pr-10">
                  {recipe.name}
                </h1>

                {/* 材料 */}
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 border-b border-accent/30 pb-2">
                    材料
                  </h2>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="text-sm sm:text-base text-foreground/90 flex items-start"
                      >
                        <span className="text-accent mr-2">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* 作り方 */}
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 border-b border-accent/30 pb-2">
                    作り方
                  </h2>
                  <ol className="space-y-3 sm:space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li
                        key={index}
                        className="text-sm sm:text-base text-foreground/90 flex items-start"
                      >
                        <span className="text-accent font-bold mr-2 sm:mr-3 min-w-[1.5rem] sm:min-w-[2rem]">
                          {index + 1}.
                        </span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* 参考動画リンク */}
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 border-b border-accent/30 pb-2">
                    参考動画
                  </h2>
                  <Link
                    href={recipe.tiktokLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-accent/20 hover:bg-accent/30 text-foreground rounded-lg transition-colors border border-accent/30"
                  >
                    <ExternalLink size={18} className="sm:w-5 sm:h-5 mr-2" />
                    TikTokで動画を見る
                  </Link>
                </section>

                {/* コメント・質問案内 */}
                <section className="bg-background/40 rounded-lg p-4 sm:p-5 md:p-6 border border-accent/20">
                  <div className="flex items-start">
                    <MessageCircle size={20} className="sm:w-6 sm:h-6 text-accent mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        感想や質問はこちら
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/80 mb-3 sm:mb-4">
                        このレシピについての感想や質問、作り方のコツなど、お気軽にコメントしてください！
                      </p>
                      <Link
                        href={recipe.tiktokLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm sm:text-base text-accent hover:text-accent/80 transition-colors"
                      >
                        TikTokのコメント欄へ
                        <ExternalLink size={14} className="sm:w-4 sm:h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </section>

                {/* 公式LINE案内 */}
                <section className="bg-background/40 rounded-lg p-4 sm:p-5 md:p-6 border border-accent/20">
                  <div className="flex items-start">
                    <ShoppingBag size={20} className="sm:w-6 sm:h-6 text-accent mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        店舗紹介や商品の依頼
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/80 mb-3 sm:mb-4">
                        店舗紹介や商品の依頼、その他のお問い合わせは公式LINEからお気軽にご連絡ください。
                      </p>
                      <Link
                        href={officialLineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-accent/20 hover:bg-accent/30 text-foreground rounded-lg transition-colors border border-accent/30"
                      >
                        公式LINEへ
                        <ExternalLink size={14} className="sm:w-4 sm:h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RecipeDetail;

