import "./AppButton.scss";

export const AppButton = ({
  text,
  isScreenSm,
  openModal,
}: {
  text: string;
  isScreenSm: boolean;
  openModal: () => void;
}) => {
  const config = !isScreenSm
    ? {
        href: "#contactUs",
      }
    : {
        onClick: openModal,
      };

  return (
    <a {...config} className="app-btn">
      {text}
    </a>
  );
};
