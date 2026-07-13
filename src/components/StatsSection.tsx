export default function StatsSection() {
    return (
        <>

            <section className="py-24 bg-mesh-light section-curve-top section-curve-bottom">
                <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                    <div className="glass-panel p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-gutter">
                            <div className="text-center">
                                <p className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-gradient-indigo mb-3">500+</p>
                                <p className="font-label-md text-on-surface-variant tracking-wider uppercase">Projects Delivered
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-gradient-indigo mb-3">12+</p>
                                <p className="font-label-md text-on-surface-variant tracking-wider uppercase">Years Experience
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-gradient-indigo mb-3">98%</p>
                                <p className="font-label-md text-on-surface-variant tracking-wider uppercase">Client Retention
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-gradient-indigo mb-3">250M+</p>
                                <p className="font-label-md text-on-surface-variant tracking-wider uppercase">Revenue Generated
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}