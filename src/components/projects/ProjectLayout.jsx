"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import BlogModal from "./BlogModal";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({ name, description, date, demoLink, blog }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (blog) {
      setIsModalOpen(true);
    } else if (demoLink) {
      window.open(demoLink, "_blank");
    }
  };

  return (
    <>
      <motion.button
        variants={item}
        onClick={handleClick}
        className="text-sm md:text-base md:flex items-center justify-between flex-row w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg cursor-pointer hover:shadow-glass-sm transition-shadow"
      >
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground">{name}</h2>
          <p className=" text-muted hidden sm:inline-block">{description}</p>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-muted sm:text-foreground ">
          {new Date(date).toDateString()}
        </p>
      </motion.button>

      {blog && (
        <BlogModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          blog={blog}
          demoLink={demoLink}
        />
      )}
    </>
  );
};

export default ProjectLayout;
