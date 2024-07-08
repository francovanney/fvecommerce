import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import { products } from "./mocks/products.json";
import Login from "./Components/Login/Login";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLogged");
    if (loggedInStatus === "true") {
      setIsLogged(true);
    }
  }, []);

  const handleLogOut = () => {
    setIsLogged(false);
    localStorage.removeItem("isLogged");
  };

  return (
    <>
      {!isLogged ? (
        <Login setIsLogged={setIsLogged} />
      ) : (
        <>
          <Header logOut={handleLogOut} />
          <Products productList={products} />
        </>
      )}
    </>
  );
};

export default App;
