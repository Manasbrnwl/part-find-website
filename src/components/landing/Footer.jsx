
import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = ({ content }) => {
  const data = content?.footer || {};

  return (
    <footer className="border-t-2 border-border py-16" data-testid="footer-section">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-syne font-extrabold text-2xl tracking-tighter uppercase mb-3" data-testid="footer-brand">
              {data.brand || "PARTFIND"}
            </div>
            <p className="font-outfit text-sm text-muted-foreground max-w-xs">
              {data.tagline || "Connecting students with real event opportunities."}
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Links
            </div>
            <ul className="space-y-3">
              {(data.links || []).map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="font-outfit text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    data-testid={`footer-link-${i}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Connect
            </div>
            <div className="flex items-center gap-4 mb-4">
              {data.socials?.instagram && (
                <a
                  href={data.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-border flex items-center justify-center hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors duration-200"
                  data-testid="footer-instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {/* {data.socials?.linkedin && (
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-border flex items-center justify-center hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors duration-200"
                  data-testid="footer-linkedin"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )} */}
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="w-10 h-10 border-2 border-border flex items-center justify-center hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors duration-200"
                  data-testid="footer-email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
            </div>
            {data.email && (
              <p className="font-mono text-xs text-muted-foreground">{data.email}</p>
            )}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* <p className="font-mono text-xs text-muted-foreground" data-testid="footer-copyright">
            &copy; {new Date().getFullYear()} Partfind. All rights reserved.
          </p> */}
          <p className="font-mono text-xs text-muted-foreground">
            @partfind
          </p>
        </div>
      </div>
    </footer>
  );
};