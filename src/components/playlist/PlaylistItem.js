import React, { Fragment } from "react";
import Icon from "../Icon";

const PlaylistItem = ({ items }) => {
  return (
    <Fragment>
      <div className="grid w-full grid-cols-5 gap-x-3">
        {items?.length > 0 &&
          items?.slice(0, 5).map((item, index) => (
            <div key={item.encodeId} className="flex flex-col">
              <div className="relative  card__item-img after:invisible overflow-hidden hover:after:visible after:content-[''] after:w-full after:h-full after:inset-0 after:bg-black after:bg-opacity-50 after:absolute w-full rounded-md cursor-pointer ">
                <img
                  className="object-cover w-full transition-all duration-700 rounded-md card-img"
                  src={item.thumbnail}
                  alt=""
                />
                <div className="absolute z-10 flex items-center invisible w-full card-action justify-evenly top-2/4 -translate-x-2/4 -translate-y-2/4 left-2/4 ">
                  <Icon>
                    <i className="text-white bi bi-heart-fill icon-heart"></i>
                  </Icon>
                  <Icon>
                    <i className="p-[5px] border border-white text-[30px] leading-[0px] flex justify-center items-center bi bi-play-fill text-white w-[45px] h-[45px] rounded-full"></i>
                  </Icon>
                  <Icon>
                    <i className="text-white bi bi-three-dots playlist-action-dots"></i>
                  </Icon>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="mt-2 mb-1 text-base font-bold card-title text-inherit ">
                  {item.title}
                </span>
                <h4 className="card-content-subtitle">
                  {item.sortDescription}
                </h4>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default PlaylistItem;
