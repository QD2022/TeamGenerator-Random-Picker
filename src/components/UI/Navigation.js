import { NavLink } from "react-router-dom";

const Navigation = () => {
  const items = [
    { name: "RandomPicker", to: "/", id: 1 },
    { name: "TeamGenerator", to: "TeamGenerator", id: 2 },
    { name: "About", to: "/about", id: 3 },
  ];
  return (
    <header>
      <nav>
        <ul className="nes-list">
          {items.map((item) => {
            return (
              <li className="nav-list lists" key={item.to}>
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
