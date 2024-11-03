import { useResize } from "src/shared/hook/useResize";
import { WelcomeImg, WelcomeTitle } from "../../../entities/index";
import { AppButton, ContactUsForm } from "../../../features/index";
import "./WelcomeSection.scss";
import { Modal } from "antd";
import { useState } from "react";

export const WelcomeSection = () => {
  const { isScreenSm } = useResize();
  const [open, setOpenModal] = useState(false);

  const openModal = () => {
    if (isScreenSm) {
      setOpenModal(true);
    }
  };

  return (
    <section className="welcome__container">
      <div className="welcome__info">
        <WelcomeTitle />
        <AppButton
          text="Вызвать мастера"
          isScreenSm={isScreenSm}
          openModal={openModal}
        />
      </div>
      <WelcomeImg />

      <Modal
        open={open}
        footer={null}
        closable={false}
        className="modal-window"
        onCancel={() => setOpenModal(false)}
      >
        <ContactUsForm />
      </Modal>
    </section>
  );
};
