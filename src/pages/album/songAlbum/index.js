import React, { Fragment, useEffect, useState } from "react";
import { GiMicrophone } from "react-icons/gi";
import ConvertDuration from "~/utils/ConvertTime";
import { IoIosMusicalNotes } from "react-icons/io";
import Tippy from "@tippyjs/react";
import Icon from "~/components/Icon";
import viplabel from "~/assets/image/vipLabel.svg";
import { BiSortAlt2 } from "react-icons/bi";

const SongAlbum = ({ data, title }) => {
  console.log("song album:", data);
  if (!data) return;
  const { items, total, totalDuration } = data;
  return (
    <Fragment>
      <div className="flex flex-col flex-1 album-right">
        <div className="description text-sm pb-[10px]">
          <span className="mr-2">Lời tựa</span>
          {title}
        </div>
        <div className="song-list-select mb-[10px]">
          <div className="flex select-header">
            <div className="w-2/4 mr-[10px] ">
              <div className="flex items-center ">
                <div className="mr-[10px] sort-btn">
                  <BiSortAlt2 className="text-xs leading-[0] text-inherit " />
                </div>
                <div className="text-xs font-medium uppercase column-text">
                  Bài hát
                </div>
              </div>
            </div>
            <div className="ml-[10px] album-media-content">
              <div className="column-text ml-[10px] text-xs">Album</div>
            </div>
            <div className="album-media-right ml-[10px] ">
              <div className="column-text ml-[10px] text-xs uppercase">
                THỜI GIAN
              </div>
            </div>
          </div>
          <div className="song-album-list has-scroll-bar">
            {items.length > 0 &&
              items.map((item, index) => {
                const {
                  artists,
                  duration,
                  thumbnail,
                  title,
                  streamingStatus,
                  album,
                  encodeId,
                } = item;

                return (
                  <div key={encodeId} className="song-item">
                    <div className="flex rounded-md select-none p-[10px] items-center">
                      <div className="flex items-center flex-grow-0 flex-shrink-0 w-2/4">
                        <div className="flex justify-center mr-[10px] items-center text-xs">
                          <IoIosMusicalNotes className="text-base song-icon-note" />
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
                        <div className="overflow-hidden song__info flex-nowrap">
                          <div className="flex text-sm font-medium capitalize song__info-name text-ellipsis">
                            <span className="text-inherit">{title}</span>
                            {streamingStatus === 2 ? (
                              <span
                                style={{
                                  backgroundImage: `url(${viplabel})`,
                                }}
                                className="bg-cover inline-block ml-2 w-[26px] h-[12px] vip-label"
                              ></span>
                            ) : streamingStatus === 1 ? (
                              <></>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="text-xs song__info-author">
                            son tung
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-left media-content">
                        {album ? album.title : ""}
                      </div>
                      <div className="transition-all duration-500 flex ml-[10px] items-center media-right">
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
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SongAlbum;
