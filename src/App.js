import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import { Routes,Route } from "react-router";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import RegistrationForm from "./components/RegistrationForm";
import Main from "./components/Main";
import RefInput from "./components/RefInput";
import { HOME_PATH, PRODUCTS_PATH, REF_PATH, REGISTRATION_PATH, NOTFOUND_PATH, SINGLE_USER_PATH } from "./constants/routes-links";
import NotFoundPage from "./components/NotFoundPage";
import SingleUserPage from "./components/SingleUserPage/SingleUserPage";

export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount }}>
      <div className="App"> 
       <Header /> 
       <Routes>
         <Route path={HOME_PATH} element={<HomePage />} />
         <Route path={PRODUCTS_PATH} element={<Products />} />
         <Route path={REGISTRATION_PATH} element={<RegistrationForm />} />
         <Route path={REF_PATH} element={<RefInput />} />
         <Route path={NOTFOUND_PATH} element={<NotFoundPage />} />
         <Route path={SINGLE_USER_PATH} element={<SingleUserPage />} />
        </Routes>
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;