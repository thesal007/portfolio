import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CURRENT_YEAR = new Date().getFullYear();

const SOCIAL_LINKS = [
  { href: "https://github.com/yourusername", label: "GitHub", icon: FaGithub },
  {
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  { href: "https://x.com/yourusername", label: "X", icon: FaXTwitter },
  { href: "mailto:you@example.com", label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-background border-t border-border">
      <div className="max-w-page mx-auto px-gutter py-stack-lg flex flex-col md:flex-row items-center justify-between gap-stack-md">
        {/* Site name + copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            DevPortfolio
          </span>
          <span className="font-label-caps text-label-caps text-muted-foreground">
            © {CURRENT_YEAR} DevPortfolio. All rights reserved.
          </span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            >
              <Icon className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
