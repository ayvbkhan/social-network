
import { Input } from "@/components/Input/Input";
import "./RegistrationPage.module.scss";
import { Button } from "@/components/Button/Button";
import { AuthButtons } from "@/components/AuthButtons/AuthButtons";

export const RegistrationPage = () => {
    const buttons = [
        { className: "reg__link google-link", href: "#", src: "./img/icons/google.svg", alt: "Google" },
        { className: "reg__link google-plus-link", href: "#", src: "./img/icons/google-plus.svg", alt: "Google Plus" },
        { className: "reg__link yandex-link", href: "#", src: "./img/icons/yandex.svg", alt: "Yandex" },
        { className: "reg__link mail-ru-link", href: "#", src: "./img/icons/mail-ru.svg", alt: "Mail.ru" }
    ];
    return (
        <div className="LoginPage">
            <h1>Регистрация</h1>
            <form action="#">
                <Input type="name" placeholder="Имя" />
                <Input type="tel" placeholder="Номер телефона" />
                <Input type="password" placeholder="Пароль" />
                <Input type="password" placeholder="Повторите пароль" />
                <Button>Зарегистрироваться</Button>
            </form>
            <div className="registration">
                <span>
                    У вас уже есть аккаунта? <a href="#">Войти</a>
                </span>
                <p>Авторизоваться с помощью</p>
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
