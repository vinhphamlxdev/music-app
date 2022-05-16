import React from "react";
import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import { BsVinyl } from "react-icons/bs";
import { BsMusicNoteList } from "react-icons/bs";
import { BsFillFilePlayFill } from "react-icons/bs";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { BsUiChecksGrid } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { IoIosRadio } from "react-icons/io";
import { SiYoutubemusic } from "react-icons/si";
import Button from "~/components/button";
const StyledSidebar = styled.div`
  background-color: ${(props) => props.theme.sidebarBg};
  height: calc(100% - 90px);
  .sidebar-navbar-list::after {
    top: calc(100% + 15px);
    height: 1px;
    width: 188px;
    background-color: ${(props) => props.theme.navigationText};
    left: 50%;
    transform: translateX(-50%);
  }

  .sidebar-item {
    color: ${(props) => props.theme.navigationText};
    font-size: 13px;
    &:hover {
      color: ${(props) => props.theme.textItemHover};
    }
  }
  .sidebar-inner {
    /* overflow: hidden overlay; */
    overscroll-behavior: contain;
    will-change: scroll-position;
    .sidebar__subnav-inner::-webkit-scrollbar {
      display: none;
      width: 4px;
    }
    .sidebar__subnav-inner:hover::-webkit-scrollbar {
      display: inline-block;
      width: 4px;
    }
  }
`;
const Sidebar = () => {
  return (
    <StyledSidebar className="py-10 relative top-0 left-0  flex flex-col w-[240px]">
      <div className="mb-4 sidebar-navbar-list relative after:absolute after:content=['']">
        <div className="flex items-center px-6 py-2 font-semibold border-l border-transparent cursor-pointer sidebar-item">
          <BiHomeAlt className="text-xl font-semibold text-inherit"></BiHomeAlt>
          <span className="pl-3">Cá Nhân</span>
        </div>
        <div className="flex items-center px-6 py-2 font-semibold border-l border-transparent cursor-pointer sidebar-item">
          <BsVinyl className="text-xl font-semibold text-inherit"></BsVinyl>
          <span className="pl-3">Khám Phá</span>
        </div>
        <div className="flex items-center px-6 py-2 font-semibold border-l border-transparent cursor-pointer sidebar-item">
          <BsMusicNoteList className="text-xl font-semibold text-inherit"></BsMusicNoteList>
          <span className="pl-3">#Zingchart</span>
        </div>
        <div className="flex items-center px-6 py-2 font-semibold border-l border-transparent cursor-pointer sidebar-item">
          <IoIosRadio className="text-xl font-semibold text-inherit"></IoIosRadio>
          <span className="pl-3">Radio</span>
        </div>
        <div className="flex items-center px-6 py-2 font-semibold border-l border-transparent cursor-pointer sidebar-item">
          <BsFillFilePlayFill className="text-xl font-semibold text-inherit"></BsFillFilePlayFill>
          <span className="pl-3">Theo dõi</span>
        </div>
      </div>
      <div className="sidebar-inner mt-[10px]">
        <div className="mb-4 sidebar-navbar-list relative after:absolute after:content=['']">
          <div className="flex items-center px-6 py-2 font-semibold border-l border-transparent cursor-pointer sidebar-item">
            <BsMusicNoteBeamed className="text-xl font-semibold text-inherit"></BsMusicNoteBeamed>
            <span className="pl-3">Nhạc Mới</span>
          </div>
          <div className="flex items-center px-6 py-2 font-semibold border-l border-transparent cursor-pointer sidebar-item">
            <BsUiChecksGrid className="text-xl font-semibold text-inherit"></BsUiChecksGrid>
            <span className="pl-3">Thể Loại</span>
          </div>
          <div className="flex items-center px-6 py-2 font-semibold border-l border-transparent cursor-pointer sidebar-item">
            <BsStar className="text-xl font-semibold text-inherit"></BsStar>
            <span className="pl-3">Top 100</span>
          </div>
          <div className="flex items-center px-6 py-2 font-semibold border-l border-transparent cursor-pointer sidebar-item">
            <SiYoutubemusic className="text-xl font-semibold text-inherit"></SiYoutubemusic>
            <span className="pl-3">Mv</span>
          </div>
          <div className="w- flex mx-5 my-3 justify-center items-center  flex-col rounded-lg w-[200px] bg-bgGradient py-4 px-2">
            <div className="mb-2 text-xs font-semibold leading-5 text-center text-white">
              Nghe nhạc không quảng cáo cùng kho nhạc VIP
            </div>
            <Button className="bg-[#ffdb00]">MUA VIP</Button>
          </div>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
