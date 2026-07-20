import React from "react";

export interface ServiceArea {
    city: string;
    tagline: string;
    icon?: string;
}

export interface AreasWeServeProps {
    badgeText?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    areas?: ServiceArea[];
    ctaText?: string;
    ctaHref?: string;
}

const defaultAreas: ServiceArea[] = [
    { city: "London", tagline: "The capital of innovation", icon: "location_city" },
    { city: "Birmingham", tagline: "The rising tech hub", icon: "location_city" },
    { city: "Manchester", tagline: "The Northern Powerhouse", icon: "location_city" },
    { city: "Leeds", tagline: "Financial services heartland", icon: "location_city" },
    { city: "Liverpool", tagline: "Maritime heritage, digital future", icon: "location_city" },
    { city: "Sheffield", tagline: "Advanced manufacturing meets tech", icon: "location_city" },
    { city: "Bristol", tagline: "Aerospace and creative tech", icon: "location_city" },
];

export default function AreasWeServe({
    badgeText = "AREAS WE SERVE",
    title = <>Serving Brands Across <span className="text-gradient-indigo">England</span></>,
    description = "From the capital to the Northern Powerhouse, we partner with ambitious brands across England's most dynamic cities — delivering premium digital experiences wherever you're based.",
    areas = defaultAreas,
    ctaText = "And Beyond",
    ctaHref = "#contact",
}: AreasWeServeProps) {
    return (
        <section className="py-section-padding bg-mesh section-curve-top" id="location">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                {/* Header */}
                <div className="text-center mb-16">
                    {badgeText && (
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm">
                            {badgeText}
                        </span>
                    )}
                    {title && (
                        <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                {/* Cities grid — 7 cities + 1 CTA card = 8 items for a balanced 4-col / 2-col grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {areas.map((area, idx) => (
                        <div
                            key={idx}
                            className={`glass-panel ${area.city === "Bristol" && "md:col-span-2"} glass-panel-hover p-6 rounded-3xl flex flex-col h-full cursor-default group`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="w-12 h-12 flex-shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">{area.icon ?? "location_city"}</span>
                                </span>
                                <h3 className="font-headline-md text-lg text-on-surface group-hover:text-primary transition-colors duration-300">
                                    {area.city}
                                </h3>
                            </div>
                            <p className="font-body-md text-sm text-on-surface-variant">
                                {area.tagline}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}