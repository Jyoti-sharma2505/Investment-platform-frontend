import { FiBell } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="h-16 bg-white shadow flex justify-between items-center px-8">

      <div>

        <h1 className="text-xl font-bold">

          Investment Dashboard

        </h1>

      </div>

      <div className="flex items-center gap-5">

        <FiBell
          size={22}
          className="cursor-pointer"
        />

        <div className="flex items-center gap-2">

          <FiUser />

          <span>

            Welcome

          </span>

        </div>

      </div>

    </header>
  );
};

export default Navbar;