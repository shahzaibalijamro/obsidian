export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string;
  clientName: string;
  industry: string;
  keyResult: string;
}

const defaultContent = `
<div class="max-w-4xl mx-auto space-y-8">
  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">Project Overview</h2>
    <p class="text-body-lg text-on-surface-variant">Aurora Global, a leading global tech enterprise, partnered with Obsidian Digital to redefine their digital authority. The objective was to move beyond traditional SEO and implement a sophisticated semantic data modeling framework that aligns with the next generation of search intelligence.</p>
  </section>
  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">Client Challenge</h2>
    <p class="text-body-lg text-on-surface-variant">The client faced significant hurdles with legacy search visibility and mounting technical debt in their indexing structures. As search engines shifted from simple keyword mapping to complex intent mapping, Aurora Global's digital footprint struggled to maintain relevance in a rapidly evolving landscape.</p>
  </section>
  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">Our Strategy &amp; Approach</h2>
    <div class="grid grid-cols-1 gap-6 mt-8">
      <div class="p-6 rounded-xl bg-surface-container-low border border-on-surface/10">
        <h4 class="text-primary font-bold mb-2">1. Technical Recon</h4>
        <p class="text-body-md text-on-surface-variant">A deep-tissue audit of existing infrastructure to identify bottlenecks in crawlability and indexing efficiency.</p>
      </div>
      <div class="p-6 rounded-xl bg-surface-container-low border border-on-surface/10">
        <h4 class="text-primary font-bold mb-2">2. Semantic Modeling</h4>
        <p class="text-body-md text-on-surface-variant">Mapping entity relationships to build a robust Knowledge Graph that search bots can easily interpret.</p>
      </div>
      <div class="p-6 rounded-xl bg-surface-container-low border border-on-surface/10">
        <h4 class="text-primary font-bold mb-2">3. Architectural Implementation</h4>
        <p class="text-body-md text-on-surface-variant">Deploying high-performance code structures that prioritize speed and semantic clarity.</p>
      </div>
    </div>
  </section>
  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">Solution Delivered</h2>
    <ul class="list-none space-y-4 pl-0">
      <li class="flex items-start">
        <span class="material-symbols-outlined text-primary mr-4 mt-1">check_circle</span>
        <span class="text-body-lg text-on-surface-variant">Custom Knowledge Graph structures for enhanced entity recognition.</span>
      </li>
      <li class="flex items-start">
        <span class="material-symbols-outlined text-primary mr-4 mt-1">check_circle</span>
        <span class="text-body-lg text-on-surface-variant">Next.js SSR implementation for lightning-fast, SEO-friendly rendering.</span>
      </li>
      <li class="flex items-start">
        <span class="material-symbols-outlined text-primary mr-4 mt-1">check_circle</span>
        <span class="text-body-lg text-on-surface-variant">AI-driven content optimization to align with predictive search trends.</span>
      </li>
    </ul>
  </section>
  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">Execution Process</h2>
    <div class="space-y-8 mt-8">
      <div class="flex gap-6">
        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">01</div>
        <div>
          <h4 class="text-on-surface font-bold">Audit &amp; Discovery</h4>
          <p class="text-body-md text-on-surface-variant">Comprehensive analysis of the digital ecosystem.</p>
        </div>
      </div>
      <div class="flex gap-6">
        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">02</div>
        <div>
          <h4 class="text-on-surface font-bold">Strategic Mapping</h4>
          <p class="text-body-md text-on-surface-variant">Defining the semantic relationships and technical roadmap.</p>
        </div>
      </div>
      <div class="flex gap-6">
        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">03</div>
        <div>
          <h4 class="text-on-surface font-bold">Performance Tracking</h4>
          <p class="text-body-md text-on-surface-variant">Real-time monitoring and iterative optimization.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">Tools &amp; Technologies</h2>
    <div class="flex flex-wrap gap-4">
      <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">React</span>
      <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Next.js</span>
      <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Node.js</span>
      <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">AWS</span>
    </div>
  </section>
  <section class="p-8 rounded-xl bg-primary-container/10 border border-primary/20">
    <h2 class="font-headline-lg text-headline-lg text-primary mb-4">Results &amp; Impact</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="text-center md:text-left">
        <div class="text-4xl font-bold text-on-surface mb-2">+340%</div>
        <p class="text-label-md uppercase tracking-widest">Organic Growth</p>
      </div>
      <div class="text-center md:text-left">
        <div class="text-4xl font-bold text-on-surface mb-2">#1</div>
        <p class="text-label-md uppercase tracking-widest">Core Keyword Ranking</p>
      </div>
    </div>
  </section>
</div>
<div class="py-16"></div>
<section class="mb-section-padding max-w-4xl mx-auto md:px-0">
  <h2 class="font-headline-lg text-headline-lg text-on-surface mb-12 text-center tracking-tighter">The Evolution of Dominance</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="p-8 rounded-xl bg-surface-container-low border border-error/20 opacity-80 glass-effect">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center text-error"><span class="material-symbols-outlined">history</span></div>
        <h3 class="font-headline-md text-xl text-on-surface">Legacy Infrastructure</h3>
      </div>
      <ul class="space-y-4">
        <li class="flex items-center text-on-surface-variant"><span class="material-symbols-outlined text-sm mr-3 text-error opacity-70">close</span>Fragmented Keyword Strategy</li>
        <li class="flex items-center text-on-surface-variant"><span class="material-symbols-outlined text-sm mr-3 text-error opacity-70">close</span>Technical Debt &amp; Latency</li>
        <li class="flex items-center text-on-surface-variant"><span class="material-symbols-outlined text-sm mr-3 text-error opacity-70">close</span>Static Search Footprint</li>
      </ul>
    </div>
    <div class="p-8 rounded-xl bg-surface-container-high border border-primary/40 relative overflow-hidden glass-effect">
      <div class="absolute top-4 right-4"><span class="bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Success</span></div>
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><span class="material-symbols-outlined">auto_awesome</span></div>
        <h3 class="font-headline-md text-xl text-on-surface">Obsidian-Engineered</h3>
      </div>
      <ul class="space-y-4">
        <li class="flex items-center text-on-surface"><span class="material-symbols-outlined text-sm mr-3 text-primary">check_circle</span>Semantic Authority</li>
        <li class="flex items-center text-on-surface"><span class="material-symbols-outlined text-sm mr-3 text-primary">check_circle</span>Algorithmic Precision</li>
        <li class="flex items-center text-on-surface"><span class="material-symbols-outlined text-sm mr-3 text-primary">check_circle</span>Predictive Intent Mapping</li>
      </ul>
    </div>
  </div>
</section>
<section class="mb-section-padding max-w-4xl mx-auto md:px-0">
  <h2 class="font-headline-lg text-headline-lg text-on-surface mb-12 tracking-tighter">Project Gallery</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
    <div class="group relative aspect-video rounded-xl overflow-hidden border border-on-surface/10 glass-effect">
      <img alt="System Architecture" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AP1WRLueuQETXgDGgYQYdsPrlrydBJXlm0-9Vp1YpUpnD8oJBN78AjCp2Z-r68-8OoLXR-PXjD2J6lj8xStEERnhXnX6hnOl5XXNaOI7OgU3kQRsOeycCrv0-vR7Woo2MQ2R4pv-bK-TChCm4joHHEqmqUiWSxEEtKKsM-mwXho2ix2noXVeKBDAJG7UechBEh2sgA0VVkWSvV_hOJhuc-4GrEmMcIuu-0vsOIIZum3IPGJ_HpoIx0brzohLNA">
      <div class="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <span class="text-primary font-label-md uppercase tracking-widest mb-2">Deliverable 01</span>
        <h3 class="text-on-surface font-headline-md text-xl">System Architecture</h3>
        <p class="text-on-surface-variant text-sm mt-2">Futuristic data matrix mapping for semantic search authority.</p>
      </div>
    </div>
    <div class="group relative aspect-video rounded-xl overflow-hidden border border-on-surface/10 glass-effect">
      <img alt="Neural Dashboards" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AP1WRLvr8IOr674jzM-1tzPpSWH9Q4uGZp30vXyBiHrNU7RoCysK6R1xHYWE9e3oYMUAhn3KDNDR56iEorirGIvOXZMLbJF5b_O-kYbFCxA25CLxEmBHl852PQREiwLgQic-QsAdWt0P_ITGaJN_Q6jAWFNnDOOqnHQLFHfUhrexPS-WEr0yw209AL67z3wc8O5EHNtAlfZL2K4Si78FZz0yyysRC2K674BoJs1PLW-TM-PjLgWPavyS4rer8e4">
      <div class="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <span class="text-primary font-label-md uppercase tracking-widest mb-2">Deliverable 02</span>
        <h3 class="text-on-surface font-headline-md text-xl">Neural Dashboards</h3>
        <p class="text-on-surface-variant text-sm mt-2">Real-time analytics engine for predictive performance tracking.</p>
      </div>
    </div>
  </div>
</section>
`;

