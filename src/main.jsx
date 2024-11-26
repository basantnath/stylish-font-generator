import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Outlet from "./Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import FreeFireNickName from "./pages/Free Fire Nickname/FreeFireNickName";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/free-fire-nickname" element={<FreeFireNickName />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
