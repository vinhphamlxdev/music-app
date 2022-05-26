import React from "react";
import styled from "styled-components";
import ConvertDuration from "~/utils/ConvertTime";
const StyledMv = styled.div`
  .mv-item-image {
    &:hover img {
      transform: scale(1.1) translateZ(0);
    }
    &:hover .mv-action {
      visibility: visible;
    }
  }
`;
const MvArtist = ({ data = {} }) => {
  const { title, items } = data;
  return (
    <StyledMv className="container-layout ">
      <h3>{title}</h3>
      <div className="grid grid-cols-3 gap-x-7">
        {items.length > 0 &&
          items?.map((item, index) => {
            const { encodeId, duration, thumbnailM } = item;
            return (
              <div key={encodeId} className="relative flex flex-col">
                <div className="relative w-full overflow-hidden rounded-md cursor-pointer mv-item-image overlay">
                  <img
                    className="object-cover w-full transition-all duration-700 rounded-md"
                    src={thumbnailM}
                    alt=""
                  />
                  <div className="cursor-pointer invisible text-center border  border-white w-[45px] h-[45px] rounded-full center mv-action">
                    <i className=" text-[30px] leading-[45px]   bi bi-play-fill text-white"></i>
                  </div>
                  <div className="absolute text-base text-white right-2 bottom-2 leading-normal py-[3px] font-normal px-[5px] rounded-[4px] z-[200] bg-[rgba(0,0,0,.7)]">
                    {ConvertDuration(duration)}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </StyledMv>
  );
};

export default MvArtist;
