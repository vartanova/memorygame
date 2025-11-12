import { Route, Routes, HashRouter } from "react-router-dom";
import MainPage from "./pages/mainPage";
import GamePage from "./pages/GamePage";
import StatisticPage from "./pages/StatisticPage";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage isOpen={isOpen} setIsOpen={setIsOpen}/>} />
          <Route path="/game" element={<GamePage isOpen={isOpen} setIsOpen={setIsOpen}/>} />
          <Route path="/statistic" element={<StatisticPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
