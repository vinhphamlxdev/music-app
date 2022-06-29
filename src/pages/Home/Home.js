import React, { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";
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
import WrapperLayout from "~/components/wrapperLayout";
import Loading from "~/utils/Loading";
import { useDispatch } from "react-redux";
import { setBgHeader } from "~/redux-toolkit/global/globalSlice";
const Home = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [dataHome, setDataHome] = useState([]);
  const containerElm = useRef(null);

  async function fetchDataHome(pageNumber) {
    const res = await axios.get(
      `https://server-zing.vercel.app/api/home/${pageNumber}`
    );
    console.log(res);
    if (!res.data) return null;
    const {
      data: { items },
    } = res.data;

    setDataHome((item) => [...item, ...items]);
    setLoading(true);
    console.log("data home:", dataHome);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchDataHome(pageNumber);
    if (containerElm.current) {
      containerElm.current.onscroll = () => {
        const scrollValue =
          containerElm.current.scrollY || containerElm.current.scrollTop;
        if (scrollValue > 10) {
          dispatch(setBgHeader(true));
        } else {
          dispatch(setBgHeader(false));
        }
      };
    }
  }, [pageNumber]);
  const loadMore = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };
  const pageEnd = useRef(null);
  let num = 1;
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          console.log("entries:", entries[0]);
          if (entries[0].isIntersecting) {
            num++;
            loadMore();
            if (num >= 5) {
              observer.unobserve(pageEnd.current);
              setLoading(false);
            }
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading, num]);
  return (
    <WrapperLayout ref={containerElm}>
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
      {/* <button ref={pageEnd} onClick={loadMore} className="text-4xl text-white">
        LoadMore
      </button> */}
      {loading && <Loading ref={pageEnd} />}
    </WrapperLayout>
  );
};

export default Home;
