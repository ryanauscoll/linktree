import SocialData from "./SocialData";

const Socials: React.FC = () => {
    return (
        <div className="socials">
            {SocialData.map((socialItem, index) => (
                <a key={index} href={socialItem.href} target="_blank" rel="noopener noreferrer">
                    <span className="mini-icon">{socialItem.icon}</span>
                </a>
            ))}
        </div>
    )
}

export default Socials;