import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ArtistBanner from "~/components/artistBanner";
import Banner from "~/components/banner";
import Chart from "~/components/chart";
import Event from "~/components/event";
import NewRelease from "~/components/newRelease";
import Playlist from "~/components/playlist/Playlist";
import RadioList from "~/components/radio";
import WeekChart from "~/components/weekChart";
import Mix from "~/components/mix";
import ArtistFavorist from "~/components/artistsFavorist";
import Partner from "~/components/partner";

const Home = () => {
  const [dataHome, setDataHome] = useState([]);
  const [page, setPage] = useState(5);
  useEffect(() => {
    async function fetchDataHome() {
      const res = await axios.get(
        `https://music-player-pink.vercel.app/api/home?page=5`
      );
      if (!res.data) return null;
      const {
        data: { items },
      } = res.data;

      setDataHome(items);
      console.log("Ket qua:", dataHome);
    }
    fetchDataHome();
  }, []);
  return (
    <div className="wrapper">
      {dataHome.map((item, index) => {
        const { sectionType, sectionId } = item;

        if (sectionType === "banner") {
          return <Banner key={`${index}${sectionId}`} data={{ ...item }} />;
        } else if (sectionType === "playlist") {
          return <Playlist key={`${index}${sectionId}`} data={{ ...item }} />;
        } else if (sectionType === "livestream") {
          return <RadioList key={`${index}${sectionId}`} data={{ ...item }} />;
        } else if (sectionType === "RTChart") {
          return <Chart key={`${index}${sectionId}`} data={{ ...item }} />;
        } else if (sectionType === "weekChart") {
          return <WeekChart key={`${index}${sectionId}`} data={{ ...item }} />;
        } else if (sectionType === "artistSpotlight") {
          return (
            <ArtistBanner key={`${index}${sectionId}`} data={{ ...item }} />
          );
        } else if (sectionType === "event") {
          return <Event key={`${index}${sectionId}`} data={{ ...item }} />;
        } else if (sectionType === "newReleaseChart") {
          return <NewRelease key={`${index}${sectionId}`} data={{ ...item }} />;
        } else if (sectionType === "mix") {
          return (
            <Fragment key={`${index}${sectionId}`}>
              <Mix data={{ ...item }} />
              <ArtistFavorist></ArtistFavorist>
              <Partner />
            </Fragment>
          );
        }
      })}
    </div>
  );
};

export default Home;
