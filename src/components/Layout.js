import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/banking">Banking</Link>
          </li>
          <li>
            <Link to="/cashflow">Cashflow</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/europe">Europe</Link>
          </li>
          <li>
            <Link to="/shares">Shares</Link>
          </li>
          <li>
            <Link to="/checker">Checker</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
