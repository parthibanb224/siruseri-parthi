import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Overview from "./components/Overview";
import Walkin from "./components/Walkin";
import PriceDetails from "./components/PriceDetails";
import Gallery from "./components/Gallery";
import WalkThrough from "./components/WalkThrough";
import LocationAdvantages from "./components/LocationAdvantages";
import Form from "./components/Form";
import FloorPlan from "./components/FloorPlan";
import EnquiryFormPopup from "./components/EnquiryFormPopup";
import Slideshow from "./components/Slider";
import FooterSection from "./components/Footer";
import AboutUrbanrise from "./components/AboutUrbanrise";

export const getUtmParams = (pageQueryParams) => {
  const source = pageQueryParams?.utm_source || "Direct Traffic";
  const medium = pageQueryParams?.utm_medium;
  const campaign = pageQueryParams?.utm_campaign;
  const content = pageQueryParams?.utm_content;
  const houseSize = pageQueryParams?.utm_ad;
  // const ad = pageQueryParams?.utm_ad;

  return {
    source,
    medium,
    campaign,
    content,
    houseSize,
    // ad,
  };
};

const sources = {
  text: "Google-Text",
  desc: "Google-DG",
};

export default function Home() {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+91 9811574070");
  const router = useRouter();

  useEffect(() => {
    const pageQueryParams = router?.query;
    const urlParams = getUtmParams(pageQueryParams);
    const source = urlParams?.source?.toLowerCase();
    const desc = sources?.desc.toLowerCase();
    if (source === desc) {
      setPhoneNumber("+91 8585971020");
    } else {
      setPhoneNumber("+91 9811574070");
    }
  }, [router?.query]);
  return (
    <>
      <Head>
        <title>The World Of Joy</title>
        <meta name="Opus 96" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/OG-Images/OG.png" />
      </Head>
      <EnquiryFormPopup
        openEnquiry={openEnquiry}
        setOpenEnquiry={setOpenEnquiry}
      />
      <Navbar />
      <HeroSection />
      <Overview />
      <Slideshow />
      <Walkin />
      <PriceDetails setOpenEnquiry={setOpenEnquiry} />
      <FloorPlan />
      <WalkThrough />
      <Gallery />
      <LocationAdvantages />
      <AboutUrbanrise />
      <Form />
      <FooterSection />
    </>
  );
}
