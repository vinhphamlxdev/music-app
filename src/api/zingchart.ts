import axios from "axios";

const getCharthome = async (): Promise<any> => {
  try {
    return await axios.get("/charthome");
  } catch (err) {
    console.log(err);
  }
};

export { getCharthome };
