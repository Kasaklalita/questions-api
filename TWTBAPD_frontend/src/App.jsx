import React from "react";
import MainNavbar from "./components/layout/MainNavbar";
import MainSidebar from "./components/layout/MainSidebar";
import IntroductionSection from "./components/layout/IntroductionSection";
import HomepageQuestions from "./components/layout/HomepageQuestions";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="columns m-0 p-5">
        {/*<MainSidebar />*/}
        <div className="column is-9 content">
          <IntroductionSection />
          <div>
            <p className="block">
              Вас ждет собеседование на должность Python-разработчика, и вы
              хотите знать, через какие вопросы и обсуждения вам предстоит
              пройти? Перед тем, как идти, лучше иметь хотя бы общее
              представление о типах вопросов, которые будут задаваться на
              собеседовании по Python, чтобы вы могли подготовить на них ответы.
            </p>
            <p className="block">
              При этом Python — очень важный инструмент в арсенале любого
              разработчика. Для помощи вам я создал лучшее руководство по
              вопросам и ответам на собеседовании по Python, чтобы понять
              глубину и реальное их предназначение.
            </p>
            <p className="block">
              Помимо этих вопросов, вам также вероятно предоставят фрагменты
              кода, прочитав которые вы должны будете определить результирующее
              значение (или его отсутствие). Такие задания невозможно
              предсказать, и успешность их прохождения будет зависеть от вашего
              опыта программирования. Давайте начнем с самых популярных вопросов
              и ответов на собеседовании по Python.
            </p>
          </div>
          <HomepageQuestions />
        </div>
      </div>
    </div>
  );
}

export default App;
