import React, { ReactNode } from "react";

interface Props {
    icon?: ReactNode;
    href: string;
    children: ReactNode;
}

const Button: React.FC<Props> = ({ icon, href, children }) => {
    return (
        <a href={href} className="btn" target="_blank" rel="noopener noreferrer">
            {icon && <span className="icon">{icon}</span>}
            <span>{children}</span>
        </a>
    )
}

export default Button;