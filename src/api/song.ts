import axios from "axios";

const getSong = async (id: string): Promise<any> => {
  try {
    return await axios.get("/song", {
      params: {
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getInfoSong = async (id: string): Promise<any> => {
  try {
    return await axios.get("/infosong", {
      params: {
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export { getSong, getInfoSong };
