export default function ServicesSection() {
    return (
        <>

            <section className="py-section-padding bg-mesh-light section-curve-top section-curve-bottom" id="services">
                <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                    <div className="text-center mb-20">
                        <span
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-surface-variant text-on-surface-variant font-label-md border border-white/5">
                            CAPABILITIES
                        </span>
                        <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">Our
                            Services</h2>
                        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Precision-engineered services
                            designed to scale your digital presence organicallasldkjasdkasjd</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl">
                            <div
                                className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                <span className="material-symbols-outlined text-2xl"
                                    style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                            </div>
                            <h3 className="font-headline-md text-xl text-on-surface mb-4">Digital Platforms</h3>
                            <p className="font-body-md text-on-surface-variant flex-grow mb-8">Bespoke web applications, fluid
                                architectures, and robust APIs tailored for seamless enterprise performance.</p>
                            <a className="font-label-md text-primary mt-auto flex items-center gap-2 hover:text-white transition-colors"
                                href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                        </div>

                        <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl">
                            <div
                                className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                <span className="material-symbols-outlined text-2xl"
                                    style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                            </div>
                            <h3 className="font-headline-md text-xl text-on-surface mb-4">SEO Dominance</h3>
                            <p className="font-body-md text-on-surface-variant flex-grow mb-8">Data-driven organic search
                                strategies designed to capture high-intent traffic and outrank competitors effortlessly.</p>
                            <a className="font-label-md text-primary mt-auto flex items-center gap-2 hover:text-white transition-colors"
                                href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                        </div>

                        <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl">
                            <div
                                className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                <span className="material-symbols-outlined text-2xl"
                                    style={{ fontVariationSettings: "'FILL' 1" }}>ads_click</span>
                            </div>
                            <h3 className="font-headline-md text-xl text-on-surface mb-4">Growth Marketing</h3>
                            <p className="font-body-md text-on-surface-variant flex-grow mb-8">Highly targeted, ROI-focused
                                campaigns across premium networks designed to scale acquisition smoothly.</p>
                            <a className="font-label-md text-primary mt-auto flex items-center gap-2 hover:text-white transition-colors"
                                href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                        </div>

                        <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl">
                            <div
                                className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                <span className="material-symbols-outlined text-2xl"
                                    style={{ fontVariationSettings: "'FILL' 1" }}>edit_document</span>
                            </div>
                            <h3 className="font-headline-md text-xl text-on-surface mb-4">Brand Narrative</h3>
                            <p className="font-body-md text-on-surface-variant flex-grow mb-8">Authoritative, fluid content that
                                establishes industry leadership and naturally engages high-value prospects.</p>
                            <a className="font-label-md text-primary mt-auto flex items-center gap-2 hover:text-white transition-colors"
                                href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}