import React from "react";
import styled from "styled-components";
import PlaylistItem from "./PlaylistItem";
const StyledPlaylist = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  .card__item-img {
    &:hover .card-img {
      transform: scale(1.1);
    }
    &:hover .card-action {
      visibility: visible;
    }
  }
  .artist-name {
    color: ${(props) => props.theme.textSecondary};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.linkTextHover};
      text-decoration: underline;
    }
  }
`;
const Playlist = ({ data = {} }) => {
  const { items, title } = data;

  return (
    <StyledPlaylist>
      <h3>{title}</h3>
      <div className="grid w-full grid-cols-5 gap-x-7">
        {<PlaylistItem data={items}></PlaylistItem>}
      </div>
    </StyledPlaylist>
  );
};

export default Playlist;
