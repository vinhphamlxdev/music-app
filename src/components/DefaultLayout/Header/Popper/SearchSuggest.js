import React, { Fragment } from "react";
import styled from "styled-components";
import ConvertNumber from "~/utils/ConvertNumber";
const StyledSearchSuggest = styled.div`
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
    .song__sugges-name {
      letter-spacing: -0.5px;
      &:hover {
        color: ${(props) => props.theme.linkTextHover};
      }
    }
  }
`;
const SearchSuggest = ({ data = [] }) => {
  return (
    <Fragment>
      {data.map((item, index) => {
        if (!item) return null;
        const { encodeId, artistsNames, title, thumbnail, name, totalFollow } =
          item;

        if (!encodeId) {
          return (
            <StyledSearchSuggest
              key={index}
              className="whitespace-nowrap  rounded-[4px] "
            >
              <div className="flex w-full items-center text-left rounded-[4px] py-[5px] px-[10px] ">
                <div className="song-thumb after:invisible  after:absolute after:content-[''] after:inset-0 after:w-full after:h-full after:bg-black after:bg-opacity-50  w-10 h-10 relative cursor-pointer rounded-full flex-shrink-0 mr-[10px] overflow-hidden">
                  <img
                    className="object-cover w-full rounded-full "
                    src={thumbnail}
                    alt=""
                  />
                  <div className="absolute invisible media-action  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[22px] text-white cursor-pointer z-10 ">
                    <i className="p-1 bi bi-play-fill text-inherit"></i>
                  </div>
                </div>
                <div className="w-0 text-left song__sugges-info ">
                  <h3 className="mb-0 text-[13px] font-medium leading-[16px] capitalize cursor-pointer song__sugges-name text-ellipsis ">
                    {name}
                  </h3>
                  <span className="cursor-pointer song__sugges-author">
                    Nghệ sĩ • {ConvertNumber(totalFollow)} quan tâm
                  </span>
                </div>
              </div>
            </StyledSearchSuggest>
          );
        } else {
          return (
            <StyledSearchSuggest
              key={index}
              className="whitespace-nowrap  rounded-[4px] "
            >
              <div className="flex w-full items-center text-left rounded-[4px] py-[5px] px-[10px] ">
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
                <div className="w-0 text-left song__sugges-info ">
                  <h3 className="mb-0 text-base font-medium leading-5 capitalize cursor-pointer song__sugges-name text-ellipsis ">
                    {title}
                  </h3>
                  <span className="cursor-pointer song__sugges-author">
                    {artistsNames}
                  </span>
                </div>
              </div>
            </StyledSearchSuggest>
          );
        }
      })}
    </Fragment>
  );
};

export default SearchSuggest;
