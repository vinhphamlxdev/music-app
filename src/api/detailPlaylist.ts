import axios from "axios";

const getDetailPlaylist = async (id: string): Promise<any> => {
  try {
    return await axios.get("/detailplaylist", {
      params: {
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export { getDetailPlaylist };
