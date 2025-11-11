import { Route, Routes, HashRouter } from "react-router-dom";
import MainPage from "./pages/mainPage";
import GamePage from "./pages/GamePage";
import StatisticPage from "./pages/StatisticPage";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/statistic" element={<StatisticPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
