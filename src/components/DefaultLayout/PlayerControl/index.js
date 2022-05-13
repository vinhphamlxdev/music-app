import React from "react";
import { GiMicrophone } from "react-icons/gi";
import styled from "styled-components";
import { VscChromeRestore } from "react-icons/vsc";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Icon from "~/components/Icon";
const StyledPlayer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 400;
  background-position: 50%;
  background-repeat: repeat-x;
  background-size: 1920px auto;
  background-color: ${(props) => props.theme.layoutBg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 999999;
  .player-container {
    display: flex;
    padding: 0 20px;
    cursor: pointer;
    align-items: center;
    height: 90px;
    justify-content: space-between;
    background-color: ${(props) => props.theme.playerBg};
  }
  .player__name {
    font-size: 14px;
    line-height: 15px;
    color: ${(props) => props.theme.textPrimary};
    text-transform: capitalize;
  }
  .player__author {
    font-size: 12px;
    margin-top: 3px;
    color: ${(props) => props.theme.textSecondary};
    word-break: break-all;
    display: flex;
    flex-wrap: nowrap;
    display: -webkit-box;
    word-break: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-weight: 400;
    display: inline-block;
  }
  .control-btn {
    padding: 3px;
    margin: 0 7px;
    line-height: 0;
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
    .play-btn {
      border: 1px solid ${(props) => props.theme.textColor};
      border-radius: 100rem;
    }
  }
  .current-time {
    font-size: 12px;
    min-width: 45px;
    margin-right: 10px;
    text-align: left;
    color: ${(props) => props.theme.textColor};
    opacity: 0.6;
  }
  .duration-time {
    color: ${(props) => props.theme.textColor};
  }
  .progress-area {
    width: 100%;
    height: 3px;
    outline: none;
    background-color: ${(props) => props.theme.alphaBg};
    cursor: pointer;
    transition: 0.3s;
    border-radius: 20px;
    &:hover {
      height: 6px;
    }
    .progress-bar {
      background-color: ${(props) => props.theme.purplePrimary};
      height: inherit;
      position: relative;
      width: 50%;
      border-radius: 4px;
      &::after {
        position: absolute;
        opacity: 0;
        right: -6px;
      }
    }
    &:hover .progress-bar::after {
      opacity: 1;
      border-radius: 100rem;
    }
  }
  .progress-volume {
  }
`;
const PlayerControl = () => {
  return (
    <StyledPlayer>
      <div className="player-container">
        <div className="flex w-[30%]">
          <div className="flex items-center ">
            <div className="w-[64px] h-[64px] mr-[10px] rounded-[4px]">
              <img
                className="w-full object-cover rounded-[4px]"
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/d/7/c/7d7ccc9ef92fe30ab57543b978ab3548.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center max-w-[130px] flex-grow ">
              <div className="player__name">Da lo yeu em</div>
              <span className="player__author">JustaTee</span>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex player-icon ">
                <Icon>
                  <Tippy content="Thêm vào thư viện">
                    <i className="bi icon-heart bi-heart"></i>
                  </Tippy>
                </Icon>
                <Icon>
                  <i className="bi bi-three-dots"></i>
                </Icon>
              </div>
            </div>
          </div>
        </div>
        <div className="player-control w-[40%] flex flex-col">
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center ">
              <div className="control-btn">
                <i className="p-1 bi bi-shuffle"></i>
              </div>
              <div className="control-btn">
                <i className="p-1 bi bi-skip-start-fill"></i>
              </div>
              <div className="control-btn">
                <i className="p-1 bi bi-play-fill play-btn"></i>
              </div>
              <div className="control-btn">
                <i className="p-1 bi bi-skip-end-fill"></i>
              </div>
              <div className="control-btn">
                <i className="p-1 bi bi-arrow-repeat"></i>
              </div>
            </div>
          </div>
          <div className="w-full mt-[10px] flex items-center justify-center ">
            <span className="current-time">03:20</span>
            <div className="progress-area">
              <div className="progress-bar after:absolute after:content[''] after:w-[14px] after:h-[14px] after:top-2/4 after:bg-inherit after:-translate-y-2/4"></div>
            </div>
            <div className="duration-time ml-[10px] text-xs min-w-[45px]">
              04:30
            </div>
          </div>
        </div>
        <div className="w-[30%] flex justify-end">
          <div className="flex items-center justify-center">
            <Icon>
              <GiMicrophone className="text-lg"></GiMicrophone>
            </Icon>
            <Icon>
              <VscChromeRestore className="text-lg"></VscChromeRestore>
            </Icon>
            <Icon>
              <i className="text-lg bi bi-volume-up leading-[0px]"></i>
            </Icon>

            <div className="progress-volume relative w-[100px] h-[3px] mr-2 ml-1"></div>
            <Icon>
              <i className="text-lg bi bi-music-note-list leading-[0px]"></i>
            </Icon>
          </div>
        </div>
      </div>
    </StyledPlayer>
  );
};

export default PlayerControl;
