/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect } from "react";
import Top from "~/components/ListTop100";
import SongList from "~/components/SongList/SongList";

const Profile = () => {
  const handleFetchDataProfile = async () => {
    const response = await axios.get(`http://localhost:3000/api/home?page=1`);
    if (!response) return null;
  };
  useEffect(() => {
    handleFetchDataProfile();
  });
  return (
    <div className="wrapper">
      <Top></Top>
      <SongList></SongList>
    </div>
  );
};

export default Profile;
