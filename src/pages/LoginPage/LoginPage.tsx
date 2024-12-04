
import { Input } from "@/components/Input/Input";
import "./LoginPage.scss";
import { Button } from "@/components/Button/Button";
import { AuthButtons } from "@/components/AuthButtons/AuthButtons";

export const LoginPage = () => {
  const buttons = [
    { className: "reg__link google-link", href: "#", src: "./img/icons/google.svg", alt: "Google" },
    { className: "reg__link google-plus-link", href: "#", src: "./img/icons/google-plus.svg", alt: "Google Plus" },
    { className: "reg__link yandex-link", href: "#", src: "./img/icons/yandex.svg", alt: "Yandex" },
    { className: "reg__link mail-ru-link", href: "#", src: "./img/icons/mail-ru.svg", alt: "Mail.ru" }
  ];
  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form action="#">
        <Input type="tel" placeholder="Номер телефона" />
        <Input type="password" placeholder="Пароль" />
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
