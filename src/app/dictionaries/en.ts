import type { TranslationDictionary } from '../core/i18n/translation.model';

export const EN = {
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', education: 'Education' },
    cta: 'Get in touch',
    hero: {
      greeting: "Hi, My name's",
      name: 'Brunno Oliveira',
      titleA: 'Data Analyst & Developer',
      titleB: '& Front-End & Back-End Developer',
      sub: 'I turn data into decisions and ideas into web applications — from front-end to database. Curitiba, Brazil.',
      primary: "Let's talk",
      secondary: 'My experience',
    },
    about: {
      label: 'About me',
      title: "Hi, I'm Brunno. Nice to meet you.",
      p1: 'Immersed in technology since 2020, I built my path at Nextage — from intern to Data Developer & Analyst Junior IV — solving real problems with clean code, well-architected queries and plenty of curiosity.',
      p2: 'I love learning new things, helping people with technical issues and maintaining applications so they run better every day. Whether optimizing a MySQL query or building a React interface, my focus is always the same: making technology work for people.',
    },
    skills: {
      label: 'Skills',
      title: 'What I do',
      cards: [
        {
          title: 'Data & Databases',
          desc: 'I turn raw data into reliable, useful information.',
          items: ['MySQL', 'Data analysis', 'Query optimization', 'Data modeling', 'Structuring & cleaning', 'Metrics & reports'],
        },
        {
          title: 'Front-End & Back-End Development',
          desc: 'I build complete applications, from interface to server.',
          items: ['TypeScript & JavaScript', 'React', 'Java & Spring Boot', 'Groovy', 'HTML & CSS', 'REST APIs', 'C#'],
        },
        {
          title: 'Support & Maintenance',
          desc: 'I keep systems healthy and people helped.',
          items: ['Technical support', 'Code maintenance', 'Application analysis & optimization', 'Problem solving', 'Teamwork', 'Continuous learning'],
        },
      ],
    },
    projects: {
      label: 'Selected work',
      title: 'Projects',
      sub: 'Real projects I have worked hands-on.',
      roleLabel: 'My role',
      visit: 'Visit website',
      more: 'More projects coming soon.',
      items: [
        {
          name: 'Portal Cessão de Créditos',
          desc: "Brazil's first and largest platform specialized in buying and selling credit portfolios, connecting sellers to hundreds of investors.",
          chips: ['Full website redesign', 'Business rules', 'Screen design & build', 'Maintenance & support'],
          url: "",
        },
      ],
    },
    experience: {
      label: 'Experience',
      title: 'My journey',
      company: 'Nextage',
      role: 'Support, Data Analyst & Developer',
      location: 'Curitiba, PR',
      period: '2022 — 2026',
      currentLabel: 'Current level',
      steps: [
        { level: 'Intern', tag: '2022 · The beginning', text: 'First professional contact with data: user support, information structuring and routine automation.' },
        { level: 'Junior I & II', tag: 'Growth', text: 'Code maintenance, application analysis and day-to-day MySQL query optimization.' },
        { level: 'Junior III', tag: 'Consolidation', text: 'Full-stack feature development with React, TypeScript, Java and Spring Boot.' },
        { level: 'Junior IV', tag: 'Current level', text: 'Reference in data routines, complex problem solving and continuous system improvement.' },
      ],
    },
    education: {
      label: 'Education',
      title: 'Faculdade Senac',
      degree: 'Associate Degree in Technology — Completed',
      period: '2020 — 2022',
      location: 'Curitiba, PR',
      note: 'Solid foundation in software development, from code to hardware.',
      pills: ['Java', 'Python', 'PHP', 'Databases', 'Object-Oriented Programming', 'Arduino'],
    },
    contact: {
      label: 'Contact',
      title: 'Interested in working together?',
      sub: 'Send me a direct message — it lands straight in my inbox.',
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Message sent! Thanks for reaching out — I will reply soon.',
      error: 'Could not send right now. Please try the direct email below.',
      or: 'or, if you prefer,',
      direct: 'Open in your email app',
      copy: 'Copy email',
      copied: 'Email copied!',
      linkedin: 'Connect on LinkedIn',
      whatsapp: '+55 (41) 99647-2207',
    },
    footer: {
      location: 'Curitiba, PR — Brazil',
      rights: '© 2026 Brunno Oliveira. All rights reserved.',
    }
} satisfies TranslationDictionary;