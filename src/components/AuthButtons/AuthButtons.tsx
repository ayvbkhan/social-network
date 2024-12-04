interface AuthButtonsProps {
    className?: string;
    href: string;
    src: string;
    alt: string;
}

export const AuthButtons: React.FC<AuthButtonsProps> = ({ className = '', href, src, alt }) => {
    return (
        <a className={className} href={href}>
            <img src={src} alt={alt} />
        </a>
    );
}

