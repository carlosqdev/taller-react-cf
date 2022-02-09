import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Components/Home";
import Characters from "../Components/Characters";
import Menu from "../Components/Menu/Menu";

function RoutesIndex() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesIndex;
