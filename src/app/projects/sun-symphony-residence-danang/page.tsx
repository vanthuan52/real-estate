import React from "react";
import Banner from "@/components/Banner/Banner";
import Introduction from "@/components/Introduction/Introduction";
import Location from "@/components/Location/Location";
import Collection from "@/components/Collection/Collection";
import Feature from "@/components/Feature/Feature";
import Layout from "@/components/Layout/Layout";
import Amenity from "@/components/Amenity/Amenity";
import Infrastructure from "@/components/Infrastructure/Infrastructure";
import Policy from "@/components/Policy/Policy";

const ProjectPage = () => {
  return (
    <>
      <Banner />
      <Introduction />
      <Location />
      <Collection />
      <Amenity />
      <Infrastructure />
      <Feature />
      <Layout />
      <Policy />
    </>
  );
};

export default ProjectPage;
