import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";

import NotFound from "./components/NotFound";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          {/*<Route path="/" element={<>} />*/}
          {/*<Route path="/" element={<>} />*/}
          <Route
            path="*"
            element={<NotFound spacings="pt-5" variant="danger" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
