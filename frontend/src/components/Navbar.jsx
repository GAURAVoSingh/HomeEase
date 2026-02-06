import { NavLink } from 'react-router-dom';

const navLinkClasses = ({ isActive }) =>
  `text-sm font-medium ${isActive ? 'text-primary' : 'text-slate-700 hover:text-primary'}`;

const Navbar = () => (
  <header className="bg-white shadow-sm">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
          HE
        </div>
        <div>
          <p className="text-lg font-semibold">HomeEase</p>
          <p className="text-xs text-slate-500">Household services marketplace</p>
        </div>
      </div>
      <nav className="flex items-center gap-6">
        <NavLink to="/" className={navLinkClasses}>Home</NavLink>
        <NavLink to="/customer" className={navLinkClasses}>Customer</NavLink>
        <NavLink to="/provider" className={navLinkClasses}>Provider</NavLink>
        <NavLink to="/admin" className={navLinkClasses}>Admin</NavLink>
        <NavLink to="/book" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">Book a service</NavLink>
      </nav>
    </div>
  </header>
);

export default Navbar;
