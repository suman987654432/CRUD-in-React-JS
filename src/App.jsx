import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home"
// import About from "./pages/About"
import Contact from "./pages/FormHandle"
import Service from "./pages/Service";
import NoPage from "./pages/NoPage";







const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />






          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
