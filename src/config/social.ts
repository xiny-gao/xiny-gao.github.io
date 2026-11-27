import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/xiny-gao",
        linkTitle: `Follow Xinyu Gao on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "gaoxy0724@163.com",
        linkTitle: `Send an email to xinyu`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=XjgkiC0AAAAJ&hl=zh-CN",
        linkTitle: `Xinyu Gao on Google Scholar`,
        isActive: true,
    },
    // {
    //     name: "ORCID",
    //     href: "https://orcid.org/0000-0002-1825-0097",
    //     linkTitle: `Claude Shannon on ORCID`,
    //     isActive: true,
    // },
    // {
    //     name: "LinkedIn",
    //     href: "https://www.linkedin.com/in/claude-shannon-123456789/",
    //     linkTitle: `Claude Shannon on LinkedIn`,
    //     isActive: true, // Assuming Claude doesn't have a LinkedIn profile
    // },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};