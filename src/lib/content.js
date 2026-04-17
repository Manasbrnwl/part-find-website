export const defaultContent = {
    navbar: {
        brand: "Part-find",
        links: [
            { label: "HOW IT WORKS", href: "#how-it-works" },
            { label: "OPPORTUNITIES", href: "#opportunities" },
            { label: "WHY US", href: "#why-us" },
            { label: "FAQ", href: "#faq" }
        ],
        cta: { label: "JOIN EARLY ACCESS", href: "#" }
    },
    hero: {
        headline: "FIND TRUSTED EVENT GIGS & VOLUNTEERING OPPORTUNITIES",
        subheadline: "No more messy WhatsApp groups. Discover verified opportunities, apply in one click, and gain real-world exposure.",
        primaryCTA: { label: "JOIN AS STUDENT", href: "#" },
        secondaryCTA: { label: "POST REQUIREMENT", href: "#" },
        floatingCards: [
            { title: "Stage Setup", pay: "₹500/day", location: "Bangalore" },
            { title: "Event Promoters", pay: "₹800/day", location: "Mumbai" },
            { title: "Usher", pay: "₹600/day", location: "Delhi" }
        ]
    },
    problem: {
        headline: "Still searching in WhatsApp groups?",
        subtext: "We know how chaotic it is.",
        issues: [
            "No clarity on payment",
            "Fake or unverified opportunities",
            "No response after applying",
            "Organizers facing last-minute no-shows",
            "Too many groups, zero organization"
        ],
        conclusion: "The event industry is unorganized. Part-find is fixing this."
    },
    whatIs: {
        headline: "A Smarter Way to Find Event Work",
        description: "Part-find connects students and organizers in one place.",
        tagline: "Everything in one place.",
        cards: [
            {
                title: "For Students",
                description: "Sign up and showcase your skills.",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "For Organizers",
                description: "Describe the gig and pay details.",
                image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop"
            }
        ]
    },
    howItWorks: {
        headline: "How It Works",
        students: {
            title: "For Students",
            steps: [
                { step: "01", title: "Create Profile", desc: "Sign up and showcase your skills." },
                { step: "02", title: "Browse Gigs", desc: "Filter by location, pay, and type." },
                { step: "03", title: "Apply", desc: "Quick applications, no hassle." },
                { step: "04", title: "Get Selected", desc: "Organizers review and shortlist." },
                { step: "05", title: "Work & Earn", desc: "Gain experience and income." }
            ]
        },
        organizers: {
            title: "For Organizers",
            steps: [
                { step: "01", title: "Post Requirement", desc: "Describe the gig and pay details." },
                { step: "02", title: "Receive Applications", desc: "Only from trusted student profiles." },
                { step: "03", title: "Shortlist Easily", desc: "Review and select the best candidates." }
            ]
        }
    },
    opportunities: {
        headline: "Opportunities You Can Find",
        tagline: "From volunteering to paid gigs — everything structured.",
        items: [
            { title: "Sports Events", icon: "Trophy" },
            { title: "College Fests", icon: "GraduationCap" },
            { title: "Brand Promotions", icon: "Megaphone" },
            { title: "Corporate Events", icon: "Building2" },
            { title: "Concerts", icon: "Music" }
        ]
    },
    whyPartfind: {
        headline: "Built on Trust",
        badges: [
            { title: "Verified Profiles", desc: "Every student and organizer is verified" },
            { title: "Organizer Verification", desc: "We vet all event organizers" },
            { title: "Location Based Feed", desc: "Jobs relevant to your area" },
            { title: "Transparent Descriptions", desc: "Clear pay, hours, and expectations" },
            { title: "Fair Selection", desc: "Equal opportunity for everyone" },
            { title: "Reduced No-Shows", desc: "Accountability built into the system" }
        ]
    },
    benefits: {
        headline: "Benefits",
        students: {
            title: "For Students",
            items: ["Flexible earnings", "Real-world exposure", "Networking opportunities", "Skill development"]
        },
        organizers: {
            title: "For Organizers",
            items: ["Reliable manpower", "Faster hiring", "Organized communication", "Reduced no-shows"]
        }
    },
    founderNote: {
        quote: "As students ourselves, we saw how unorganized the event industry is. Endless WhatsApp groups. No clarity. No trust. Part-find was built to bring structure, transparency, and real opportunities to students across colleges.",
        name: "Part-find TEAM",
        role: "Co-Founder, Part-find"
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about Part-find",
        questions: [
            {
                question: "Is Part-find free for students?",
                answer: "Yes, creating a profile and applying is completely free."
            },
            {
                question: "Are opportunities verified?",
                answer: "Yes, we verify organizers before listing any opportunities."
            },
            {
                question: "How do payments work?",
                answer: "Payment details are clearly mentioned in each gig listing."
            },
            {
                question: "Can first-year students join?",
                answer: "Yes, anyone looking for exposure can apply."
            },
            {
                question: "When is the app launching?",
                answer: "We are currently in early access. Join now!"
            }
        ]
    },
    cta: {
        title: "STOP SEARCHING. START FINDING.",
        subtitle: "Your next opportunity is one click away.",
        primaryBtn: { label: "JOIN Part-find TODAY", href: "https://play.google.com/store/apps/details?id=com.event.part-find" },
        secondaryBtn: { label: "POST YOUR REQUIREMENT", href: "https://play.google.com/store/apps/details?id=com.event.part-find" }
    },
    footer: {
        text: "Part-find - Connecting students with real event opportunities.",
        copyright: "© 2026 Part-find. All rights reserved. @part-find",
        links: [
            { label: "About Us", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms & Conditions", href: "#" }
        ],
        socials: {
            instagram: "https://www.instagram.com/part_find?igsh=MWQ3NWJ5NHBjYmVvaA%3D%3D",
            linkedin: "#"
        },
        email: "offical@part-find.org"
    }
};

export const getContent = () => {
    const content = localStorage.getItem("landing_content_v3");
    if (content && content !== "undefined") {
        try {
            const parsed = JSON.parse(content);
            return { ...defaultContent, ...parsed }; // Merge to ensure missing keys fallback to default
        } catch (e) {
            console.warn("Failed parsing localstorage content", e);
        }
    }
    return defaultContent;
};

export const saveContent = (content) => {
    localStorage.setItem("landing_content_v3", JSON.stringify(content));
};

export const resetContent = () => {
    localStorage.removeItem("landing_content_v3");
    return defaultContent;
};
