import React from "react";
import MainNavbar from "./components/layout/MainNavbar";
import MainSidebar from "./components/layout/MainSidebar";
import IntroductionSection from "./components/layout/IntroductionSection";
import HomepageQuestions from "./components/layout/HomepageQuestions";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./routes/HomePage";
import Error404 from "./routes/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <Error404/>
  },
]);

function App() {

  
  return (
    <div className="App">
      <MainNavbar />
      <div className="columns m-0 p-5">
        {/*<MainSidebar />*/}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
