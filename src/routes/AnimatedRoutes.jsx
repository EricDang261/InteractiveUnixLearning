import React from "react";

import FileManagement from "./FileManagement";
import DirectoryManagement from "./DirectoryManagement";
import Environ from "./Environ";

import { FlashcardComp } from "../components";

import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/dirManage" element={<DirectoryManagement />}></Route>
        <Route path="/fileManage" element={<FileManagement />}></Route>
        <Route path="/flashcard" element={<FlashcardComp />}></Route>
        <Route path="/environ" element={<Environ />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