export const caseStudiesData: CaseStudy[] = [
  {
    id: "1",
    title: "Nexus Financial Systems",
    category: "UX Design",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    excerpt: "Navigating the shift from skeuomorphism to AI-driven interfaces with strategic precision.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLtCOhsjOzk_otLWi8vabnKzNrrzUCwO5LCJVNP8Pa5KSRXEwBXWemHYLg8Rx9CUIWqp_Bwotm7zA1T7V6prox2qBJfKvBT5O79RI5X7X_G8gNGrbtEebYgPwXmUi_s-KDtt4Qnwip5KkTbqvfWRU_6fm7AUm8j2Q-iZdf5sCVBP1QAzWBh4awJ1fMBq1YvwujB7cRVTFWXA0Ku-X1oj_M1WzwI2ItKoTq6i0IJA2dyei5Vlo4FU_xKlW4o",
    content: defaultContent,
    clientName: "Nexus Corp",
    industry: "Tech & AI",
    keyResult: "+240% Organic Growth",
  },
  {
    id: "2",
    title: "Aura Cloud Platforms",
    category: "Security",
    date: "Oct 08, 2024",
    readTime: "12 min read",
    excerpt: "Implementing zero-trust architectures for distributed enterprise ecosystems.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLuTjQJgEZ2nX-ADnlUt0gBNkpUicenoFa_ncMrR2NFSQxXIuUNg89MrHVNxUtA68D2qGVVUrxk4SOeEYzY7c_geb29CIYCW7DY36OKqRmanWptu4eFoFvN5Nr92okdSGIFWTGSN2Mx_nKiOz1B05d5S7wDhtoKleW0omTG1IKS0-JElA64LhADKzp2Cf3iAipEMcZ1tkcKfa6otrdU0XFwnqeW0CffaY3me6tjiIGx5oIQf3Piu7GtWW_A",
    content: defaultContent,
    clientName: "Aura Inc",
    industry: "Cloud Security",
    keyResult: "Zero Breaches",
  },
  {
    id: "3",
    title: "Neural Architecture",
    category: "AI & ML",
    date: "Oct 05, 2024",
    readTime: "8 min read",
    excerpt: "Engineering neural pathways to optimize algorithmic performance and data flow.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLtTfPg9GLt_Fw43px3ULBKr-MxwNRIOv7gLCSVsDAhli2n97Ga0G8tGYxhsSfsf6VbJfXUVW0Vcx2mTjSijT6JatR8S_pmKaAhoKIqstP9mh5h9Ww2DNcHzeTiCjAhTHAyxfyraOmCa7csE9JWln4Ok6sAQ8pA6oR3s4xCcWZkaNn1Zc8raHUbQbYl4l0nsv3UZfNpdJJ-bPHbFh_ReGz42IBB6r4Au3et3oPIBO_Yg9dZIYogwXPMAJEM",
    content: defaultContent,
    clientName: "Neural Tech",
    industry: "Data Science",
    keyResult: "3x Processing Speed",
  },
  {
    id: "4",
    title: "Algorithm Dominance",
    category: "Technical SEO",
    date: "Oct 01, 2024",
    readTime: "6 min read",
    excerpt: "Mastering technical SEO through advanced crawlability and server response optimization.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLvlp-Pyl9aDSZQUz2rEAQTsO2b7JWvMgEBz3Nf4JShBhfoaiVgUsi4fm0ZKhswv5rFTIaFXMDdXsR--ccVmz0GG1_8nxXSZI5vsdnEwttCzH4EPO39KgAU8Ku3F2WO6ZEm9DmkJIgTMP9JebzL9X5X2cGfaUgdcDINmAkknsv77ZFzFQXQirNbKYW2OuOmozm71fB18IXJElrtEiI7RiwS5vcO_xqd90_W45kujVZUWamw0IdiDnwoxS1s",
    content: defaultContent,
    clientName: "Algo Enterprise",
    industry: "E-Commerce",
    keyResult: "+150% Traffic",
  },
  {
    id: "5",
    title: "Search Sovereignty",
    category: "Strategy",
    date: "Sep 28, 2024",
    readTime: "10 min read",
    excerpt: "Navigating the futuristic data landscape of modern search engine results.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLueuQETXgDGgYQYdsPrlrydBJXlm0-9Vp1YpUpnD8oJBN78AjCp2Z-r68-8OoLXR-PXjD2J6lj8xStEERnhXnX6hnOl5XXNaOI7OgU3kQRsOeycCrv0-vR7Woo2MQ2R4pv-bK-TChCm4joHHEqmqUiWSxEEtKKsM-mwXho2ix2noXVeKBDAJG7UechBEh2sgA0VVkWSvV_hOJhuc-4GrEmMcIuu-0vsOIIZum3IPGJ_HpoIx0brzohLNA",
    content: defaultContent,
    clientName: "Sovereign Brands",
    industry: "Consulting",
    keyResult: "Market Leadership",
  },
  {
    id: "6",
    title: "Neural Analytics Engine",
    category: "Analytics",
    date: "Sep 25, 2024",
    readTime: "7 min read",
    excerpt: "Real-time data streams and predictive modeling for high-end tech ecosystems.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLvr8IOr674jzM-1tzPpSWH9Q4uGZp30vXyBiHrNU7RoCysK6R1xHYWE9e3oYMUAhn3KDNDR56iEorirGIvOXZMLbJF5b_O-kYbFCxA25CLxEmBHl852PQREiwLgQic-QsAdWt0P_ITGaJN_Q6jAWFNnDOOqnHQLFHfUhrexPS-WEr0yw209AL67z3wc8O5EHNtAlfZL2K4Si78FZz0yyysRC2K674BoJs1PLW-TM-PjLgWPavyS4rer8e4",
    content: defaultContent,
    clientName: "Analytics Pro",
    industry: "FinTech",
    keyResult: "-40% Latency",
  },
  {
    id: "7",
    title: "Organic Intelligence",
    category: "Growth",
    date: "Sep 20, 2024",
    readTime: "9 min read",
    excerpt: "Achieving search dominance through ascending data waves and architectural precision.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLt4bJr-cIoGPPbDuB0jYneNuMhVYSC494N1tjCBLDf1D5TjwmsTSfH5pnY1Hfavtk7xHFUoMmGnEQDtAZhVuHtKaFCbFhWTgA1NYlkrvQ9ZH73xKZwQwc0W-MzT2mJ9XrgfiANSIGF--eDKokJIg4JPWPiDLP13IJI4bjLgBezAqFu52_8OFySWQDQ1aKRY3Mzqx9_wFxbAoyLrYjGy0Xn0Grrq8zTKpG3JBJOHpjnuNPoNCOuFRazZ6UU",
    content: defaultContent,
    clientName: "Organic Ltd",
    industry: "SaaS",
    keyResult: "2x User Base",
  },
  {
    id: "8",
    title: "Market Synthesis",
    category: "Social",
    date: "Sep 15, 2024",
    readTime: "5 min read",
    excerpt: "Visualizing social media connectivity and brand engagement through neural nodes.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLv0DecFAPA_nGuQlVtShtrGp-wU90xOEw2iJP9kSRy82vpJeZhV98Lys2N92UR4D8a4wcOI0fhnrw3GUg6SMpFkoBBYeV0iQms_tr8gp7OMZvQ_TfWV542Fo2VKb8ciW0p3i-yRBLR8zt8U0hqA4cpdtI37IO7_eNzZkxzeTLF1SIu_IEkaoC7buK18t6_RGzrLLuo3cEdj2_qpBSGpCn8uFly7o_HUwOPjEpkPbXx67zvHBBrMipiKLEg",
    content: defaultContent,
    clientName: "Synthesis Corp",
    industry: "Media",
    keyResult: "+500% Engagement",
  },
  {
    id: "9",
    title: "Technical Dominance",
    category: "SEO",
    date: "Sep 10, 2024",
    readTime: "11 min read",
    excerpt: "Leveraging data nodes and ascending bar charts for organic search growth.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLt-VZgt96AY0oHMrMNC5Lx4HNNHP0tW8YUCwFh9eX2V-6E1CdBu6uHdmWWk6awxcyWin3Ajp8IHmyd6_2PnAu43Hv3DXaRTOu1wk131pS5D9PRa-QR15Z5-3xoLDOJ5w_rF93XTCZLleS0sj2T8CK3Fc_PLlzGBWGs9jfzhUX8ywcNRrwER3BPbtdAiz4hPr1x87u6O_EWe6RiFrUWFSM685DzVKN0hPbHewOOhyIJMVEKK3EG1gZZo5qQ",
    content: defaultContent,
    clientName: "Dominance Ltd",
    industry: "Tech",
    keyResult: "Top 3 Rankings",
  },
  {
    id: "10",
    title: "Data Sovereignty",
    category: "Data",
    date: "Sep 05, 2024",
    readTime: "8 min read",
    excerpt: "Securing the digital frontier with strategic foresight and technical precision.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLueuQETXgDGgYQYdsPrlrydBJXlm0-9Vp1YpUpnD8oJBN78AjCp2Z-r68-8OoLXR-PXjD2J6lj8xStEERnhXnX6hnOl5XXNaOI7OgU3kQRsOeycCrv0-vR7Woo2MQ2R4pv-bK-TChCm4joHHEqmqUiWSxEEtKKsM-mwXho2ix2noXVeKBDAJG7UechBEh2sgA0VVkWSvV_hOJhuc-4GrEmMcIuu-0vsOIIZum3IPGJ_HpoIx0brzohLNA",
    content: defaultContent,
    clientName: "Sovereignty Systems",
    industry: "GovTech",
    keyResult: "Data Compliance",
  },
  {
    id: "11",
    title: "Semantic Intelligence",
    category: "AI",
    date: "Aug 30, 2024",
    readTime: "6 min read",
    excerpt: "Understanding the neural pathways of machine learning for digital mastery.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLtTfPg9GLt_Fw43px3ULBKr-MxwNRIOv7gLCSVsDAhli2n97Ga0G8tGYxhsSfsf6VbJfXUVW0Vcx2mTjSijT6JatR8S_pmKaAhoKIqstP9mh5h9Ww2DNcHzeTiCjAhTHAyxfyraOmCa7csE9JWln4Ok6sAQ8pA6oR3s4xCcWZkaNn1Zc8raHUbQbYl4l0nsv3UZfNpdJJ-bPHbFh_ReGz42IBB6r4Au3et3oPIBO_Yg9dZIYogwXPMAJEM",
    content: defaultContent,
    clientName: "Semantic AI",
    industry: "AI Research",
    keyResult: "New Algorithms",
  },
  {
    id: "12",
    title: "Digital Mastery",
    category: "Mastery",
    date: "Aug 25, 2024",
    readTime: "14 min read",
    excerpt: "The ultimate guide to strategic precision in the modern digital era.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLvr8IOr674jzM-1tzPpSWH9Q4uGZp30vXyBiHrNU7RoCysK6R1xHYWE9e3oYMUAhn3KDNDR56iEorirGIvOXZMLbJF5b_O-kYbFCxA25CLxEmBHl852PQREiwLgQic-QsAdWt0P_ITGaJN_Q6jAWFNnDOOqnHQLFHfUhrexPS-WEr0yw209AL67z3wc8O5EHNtAlfZL2K4Si78FZz0yyysRC2K674BoJs1PLW-TM-PjLgWPavyS4rer8e4",
    content: defaultContent,
    clientName: "Mastery Global",
    industry: "Education",
    keyResult: "Global Reach",
  }
];
