import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import NotFound from "./components/404/NotFound";
import "./App.css";
import Header from "./components/Partials/Header";
import Result from "./components/result/Result";
import { useContext } from "react";
import ResultContext from "./store/res-context";

function App() {
  const ctx = useContext(ResultContext);
  return (
    <div className="m-10">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/result" element={<Result res={ctx.result} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
