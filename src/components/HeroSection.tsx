import React from 'react';

export interface HeroButton {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
    icon?: string;
}

export interface HeroSectionProps {
    badgeText?: string;
    title: React.ReactNode;
    description: string;
    buttons: HeroButton[];
}

export default function HeroSection({
    badgeText = "PREMIUM DIGITAL AGENCY",
    title = (
        <>
            Elevating Digital Landscapes Through <span className="text-gradient-indigo">Strategic Innovation And Design</span>
        </>
    ),
    description = "We forge sophisticated digital experiences for industry leaders. Melding visionary strategy with flawless execution, we engineer growth for elite brands in a complex digital ecosystem.",
    buttons = [
        { text: "Our Services", href: "#services", variant: "primary", icon: "arrow_forward" },
        { text: "Free Consultation", href: "#contact", variant: "secondary" }
    ]
}: Partial<HeroSectionProps>) {
    return (
        <section className="relative pt-40 pb-section-padding min-h-[90vh] flex items-center overflow-hidden section-curve-bottom bg-mesh-dark">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-inverse-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop relative z-10 w-full">
                <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
                    {badgeText && (
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm">
                            {badgeText}
                        </span>
                    )}
                    <h1 className="font-display-lg font-semibold text-display-lg-mobile md:text-display-lg text-on-surface mb-8 leading-tight">
                        {title}
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-3xl mx-auto">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        {buttons.map((btn, idx) => (
                            <a
                                key={idx}
                                href={btn.href}
                                className={
                                    btn.variant === 'primary'
                                        ? "px-8 py-4 bg-inverse-primary text-white font-label-md rounded-full text-center hover:bg-primary hover:text-inverse-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(73,75,214,0.4)]"
                                        : "px-8 py-4 border border-outline-variant text-on-surface font-label-md rounded-full text-center hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                                }
                            >
                                {btn.text} {btn.icon && <span className="material-symbols-outlined text-sm">{btn.icon}</span>}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}