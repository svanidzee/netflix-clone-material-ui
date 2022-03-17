import Head from "next/head";

import Box from "@mui/material/Box";

import Navbar from "../components/navbr/navbar";
import Banner from "../components/banner/banner";
import Card from "../components/card/card";
import SectionCards from "../components/card/section-card";

import { getVideos } from "../lib/videos";

export async function getServerSideProps() {
  const disneyVideos = getVideos();

  return { props: { disneyVideos } };
}

export default function ({ disneyVideos }) {
  console.log({ disneyVideos });
  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar username="svanidzeee@gmail.com" />
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <Box
        sx={{
          mt: "1.5rem",
        }}
      >
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Disney" videos={disneyVideos} size="medium" />
      </Box>
    </Box>
  );
}
