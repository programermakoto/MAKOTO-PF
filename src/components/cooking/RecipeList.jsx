"use client";
import { useState } from "react";
import { recipesData } from "./recipesData";
import RecipeCard from "./RecipeCard";
import RecipeDetail from "./RecipeDetail";

export default function RecipeList() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <>
      {/* レシピ一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipesData.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={() => handleRecipeClick(recipe)}
          />
        ))}
      </div>

      {/* 空の状態 */}
      {recipesData.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-lg">
            レシピを準備中です。お楽しみに！
          </p>
        </div>
      )}

      {/* レシピ詳細モーダル */}
      <RecipeDetail
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

