import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
    title: "unamona",
    description: "Navigating the Cosmos of Social Media: Explore with @UnitAndro 🚀",
    themeColor: "#ff7bae",
    openGraph: {
        "title": "unamona",
        type: "website",
        description: "Navigating the Cosmos of Social Media: Explore with @UnitAndro 🚀",
        siteName: "unamona"
    },
    twitter: {
        handle: "unamona",
        site: "unamona",
        cardType: "summary_large_image"
    },
    additionalLinkTags: [
        {
            "rel": "icon",
            "href": "favicon.png"
        }
    ]
}

export default config;