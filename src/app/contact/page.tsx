"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                budget: "",
                timeline: "",
                message: ""
            });
            // Reset status after a few seconds
            setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <>
            <Header />
            <main className="grow pt-20">
                {/* 1. Hero / Get in Touch Section */}
                <section className="relative w-full min-h-[60vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-padding overflow-hidden section-curve-bottom bg-mesh-dark">
                    {/* Background Image Placeholder */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
                    </div>
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-inverse-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

                    <div className="relative z-10 max-w-container-max mx-auto text-center w-full">
                        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6 drop-shadow-2xl">
                            Initiate Your <br /><span className="text-gradient-indigo">Growth Analysis</span>
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                            Secure your competitive advantage. Request a preliminary architectural review of your digital presence and discuss your upcoming projects with our experts.
                        </p>
                    </div>
                </section>

                {/* 2 & 3. Contact Grid */}
                <section id="contact-form" className="w-full px-margin-mobile md:px-margin-desktop mt-16 py-12 pb-section-padding bg-mesh-light section-curve-top section-curve-bottom">
                    <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <div className="glass-panel p-8 md:p-12 h-full">
                                <h2 className="font-headline-md text-headline-md text-on-surface mb-8">Direct Inquiry</h2>

                                {status === "success" ? (
                                    <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl text-center">
                                        <span className="material-symbols-outlined text-primary text-4xl mb-4">check_circle</span>
                                        <h3 className="font-headline-md text-xl text-on-surface mb-2">Request Received</h3>
                                        <p className="font-body-md text-on-surface-variant">Thank you for reaching out. One of our senior architects will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="name">Full Name *</label>
                                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input-obsidian w-full text-body-md" placeholder="John Doe" required />
                                            </div>
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="email">Corporate Email *</label>
                                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input-obsidian w-full text-body-md" placeholder="john@company.com" required />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="phone">Phone Number</label>
                                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input-obsidian w-full text-body-md" placeholder="+1 (555) 000-0000" />
                                            </div>
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="company">Company Name</label>
                                                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="form-input-obsidian w-full text-body-md" placeholder="Acme Corp" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="service">Primary Interest *</label>
                                                <select id="service" name="service" value={formData.service} onChange={handleChange} className="form-input-obsidian w-full text-body-md appearance-none bg-surface-variant/20" required>
                                                    <option value="" disabled>Select Primary Interest...</option>
                                                    <option value="seo">Search Dominance</option>
                                                    <option value="dev">Platform Architecture</option>
                                                    <option value="ai">Neural Analytics</option>
                                                    <option value="marketing">Digital Marketing</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="budget">Project Budget</label>
                                                <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="form-input-obsidian w-full text-body-md appearance-none bg-surface-variant/20">
                                                    <option value="" disabled>Select Budget Range...</option>
                                                    <option value="50k-100k">$50k - $100k</option>
                                                    <option value="100k-250k">$100k - $250k</option>
                                                    <option value="250k+">$250k+</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="timeline">Expected Timeline</label>
                                            <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="form-input-obsidian w-full text-body-md appearance-none bg-surface-variant/20">
                                                <option value="" disabled>Select Timeline...</option>
                                                <option value="immediate">Immediate</option>
                                                <option value="1-3-months">1-3 Months</option>
                                                <option value="3-6-months">3-6 Months</option>
                                                <option value="planning">Planning Phase</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="message">Project Details</label>
                                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="form-input-obsidian w-full text-body-md resize-none" placeholder="Tell us about your objectives..." required></textarea>
                                        </div>
                                        <button type="submit" disabled={status === "submitting"} className="w-full bg-[#494bd6] hover:bg-[#6366f1] text-white font-label-md text-label-md py-4 rounded-xl uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] border border-[#6366f1]/30 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2">
                                            {status === "submitting" ? (
                                                <>
                                                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                                    Transmitting...
                                                </>
                                            ) : (
                                                "Transmit Request"
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Info Column */}
                        <div className="lg:col-span-5 flex flex-col gap-gutter">
                            {/* Contact Details Card */}
                            <div className="glass-panel p-8 md:p-12 flex-grow">
                                <h3 className="font-headline-md text-headline-md text-on-surface mb-8">Global Hubs</h3>
                                <div className="space-y-8">
                                    {/* Direct Channels */}
                                    <div className="border-b border-on-surface/10 pb-6">
                                        <a href="mailto:strategy@obsidiandigital.com" className="flex items-center gap-4 group mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                                            </div>
                                            <div>
                                                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Electronic Comm</p>
                                                <p className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors">strategy@obsidiandigital.com</p>
                                            </div>
                                        </a>
                                        <a href="tel:+12125550198" className="flex items-center gap-4 group mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                                            </div>
                                            <div>
                                                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Voice Protocol</p>
                                                <p className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors">+1 (212) 555-0198</p>
                                            </div>
                                        </a>
                                        <div className="flex items-center gap-4 group mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                                            </div>
                                            <div>
                                                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Business Hours</p>
                                                <p className="font-body-lg text-body-lg text-on-surface">24/7 Monitoring</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                                            </div>
                                            <div>
                                                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Response Time</p>
                                                <p className="font-body-lg text-body-lg text-on-surface">&lt; 4 Hours</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Locations */}
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-secondary mt-1">location_on</span>
                                            <div>
                                                <p className="font-label-md text-label-md text-on-surface">New York</p>
                                                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Financial District, NYC</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-secondary mt-1">location_on</span>
                                            <div>
                                                <p className="font-label-md text-label-md text-on-surface">London</p>
                                                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Canary Wharf, LDN</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-secondary mt-1">location_on</span>
                                            <div>
                                                <p className="font-label-md text-label-md text-on-surface">Singapore</p>
                                                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Marina Bay, SGP</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Why Contact Us Section */}
                <section className="py-[calc(var(--spacing-section-padding)+40px)] -top-10 relative -z-1 bg-mesh-dark" id="why-contact-us">
                    <div className="max-w-container-max mx-auto px-margin-desktop">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm uppercase tracking-wider">Partner With Us</span>
                            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">Why Reach Out?</h2>
                            <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">We combine deep technical mastery with a customer-centric approach to deliver irrefutable digital authority for the world's most ambitious brands.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full border border-primary/20 bg-primary/5">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                    <span className="material-symbols-outlined text-2xl">architecture</span>
                                </div>
                                <h3 className="font-headline-md text-xl text-on-surface mb-4">Expert Consultation</h3>
                                <p className="font-body-md text-on-surface-variant">Engage with our senior architects to dissect your digital challenges and uncover hidden growth vectors.</p>
                            </div>
                            <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full border border-primary/20 bg-primary/5">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                    <span className="material-symbols-outlined text-2xl">settings_suggest</span>
                                </div>
                                <h3 className="font-headline-md text-xl text-on-surface mb-4">Custom Solutions</h3>
                                <p className="font-body-md text-on-surface-variant">Receive bespoke technical and strategic recommendations engineered specifically for your market position.</p>
                            </div>
                            <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full border border-primary/20 bg-primary/5">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                                </div>
                                <h3 className="font-headline-md text-xl text-on-surface mb-4">Dedicated Support</h3>
                                <p className="font-body-md text-on-surface-variant">Experience unwavering commitment from initial inquiry through deployment and continuous optimization.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. FAQ Section */}
                <div className="-top-20 relative">
                    <FAQSection />
                </div>

                {/* 6. Social Media Section */}
                <section className="py-16 bg-mesh-dark">
                    <div className="max-w-container-max mx-auto px-margin-desktop text-center">
                        <h3 className="font-headline-md text-2xl text-on-surface mb-8">Connect With The Architects</h3>
                        <div className="flex justify-center items-center gap-6">
                            <a className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:-translate-y-1 transition-all duration-300" href="#">
                                <span className="material-symbols-outlined text-2xl">work</span>
                            </a>
                            <a className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:-translate-y-1 transition-all duration-300" href="#">
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </a>
                            <a className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:-translate-y-1 transition-all duration-300" href="#">
                                <span className="material-symbols-outlined text-2xl">photo_camera</span>
                            </a>
                            <a className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:-translate-y-1 transition-all duration-300" href="#">
                                <span className="material-symbols-outlined text-2xl">forum</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* 7. Final CTA Section */}
                <div className="mb-section-padding">
                    <CTASection buttonText="Schedule a Free Strategy Session" buttonHref="#contact-form" />
                </div>

            </main>
            <Footer />
        </>
    );
}
