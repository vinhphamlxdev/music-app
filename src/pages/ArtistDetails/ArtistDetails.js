import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import ArtistBanner from "~/components/artistBanner";
import ArtistBiography from "~/components/artistBiography";
import MvArtist from "~/components/mv";
import Playlist from "~/components/playlist/Playlist";
import WrapperLayout from "~/components/wrapperLayout";
import SongSection from "./song";

const StyledArtistDetails = styled.div`
  padding-top: 110px;
  .artist__container-info {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding-left: 14px;
    padding-right: 14px;
    column-gap: 28px;
  }
  .title {
    color: ${(props) => props.theme.textPrimary};
  }
  .biography {
    color: ${(props) => props.theme.textPrimary};
  }
  .play-btn {
    font-size: 14px;
    padding: 9px 24px;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
const ArtistDetails = () => {
  const [singerData, setSingerData] = useState([]);
  const dispatch = useDispatch();
  const fetchDataSinger = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/artist?name=huongly`
      );
      const { data } = res.data;
      if (!data) return;
      setSingerData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDataSinger();
  }, []);
  const {
    name,
    thumbnail,
    sections,
    topAlbum,
    biography,
    awards,
    sortBiography,
    totalFollow,
    thumbnailM,
  } = singerData;
  return (
    <Fragment>
      <WrapperLayout>
        <StyledArtistDetails>
          <ArtistBiography
            data={{
              name,
              thumbnail,
              sortBiography,
              totalFollow,
              topAlbum,
              awards,
              biography,
              thumbnailM,
            }}
          ></ArtistBiography>
          {sections?.map((item, index) => {
            const { sectionType, title } = item;
            if (sectionType === "song") {
              return (
                <SongSection
                  key={`${title}${index}`}
                  data={{ ...item }}
                ></SongSection>
              );
            } else if (sectionType === "playlist") {
              return <Playlist key={`${title}${index}`} data={{ ...item }} />;
            } else if (sectionType === "artist") {
              return (
                <ArtistBanner key={`${title}${index}`} data={{ ...item }} />
              );
            } else if (sectionType === "video") {
              return <MvArtist key={`${title}${index}`} data={{ ...item }} />;
            }
          })}
        </StyledArtistDetails>
      </WrapperLayout>
    </Fragment>
  );
};

export default ArtistDetails;
