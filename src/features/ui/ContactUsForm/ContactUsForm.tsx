import { FormProps, Form, Input, Button, Select } from "antd";
import StatusCodes from "http-status-codes";
import axios from "axios";

import { priseData } from "src/widges/model/priceData";
import { useState } from "react";
import { error, success } from "src/shared/Messages/Messages";
import { CONSTANTS } from "src/shared/constants";
import "./ContactUsForm.scss";

type FormFieldType = {
  username?: string;
  phone?: string;
  service?: string;
};

export const ContactUsForm = () => {
  const [service, setService] = useState("");
  const [isError, setIsError] = useState(false);

  const onFinish: FormProps<FormFieldType>["onFinish"] = async (values) => {
    validatePhone(values.phone as string);

    if (service) {
      const result = await axios.post(
        `${CONSTANTS.TG_REQUEST_URL}&text=Name: ${values.username}%0APhone: ${values.phone}%0AService: ${service}`,
      );

      if (result.status === StatusCodes.OK) {
        success("Заявка отправлена! вам позвонят в ближайшее время!");
      } else {
        error(
          "Что-то пошло не так! перепроверьте свой запрос или попробуйте позже",
        );
      }
    } else {
      error(
        "Что-то пошло не так! перепроверьте свой запрос или попробуйте позже",
      );
    }
  };

  const validatePhone = (phoneNumber: string) => {
    const phoneRegex = /^\+375\d{9}$/;
    if (phoneRegex.test(phoneNumber)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="contact-us__form-blok">
      <h2 className="contact-us__title">Свяжитесь с нами</h2>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={() =>
          error(
            "Что-то пошло не так! перепроверьте свой запрос или попробуйте позже",
          )
        }
        autoComplete="off"
        className="contact-us__form"
      >
        <Form.Item<FormFieldType>
          name="username"
          className="form__item"
          rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
        >
          <Input className="form__input" placeholder="Имя" />
        </Form.Item>

        <Form.Item<FormFieldType>
          name="phone"
          className="form__item"
          rules={[
            {
              required: true,
              message: "Введите корректный номер телефона! +375xxxxxxxxx",
            },
          ]}
        >
          <Input
            className="form__input"
            placeholder="Номер телефона"
            onChange={() => setIsError(false)}
          />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} className="form__item">
          <Select
            placeholder="Выберете  услугу"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
            onChange={(value) => setService(value)}
          >
            {priseData.map((item) => (
              <Select.Option value={item.name} key={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="form__button"
            disabled={isError}
          >
            Отправить заявку
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
