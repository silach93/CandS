import { FormEvent, useState } from "react";
import styles from "./Form.module.css";

export default function Login() {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const isValid = () => {
        let result = true;

        setLoginError("");

        if (login.length === 0) {
            setLoginError("Логин не может быть пустым.");
            result = false;
        }

        if (!/^([a-z0-9]{6,20})$/.test(login)) {
            setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.");
            result = false;
        }

        setPasswordError("");

        if (password.length === 0) {
            setPasswordError("Пароль не может быть пустым.");
            result = false;
        }
        return result;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid()) {
            // отправка данных на сервер
        }
    };

    return <>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Логин:
                <input value={login} onChange={e => setLogin(e.target.value)}/>
            </label>
            {loginError && <div className={styles.error}>
                {loginError}
            </div>}
        </div>
        <div>
            <label>Пароль:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            {passwordError && <div className={styles.error}>
                {passwordError}
            </div>}
        </div>
        <button type="submit">Войти</button>
        </form>
    </>;
}