import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home"
import NoPage from "./pages/NoPage";
import Insert from "./pages/Insert"
import Display from "./pages/Display"
import EditPage from "./pages/EditPage";
import Search from "./pages/Search";






const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="insert" element={<Insert />} />
          <Route path="display" element={<Display />} />
          <Route path="editdata/:id" element={<EditPage />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
