import React from "react";

import Introduction from "@/components/SunSymphony/Introduction/Introduction";
import Location from "@/components/SunSymphony/Location/Location";
import Feature from "@/components/SunSymphony/Feature/Feature";
import Layout from "@/components/SunSymphony/Layout/Layout";
import Infrastructure from "@/components/SunSymphony/Infrastructure/Infrastructure";
import Policy from "@/components/SunSymphony/Policy/Policy";
import Banner from "@/components/SunSymphony/Banner/Banner";
import Amenity from "@/components/SunSymphony/Amenity/Amenity";
import Collection from "@/components/SunSymphony/Collection/Collection";

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
