import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Components/Home";
import Characters from "../Components/Characters";
import Menu from "../Components/Menu/Menu";
import NotFound from "../Components/NotFound/NotFound";

function RoutesIndex() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}characters`} element={<Characters />} />
        <Route path={`${process.env.PUBLIC_URL}*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesIndex;
