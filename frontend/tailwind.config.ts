import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            height: {
                "dvh-header": "calc(100dvh - 4rem)",
            },
        },
        colors: {
            primary: {
                50: "#FFF5E2",
                150: "#FFECC8",
                100: "#FFE1A8",
                250: "#FFD98E",
                300: "#FFC554",
                350: "#FFBB37",
                400: "#FFB525",
                450: "#FFA800",
                500: "#CD8500",
                550: "#B27600",
                600: "#9E6C0F",
                650: "#8A6521",
                700: "#785B29",
                750: "#624C26",
                800: "#4F422E",
                850: "#2B261E",
                900: "#141414",
            },
            red: {
                100: "#FFE8E8",
                200: "#FFCBCB",
                300: "#FF9898",
                400: "#FF7575",
                500: "#FF4545",
                600: "#F40E0E",
                700: "#C90808",
                800: "#880707",
                900: "#610606",
            },
            sky: {
                100: "#EEF6FF",
                200: "#D8EAFF",
                300: "#B2D6FF",
                400: "#96C6FF",
                500: "#6DA6FD",
                600: "#4B93FF",
                700: "#2E80FC",
                800: "#326BFF",
                900: "#2D4EFB",
            },
            night: {
                100: "#E4E9FF",
                200: "#C4CDFB",
                300: "#99A7F4",
                400: "#6D80E2",
                500: "#3A4EB9",
                600: "#2026A6",
                700: "#1F2277",
                800: "#161840",
                900: "#1C1E24",
            },
            gray: {
                100: "#F3F3F3",
                200: "#EAEAEA",
                300: "#DEDEDE",
                400: "#CCCCCC",
                500: "#BCBCBC",
                600: "#ABABAB",
                700: "#949494",
                800: "#878787",
                900: "#797979",
            },
            black: "#000000",
            white: "#FFFFFF",
        },
    },
    plugins: [],
};
export default config;
