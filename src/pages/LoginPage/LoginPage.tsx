
import { Input } from "@/components/Input/Input";
import "./LoginPage.scss";
import { Button } from "@/components/Button/Button";
import { AuthButtons } from "@/components/AuthButtons/AuthButtons";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  phoneNumber: yup.string().required(),
  password: yup.string().required().min(8).matches(/^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/).required(),
});

type FormData = yup.InferType<typeof schema>


export const LoginPage = () => {
  const buttons = [
    { className: "reg__link google-link", href: "#", src: "/img/icons/google.svg", alt: "Google" },
    { className: "reg__link google-plus-link", href: "#", src: "/img/icons/google-plus.svg", alt: "Google Plus" },
    { className: "reg__link yandex-link", href: "#", src: "/img/icons/yandex.svg", alt: "Yandex" },
    { className: "reg__link mail-ru-link", href: "#", src: "/img/icons/mail-ru.svg", alt: "Mail.ru" }
  ];

  const { register, handleSubmit, formState } = useForm<FormData>(
    {
      resolver: yupResolver(schema)
    }
  );

  const onSubmit = (data: FormData) => console.log(data);
  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <Input type="tel" placeholder="Номер телефона" {...register("phoneNumber")} />
          <p className="text-xs absolute -bottom-[15px] text-[#f00]">{formState.errors.phoneNumber?.type === 'required' && "Это поле обязательное"}</p>
        </div>
        <div className="relative">
          <Input type="password" placeholder="Пароль" {...register("password")} />
          <p className="text-xs absolute -bottom-[15px] text-[#f00]">{formState.errors.password?.type === 'required' && "Это поле обязательное"}</p>
          <p className="text-xs absolute -bottom-[15px] text-[#f00]">{formState.errors.password?.type === 'min' && "Пароль должен состоять минимум из 8 символов"}</p>
          <p className="text-xs absolute -bottom-[15px] text-[#f00]">{formState.errors.password?.type === 'matches' && "Пароль должен содержать символ, заглавную букву и цифру."}</p>
        </div>
        <Button>Войти</Button>
      </form>
      <a href="#">Забыли пароль?</a>
      <div className="registration">
        <span>
          У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
        </span>
        <p>Войти с помощью</p>
        <div className="icons-wrapper">
          {buttons.map((button, index) => (
            <AuthButtons
              key={index}
              className={button.className}
              href={button.href}
              src={button.src}
              alt={button.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
