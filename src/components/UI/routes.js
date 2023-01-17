import About from "../../Pages/About";
import NotFound from "../../Pages/NotFound";
import TeamGenerator from "../../Pages/TeamGenerator";
import RandomPicker from "../../Pages/RandomPicker";

const routes = [
  { path: "/", element: <RandomPicker />, id: 1 },
  { path: "TeamGenerator", element: <TeamGenerator />, id: 2 },
  { path: "/about", element: <About />, id: 3 },
  { path: "*", element: <NotFound />, id: 4 },
];

export default routes;
