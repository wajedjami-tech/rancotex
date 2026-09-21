export interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
  fabrics: string[];
  leadTime: string;
  moq: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconImg?: string;
  iconName: string;
  features: string[];
}

export interface WhyPillar {
  id: string;
  title: string;
  iconImg: string;
  description: string;
}

export interface TechModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconImg: string;
  points: string[];
  metrics: { label: string; value: string }[];
}

export interface SustainabilityPillar {
  id: string;
  title: string;
  description: string;
  iconImg: string;
  stats: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  role: string;
  image: string;
  quote: string;
  company?: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  title: string;
  address: string;
  contactPerson: string;
  phone: string;
  email: string;
  tag: string;
  coordinates: { lat: number; lng: number };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Manufacturing' | 'Quality' | 'R&D' | 'Sustainability' | 'Products';
  image: string;
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  overview: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export const RANCOTEX_DATA = {
  company: {
    name: "RANCOTEX SOURCING LTD.",
    shortName: "RANCOTEX",
    tagline: "We Provide The Best Textile Industry Since 2005",
    subtagline: "Your Expert Sourcing Partner in Bangladesh & Worldwide",
    yearsOfExperience: "21+",
    clientsCount: "1,450+",
    established: 2005,
    overview: "RANCOTEX Worldwide is a trusted global sourcing partner, offering sustainable solutions for the fashion and home textile industry. With 21+ years of experience, we provide end-to-end support—from product development and ethical sourcing to rigorous in-house quality control and on-time global shipments.",
    mission: "To provide our customers outstanding service and innovative designs sourced in most ethical manner.",
    vision: "To Be the most admired global enterprise providing innovative fashion solutions in the most ethical and trusted way.",
    coreValue: "RANCOTEX ensures high-quality fashion and home textiles with ethical sourcing, strict quality control, and complete transparency.",
    stats: [
      { label: "Years of Heritage", value: "21+", sub: "Since 2005" },
      { label: "Satisfied Global Clients", value: "1,450+", sub: "Across Europe, UK & Americas" },
      { label: "Inspection Pass Rate", value: "99.4%", sub: "Strict In-House QA & AQL Standards" },
      { label: "International Hubs", value: "3", sub: "Dhaka HQ, UK & Finland Offices" },
      { label: "Product Categories", value: "12+", sub: "From Activewear to Outerwear" },
      { label: "Eco & Certified Materials", value: "100%", sub: "GOTS, OEKO-TEX® & Recycled Fibers" }
    ]
  },

  logos: {
    main: "https://rancotex.com/wp-content/uploads/2025/04/Rancotex_logo-2.png",
    light: "https://rancotex.com/wp-content/uploads/2025/04/rancotex_logo.png",
    icon: "https://rancotex.com/wp-content/uploads/2025/04/cropped-rancotex_logo_icon-192x192.png"
  },

  heroMedia: {
    image: "https://rancotex.com/wp-content/uploads/2025/04/2151294550.jpg",
    secondaryImage: "https://rancotex.com/wp-content/uploads/2025/04/2150458973.jpg",
    thirdImage: "https://rancotex.com/wp-content/uploads/2025/04/2151979250-1.jpg"
  },

  // 8 Core Pillars
  whyRancotex: [
    {
      id: "price",
      title: "Competitive Price",
      iconImg: "https://rancotex.com/wp-content/uploads/2025/04/11.png",
      description: "Direct manufacturing partnerships and streamlined supply operations delivering unmatched commercial advantage without compromising on quality or compliance."
    },
    {
      id: "quick-market",
      title: "Quick to Market",
      iconImg: "https://rancotex.com/wp-content/uploads/2025/04/Quick-to-Market.png",
      description: "Fast-track sampling, responsive production lines, and synchronized fabric sourcing to hit retail floors ahead of shifting seasonal trends."
    },
    {
      id: "flexibility",
      title: "Flexibility",
      iconImg: "https://rancotex.com/wp-content/uploads/2025/04/33.png",
      description: "Adaptable production capabilities accommodating diverse order volumes, customized fabrications, complex embellishments, and swift adjustments."
    },
    {
      id: "assure-quality",
      title: "Assure Quality",
      iconImg: "https://rancotex.com/wp-content/uploads/2025/04/99.png",
      description: "Rigorous 4-stage inspection protocol covering yarn, knit/weave, in-line assembly, and pre-shipment AQL 1.5/2.5 testing."
    },
    {
      id: "offer-design",
      title: "Offer Design",
      iconImg: "https://rancotex.com/wp-content/uploads/2025/04/88.png",
      description: "Dedicated trend research, in-house tech-pack translation, seasonal capsule collections, and bespoke graphic/fabric development."
    },
    {
      id: "global-outlook",
      title: "Global Outlook",
      iconImg: "https://rancotex.com/wp-content/uploads/2025/04/77.png",
      description: "Worldwide perspective bridging European, British, and global fashion demands with Bangladesh's manufacturing powerhouse."
    },
    {
      id: "strong-supply",
      title: "Strong Supply",
      iconImg: "https://rancotex.com/wp-content/uploads/2025/04/66.png",
      description: "Robust, audited network of yarn spinners, fabric knitters, certified dye houses, and state-of-the-art sewing facilities."
    },
    {
      id: "creative-partnership",
      title: "Creative Partnership",
      iconImg: "https://rancotex.com/wp-content/uploads/2025/04/44.png",
      description: "Co-creating value through proactive technical counsel, shared sustainable roadmaps, transparent pricing, and collaborative problem solving."
    }
  ] as WhyPillar[],

  // Services
  services: [
    {
      id: "sourcing-merchandising",
      title: "Sourcing & Merchandising",
      subtitle: "From Trend Insights to Timely Shipment",
      description: "RANCOTEX merchandisers ensure trend-driven, high-quality products—managing everything from initial design concept to on-time delivery.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/sewing-machine-r4gkyszfuq9k7quay6zxgo889hggciu0602b60nrec.png",
      iconName: "Scissors",
      features: [
        "End-to-end apparel sourcing across knitted, woven, and outerwear",
        "Dedicated account merchandising team for 24/7 client coordination",
        "Vendor compliance auditing, code of conduct enforcement, and cost optimization",
        "Comprehensive logistics tracking with global freight forwarder coordination"
      ]
    },
    {
      id: "research-development",
      title: "Research & Development",
      subtitle: "Innovating Textiles & Fabric Engineering",
      description: "We work with leading Bangladeshi manufacturers, delivering quality garments through strong commitment, smart merchandising, and strict quality control.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/innovation-r4vivaca9ws57cumz3jfmm2yuae0ozhgvaf7r2qz5g.png",
      iconName: "Lightbulb",
      features: [
        "Fabric innovation: organic cotton, eco-viscose, bamboo, recycled polyester blends",
        "Rapid 3D digital sampling and accurate tech-pack development",
        "Wash lab experimentation: enzyme, ozone, laser fading, and waterless dyeing",
        "Trend forecasting and seasonal apparel moodboards tailored to brand demographics"
      ]
    },
    {
      id: "qa-production",
      title: "QA & Production Control",
      subtitle: "Uncompromising Precision at Every Stage",
      description: "Quality is at the core of RANCOTEX. Our QA/QC teams ensure every garment exceeds expectations through strict inspections and unwavering attention to detail.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/qa-r4vixrmyb66dub8xho4zphjr9w5w08byvkeccd2kqc.png",
      iconName: "ShieldCheck",
      features: [
        "Comprehensive 4-step QA: Pre-production, Initial inline, Midline, and Final AQL",
        "On-site factory resident QA inspectors maintaining continuous monitoring",
        "Measurement verification, shade sorting, pull-force and seam durability testing",
        "Real-time digital inspection reports delivered directly to brand dashboards"
      ]
    },
    {
      id: "inhouse-lab",
      title: "In-House Lab Testing",
      subtitle: "Certified Chemical & Physical Verification",
      description: "Comprehensive physical and chemical textile testing ensuring every fiber meets international standards before sewing commencement.",
      iconName: "FlaskConical",
      features: [
        "Color fastness to washing, light, perspiration, and rubbing (wet/dry)",
        "Dimensional stability and spirality assessment after multiple laundering cycles",
        "Tensile strength, seam slippage, pilling resistance, and burst testing",
        "OEKO-TEX® Standard 100 chemical and heavy metal screening"
      ]
    },
    {
      id: "competence",
      title: "Industry Competence",
      subtitle: "Decades of Deep Technical Mastery",
      description: "RANCOTEX thrives on industry expertise, a skilled team, and adaptability. By blending innovation with deep market insight, we consistently deliver high-quality solutions that exceed client expectations.",
      iconName: "Award",
      features: [
        "Seasoned apparel engineers, master pattern makers, and textile technicians",
        "Comprehensive tariff and trade agreement advisory for duty-free European import",
        "Supply chain resilience planning with dual-sourcing options",
        "Proven crisis mitigation and emergency fast-tracking protocols"
      ]
    },
    {
      id: "it-technical",
      title: "IT & Technical Team",
      subtitle: "Powering Smart Supply Chain Infrastructure",
      description: "Our IT & Technical team powers smooth operations and innovation, delivering expert support and cutting-edge solutions to keep RANCOTEX ahead.",
      iconName: "Cpu",
      features: [
        "Enterprise ERP integration connecting buyers, suppliers, and logistics",
        "Real-time order milestone tracking with automated alerts",
        "Secure cloud data exchange with brand ERPs and PLM platforms",
        "Continuous digital transformation of production floor telemetry"
      ]
    }
  ] as ServiceItem[],

  // Technology Modules
  technology: [
    {
      id: "dynamics-ax",
      title: "Dynamics AX Enterprise Platform",
      subtitle: "End-to-End Enterprise Resource Planning",
      description: "End-to-end apparel solution—from concept to shipment. Real-time dashboard insights for full operational transparency, seamless integration with client systems and third-party platforms, and advanced Time & Action (T&A) calendar management.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/analysis-r4gl0sf6a4zcq3yjd1vkq679erocliplrtn7n1pu9g.png",
      points: [
        "End-to-end apparel solution—from concept to shipment",
        "Real-time dashboard insights for full operational transparency",
        "Seamless integration with client systems and third-party platforms",
        "Advanced Time & Action (T&A) critical path management",
        "Automated milestone tracking and proactive delay avoidance"
      ],
      metrics: [
        { label: "Order Visibility", value: "100%" },
        { label: "Data Latency", value: "<1 sec" },
        { label: "System Uptime", value: "99.98%" }
      ]
    },
    {
      id: "dashboard-analytics",
      title: "Dashboard Analysis & Intelligence",
      subtitle: "Data-Driven Production Visibility",
      description: "Complete operational intelligence giving global buyers live visibility into year-to-date business, order placements by season/category/region/supplier, shipment progress, and factory capacity.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/tracking-r4gl1u0pvietmifx9i4nhwpp66j15euv8zqmu463ck.png",
      points: [
        "Year-to-date business overview and executive summaries",
        "Order placements breakdown by season, category, region, and supplier",
        "Live container and air shipment progress tracking",
        "Monthly factory capacity insights and load balancing",
        "Timely delivery performance analytics across all active POs",
        "Initial AQL inspection metrics and historical trend reporting"
      ],
      metrics: [
        { label: "On-Time Dispatch", value: "98.7%" },
        { label: "Active Suppliers Tracked", value: "45+" },
        { label: "Real-time Metrics", value: "24/7" }
      ]
    },
    {
      id: "realtime-qa-tracking",
      title: "Inspection Real-time Tracking",
      subtitle: "Tablet-Based QA & Geotracked Verification",
      description: "Next-generation digital inspection workflow. Real-time quality inspections via tablet-based input, inspector geotracking for enhanced transparency, AI-assisted defect classification, and predictive analytics for proactive quality control.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/procedure-r4gl2gkufj9pd5j5lrvp5r0rfffua5cfc3eacr8n78.png",
      points: [
        "Real-time quality inspections via tablet-based digital forms",
        "Inspector geotracking for 100% audited factory presence verification",
        "AI-assisted inspections for speed, measurement accuracy, and defect categorization",
        "Predictive analytics for proactive quality control and prevention of repeat defects",
        "High-definition photographic documentation of all inspected cartons and pieces",
        "Instant digital sign-off and AQL certificate generation upon audit completion"
      ],
      metrics: [
        { label: "Inspection Accuracy", value: "99.8%" },
        { label: "Instant Report Dispatch", value: "<15 min" },
        { label: "Geotag Verification", value: "100%" }
      ]
    }
  ] as TechModule[],

  // Products
  products: [
    {
      id: "jersey",
      name: "Jersey",
      category: "Knitwear",
      image: "https://rancotex.com/wp-content/uploads/2025/05/rancotex_product_4-1.png",
      description: "Lightweight, breathable, and ultra-soft knitwear crafted from organic cotton, modal, and elastane blends. Designed for contemporary everyday wear with impeccable drape, shape retention, and color fastness.",
      highlights: ["Single & double jersey", "Enzyme wash finish", "Anti-pilling treatment", "Color fastness grade 4-5"],
      fabrics: ["100% Organic Cotton", "Cotton / Elastane (95/5)", "Modal Blends", "Recycled Poly-Cotton"],
      leadTime: "45 - 60 Days",
      moq: "1,500 Pcs / Colorway"
    },
    {
      id: "sweater-cardigans",
      name: "Sweater & Cardigans",
      category: "Flat Knits",
      image: "https://rancotex.com/wp-content/uploads/2025/04/1202.jpg",
      description: "Fine and chunky gauge flat knitwear engineered on state-of-the-art computerized flat knitting machines (3GG, 5GG, 7GG, 12GG). Luxurious texture, intricate cable designs, and warm, durable yarns.",
      highlights: ["Computerized Jacquard & Intarsia", "Seamless linking", "Cashmere-touch finishing", "Eco-friendly wool and cotton yarns"],
      fabrics: ["100% BCI Cotton", "Cotton / Acrylic", "Merino Wool Blends", "Recycled Polyester Fleece Knits"],
      leadTime: "60 - 75 Days",
      moq: "1,000 Pcs / Style"
    },
    {
      id: "shirt-womens-tops",
      name: "Shirt & Women's Tops",
      category: "Woven & Tops",
      image: "https://rancotex.com/wp-content/uploads/2025/05/ChatGPT-Image-May-6-2025-05_31_08-PM.png",
      description: "Sophisticated formal, casual, and resort woven shirts alongside feminine tops. Features precision tailoring, French seams, refined collars, and delicate ruffles or embroidery.",
      highlights: ["Non-iron and wrinkle-free finishes", "Digital print placement", "Precision pattern matching", "Mother of pearl & corozo buttons"],
      fabrics: ["100% Cotton Poplin & Twill", "Linen & Cotton-Linen Blends", "Viscose Georgette", "Tencel™ Lyocell"],
      leadTime: "50 - 65 Days",
      moq: "1,200 Pcs / Style"
    },
    {
      id: "outerwear",
      name: "Outerwear",
      category: "Performance & Jackets",
      image: "https://rancotex.com/wp-content/uploads/2025/05/rancotex_product_outerwear-1.png",
      description: "Technical, weather-resistant jackets, windbreakers, puffers, and trench coats. Engineered for superior thermal insulation, water repellency, windproofing, and modern urban aesthetics.",
      highlights: ["Taped waterproof seams", "PFC-free DWR coating", "Certified RDS down & synthetic thermolite fill", "Heavy-duty waterproof YKK zippers"],
      fabrics: ["Recycled Nylon Ripstop", "Polyester Taslan with TPU Membrane", "Softshell Bonded Fleece", "Canvas Twill"],
      leadTime: "75 - 90 Days",
      moq: "800 Pcs / Style"
    },
    {
      id: "workwear",
      name: "Workwear",
      category: "Industrial & Utility",
      image: "https://rancotex.com/wp-content/uploads/2025/05/rancotex_product_workwear_without_bg-1.png",
      description: "High-durability functional apparel engineered for hazardous, industrial, and high-wear environments. Rigorously tested for tear strength, abrasion resistance, and ergonomic mobility.",
      highlights: ["Triple needle reinforced seams", "Cordura® reinforced knees and elbows", "High-visibility reflective tapes (EN 20471)", "Flame retardant & anti-static options"],
      fabrics: ["Poly-Cotton Heavy Twill (65/35)", "100% Heavy Cotton Duck", "Ripstop Stretch Twill", "Water & Oil Repellent Finished Canvas"],
      leadTime: "60 - 75 Days",
      moq: "1,000 Pcs / Style"
    },
    {
      id: "denim-nondenim",
      name: "Denim & Non Denim",
      category: "Bottoms & Pants",
      image: "https://rancotex.com/wp-content/uploads/2025/05/denim_nondenim_padded_matched_bg-1.png",
      description: "From sustainable vintage wash jeans to tailored chinos and utility cargo pants. Produced utilizing laser whisker technology, ozone bleaching, and water-recycling wash plants.",
      highlights: ["Water-saving Jeanologia EIM score < 33", "Laser distressed detailing", "Dual-core power stretch recovery", "Eco-friendly metal trims"],
      fabrics: ["Rigid & Comfort Stretch Denim (9.5 - 13.5 oz)", "Organic Cotton Selvedge", "Cotton Chino Twill", "Tencel™ Denim"],
      leadTime: "60 - 70 Days",
      moq: "1,500 Pcs / Wash"
    },
    {
      id: "activewear",
      name: "Activewear",
      category: "Sports & Fitness",
      image: "https://rancotex.com/wp-content/uploads/2025/05/rancotex_product_8-1.png",
      description: "Performance sportswear engineered with moisture-wicking, 4-way stretch, quick-dry, and anti-odor technologies. Designed for running, gym, yoga, and athletic pursuits.",
      highlights: ["Flatlock ergonomic anti-chafing stitching", "Dry-fit moisture transport management", "Reflective safety logos", "Sublimation printing"],
      fabrics: ["Recycled Polyamide / Spandex", "Polyester Microfiber Interlock", "Seamless Knits", "Bamboo Charcoal Sport Blend"],
      leadTime: "45 - 60 Days",
      moq: "1,200 Pcs / Style"
    },
    {
      id: "underwear",
      name: "Underwear & Intimates",
      category: "Intimate Apparel",
      image: "https://rancotex.com/wp-content/uploads/2025/05/WhatsApp_Image_2025-05-03_at_19.51.27_7a55dc0f-removebg-preview.png",
      description: "Ultra-comfortable briefs, boxer briefs, trunks, and lingerie basics crafted from super-combed organic cotton and modal with plush elastic waistbands and seamless construction.",
      highlights: ["Super-soft brushed elastic waistbands", "Hypoallergenic and breathable knit", "Tagless comfort labels", "Double-layered anatomical contour pouch"],
      fabrics: ["95% Organic Cotton / 5% Elastane", "Micro-Modal", "Bamboo Viscose", "Coolmax™ Mesh Inserts"],
      leadTime: "45 - 55 Days",
      moq: "3,000 Pcs / Pack Set"
    },
    {
      id: "blazer",
      name: "Blazer & Tailoring",
      category: "Formalwear",
      image: "https://rancotex.com/wp-content/uploads/2025/05/rancotex_product_3-1.png",
      description: "Modern tailored blazers and structured jackets featuring fine canvassing, hand-finished lapels, tailored sleeve heads, and functional cuffs for professional and upscale occasions.",
      highlights: ["Semi-canvas and fused chest construction", "Interior piping and luxury viscose lining", "Horn or horn-effect buttons", "Ergonomic shoulder pads"],
      fabrics: ["Wool Rich Blends", "Poly-Viscose Stretch Twill", "Cotton Linen Summer Twill", "Velvet & Corduroy"],
      leadTime: "60 - 75 Days",
      moq: "600 Pcs / Style"
    },
    {
      id: "home-lifestyle",
      name: "Home & Lifestyle",
      category: "Home Textiles",
      image: "https://rancotex.com/wp-content/uploads/2025/05/rancotex_product_5-1.png",
      description: "Premium bed linens, duvet covers, plush bath towels, kitchen linen, and decorative cushions. Crafted to withstand hospitality-grade industrial laundering while retaining softness.",
      highlights: ["High thread count (200 - 800 TC)", "Zero-twist combed cotton towels", "Sanforized pre-shrunk finish", "Vat dyed for chlorine resistance"],
      fabrics: ["100% Egyptian Cotton Percale & Sateen", "Zero-Twist Cotton Terry", "Pure Washed Linen", "Recycled Cotton Kitchen Weaves"],
      leadTime: "50 - 65 Days",
      moq: "1,000 Sets"
    },
    {
      id: "footwear",
      name: "Footwear",
      category: "Shoes & Slippers",
      image: "https://rancotex.com/wp-content/uploads/2025/04/2147786999.jpg",
      description: "Casual canvas sneakers, vulcanized footwear, lightweight EVA lifestyle slip-ons, and home indoor slippers produced with non-toxic adhesives and recycled soles.",
      highlights: ["Vulcanized rubber outsoles", "Orthopedic memory foam insoles", "Breathable canvas & mesh uppers", "Slip-resistant tread patterns"],
      fabrics: ["Heavy Cotton Canvas (12 - 16 oz)", "Vegan Microfiber Leather", "Recycled Rubber Outsoles", "EVA Cushioned Soles"],
      leadTime: "60 - 75 Days",
      moq: "1,000 Pairs"
    },
    {
      id: "handy-craft",
      name: "Handy Craft",
      category: "Artisanal & Accessories",
      image: "https://rancotex.com/wp-content/uploads/2025/05/ChatGPT-Image-May-6-2025-04_57_44-PM.png",
      description: "Ethically crafted handmade accessories, jute lifestyle shopping bags, braided storage baskets, and hand-embroidered artisanal pieces empowering rural artisan communities.",
      highlights: ["100% biodegradable golden natural jute", "Handloom woven textures", "Fair Trade artisan certified production", "Traditional Bengali Nakshi Kantha motifs"],
      fabrics: ["Natural Bangladeshi Golden Jute", "Hand-spun Cotton", "Recycled Fabric Yarn (Chindi)", "Seagrass & Cane"],
      leadTime: "45 - 60 Days",
      moq: "500 Pcs"
    }
  ] as ProductItem[],

  // Sustainability Pillars
  sustainability: [
    {
      id: "materials",
      title: "Environmentally-Friendly Materials",
      description: "We prioritize the use of organic cotton, recycled polyester, bamboo fiber, and other eco-friendly fabrics that reduce environmental impact.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/1-r4akr38q60c06yj4f25qlcp16ha1cvn4zccsrxmlt4.png",
      stats: "75% of raw materials sustainably sourced"
    },
    {
      id: "ethical",
      title: "Ethical Manufacturing",
      description: "All our partner factories follow fair labor practices, ensuring safe working conditions, fair wages, and zero exploitation across our entire network.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/ethical-r4albvg9a4s8wkcb21krq3vy16u7jy5h67nas6t888.png",
      stats: "100% audited compliant facilities"
    },
    {
      id: "low-impact",
      title: "Low-Impact Production",
      description: "Our production methods are designed to minimize water and energy consumption, reducing pollution and preserving natural resources through closed-loop systems.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/low-r4alu6d4czu8z7r76ge8rzm2gamifrtbcsyo75o92g.png",
      stats: "Up to 60% water reduction in wash labs"
    },
    {
      id: "certifications",
      title: "Certified Sustainable Products",
      description: "We offer products that meet global sustainability standards such as GOTS, OEKO-TEX®, and Fair Trade certifications.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/4-r4algf06bb050pqqj09urym5e8g2ra6rsp5sac2q5k.png",
      stats: "Full traceability from fiber to garment"
    },
    {
      id: "packaging",
      title: "Recyclable & Biodegradable Packaging",
      description: "Our commitment to sustainability extends to our packaging, using recyclable and biodegradable materials to reduce plastic waste.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/5-r4alhrvs6ov1sfrqllegdma4a9r5vjktbf318q2960.png",
      stats: "Zero virgin plastic target by 2027"
    },
    {
      id: "circular",
      title: "Commitment to Circular Fashion",
      description: "We support the circular economy through product life extension, textile-to-textile recycling initiatives, and promoting conscious consumer behavior.",
      iconImg: "https://rancotex.com/wp-content/uploads/elementor/thumbs/6-r4aljiuywl99eb89dumgioe0334r79itw2ske9gvl4.png",
      stats: "Closed-loop pre-consumer scrap recycling"
    }
  ] as SustainabilityPillar[],

  // Client Logos (all 9 actual PNGs from rancotex.com)
  clientLogos: [
    { id: "c1", name: "International Fashion Partner 1", img: "https://rancotex.com/wp-content/uploads/2025/04/f29025ad-82cc-4a29-b6b6-dd58da263dfb.png" },
    { id: "c2", name: "International Fashion Partner 2", img: "https://rancotex.com/wp-content/uploads/2025/04/f0b4c5dd-b0b9-43d3-bd14-ec8af83e58dc.png" },
    { id: "c3", name: "International Fashion Partner 3", img: "https://rancotex.com/wp-content/uploads/2025/04/f9c6ac57-860b-4d84-8b2a-7ae263d2fd88.png" },
    { id: "c4", name: "International Fashion Partner 4", img: "https://rancotex.com/wp-content/uploads/2025/04/e2067a29-3d8f-4f2d-91d3-61097079fcea.png" },
    { id: "c5", name: "International Fashion Partner 5", img: "https://rancotex.com/wp-content/uploads/2025/04/a0557c54-0454-4d91-a933-3ba3659b9506.png" },
    { id: "c6", name: "International Fashion Partner 6", img: "https://rancotex.com/wp-content/uploads/2025/04/8c43d896-cec4-4163-bee2-cc1d8b7d24a6.png" },
    { id: "c7", name: "International Fashion Partner 7", img: "https://rancotex.com/wp-content/uploads/2025/04/74d37fb0-5e4a-46fb-8206-ed539de1110c.png" },
    { id: "c8", name: "International Fashion Partner 8", img: "https://rancotex.com/wp-content/uploads/2025/04/ba70dab6-dbbb-411f-b7bf-e20c86cddb5c.png" },
    { id: "c9", name: "International Fashion Partner 9", img: "https://rancotex.com/wp-content/uploads/2025/04/7ef2a2f6-d4fb-4aab-8c75-08008bebcf9f.png" }
  ],

  // Real Testimonials with actual images from rancotex.com
  testimonials: [
    {
      id: "poppie-person",
      name: "Poppie Person",
      title: "Entrepreneur & Fashion Director",
      role: "Client Partner",
      image: "https://rancotex.com/wp-content/uploads/2025/02/e65fb083-11ac-4170-a678-ec4dd1266a53.jpeg",
      quote: "RANCOTEX SOURCING LTD. consistently provides top-quality fabrics with excellent craftsmanship and reliable service. Their expertise and dedication to ethical sourcing make them a valuable partner for our business."
    },
    {
      id: "simons-rhodes",
      name: "Simons Rhodes",
      title: "Entrepreneur & Brand Founder",
      role: "Client Partner",
      image: "https://rancotex.com/wp-content/uploads/2025/02/7c3e955b-7445-4842-b400-d7d299ebd197.png",
      quote: "RANCOTEX SOURCING LTD. has been a reliable partner, delivering high-quality textiles with exceptional service. Their commitment to innovation, sustainability, and timely delivery makes them a trusted sourcing solution for our business."
    },
    {
      id: "miya-draper",
      name: "Miya Draper",
      title: "Entrepreneur & Global Retail Head",
      role: "Client Partner",
      image: "https://rancotex.com/wp-content/uploads/2025/02/20b30082-63a9-4172-8e3d-27101524e838.jpeg",
      quote: "RANCOTEX SOURCING LTD. delivers exceptional textile solutions with premium quality and precision. Their professionalism, innovation, and timely service make them a trusted partner."
    }
  ] as TestimonialItem[],

  // Global Offices with real addresses, phone numbers, contact persons, and emails
  offices: [
    {
      city: "Dhaka",
      country: "Bangladesh",
      title: "Global Headquarters & Sourcing Operations",
      address: "4th Floor, House-74, Road-21, Block-B, Banani-1230, Dhaka, Bangladesh",
      contactPerson: "Md Nazmul Hasan (Rajiv)",
      phone: "+8801707325717",
      email: "rajiv@rancotex.com",
      tag: "Head Office",
      coordinates: { lat: 23.7937, lng: 90.4066 }
    },
    {
      city: "London / West Drayton",
      country: "United Kingdom",
      title: "UK & European Client Relations Office",
      address: "26 Harmondsworth Lane, Sipson, West Drayton, UB7 0JQ, United Kingdom",
      contactPerson: "Saif",
      phone: "+447878432440",
      email: "saif@rancotex.com",
      tag: "UK Office",
      coordinates: { lat: 51.4984, lng: -0.4578 }
    },
    {
      city: "Vantaa / Helsinki",
      country: "Finland",
      title: "Nordic Sourcing & Representative Office",
      address: "Lippukuja 2A 3, Vantaa, Helsinki 01700, Finland",
      contactPerson: "Mohbubun Nabi",
      phone: "+358415760431",
      email: "nabi@rancotex.com",
      tag: "Finland Office",
      coordinates: { lat: 60.2934, lng: 25.0378 }
    }
  ] as OfficeLocation[],

  // Gallery
  gallery: [
    {
      id: "gal-1",
      title: "Modern Computerized Sewing Lines",
      category: "Manufacturing",
      image: "https://rancotex.com/wp-content/uploads/2025/04/2151294550.jpg",
      description: "Lean manufacturing lines equipped with Juki automatic sewing and trimming stations in Dhaka."
    },
    {
      id: "gal-2",
      title: "Fabric R&D & In-House Testing Lab",
      category: "Quality",
      image: "https://rancotex.com/wp-content/uploads/2025/04/2150458973.jpg",
      description: "State-of-the-art spectrophotometers, tensile testers, and shrinkage calibration bays."
    },
    {
      id: "gal-3",
      title: "Apparel Styling & Sample Finishing",
      category: "R&D",
      image: "https://rancotex.com/wp-content/uploads/2025/04/2151979250-1.jpg",
      description: "Master pattern makers examining seam ergonomics and wash textures for international buyers."
    },
    {
      id: "gal-4",
      title: "Sustainable Knitwear Development",
      category: "Sustainability",
      image: "https://rancotex.com/wp-content/uploads/2025/04/1202.jpg",
      description: "Zero-waste computerized Jacquard knitting using GOTS-certified organic cotton yarns."
    },
    {
      id: "gal-5",
      title: "Outerwear Weatherproofing Lab",
      category: "Products",
      image: "https://rancotex.com/wp-content/uploads/2025/05/rancotex_product_outerwear-1.png",
      description: "Precision hot-air seam sealing and hydrostatic head pressure testing for technical jackets."
    },
    {
      id: "gal-6",
      title: "Artisanal Handcraft & Golden Jute",
      category: "Sustainability",
      image: "https://rancotex.com/wp-content/uploads/2025/05/ChatGPT-Image-May-6-2025-04_57_44-PM.png",
      description: "Hand-braided sustainable natural jute lifestyle accessories created by traditional artisans."
    }
  ] as GalleryItem[],

  // Careers
  careers: [
    {
      id: "job-1",
      title: "Senior Merchandiser — Knitwear & Jersey",
      department: "Merchandising & Sourcing",
      location: "Dhaka Head Office (Banani)",
      type: "Full-time",
      experience: "5-7 Years",
      overview: "Lead buyer communication, T&A calendar execution, costing negotiations, and production follow-up for premier European and UK high-street fashion accounts."
    },
    {
      id: "job-2",
      title: "Quality Assurance Manager — Woven & Denim",
      department: "QA / Production Control",
      location: "Dhaka & Partner Factory Units",
      type: "Full-time",
      experience: "7+ Years",
      overview: "Supervise regional inspection teams, enforce AQL 1.5/2.5 quality parameters, conduct pre-production audits, and manage tablet-based digital QA telemetry."
    },
    {
      id: "job-3",
      title: "Textile R&D & Fabric Specialist",
      department: "Product Development",
      location: "Dhaka Head Office",
      type: "Full-time",
      experience: "4-6 Years",
      overview: "Drive sustainable fabric innovation, evaluate yarn blends, coordinate wash test protocols, and build seasonal capsule swatch books for global brands."
    },
    {
      id: "job-4",
      title: "International Business Development Executive",
      department: "Global Sourcing",
      location: "UK / Remote / Dhaka Hybrid",
      type: "Full-time",
      experience: "3-5 Years",
      overview: "Expand client relations across Nordic and European territories, pitch sustainable apparel sourcing solutions, and support RFQs for fast-growing fashion labels."
    }
  ] as JobOpening[],

  // News / Insights
  news: [
    {
      id: "news-1",
      title: "The Future of Bangladesh Apparel: How Circular Textiles Are Redefining Global Supply Chains",
      category: "Sustainability",
      date: "September 2026",
      readTime: "4 min read",
      excerpt: "Exploring closed-loop recycling, waterless ozone wash innovations, and how Rancotex helps international brands achieve European ESG compliance targets.",
      image: "https://rancotex.com/wp-content/uploads/2025/04/2151294550.jpg"
    },
    {
      id: "news-2",
      title: "Digitizing Garment Sourcing: Real-Time Tablet QA and AI-Driven Defect Forecasting",
      category: "Technology",
      date: "August 2026",
      readTime: "3 min read",
      excerpt: "How Rancotex’s geotracked digital inspection workflow accelerates sample turnaround and provides transparent live reporting to global buyers.",
      image: "https://rancotex.com/wp-content/uploads/2025/04/2150458973.jpg"
    },
    {
      id: "news-3",
      title: "Spring/Summer Fabric Direction: Breathable Linen, Bamboo Blends, and Utility Workwear",
      category: "Design & R&D",
      date: "July 2026",
      readTime: "5 min read",
      excerpt: "An inside look at our R&D studio’s latest fabric development capsule showcasing sustainable natural fibers engineered for modern performance.",
      image: "https://rancotex.com/wp-content/uploads/2025/04/2151979250-1.jpg"
    }
  ] as NewsItem[]
};
