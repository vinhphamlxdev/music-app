import axios from "axios";

interface typesData {
  items: {
    sectionType: string;
  }[];
}

const getHomePlayList = async (): Promise<Array<object> | undefined> => {
  try {
    const data: typesData = await axios.get("/home");
    console.log(data);
    return data.items.filter((e: any) => e.sectionType === "playlist");
  } catch (err) {
    console.log(err);
  }
};

export { getHomePlayList };
