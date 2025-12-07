import Image from "next/image";
import bg from "../../../public/background/projects-background.png";
import { ChefHat } from "lucide-react";
import CookingContent from "@/components/cooking/CookingContent";

export const metadata = {
  title: "Le Repas MAKØTO's レシピ",
};

export default function CookingPage() {
  return (
    <>
      <Image
        src={bg}
        alt="料理レシピページの背景画像"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4 gap-2 sm:gap-4">
              <ChefHat size={36} className="sm:w-12 sm:h-12 text-accent" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Le Repas MAKØTO&apos;s レシピ
              </h1>
            </div>
            <p className="text-muted text-sm sm:text-base md:text-lg mt-2 sm:mt-4 px-4">
              簡単で美味しいレシピを更新中！
            </p>
          </div>

          <CookingContent />
        </div>
      </div>
    </>
  );
}
