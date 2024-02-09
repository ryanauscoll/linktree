import React from "react";
import icons from "@/utils/icons";

export interface SocialData {
    href: string;
    icon: React.ReactNode;
}

const socialData: SocialData[] = [
    {
        href: "https://discordid.netlify.app/?id=658545228697042965",
        icon: <icons.PiButterflyFill />,
    },
    {
        href: "https://discord.gg/cutesie",
        icon: <icons.SiDiscord />,
    },
    {
        href: "https://twitter.com/unamona__w",
        icon: <icons.FaTwitter />,
    }
];

export default socialData;