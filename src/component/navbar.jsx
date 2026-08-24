import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="max-lg:collapse bg-white text-black lg:mb-48 shadow-sm w-full rounded-md border">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>

      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label
            htmlFor="navbar-1-toggle"
            className="btn btn-ghost lg:hidden text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <button className="btn btn-ghost text-xl text-black">
            CropD
          </button>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
            <li>
              <button>About Us</button>
            </li>

            <li>
              <details>
                <summary>Projects</summary>

                <ul className="p-2 bg-white text-black w-40 z-10 shadow-md border">
                  <li>
                    <button>All Projects</button>
                  </li>
                  <li>
                    <button>Flashing Project</button>
                  </li>
                  <li>
                    <button>Observation</button>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <button>NewsBlogs</button>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <input
            type="text"
            placeholder="Search"
            className="input bg-white text-black border border-gray-300 w-64 lg:w-auto"
          />
        </div>
      </div>

      <div className="collapse-content lg:hidden z-10 bg-white text-black">
        <ul className="menu">
          <li>
            <button>Item 1</button>
          </li>

          <li>
            <button>Parent</button>
            <ul>
              <li>
                <button>Submenu 1</button>
              </li>
              <li>
                <button>Submenu 2</button>
              </li>
            </ul>
          </li>

          <li>
            <button>Item 3</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;