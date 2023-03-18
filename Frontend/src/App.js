import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
