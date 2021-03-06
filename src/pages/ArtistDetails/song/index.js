import React, { useEffect, useRef, useState } from "react";
import { GiMicrophone } from "react-icons/gi";
import Icon from "~/components/Icon";
import SlideShow from "./SlideShow";
import styled from "styled-components";
import ConvertDuration from "~/utils/ConvertTime";
import Tippy from "@tippyjs/react";
const StyledSectionSong = styled.div`
  .play-list {
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
        .artists {
          cursor: pointer;
          & span:hover {
            color: ${(props) => props.theme.linkTextHover};
            text-decoration: underline;
          }
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
    }
  }
`;
const SongSection = ({ data = {} }) => {
  console.log("song artist:", data);
  const { items, title } = data;
  return (
    <StyledSectionSong className="container-layout">
      <h3>{title}</h3>
      <div className="flex mb-[25px]">
        <div className="relative pt-[10px] w-[270px] h-[230px] flex items-center">
          <SlideShow data={items} />
        </div>
        <div className="h-[244px] has-scroll-bar play-list pl-5 w-full flex flex-col flex-1">
          {items.length > 0 &&
            items?.map((item, index) => {
              const { encodeId, thumbnail, artists, title, album, duration } =
                item;
              return (
                <div key={encodeId} className="song-item">
                  <div className="flex rounded-md select-none p-[10px] items-center">
                    <div className="flex items-center flex-grow-0 flex-shrink-0 w-2/4">
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
                      <div className="overflow-hidden song__info flex-nowrap">
                        <div className="text-sm font-medium capitalize song__info-name text-ellipsis">
                          {title}
                        </div>
                        <div className="text-xs song__info-author">
                          <div className="artists">
                            {artists?.length > 0 &&
                              artists
                                .map((item) => {
                                  const { name, id } = item;
                                  return <span key={id}>{name}</span>;
                                })
                                .reduce((prev, curr) => [prev, ", ", curr])}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-left media-content">
                      {album ? album.title : ""}
                    </div>
                    <div className="transition-all duration-500 flex ml-[10px] items-center media-right">
                      <div className="hover-item">
                        <Tippy content="Ph??t c??ng l???i b??i h??t">
                          <Icon>
                            <GiMicrophone></GiMicrophone>
                          </Icon>
                        </Tippy>
                        <Tippy content="Th??m v??o th?? vi???n">
                          <Icon>
                            <i className="bi icon-heart bi-heart"></i>
                          </Icon>
                        </Tippy>
                        <Tippy content="Kh??c">
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
                </div>
              );
            })}
        </div>
      </div>
    </StyledSectionSong>
  );
};

export default SongSection;
