import axios from "axios";
const getArtist = async (name: string): Promise<any> => {
  try {
    return await axios.get("/artist", {
      params: {
        name: name,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export { getArtist };
