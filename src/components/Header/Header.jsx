

const Header = () => {
  return (
    <div className="m-2">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl font-bold">Aura Recipes</a>
        </div>
        <div className="navbar-center hidden lg:flex flex-1">
          <ul className="menu menu-horizontal px-1 text-[#150B2BB2] text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control invisible lg:visible">
            <input
              type="text"
              placeholder=" 🔍 Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img className="bg-[#0BE58A]"
                  alt="Tailwind CSS Navbar component"
                  src="Frame.svg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
