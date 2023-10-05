import { lightTheme, darkTheme } from "../logic/changeTheme";
import { showMenu } from "../logic/mobile-menu";
const navItems = [
    { id: "about", label: "About us" },
    { id: "product", label: "Product" },
    { id: "resource", label: "Resource" },
    { id: "contact", label: "Contact" },
];

export default function header() {
    return (
        <header className="header flex justify-between items-center ">
            <div className="logo ">
                <img
                    src="/alarado-icon-homepage.svg"
                    alt="Alarado homepage logo"
                />
            </div>
            <nav>
                <ul className="navbar flex gap-9">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                id={
                                    item.id === "about"
                                        ? "selected"
                                        : "no-selected"
                                }
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex">
                <div className="theme flex justify-center items-center border rounded-full bg-gray-900">
                    <button onClick={() => darkTheme()} className="text-white">
                        <img
                            src="/Moon_fill.svg"
                            alt="Alarado homepage logo "
                            id="moon2"
                        />
                    </button>
                    <button onClick={() => lightTheme()}>
                        <img
                            src="/Sun_fill.svg"
                            alt="Alarado homepage logo "
                            id="sun2"
                        />
                    </button>
                </div>
                <div className="menu-mobile">
                    <button onClick={() => showMenu()}>
                        <i id="menu-button" className="bx bx-menu"></i>
                    </button>
                </div>{" "}
            </div>
        </header>
    );
}
