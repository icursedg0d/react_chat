import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="item">
        <h2>Добро пожаловать!</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Почта" name="email" />
          <input type="password" placeholder="Пароль" name="password" />
          <button>Войти</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Создайте аккаунт</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Загрузить аватар
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "None" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Имя" name="username" />
          <input type="text" placeholder="Почта" name="email" />
          <input type="password" placeholder="Пароль" name="password" />
          <button>Зарегестрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
