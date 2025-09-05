import { ReactNode } from "react";

/**
 * 
 */
const Section = ({
    children,
    id = undefined,
    className = "",
    borderTop = false,
}: SectionProps) => {
    return (
        <section id={id} className={`relative w-full px-4 md:px-16 flex justify-center ${borderTop ? 'border border-white border-0 border-t-[1px]' : ''}`}>
            <div className={`w-full max-w-[1920px] ${className}`}>
                {children}
            </div>
        </section>
    )
}

export default Section;
export interface SectionProps {
    children: ReactNode,
    id?: string,
    className?: string,
    borderTop?: boolean
}