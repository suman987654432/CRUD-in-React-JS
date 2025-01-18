import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home"
import About from "./pages/About"

import NoPage from "./pages/NoPage";
import FormHandle from "./pages/FormHandle";
import Fetch from "./pages/Fetch";







const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="axios" element={<Fetch />} />
          <Route path="handle" element={<FormHandle />} />
          <Route path="about" element={<About />} />



        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
