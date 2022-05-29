import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import styled from "styled-components";
import Button from "~/components/button";
import Icon from "~/components/Icon";
import { BsFillHeartFill } from "react-icons/bs";
import Tippy from "@tippyjs/react";
import ConvertNumber from "~/utils/ConvertNumber";
import SongAlbum from "./songAlbum";
import ConvertDates from "~/utils/ConvertDates";
import ArtistBanner from "~/components/artistBanner";
const StyledAlbum = styled.div`
  .album-content {
    display: flex;
    column-gap: 28px;
  }
  .album-card-image {
    transition: border-radius 2s ease-out;
    & .z-thumb {
      box-shadow: 0 5px 8px 0 rgb(0 0 0 / 20%);
      overflow: hidden;
      border-radius: 8px;
      overflow: hidden;
      &:hover img {
        transform: scale(1.1) translateZ(0);
      }
    }
    &:hover .album-action {
      visibility: visible;
    }
  }
  .album__content-title {
    color: ${(props) => props.theme.textPrimary};
  }
  .like,
  .artists,
  .release {
    color: ${(props) => props.theme.textSecondary};
    font-size: 12px;
    line-height: 1.75;
  }
  .artists {
    cursor: pointer;
    & span:hover {
      color: ${(props) => props.theme.linkTextHover};
      text-decoration: underline;
    }
  }
  .add-library {
    color: ${(props) => props.theme.purplePrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background-color: ${(props) => props.theme.alphaBg};
    margin-right: 10px;
  }
  .dot-btn {
    color: ${(props) => props.theme.textPrimary};
  }
  & .description {
    color: ${(props) => props.theme.textPrimary};
    span {
      color: ${(props) => props.theme.textSecondary};
    }
  }
  .select-header {
    border-bottom: 1px solid ${(props) => props.theme.borderSecondary};
    padding: 10px;
    border-radius: 5px;
    user-select: none;
    height: 46px;
  }
  .sort-btn {
    color: ${(props) => props.theme.textSecondary};
    border: 1px solid ${(props) => props.theme.textSecondary};
    border-radius: 2px;
    padding: 1px;
  }
  .column-text {
    color: ${(props) => props.theme.textSecondary};
  }
  & .album-media-right,
  & .album-media-content {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: left;
    align-self: center;
    width: 0;
  }
  .song-album-list {
    height: 600px;
    max-height: 100%;

    & .song-item {
      border-bottom: 1px solid ${(props) => props.theme.borderSecondary};
      border-radius: 5px;
      width: 100%;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => props.theme.alphaBg};
      }
      &:hover .media-action {
        visibility: visible;
      }
      &:hover .song-thumb::after {
        visibility: visible;
      }

      .icon-dash {
        color: ${(props) => props.theme.textPrimary};
      }
      .song__info {
        flex-wrap: nowrap;
        display: -webkit-box;
        word-break: break-word;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
      .song__info-name {
        line-height: 14px;
        color: ${(props) => props.theme.textPrimary};
        margin-top: 3px;
        flex-wrap: nowrap;
        display: -webkit-box;
        word-break: break-word;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        line-height: 16px;
      }
      .song__info-author {
        margin-top: 6px;
        line-height: 1.33;
        color: ${(props) => props.theme.textSecondary};
        display: flex;
        flex-wrap: nowrap;
        display: -webkit-box;
        word-break: break-word;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        & span:hover {
          text-decoration: underline;
          color: ${(props) => props.theme.linkTextHover};
        }
      }
      .media-content {
        flex-basis: auto;
        flex-grow: 1;
        flex-shrink: 1;
        align-self: center;
        width: 0;
        color: ${(props) => props.theme.textSecondary};
      }
      .media-right {
        flex-basis: auto;
        flex-grow: 0;
        flex-shrink: 0;
      }
      .hover-item {
        display: none;
        word-break: break-word;
      }
      &:hover .hover-item {
        display: flex;
      }
      &:hover .media-duration {
        display: none;
      }

      .media-duration {
        word-break: break-word;
        font-size: 12px;
        color: ${(props) => props.theme.textSecondary};
      }
      .song-icon-note {
        color: ${(props) => props.theme.textSecondary};
      }
    }
  }
  .album-info {
    &:hover {
      color: ${(props) => props.theme.linkTextHover};
      text-decoration: underline;
    }
  }
  .bottom-info {
    color: ${(props) => props.theme.textSecondary};
  }
`;
const AlbumDetails = () => {
  const [dataAlbum, setDataAlbum] = useState([]);
  useEffect(() => {
    async function fetchDataHome() {
      const res = await axios.get(
        `https://music-player-pink.vercel.app/api/playlist?id=ZWZB96AI`
      );
      if (!res.data) return;
      const { data } = res.data;

      setDataAlbum(data);

      console.log("Ket qua album:", dataAlbum);
    }
    fetchDataHome();
  }, []);
  const {
    title,
    thumbnailM,
    like,
    sortDescription,
    artists,
    song,
    contentLastUpdate,
  } = dataAlbum;
  return (
    <StyledAlbum className="wrapper mt-[90px]">
      <div className="pt-5 album-container">
        <div className="album-content">
          <div className="relative flex-shrink-0 w-[300px]">
            <div className="relative overflow-hidden rounded-lg album-card-image">
              <div className="z-thumb w-full h-[300px] cursor-pointer relative overlay">
                <img
                  className="object-cover w-full transition-all duration-700 rounded-lg "
                  src={thumbnailM}
                  alt=""
                />
                <div className="cursor-pointer invisible  text-center border  border-white w-[45px] h-[45px] rounded-full center album-action">
                  <i className=" text-[30px] leading-[45px]   bi bi-play-fill text-white"></i>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-3">
              <div className="text-center">
                <h5 className="album__content-title flex-wrap text-xl font-bold leading-[1.5] overflow-hidden text-ellipsis">
                  {title}
                </h5>
                <div className="release">
                  Cập nhật: {ConvertDates(contentLastUpdate)}
                </div>
                <div className="artists">
                  {artists?.length > 0 &&
                    artists
                      .map((item) => {
                        const { name, id } = item;
                        return <span key={id}>{name}</span>;
                      })
                      .reduce((prev, curr) => [prev, ", ", curr])}
                </div>
                <div className="like">
                  {ConvertNumber(like)} người yêu thích
                </div>
              </div>
              <div className="flex flex-col justify-center mt-4 actions">
                <div className="flex justify-center">
                  <Button large leftIcon={<BsFillPlayFill />}>
                    TIẾP TỤC PHÁT
                  </Button>
                </div>
                <div className="mt-4 ">
                  <div className="flex justify-center">
                    <Tippy content="Xóa khỏi thư viện">
                      <Icon className="add-library ">
                        {<BsFillHeartFill className="text-inherit " />}
                      </Icon>
                    </Tippy>
                    <Tippy content="Khác">
                      <Icon className="add-library dot-btn ">
                        {<BsThreeDots className="text-inherit " />}
                      </Icon>
                    </Tippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SongAlbum title={sortDescription} data={song} />
        </div>
      </div>
    </StyledAlbum>
  );
};

export default AlbumDetails;
