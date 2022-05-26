import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import ArtistBiography from "~/components/artistBiography";
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
  const fetchDataSinger = async () => {
    try {
      const res = await axios.get(
        `https://music-player-pink.vercel.app/api/artist?name=sontungMTP`
      );
      const { data } = res.data;
      // console.log(res.data);
      if (!data) return;
      setSingerData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDataSinger();
  }, []);
  console.log(singerData);
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
      <StyledArtistDetails className="wrapper">
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
          }
        })}
      </StyledArtistDetails>
    </Fragment>
  );
};

export default ArtistDetails;
