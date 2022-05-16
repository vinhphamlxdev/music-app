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
`;
const Playlist = ({ title = "Nổi Bật", data = [] }) => {
  return (
    <StyledPlaylist>
      <h3 className="">{title}</h3>
      {<PlaylistItem items={data}></PlaylistItem>}
    </StyledPlaylist>
  );
};

export default Playlist;
