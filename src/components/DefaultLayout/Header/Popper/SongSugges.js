import React from "react";
import styled from "styled-components";
const StyledSongItem = styled.div`
  &:hover {
    background-color: ${(props) => props.theme.alphaBg};
  }
  &:hover .media-action {
    visibility: visible;
  }
  &:hover .song-thumb::after {
    visibility: visible;
  }
  .song__sugges-info {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    align-self: center;
    .song__sugges-author {
      color: ${(props) => props.theme.textSecondary};
      font-size: 12px;
    }
    .song__sugges-name:hover {
      color: ${(props) => props.theme.linkTextHover};
    }
  }
`;
const SongSugges = ({ data }) => {
  return (
    <StyledSongItem className="whitespace-nowrap  rounded-[4px] ">
      <div className="flex w-full items-center text-left rounded-[4px] py-[5px] px-[10px] ">
        <div className="song-thumb after:invisible  after:absolute after:content-[''] after:inset-0 after:w-full after:h-full after:bg-black after:bg-opacity-50  w-10 h-10 relative cursor-pointer rounded-[4px] flex-shrink-0 mr-[10px] overflow-hidden">
          <img
            className="object-cover w-full rounded-[4px] "
            src={data.thumbnail}
            alt=""
          />
          <div className="absolute invisible media-action  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[22px] text-white cursor-pointer z-10 ">
            <i className="p-1 bi bi-play-fill text-inherit"></i>
          </div>
        </div>
        <div className="w-0 text-left song__sugges-info ">
          <h3 className="mb-0 text-xs font-medium leading-5 capitalize cursor-pointer song__sugges-name text-ellipsis ">
            {data.title}
          </h3>
          <span className="cursor-pointer song__sugges-author">
            {data.artistsNames}
          </span>
        </div>
      </div>
    </StyledSongItem>
  );
};

export default SongSugges;
