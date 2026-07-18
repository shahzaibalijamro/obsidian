export default function CaseStudiesSection() {
    return (
        <>

            <section className="py-section-padding" id="case-studies">
                <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-4">
                                Featured Case Studies</h2>
                            <p className="font-body-lg text-on-surface-variant">Fluid solutions driving tangible outcomes.</p>
                        </div>
                        <a className="hidden md:flex font-label-md text-primary items-center gap-2 hover:text-on-surface transition-colors"
                            href="#">View All Work <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                    </div>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

                        <div className="group cursor-pointer">
                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-panel mb-6 p-2">
                                <img alt="Project preview"
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuARA6acrMCq8d_Bo5JNJMYqlubEjCfsk4wCpxlTBj5Zls0oESnOIPWyo727KwXuJySR7YqP1awjI0FNUV4OWq-LblzVArv7Ia3nViAw6ugQlTYU5xtq5WXjLnwv8hPX9PMeR5GT5Ag9HTxBgsm5GDLsIex-N0VJfxKR7lEbjr_EyvFn1VvEygX4P9rPHt3rxL9cyz4vc75LajGUsntBfa_RTmI0hLdb2NUp-DY5Y0SuMgi1qAsi_gYK8hkvtg9bTH4o6ZCkihnJIKc" />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-label-md text-primary mb-2">FINTECH</p>
                                    <h3 className="font-headline-md text-2xl text-on-surface mb-2">Nexus Banking Platform</h3>
                                    <p className="font-body-md text-on-surface-variant">+210% User Acquisition</p>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-panel mb-6 p-2">
                                <img alt="Project preview"
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7m34grr-M7KTPJ5mz5CFLK8jklM-5_rcjgWgtdOVJpl-pwfhrFz2xA9C80FF5nxFoXHTObF1VufrkSvVyTGsCwS93HvxFTkWqV6wl9S0zp0S0lpqGdT7n44jWlQbiwRWC733aVxQiEsx2HKN3tngM-sEST3VSMyn4CDxeXAb8TaIS_hjhl3gb0SlIyAm9lNVryy3OGiBIWBDKoCsmSsZ8LA7VL975rUmCowXGtCdKH1A1Ykoa7UQLMgwPKx3dntD-1cHb4wU6ANU" />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-label-md text-primary mb-2">SAAS</p>
                                    <h3 className="font-headline-md text-2xl text-on-surface mb-2">Quantum Analytics</h3>
                                    <p className="font-body-md text-on-surface-variant">3x Conversion Rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-panel mb-6 p-2">
                                <img alt="Neural Analytics Engine preview"
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhGhhhb1cLDyjePAKXKkDTIFDx7GklVWfK7btt_YK3Z_x-n13gUjsqT5M0ByqiwbDJh0_PZcToBVYIAvMnFVSJcLWhSXthtCX-P319G2SjGgtXCPpcHuP7GE2Ofqhzxc1k-tMsHgB04aPXixfO4CAByqW6VPY_XxF8cONoSpqvbzDCcYCwHhvESCiOPbEoy13LVAARvKhFVaxgUJioorD7Wrc0AxfioupWPfZ66UJt1TrYk4IipGLM6KpColPokojZJsf09ybzzpM" />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-label-md text-primary mb-2">AI / DATA</p>
                                    <h3 className="font-headline-md text-2xl text-on-surface mb-2">Neural Analytics Engine</h3>
                                    <p className="font-body-md text-on-surface-variant">99.9% Prediction Accuracy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 text-center md:hidden">
                        <a className="inline-flex font-label-md text-primary items-center gap-2 hover:text-on-surface transition-colors"
                            href="#">View All Work <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                    </div>
                </div>
            </section>

        </>
    );
}