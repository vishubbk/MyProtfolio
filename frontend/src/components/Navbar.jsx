import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Home, ShoppingBag, User, Menu, X, LogIn } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Header */}
      <header className="backdrop-blur-md shadow-md fixed w-full z-10 bg-[#351b1b]">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img
  src="data:image/png;base64,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"
              alt="My Logo"
              className="w-12 h-12 object-cover rounded-full border-2 border-amber-300"
            />
            <h1 className='text-xl font-bold text-amber-300'>&lt;Leptop_tz/&gt;</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-white">
            {[
              { path: "/", label: "Home", icon: Home },
              { path: "/Projects", label: "Projects", icon: ShoppingBag },
              { path: "/About", label: "About", icon: User },
              { path: "/Contact", label: "Contact", icon: X },
            ].map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link flex items-center gap-2 ${
                  location.pathname === path ? "active" : ""
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}

            <Link to="/login" className="sign-in-btn flex items-center gap-2">
              <LogIn size={20} />
              <span>Sign In</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden focus:outline-none text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-20 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-72 h-full bg-[#351b1b] shadow-lg p-6 transition-transform duration-300 text-white ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold">Navigation</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-4">
            {[
              { path: "/", label: "Home", icon: Home },
              { path: "/Projects", label: "Projects", icon: ShoppingBag },
              { path: "/About", label: "About", icon: User },
              { path: "/Contact", label: "Contact", icon: User },
            ].map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`mobile-nav-link flex items-center gap-3 ${
                  location.pathname === path ? "active" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}

            <Link to="/login" className="mobile-sign-in-btn flex items-center gap-2">
              <LogIn size={20} />
              <span>Sign In</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Inline Styles for Custom Classes */}
      <style>
        {`
          .nav-link, .mobile-nav-link {
            font-weight: 500;
            color: white;
            transition: all 0.3s ease;
            padding: 0.5rem 0.75rem;
            border-radius: 0.375rem;
          }
          .nav-link:hover, .mobile-nav-link:hover {
            color: #facc15;
            background-color: #4b5563;
          }
          .sign-in-btn, .mobile-sign-in-btn {
            font-weight: 500;
            color: white;
            transition: all 0.3s ease;
            padding: 0.5rem 0.75rem;
            border-radius: 0.375rem;
          }
          .sign-in-btn:hover, .mobile-sign-in-btn:hover {
            background-color: #facc15;
            color: #1e293b;
          }
          .nav-link.active, .mobile-nav-link.active {
            color: #facc15;
            background-color: #4b5563;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
