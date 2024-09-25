import "./AppButton.scss";

export const AppButton = ({ text }: { text: string }) => {
  return <a className="app-btn">{text}</a>;
};
