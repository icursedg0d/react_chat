import React from "react";
import "./addUser.css";

const AddUser = () => {
  return (
    <div className="addUser">
      <form>
        <input type="text" placeholder="Имя" name="username" />
        <button>Поиск</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Joe Doe</span>
        </div>
        <button>Добавить</button>
      </div>
    </div>
  );
};

export default AddUser;
