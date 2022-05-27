import React, { Fragment } from "react";
import Icon from "../Icon";

const PlaylistItem = ({ data = [] }) => {
  return (
    <Fragment>
      {data.length > 0 &&
        data.slice(0, 5).map((item, index) => {
          const { encodeId, thumbnail, title, sortDescription, artists } = item;
          return (
            <div key={encodeId} className="flex flex-col">
              <div className="relative w-full overflow-hidden rounded-md cursor-pointer card__item-img overlay ">
                <img
                  className="object-cover w-full transition-all duration-700 rounded-md card-img"
                  src={thumbnail}
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
                <span className="mt-2 mb-1 text-sm font-bold cursor-pointer card-title text-inherit ">
                  {title}
                </span>
                <h4 className="card-content-subtitle">{sortDescription}</h4>
                {/* <div>
                  {artists.length > 0 &&
                    artists.map((item) => {
                      return (
                        <p
                          key={item.id}
                          className="text-base inline-block artist-name font-normal leading-[1.33]"
                        >
                          {item.name}
                        </p>
                      );
                    })}
                </div> */}
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

export default PlaylistItem;
