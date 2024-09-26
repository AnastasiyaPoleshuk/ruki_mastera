import "./AppButton.scss";

export const AppButton = ({ text }: { text: string }) => {
  return (
    <a href="#contactUs" className="app-btn">
      {text}
    </a>
  );
};
