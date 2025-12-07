"use client";
import { motion } from "framer-motion";
import { Clock, ExternalLink } from "lucide-react";

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="custom-bg rounded-lg p-4 sm:p-5 md:p-6 cursor-pointer transition-all"
    >
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 line-clamp-2">
        {recipe.name}
      </h3>
      <div className="flex items-center text-muted text-xs sm:text-sm mb-3 sm:mb-4">
        <Clock size={14} className="sm:w-4 sm:h-4 mr-2" />
        <span>{new Date(recipe.date).toLocaleDateString("ja-JP")}</span>
      </div>
      <div className="flex items-center justify-between mt-3 sm:mt-4">
        <span className="text-xs sm:text-sm text-muted">
          {recipe.ingredients.length}種類の材料
        </span>
        <ExternalLink size={14} className="sm:w-4 sm:h-4 text-accent" />
      </div>
    </motion.div>
  );
};

export default RecipeCard;

