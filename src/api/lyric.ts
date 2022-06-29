import axios from "axios";

const getLyric = async (id: string): Promise<any> => {
  try {
    return await axios.get("/lyric", {
      params: {
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export { getLyric };
