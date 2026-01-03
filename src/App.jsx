import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContext from "./context/GlobalContext";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/Homepage";
function App() {
  const GlobalProviderValue = {};

  return (
    <>
      <GlobalContext.Provider value={{ GlobalProviderValue }}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
