import {
    FiHome,
    FiDollarSign,
    FiUsers,
    FiClock,
    FiUser,
    FiLogOut,
    FiGitBranch
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
    const { logout } = useContext(AuthContext);

    const menus = [
        {
            name: "Dashboard",
            path: "/",
            icon: <FiHome />,
        },
        {
            name: "Investments",
            path: "/investments",
            icon: <FiDollarSign />,
        },
        {
            name: "ROI History",
            path: "/roi-history",
            icon: <FiClock />,
        },
        {
            name: "Referrals",
            path: "/referrals",
            icon: <FiUsers />,
        },
        {
            name: "Profile",
            path: "/profile",
            icon: <FiUser />,
        },
        {
            name: "Referral Tree",
            path: "/referrals/tree",
            icon: <FiGitBranch />,
        },
    ];

    return (
        <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0">

            <div className="text-2xl font-bold p-6 border-b border-slate-700">

                InvestPro

            </div>

            <nav className="mt-5">

                {menus.map((menu) => (

                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-6 py-4 transition ${isActive
                                ? "bg-blue-600"
                                : "hover:bg-slate-800"
                            }`
                        }
                    >
                        {menu.icon}

                        {menu.name}
                    </NavLink>
                ))}

            </nav>

            <button
                onClick={logout}
                className="absolute bottom-5 left-5 flex items-center gap-3 text-red-400"
            >
                <FiLogOut />

                Logout

            </button>

        </aside>
    );
};

export default Sidebar;