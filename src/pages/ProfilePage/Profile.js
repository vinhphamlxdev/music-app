/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { HOME_API } from "~/api/config";
import Container from "~/components/container/Container";
import Top from "~/components/ListTop100";
import SongList from "~/components/SongList/SongList";

const Profile = () => {
  const handleFetchDataProfile = async () => {
    const response = await axios.get(`${HOME_API}`);
    if (!response) return null;
  };
  useEffect(() => {
    handleFetchDataProfile();
  });
  return (
    <Container>
      <Top></Top>
      <SongList></SongList>
    </Container>
  );
};

export default Profile;
