import React, { useState, useEffect, useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FlashcardList, FlashcardData, ValueContext } from "../";

const FlashcardComp = () => {
  const [flashcards, setFlashcards] = useState(FlashcardData);
  const [categories, setCategories] = useState([]);

  const context = useContext(ValueContext);

  useEffect(() => {
    fetch("./flashcard.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(
          Object.keys(data).map(function (value) {
            return data[value];
          })
        );
        setCategories(
          Object.keys(data).map(function (value) {
            return data[value];
          })
        );

        if (context.value === "All") {
          setFlashcards(FlashcardData);
        }

        if (context.value === "Unix-intro") {
          setFlashcards(categories[0]);
        }
        if (context.value === "File-management") {
          setFlashcards(categories[1]);
        }
        if (context.value === "Environment") {
          setFlashcards(categories[2]);
        }
        if (context.value === "Directory Management") {
          setFlashcards(categories[3]);
        }
      });
  }, [context.value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <FaHome className="home_link" style={{ fontSize: "2rem" }} />
      </Link>
      <FlashcardList flashcards={flashcards} />
    </motion.div>
  );
};

export default FlashcardComp;
