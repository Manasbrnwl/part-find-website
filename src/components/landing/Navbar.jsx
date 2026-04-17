
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/lib/theme";

export const Navbar = ({ content }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const data = content?.navbar || {};

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between h-16">
        <Link to="/" className="font-syne font-extrabold text-2xl tracking-tighter uppercase" data-testid="navbar-brand">
          {data.brand || "Part-find"}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {(data.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="font-outfit text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid={`nav-link-${i}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-none border-2 border-border"
            data-testid="theme-toggle"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {location.pathname === "/edit-cards-content" && (
            <Link to="/">
              <Button
                variant="outline"
                className="hidden md:inline-flex rounded-none border-2 font-mono text-xs tracking-wider uppercase"
                data-testid="home-link"
              >
                /home
              </Button>
            </Link>
          )}

          <a href={data.cta?.href || "#"} target="_blank" rel="noopener noreferrer">
            <Button
              className="hidden md:inline-flex bg-[#CCFF00] text-black hover:bg-[#b8e600] rounded-none border-2 border-black font-bold text-xs tracking-wider uppercase h-10 px-6"
              data-testid="nav-cta"
            >
              {data.cta?.label || "JOIN NOW"}
            </Button>
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-none border-2 border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t-2 border-border bg-background px-4 py-6 space-y-4" data-testid="mobile-menu">
          {(data.links || []).map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block font-outfit text-base font-medium uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-4">
            {location.pathname === "/edit-cards-content" && (
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="rounded-none border-2 font-mono text-xs uppercase">
                  /home
                </Button>
              </Link>
            )}
            <a href={data.cta?.href || "#"} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#CCFF00] text-black hover:bg-[#b8e600] rounded-none border-2 border-black font-bold text-xs uppercase">
                {data.cta?.label || "JOIN NOW"}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};