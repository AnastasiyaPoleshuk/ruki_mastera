import { InstagramOutlined } from "@ant-design/icons";
import { TelegramImg, ViberImg } from "../../entities/index";

export const headerContactsData = [
  {
    id: "instagram",
    img: (
      <InstagramOutlined style={{ color: "#fafafa" }} className="inst__img" />
    ),
    text: "Instagram",
    link: "https://www.instagram.com/rukimasteta?igsh=MTRvY3l4ejM1aWp0aQ==",
  },
  {
    id: "telegram",
    img: <TelegramImg />,
    text: "Telegram",
    link: "https://t.me/+375445237432",
  },
  {
    id: "viber",
    img: <ViberImg />,
    text: "+375445237432",
    link: "",
  },
];
