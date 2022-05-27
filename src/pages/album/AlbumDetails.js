import axios from "axios";
import React, { useEffect, useState } from "react";

const AlbumDetails = () => {
  const [dataAlbum, setDataAlbum] = useState([]);
  useEffect(() => {
    async function fetchDataHome() {
      const res = await axios.get(
        `https://music-player-pink.vercel.app/api/playlist?id=ZWZB969E`
      );
      if (!res.data) return null;
      const {
        data: { items },
      } = res.data;

      setDataAlbum(items);
      // console.log("Ket qua album:", res);
    }
    fetchDataHome();
  }, []);
  return <div></div>;
};

export default AlbumDetails;
