import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
    // Set isActive to true to restore an optional section in the navbar.
    // Hidden sections keep their content and remain accessible by direct URL.
    { href: "/", label: "About", isActive: true },
    { href: "/publications", label: "Publications", isActive: true },
    { href: "/talks", label: "Talks", isActive: false },
    { href: "/teaching", label: "Teaching", isActive: false },
    { href: "/projects", label: "Code", isActive: false },
    { href: "/posts", label: "Blog", isActive: true },
    { href: "/tags", label: "Tags", isActive: false },
    // CV content is now included on the About page.
    { href: "/cv", label: "CV", isActive: false },
];
