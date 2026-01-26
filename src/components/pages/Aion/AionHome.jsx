import { useState, useEffect } from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AionHero from "./AionHero";
import AionServices from "./AionServices";
import AionGallery from "./AionGallery";
import "./aion.css";

const AionHome = () => {
  return (
    <>
      <AionHero />
      <AionServices />
      <AionGallery />
    </>
  );
};

export default AionHome;
