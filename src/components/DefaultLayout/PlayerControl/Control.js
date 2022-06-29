import React from "react";
import Icon from "~/components/Icon";

const Control = () => {
  return (
    <div className="player-control w-[40%] flex flex-col">
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center ">
          <Icon control>
            <i className="p-1 bi bi-shuffle"></i>
          </Icon>
          <Icon control>
            <i className="p-1 bi bi-skip-start-fill"></i>
          </Icon>
          <button className="toggle-play">
            <i className="p-1 bi bi-play-fill play-btn"></i>
          </button>
          <Icon control>
            <i className="p-1 bi bi-skip-end-fill"></i>
          </Icon>
          <Icon control>
            <i className="p-1 bi bi-arrow-repeat"></i>
          </Icon>
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
  );
};

export default Control;
