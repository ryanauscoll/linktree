import NextImage from "next/image";
import React from "react";

interface ImageProps {
    src: string;
    alt: string;
    height: number;
    width: number;
    className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className }) => {
    return (
        <NextImage
            src={src}
            alt={alt}
            height={height}
            width={width}
            className={className}
        />
    )
}

export default Image;