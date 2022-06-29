import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { GiMicrophone } from "react-icons/gi";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import Icon from "../Icon";
import Playlist from "../playlist/Playlist";
import ConvertDuration from "~/utils/ConvertTime";
import Tippy from "@tippyjs/react";
const StyledSong = styled.div`
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
  .song__rank-number {
    width: 60px;
    min-width: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(74, 144, 226, 0);
    opacity: 1;
    margin-right: 5px;
    font-size: 32px;
    font-weight: 900;
    line-height: 1;
    text-align: center;
    color: rgba(74, 144, 226, 0);
    font-family: "Roboto", sans-serif;
    white-space: nowrap;
    color: rgba(74, 144, 226, 0);
    -webkit-text-stroke: 1px ${(props) => props.theme.textPrimary};

    &.isTop1 {
      -webkit-text-stroke: 1px #4a90e2;
    }
    &.isTop2 {
      -webkit-text-stroke: 1px #50e3c2;
    }
    &.isTop3 {
      -webkit-text-stroke: 1px #e35050;
    }
  }
  .icon-dash {
    color: ${(props) => props.theme.textPrimary};
  }
  .song__info {
    overflow: hidden;
    flex-wrap: nowrap;
    display: -webkit-box;
    word-break: break-word;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    &-name {
      text-transform: capitalize;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
      color: ${(props) => props.theme.textPrimary};
      margin-top: 3px;
      flex-wrap: nowrap;
      display: -webkit-box;
      word-break: break-word;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      line-height: 16px;
    }
    &-author {
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
  }
  .media-content {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: left;
    align-self: center;
    width: 0;
    font-size: 12px;
    color: ${(props) => props.theme.textSecondary};
  }
  .media-right {
    display: flex;
    margin-left: 10px;
    align-items: center;
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
  .sort-ranking {
    color: ${(props) => props.theme.textPrimary};
  }
`;
const SongList = () => {
  const [top100, setTop100] = useState([]);

  const handleGetTop100 = async () => {
    const res = await axios.get(
      `https://server-zing.vercel.app/api/chart-home`
    );
    if (!res) return null;
    const {
      RTChart: { items },
    } = res.data.data;
    setTop100(items);
    console.log(items);
  };
  useEffect(() => {
    handleGetTop100();
  }, []);

  return (
    <Fragment>
      <Playlist></Playlist>
      <div className="mt-5">
        <h3 className="">Top 100</h3>
        <div className="flex flex-col playlist-container">
          {top100.length > 0 &&
            top100.map((item, index) => {
              const {
                thumbnail,
                artists,
                title,
                rakingStatus,
                album,
                duration,
              } = item;
              return (
                <StyledSong key={item.encodeId}>
                  <div className="flex rounded-md select-none p-[10px] items-center">
                    <div className="flex items-center w-2/4 mr-[10px] flex-grow-0 flex-shrink-0">
                      <div className="flex mr-[15px] items-center">
                        <div
                          className={`song__rank-number  ${
                            index === 0
                              ? "isTop1"
                              : index === 1
                              ? "isTop2"
                              : index === 2
                              ? "isTop3"
                              : ""
                          }`}
                        >
                          {index + 1}
                        </div>

                        {rakingStatus === 0 ? (
                          <div className="flex items-center justify-center w-[18px] h-[36px]">
                            <i className="text-base bi bi-dash-lg icon-dash"></i>
                          </div>
                        ) : (
                          <div className="flex   flex-col sort-ranking items-center  w-[18px] h-[36px]">
                            {rakingStatus > 0 ? (
                              <TiArrowSortedUp className="text-[#1dc186] text-xs w-[18px] h-[18px]"></TiArrowSortedUp>
                            ) : (
                              <TiArrowSortedDown className="text-[#e35050] text-xs w-[18px] h-[18px]"></TiArrowSortedDown>
                            )}
                            <span className="text-xs text-center w-[18px] h-[18px] inline-block font-bold text-inherit">
                              {rakingStatus < 0
                                ? Math.abs(rakingStatus)
                                : rakingStatus}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="song-thumb after:invisible  after:absolute after:content-[''] after:inset-0 after:w-full after:h-full after:bg-black after:bg-opacity-50  w-10 h-10 relative cursor-pointer rounded-[4px] flex-shrink-0 mr-[10px] overflow-hidden">
                        <img
                          className="object-cover w-full rounded-[4px] "
                          src={thumbnail}
                          alt=""
                        />
                        <div className="absolute invisible media-action  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[22px] text-white cursor-pointer z-10 ">
                          <i className="p-1 bi bi-play-fill text-inherit"></i>
                        </div>
                      </div>
                      <div className="song__info">
                        <div className="song__info-name">{title}</div>
                        <div className="text-xs song__info-author">
                          {artists.length > 0 &&
                            artists
                              .map((item) => {
                                const { name, id } = item;
                                console.log(name);
                                return <span key={id}>{name}</span>;
                              })
                              .reduce((prev, curr) => [prev, ", ", curr])}
                        </div>
                      </div>
                    </div>
                    <div className="media-content">{album?.title || title}</div>
                    <div className="transition-all duration-500 media-right">
                      <div className="hover-item">
                        <Tippy content="Phát cùng lời bài hát">
                          <Icon>
                            <GiMicrophone></GiMicrophone>
                          </Icon>
                        </Tippy>
                        <Tippy content="Thêm vào thư viện">
                          <Icon>
                            <i className="bi icon-heart bi-heart"></i>
                          </Icon>
                        </Tippy>
                        <Tippy content="Khác">
                          <Icon>
                            <i className="bi bi-three-dots"></i>
                          </Icon>
                        </Tippy>
                      </div>
                      <div className="actions-item">
                        <div className="flex items-center justify-center w-[46px] media-duration">
                          {ConvertDuration(duration)}
                        </div>
                      </div>
                    </div>
                  </div>
                </StyledSong>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default SongList;
