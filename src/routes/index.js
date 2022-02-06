import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Components/Home";
import Episodes from "../Components/Episodes";
import Characters from "../Components/Characters";
import Menu from "../Components/Menu/Menu";

function RoutesIndex() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesIndex;
