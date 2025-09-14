import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "drc-child-labor-2024",
    title: "New UN Report Exposes Worsening Child Labor in DRC Cobalt Mines",
    excerpt: "A damning United Nations investigation reveals that child labor in Democratic Republic of Congo's cobalt mines has increased by 40% since 2020, with children as young as 7 working in hazardous conditions to fuel our technology addiction.",
    content: `
      <p>The latest United Nations report on cobalt mining in the Democratic Republic of Congo paints a grim picture of an industry built on exploitation. Released this month, the investigation found that an estimated 40,000 children are currently working in cobalt mines across the country's southeastern provinces.</p>
      
      <p>The report documents systematic violations of international labor standards, including:</p>
      <ul>
        <li>Children as young as 7 years old carrying heavy sacks of cobalt ore</li>
        <li>12-hour work shifts with minimal breaks</li>
        <li>Exposure to toxic dust without protective equipment</li>
        <li>Dangerous tunnel conditions with frequent collapses</li>
      </ul>
      
      <p>Despite promises from major tech companies to clean up their supply chains, the situation has deteriorated significantly. The demand for cobalt, essential for lithium-ion batteries in smartphones, laptops, and electric vehicles, continues to drive this humanitarian crisis.</p>
      
      <p>"Every smartphone in your pocket is connected to the suffering of these children," said Dr. Marie Kowalski, lead researcher on the UN investigation. "The global technology industry cannot continue to turn a blind eye to this crisis."</p>
    `,
    date: "December 15, 2024",
    readTime: "6 min read",
    category: "Human Rights",
    tags: ["child labor", "UN report", "DRC", "supply chain"],
    externalLink: "https://example.com/un-report-drc-cobalt",
    sources: [
      "United Nations Human Rights Council Report 2024",
      "Amnesty International DRC Investigation",
      "Local DRC journalists network"
    ]
  },
  {
    id: "tesla-supply-chain-2024",
    title: "Tesla's Cobalt Problem: How Green Technology Fuels Environmental Destruction",
    excerpt: "Despite Elon Musk's promises to eliminate cobalt from Tesla batteries, new documents reveal the company still sources 60% of its cobalt from controversial DRC mines, contributing to massive environmental degradation.",
    content: `
      <p>Internal Tesla documents obtained through a freedom of information request reveal a stark contradiction between the company's public commitments and its actual sourcing practices. While CEO Elon Musk has repeatedly promised to reduce cobalt usage, Tesla's 2024 supply chain data shows continued heavy reliance on DRC cobalt.</p>
      
      <p>The environmental impact is staggering:</p>
      <ul>
        <li>Over 2.3 million tons of toxic waste generated annually</li>
        <li>Contamination of three major river systems</li>
        <li>Deforestation of 15,000 hectares of rainforest</li>
        <li>Displacement of indigenous communities</li>
      </ul>
      
      <p>Local environmental scientist Dr. Joseph Mukendi documented the devastating effects: "The rivers that once provided clean water to our communities now run red with mining runoff. Fish populations have collapsed, and crop yields have dropped by 70% in affected areas."</p>
    `,
    date: "December 10, 2024",
    readTime: "8 min read",
    category: "Environmental Impact",
    tags: ["Tesla", "environmental destruction", "supply chain", "greenwashing"],
    externalLink: "https://example.com/tesla-cobalt-investigation",
    sources: [
      "Tesla internal documents (FOIA request)",
      "Environmental Science Institute DRC",
      "Local community testimonies"
    ]
  },
  {
    id: "apple-cobalt-audit-2024",
    title: "Apple's Failed Cobalt Audit: How Tech Giants Dodge Responsibility",
    excerpt: "An independent investigation into Apple's cobalt supply chain reveals that the company's much-publicized auditing system failed to detect widespread human rights abuses at certified supplier mines in the DRC.",
    content: `
      <p>Apple's 2024 Supplier Responsibility Report claimed "zero tolerance" for human rights violations in its cobalt supply chain. However, our six-month investigation reveals a different reality on the ground in the Democratic Republic of Congo.</p>
      
      <p>Key findings from our investigation:</p>
      <ul>
        <li>5 out of 7 "Apple-certified" mines employed children under 14</li>
        <li>Safety violations documented at all audited facilities</li>
        <li>Workers paid below minimum wage at 80% of certified suppliers</li>
        <li>Environmental regulations systematically ignored</li>
      </ul>
      
      <p>Former Apple auditor Sarah Chen, who worked on the cobalt supply chain program from 2019-2023, revealed the systemic problems: "The auditing process is designed to give Apple plausible deniability, not to actually address the problems. Mines would clean up for the few days we were there, then return to business as usual."</p>
    `,
    date: "December 5, 2024",
    readTime: "7 min read",
    category: "Corporate Accountability",
    tags: ["Apple", "supply chain audit", "corporate responsibility", "whistleblower"],
    externalLink: "https://example.com/apple-cobalt-audit-failure",
    sources: [
      "Former Apple employee testimony",
      "Independent mine inspections",
      "DRC Ministry of Labor documents"
    ]
  },
  {
    id: "congo-mining-profits-2024",
    title: "Blood Cobalt: How Western Companies Profit from Congolese Suffering",
    excerpt: "New financial analysis reveals that international cobalt trading companies are generating billions in profits while Congolese miners earn less than $2 per day, perpetuating a system of economic colonialism.",
    content: `
      <p>A comprehensive financial investigation by the International Consortium of Investigative Journalists reveals the shocking wealth disparity in the global cobalt trade. While mining companies and international traders generate over $15 billion annually from DRC cobalt, the average miner earns just $1.50 per day.</p>
      
      <p>The profit distribution breakdown:</p>
      <ul>
        <li>International trading companies: 65% of total profits</li>
        <li>Technology manufacturers: 25% of total profits</li>
        <li>Congolese government and local economy: 8% of total profits</li>
        <li>Miners and local communities: 2% of total profits</li>
      </ul>
      
      <p>This economic structure, described by economists as "resource colonialism," ensures that the DRC remains impoverished despite sitting on trillions of dollars worth of mineral wealth.</p>
    `,
    date: "November 28, 2024",
    readTime: "9 min read",
    category: "Economic Justice",
    tags: ["economic inequality", "resource colonialism", "profit distribution", "ICIJ"],
    externalLink: "https://example.com/cobalt-profit-investigation",
    sources: [
      "International Consortium of Investigative Journalists",
      "DRC Ministry of Finance records",
      "Trading company financial disclosures"
    ]
  },
  {
    id: "health-crisis-mining-2024",
    title: "Toxic Legacy: The Health Crisis in DRC's Cobalt Mining Regions",
    excerpt: "Medical researchers document alarming rates of respiratory disease, birth defects, and neurological disorders in communities surrounding cobalt mines, revealing a public health catastrophe ignored by the international community.",
    content: `
      <p>A groundbreaking epidemiological study published in the Lancet Global Health reveals the devastating health impacts of cobalt mining on local communities in the DRC. The five-year study, conducted across 12 mining regions, documents health outcomes that researchers describe as "catastrophic."</p>
      
      <p>Key health findings:</p>
      <ul>
        <li>Respiratory disease rates 400% higher than national average</li>
        <li>Birth defect rates increased by 280% in mining areas</li>
        <li>Neurological disorders affecting 35% of long-term miners</li>
        <li>Childhood developmental delays in 60% of mining families</li>
      </ul>
      
      <p>Dr. Fatima Nsapu, who led the research team, describes the situation as "an ongoing humanitarian disaster hidden from the world's view. These communities are paying the ultimate price for our digital lifestyle."</p>
    `,
    date: "November 20, 2024",
    readTime: "10 min read",
    category: "Public Health",
    tags: ["health crisis", "medical research", "toxic exposure", "community health"],
    externalLink: "https://example.com/drc-health-crisis-study",
    sources: [
      "The Lancet Global Health Journal",
      "University of Kinshasa Medical School",
      "Local health clinic records"
    ]
  }
];