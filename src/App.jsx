import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContext from "./context/GlobalContext";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/Homepage";
import Productspage from "./pages/Productspage";
import Detailpage from "./pages/Detailpage";
import Contactpage from "./pages/Contactpage";
function App() {
  const GlobalProviderValue = {};

  return (
    <>
      <GlobalContext.Provider value={{ GlobalProviderValue }}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products">
                <Route index element={<Productspage />} />
                <Route path=":id" element={<Detailpage />} />
              </Route>
              <Route path="/contact" element={<Contactpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
