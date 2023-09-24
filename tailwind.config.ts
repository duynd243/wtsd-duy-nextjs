import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/wp-templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/wp-blocks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: "#343434",
        gray: "#7D7D7D",
        "outer-space": "#444444",
        "ultramarine-blue": "#3165F5",
        "old-silver": "#858585",
        "davy-grey": "#555555",
        "spanish-gray": "#9B9B9B",
        "dim-gray": "#6C6C6C",
        gainsboro: "#DFDFDF",
        red: "#FF0000",
        "silver-sand": "#C4C4C4",
        nickel: "#737373",
        "alice-blue": "#f0f8ff",
        "dark-liver": "#515151",
        "rich-black": "#020202",
        "taupe-gray": "#878787",
        "american-silver": "#CFCFCF",
        "bright-gray": "#ECECEC",
        "granite-gray": "#626262",
        platinum: "#E8E8E8",
      },
      boxShadow: {
        "filter-bar": "0px 20px 35px 0px rgba(0, 0, 0, 0.30)",
        "testimonial-card": "0px 20px 60px 0px rgba(0, 0, 0, 0.10)",
        "featured-item-card": "0px 20px 35px 0px rgba(0, 0, 0, 0.10)",
        "choose-us-card": "0px 8px 60px 0px rgba(0, 0, 0, 0.15)",
        "blog-card": "0px 4px 20px 0px rgba(0, 0, 0, 0.10)",
      },
      dropShadow: {
        "card-icon": "0px 4px 31px rgba(0, 0, 0, 0.14)",
      },
      fontSize: {
        "hero-heading": [
          "clamp(3rem, 2.1342rem + 3.6939vw, 5.625rem)",
          {
            fontWeight: 700,
            lineHeight: "122.222%",
          },
        ],
        "section-heading": [
          "clamp(2.8125rem, 2.5033rem + 1.3193vw, 3.75rem)",
          {
            fontWeight: 600,
            lineHeight: "116.667%",
          },
        ],
        "section-description": [
          "clamp(0.9375rem, 0.8757rem + 0.2639vw, 1.125rem)",
          {
            fontWeight: 500,
            lineHeight: "200%",
          },
        ],
        "breadcrumb-heading": [
          "clamp(2.8125rem, 2.4208rem + 1.6711vw, 4rem)",
          {
            fontWeight: 700,
            lineHeight: "117.188%",
          },
        ],
        "breadcrumb-item": [
          "clamp(1.125rem, 1.0013rem + 0.5277vw, 1.5rem)",
          {
            fontWeight: 500,
            lineHeight: "291.667%",
          },
        ],
        "blog-card-categories": [
          "clamp(1.125rem, 1.0013rem + 0.5277vw, 1.5rem)",
          {
            fontWeight: 400,
          },
        ],
        "blog-card-title": [
          "clamp(1.5rem, 1.2526rem + 1.0554vw, 2.25rem)",
          {
            fontWeight: 500,
          },
        ],
        "blog-card-desc": [
          "clamp(0.875rem, 0.7925rem + 0.3518vw, 1.125rem)",
          {
            fontWeight: 300,
            lineHeight: "183.333%",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config;
