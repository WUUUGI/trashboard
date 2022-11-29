import { Outlet } from "@remix-run/react";

import { NavLink } from "@remix-run/react";

function NavItem({ href, isActive, reload, children }) {
    return (
        <li>
            <NavLink
                to={href}
                reloadDocument={reload ? reload : false}
                className={({ isActive }) => `block px-3 py-2 rounded-xl text-md font-bold ${isActive ? 'bg-transparent text-sky-400' : 'text-slate-400 bg-transparent hover:text-slate-600 hover:underline'}`}
            >
                {children}
            </NavLink>
        </li>
    )
}

function Nav({ children }) {
    return (
        <nav className="py-4 px-6 text-sm font-medium backdrop-blur-sm">
            <ul className="flex space-x-3">
                {children}
            </ul>
        </nav>
    )
}
function NavList() {
    return (
        <Nav>
            <NavItem href="/dashboard/trash" reload={false}>Trash</NavItem>
            <NavItem href="/dashboard/trains" reload={true}>Trains</NavItem>
        </Nav>
    );
}


export default function DashboardRoute() {
    return (<div className="divide-y divide-slate-800"><NavList /><Outlet /></div>);
}