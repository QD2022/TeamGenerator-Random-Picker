import Layout from "./components/UI/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./components/UI/routes";
import { useState } from "react";
import UserContext from "./context/useContext";
import "./assets/style.css";

function App() {
  const [peopleList, setPeopleList] = useState();
  return (
    <UserContext.Provider value={[peopleList, setPeopleList]}>
      {" "}
      <BrowserRouter>
        <Layout>
          {" "}
          <Routes>
            {routes.map((route) => {
              return <Route key={route.id} {...route}></Route>;
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
