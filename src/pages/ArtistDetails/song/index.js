import React, { useEffect, useRef, useState } from "react";
import { GiMicrophone } from "react-icons/gi";
import Icon from "~/components/Icon";
import styled from "styled-components";
import ConvertDuration from "~/utils/ConvertTime";
const StyledSectionSong = styled.div`
  .song-animate-item {
    transition: all 0.9s;
    &.first {
      z-index: 3;
      left: 40px;
      opacity: 1;
    }
    &.second {
      z-index: 2;
      left: 20px;
      width: 196px;
      height: 196px;
      opacity: 0.7;
      background-image: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0.5) 1%,
        rgba(0, 0, 0, 0.6) 14%
      );
    }
    &.third {
      z-index: 1;
      left: 0;
      width: 162px;
      height: 162px;
      opacity: 0.3;
      background-image: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0.5) 1%,
        rgba(0, 0, 0, 0.6) 14%
      );
    }
  }
  .play-list {
    overflow: hidden overlay;
    will-change: scroll-position;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      width: 6px;
      display: none;
    }
    &:hover::-webkit-scrollbar {
      width: 6px;
      display: inline-block;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: ${(props) => props.theme.tabActiveBg};
    }

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
        &:hover {
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
    }
  }
`;
const SongSection = ({ data = {} }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const handleChangeSlide = () => {
    setInterval(() => {
      slideRef.current.className.add("second");
    }, 2000);
  };
  useEffect(() => {
    handleChangeSlide();
  }, []);
  const { items, title } = data;
  return (
    <StyledSectionSong className="container-layout">
      <h3>{title}</h3>
      <div className="flex mb-[25px] ">
        <div className="relative pt-[10px] w-[270px] h-[230px] flex items-center">
          <div
            ref={slideRef}
            className="absolute   cursor-pointer song-animate-item rounded-[4px] overflow-hidden transition-all duration-700 w-[230px] h-[230px] left-10"
          >
            <img
              className="w-full object-cover rounded-[4px]"
              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/c/b/cb61528885ea3cdcd9bdb9dfbab067b1_1504988884.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="h-[244px] play-list pl-5 w-full flex flex-col flex-1">
          {items.length > 0 &&
            items?.map((item, index) => {
              const {
                encodeId,
                thumbnail,
                artistsNames,
                title,
                album,
                duration,
              } = item;
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
                        <div className="text-base font-medium capitalize song__info-name text-ellipsis">
                          {title}
                        </div>
                        <div className="text-xs song__info-author">
                          {artistsNames}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-left media-content">
                      {album ? album.title : ""}
                    </div>
                    <div className="transition-all duration-500 flex ml-[10px] items-center media-right">
                      <div className="hover-item">
                        <Icon>
                          <GiMicrophone></GiMicrophone>
                        </Icon>
                        <Icon>
                          <i className="bi icon-heart bi-heart"></i>
                        </Icon>
                        <Icon>
                          <i className="bi bi-three-dots"></i>
                        </Icon>
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
