import { message } from "antd";

export const success = (text: string) => {
  message.success({
    content: text,
    duration: 2,
    style: {
      marginTop: "15vh",
    },
  });
};

export const error = (text: string) => {
  message.error({
    content: text,
    duration: 2.5,
    style: {
      marginTop: "15vh",
    },
  });
};
