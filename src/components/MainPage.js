import React from "react";
import AboutPage from "./AboutPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import PaperPage from "./PaperPage";
import Semester from "./Semester";
import NavbarSection from "./NavbarSection";
import Footer from "./Footer";
import Subject from "./Subject";

const MainPage = () => {
  return (
    <>
      <NavbarSection/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/paper" element={<PaperPage />} />
        <Route path="/semester" element={<Semester />} />
        <Route path="/subject" element={<Subject />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default MainPage;
