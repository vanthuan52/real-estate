import React from "react";
import styles from "./page.module.scss";
import Banner from "@/components/Banner/Banner";
import Introduction from "@/components/Introduction/Introduction";
import Location from "@/components/Location/Location";
import Collection from "@/components/Collection/Collection";
import Feature from "@/components/Feature/Feature";

const ProjectPage = () => {
  return (
    <>
      <Banner />
      <Introduction />
      <Location />
      <Collection />
      <Feature />
    </>
  );
};

export default ProjectPage;
