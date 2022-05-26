import LonDon from "~/assets/bg/LondonThumb.png";
import dynamicLightDark from "~/assets/bg/dynamicLightDark.jpg";
import dynamicBlue from "~/assets/bg/dynamicBlue.jpg";
import dynamicPink from "~/assets/bg/dynamicPink.jpg";
import xoneThumbn from "~/assets/bg/xoneThumbn.jpg";
import zma from "~/assets/bg/zma.jpg";
import eiffel from "~/assets/bg/eiffel.jpg";
import IU from "~/assets/bg/iu.jpg";
import jiChangWook from "~/assets/bg/jiChangWook.jpg";
import lisa from "~/assets/bg/lisa.jpg";
import jennie from "~/assets/bg/jennie.jpg";
import jisoo from "~/assets/bg/jisoo.jpg";
import rose from "~/assets/bg/rose.jpg";
import dark from "~/assets/bg/dark.jpg";
import purple from "~/assets/bg/purple.jpg";
import blue from "~/assets/bg/blue.jpg";
import blueLight from "~/assets/bg/blueLight.jpg";

export const LIST_THEME = [
  {
    id: 1,
    type: "Dynamic",

    data: [
      {
        image: `${LonDon}`,
        title: "London",
      },
      {
        image: `${dynamicLightDark}`,
        title: "Sáng Tối",
      },
      {
        image: `${dynamicBlue}`,
        title: "Xanh Da Trời",
      },
      {
        image: `${dynamicPink}`,
        title: "Hồng",
      },
    ],
  },
  {
    id: 2,

    type: "Chủ đề",
    data: [
      {
        image: `${xoneThumbn}`,
        title: "XONE",
      },
      {
        image: `${zma}`,
        title: "Zing Music Awards",
      },
      {
        image: `${eiffel}`,
        title: "Tháp Eiffel",
      },
    ],
  },
  {
    id: 3,

    type: "Nghệ sĩ",
    data: [
      {
        image: `${IU}`,
        title: "IU",
      },
      {
        image: `${jiChangWook}`,
        title: "Ji Chang Wook",
      },
      {
        image: `${lisa}`,
        title: "Lisa",
      },
      {
        image: `${jennie}`,
        title: "Jennie Kim",
      },
      {
        image: `${jisoo}`,
        title: "Jisoo",
      },
      {
        image: `${rose}`,
        title: "Rosé",
      },
    ],
  },
  {
    id: 4,
    type: "Màu Tối",
    data: [
      {
        image: `${dark}`,
        title: "Dark",
      },
      {
        image: `${purple}`,
        title: "Tím",
      },
      {
        image: `${blue}`,
        title: "Xanh Đậm",
      },
      {
        image: `${blueLight}`,
        title: "Xanh Biển",
      },
    ],
  },
];
