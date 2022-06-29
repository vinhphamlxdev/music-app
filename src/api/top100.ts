import axios from "axios";

const getTop100 = async (): Promise<any> => {
  try {
    return await axios.get("/top100");
  } catch (err) {
    console.log(err);
  }
};

export { getTop100 };
