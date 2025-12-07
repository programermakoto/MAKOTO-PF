"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const BlogModal = ({ isOpen, onClose, blog, demoLink }) => {
  if (!blog) return null;

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
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-bg rounded-lg p-6 md:p-8">
              {/* 閉じるボタン */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-foreground hover:text-accent transition-colors"
                aria-label="閉じる"
              >
                <X size={24} />
              </button>

              {/* ブログコンテンツ */}
              <div className="max-w-none">
                <h1 className="text-xl md:text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {blog.title}
                </h1>
                <div
                  className="text-foreground/90 space-y-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_li]:mb-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-4 [&_h3]:text-foreground"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                {demoLink && (
                  <div className="mt-6 pt-6 border-t border-accent/30">
                    <Link
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-accent/20 hover:bg-accent/30 text-foreground rounded-lg transition-colors border border-accent/30"
                    >
                      詳細を見る
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BlogModal;

