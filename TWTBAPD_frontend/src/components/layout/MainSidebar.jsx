import React from "react";

const MainSidebar = () => {
  return (
    <aside
      className="menu column is-3"
      style={{ overflowY: "scroll", maxHeight: "calc(100vh - 56px)" }}
    >
      <p className="menu-label">General Questions</p>
      <ul className="menu-list">
        <li>
          <a>Какие знаете принципы программирования?</a>
        </li>
        <li>
          <a>
            Чем отличаются процедурная и объектов-ориентированная парадигмы
            программирования?
          </a>
        </li>
        <li>
          <a>Как выглядят HTTP-request / response?</a>
        </li>
      </ul>
      <p className="menu-label">Python Basics</p>
      <ul className="menu-list">
        <li>
          <a>Python - интерпретируемый язык или компилируемый?</a>
        </li>
        <li>
          <a>Какие есть меняющиеся и постоянные типы данных?</a>
        </li>
        <li>
          <a>Что такое область видимости переменных?</a>
        </li>
      </ul>
      <p className="menu-label">Databases</p>
      <ul className="menu-list">
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
        <li>
          <a>What is SQL?</a>
        </li>
      </ul>
    </aside>
  );
};

export default MainSidebar;
