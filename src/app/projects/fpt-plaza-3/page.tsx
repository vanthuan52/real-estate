import React from "react";

import AboutUs from "@/components/FptPlaza3/AboutUs/AboutUs";
import Projects from "@/components/FptPlaza3/Projects/Projects";
import Expertise from "@/components/FptPlaza3/Expertise/Expertise";
import Stories from "@/components/FptPlaza3/Stories/Stories";
import FAQs from "@/components/FptPlaza3/FAQs/FAQs";
import Hero from "@/components/FptPlaza3/Hero/Hero";

const ProjectPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Projects />
      <Expertise />
      <Stories />
      <FAQs />
    </>
  );
};

export default ProjectPage;
