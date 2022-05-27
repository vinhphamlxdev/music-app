import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import styled from "styled-components";
import Button from "~/components/button";
import Icon from "~/components/Icon";
import { BsFillHeartFill } from "react-icons/bs";
import Tippy from "@tippyjs/react";
import { BiSortAlt2 } from "react-icons/bi";
import { GiMicrophone } from "react-icons/gi";
import ConvertDuration from "~/utils/ConvertTime";
import { IoIosMusicalNotes } from "react-icons/io";
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
    &:hover {
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
    .song-icon-note {
      color: ${(props) => props.theme.textSecondary};
    }
  }
`;
const AlbumDetails = () => {
  const [dataAlbum, setDataAlbum] = useState([]);
  useEffect(() => {
    async function fetchDataHome() {
      const res = await axios.get(
        `https://music-player-pink.vercel.app/api/playlist?id=ZWZB96C7`
      );
      if (!res.data) return null;
      const {
        data: { items },
      } = res.data;

      setDataAlbum(items);
      console.log("Ket qua album:", res);
    }
    fetchDataHome();
  }, []);
  return (
    <StyledAlbum className="wrapper mt-[90px]">
      <div className="pt-5 album-container">
        <div className="album-content">
          <div className="relative flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg album-card-image">
              <div className="z-thumb w-[300px] h-[300px] cursor-pointer relative overlay">
                <img
                  className="object-cover w-full transition-all duration-700 rounded-lg "
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg"
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
                  Top 100 Pop Âu Mỹ Hay Nhất
                </h5>
                <div className="release">Cập nhật: 26/6/2021</div>
                <div className="artists">Hương Ly</div>
                <div className="like">192K nguoi thich</div>
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
          <div className="flex flex-col flex-1">
            <div className="description text-sm pb-[10px]">
              <span className="mr-2">Lời tựa</span>
              Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại
              của thể loại Top 100 Nhạc Pop Âu Mỹ, được Zing MP3 tự động tổng
              hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng
              bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được
              lấy trong 30 ngày gần nhất và được cập nhật liên tục.
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
              <div>
                <div className="song-item">
                  <div className="flex rounded-md select-none p-[10px] items-center">
                    <div className="flex items-center flex-grow-0 flex-shrink-0 w-2/4">
                      <div className="flex justify-center mr-[10px] items-center text-xs">
                        <IoIosMusicalNotes className="text-base song-icon-note" />
                      </div>
                      <div className="song-thumb after:invisible  after:absolute after:content-[''] after:inset-0 after:w-full after:h-full after:bg-black after:bg-opacity-50  w-10 h-10 relative cursor-pointer rounded-[4px] flex-shrink-0 mr-[10px] overflow-hidden">
                        <img
                          className="object-cover w-full rounded-[4px] "
                          src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/5/1/3/3/5133e8c5b69122e5cf04d6bbddfac2d1.jpg"
                          alt=""
                        />
                        <div className="absolute invisible media-action  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[22px] text-white cursor-pointer z-10 ">
                          <i className="p-1 bi bi-play-fill text-inherit"></i>
                        </div>
                      </div>
                      <div className="overflow-hidden song__info flex-nowrap">
                        <div className="text-sm font-medium capitalize song__info-name text-ellipsis">
                          son tung
                        </div>
                        <div className="text-xs song__info-author">the kid</div>
                      </div>
                    </div>
                    <div className="text-xs text-left media-content">Stay</div>
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
                          04:05
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledAlbum>
  );
};

export default AlbumDetails;
