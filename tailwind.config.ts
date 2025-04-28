import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        "bg-gradient-to-t",
        "from-amber-600",
        "to-amber-500",
        "from-violet-600",
        "to-violet-500",
        "from-blue-600",
        "to-blue-500",
        "from-green-600",
        "to-green-500",
        "bg-gradient-to-t",
        "from-blue-200",
        "to-blue-100",
        "bg-blue-200",
        "from-pink-200",
        "to-pink-100",
        "bg-pink-200",
        "from-green-200",
        "to-green-100",
        "bg-green-200",
        "from-yellow-200",
        "to-yellow-100",
        "bg-yellow-200",
        "from-violet-200",
        "to-violet-100",
        "bg-violet-200",
        "from-amber-200",
        "to-amber-100",
        "bg-amber-200",
        "hidden sm:block",
        "row-start-1",
        "col-start-2",
        "col-start-1 ",
        "col-start-3 ",
        "col-start-4 ",
        "row-span-2",
        "xl:!border-l-0",
    ],
    theme: {
        extend: {
            fontFamily: {
                monte: ["Montserrat Alternates", "serif"],
                sofiya: ["SofiyaProBlack", "sans-serif"],
                sofia_Lite: ["SofiaProLite", "sans-serif"],
                sofia_medium: ["SofiaProMedium", "sans-serif"],
                sofia_semi_bold: ["SofiaProSemiBold", "sans-serif"],
            },
            spacing: {
                dashboardContainer: "96%",
            },
            colors: {
                background: "hsl(var(--background))",
                button: {
                    primary: "",
                    secondary: "",
                },
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    "50": "#faf5ff",
                    "100": "#f3e8ff",
                    "200": "#e9d5ff",
                    "300": "#d8b4fe",
                    "400": "#c084fc",
                    "500": "#a855f7",
                    "600": "#9333ea",
                    "700": "#7e22ce",
                    "800": "#6b21a8",
                    "900": "#581c87",
                    "950": "#2e1065",
                    foreground: "hsl(var(--primary-foreground))",
                    DEFAULT: "hsl(var(--primary))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            animation: {
                marquee: "marquee 20s linear infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            keyframes: {
                marquee: {
                    "0%": {
                        transform: "translateX(100%)",
                    },
                    "100%": {
                        transform: "translateX(-100%)",
                    },
                },
                "accordion-down": {
                    from: {
                        height: "0",
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)",
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: {
                        height: "0",
                    },
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [tailwindcssAnimate],
};

export default config;
