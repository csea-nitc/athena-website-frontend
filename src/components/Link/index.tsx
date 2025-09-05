import NextLink from 'next/link';

/**
 * link component to be used globally
 * 
 * @param {string} [LinkProps.href] - the url to navigate to
 * @param {string} [LinkProps.label] - the text to display
 * @param {boolean} [LinkProps.openInNewTab] - whether to open the link in a new tab (defaults to false)
 * @param {string} [LinkProps.className] - the class name to apply to the link
 * 
 * @returns {JSX.Element} - the link component
 */
const Link = ({
    href,
    label,
    openInNewTab = false,
    className = "",
}: LinkProps): JSX.Element => {
    return (
        <NextLink
            href={href}
            target={openInNewTab ? "_blank" : "_self"} rel={openInNewTab ? "noopener noreferrer" : undefined}
            className={`text-neonGreen flex w-fit gap-[11px] relative group ${className}`}
        >
            <img
                src="/icons/linkicon.svg"
                alt="link"
                height={24}
                width={24}
            />
            {label}

            <span className='absolute bottom-0 left-0 w-[0%] group-hover:w-[100%] opacity-0 group-hover:opacity-100 h-px bg-neonGreen transition-width duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]' />
        </NextLink>
    )
}

export default Link;

export interface LinkProps {
    href: string;
    label: string;
    openInNewTab?: boolean;
    className?: string;
}
