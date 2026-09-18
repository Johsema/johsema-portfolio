import { ExpertiseProps } from '../../components/home/ExpertiseCard';
import { ProjectProps } from '../home/ProjectCard'; // Ajusta la ruta a tu ProjectCard

export interface HeroContent {
    greeting: string;
    name: string;
    role: string;
    bio1: string;
    bio2: string;
    btnWork: string;
    btnExamples: string;
    introVideo:string;
    heroPoster: string;
}

export interface TechStackContent {
    sectionTitle: string;
    technologies: string[];
}

export interface FeaturedProjectsContent {
    sectionTitle: string;
    projects: ProjectProps[];
}

export interface ContactSectionContent {
    badge: string;
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendingBtn: string;
    successMsg: string;
    errorMsg: string;
    directEmailText: string;
    copiedText: string;
}

export interface ContentStructure {
    hero: HeroContent;
    techStack: TechStackContent;
    featuredProjects: FeaturedProjectsContent;
    contact: ContactSectionContent;
    techSectionTitle: string;
    techVideos: ExpertiseProps[];
}

export const CONTENT: Record<'es' | 'en', ContentStructure> = {
    es: {
        hero: {
            greeting: "Hola, soy",
            name: "José María",
            role: "Creador UGC & Tech Storyteller Bilingüe",
            bio1: "Especializado en tecnología, reseñas de gadgets y storytelling envolvente. Creo contenido que se siente como una recomendación auténtica de un amigo experto — no como un anuncio forzado — porque cada video nace de experiencia real, rutinas reales y un contexto cercano.",
            bio2: "Combinando unboxings de tecnología con narrativa clara y humor, entiendo exactamente qué hace que los usuarios detengan el scroll, miren hasta el final y tomen acción. Cada video está construido sobre una estrategia: un gancho irresistible, solución a problemas reales, ritmo dinámico y un CTA que convierte.",
            btnWork: "📲 Trabajemos juntos",
            btnExamples: "Ver ejemplos UGC",
            introVideo: "https://res.cloudinary.com/rw4adlao/video/upload/v1789595787/Presentacion.mp4",
            heroPoster:"/public/PRESENTACION.png"
        },
        techStack: {
            sectionTitle: 'Tipos de Videos',
            technologies: [
                "Unboxings y Primeras Impresiones",
                "Reseñas de Productos",
                "Sketches de Comedia",
                "Anuncios Problema-Solución",
            ],
        },
        techSectionTitle: 'Tech & Unboxings',
        techVideos: [
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1789747892/OBSIDIAN.mp4',
                title: 'OBSIDIAN',    
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1789747927/KDE-CONECT.mp4',
                title: 'KDE CONECT',    
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788115537/smart_band_9_sin_musica.mp4',
                title: 'Reseña del Xiaomi Smart Band 9',    
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788121417/te_realme_buds_t110.mp4',
                title: 'Reseña del Realme Buds T110',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788110468/wavekeys_unboxing_asmr_-_1.mp4',
                title: 'Logitech Wavekeys ASMR Unboxing',
            },
        ] as ExpertiseProps[],
        featuredProjects: {
            sectionTitle: "Redes Sociales",
            projects: [
                {
                title: '📸 José María | UGC Creator',
                description: 'Espacio donde comparto mi experiencia como creador UGC.',
                tags: ['ugc', 'creador_ugc', 'contenido_ugc', ],
                repoUrl: 'https://www.tiktok.com/@josemariaugc',
                },
                {
                title: '📱 JohsemaTech / Tech Videos',
                description: 'Espacio donde publico reseñas de tecnología y videos de unboxing.',
                tags: ['contenido_tech', 'tiktok', 'reseñas', 'unboxing'],
                repoUrl: 'https://www.tiktok.com/@johsematech',
                },
                {
                title: '📸 Johsema / Vlogs',
                description: 'Espacio donde comparto consejos y experiencias sobre las publicaciones en redes sociales.',
                tags: ['tips', 'consejos', 'estrategiaDigital', 'storytelling'],
                repoUrl: 'https://www.tiktok.com/@johsema',
                },
            ],
        },
        contact: {
            badge: "Disponible para colaboraciones",
            title: "Creemos contenido que convierta",
            subtitle: "¿Listo para mostrar tu producto con narrativa auténtica y videos verticales de alta retención? Escríbeme directamente.",
            namePlaceholder: "Tu Nombre / Marca",
            emailPlaceholder: "Tu Correo Electrónico",
            messagePlaceholder: "Cuéntame sobre tu proyecto o campaña...",
            submitBtn: "Enviar Mensaje 🚀",
            sendingBtn: "Enviando...",
            successMsg: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
            errorMsg: "Hubo un error al enviar el mensaje. Por favor intenta nuevamente.",
            directEmailText: "O si prefieres, escríbeme directamente a:",
            copiedText: "¡Copiado!",
        },
    },
    en : {
        hero: {
            greeting: "Hi, I'm",
            name: "José María",
            role: "Bilingual UGC Creator & Tech Storyteller",
            bio1: "Specializing in tech, gadget reviews, and engaging storytelling. I create content that feels like an authentic recommendation from a tech-savvy friend — not a forced ad — because every video is rooted in real hands-on experience, real routines, and relatable context.",
            bio2: "Combining tech unboxings with clear narrative and humor, I understand exactly what makes users stop scrolling, watch until the end, and take action. Every video is built on strategy: an irresistible hook, real problem-solving, dynamic pacing, and a CTA that actually converts.",
            btnWork: "📲 Let's Work",
            btnExamples: "View UGC Examples",
            introVideo:"https://res.cloudinary.com/rw4adlao/video/upload/v1789595793/Presentation.mp4",
            heroPoster:"/public/PRESENTATION.png"
        },
        techStack: {
            sectionTitle: 'Types of Videos',
            technologies: [
                "Unboxings & First Impressions",
                "Product Reviews",
                "Comedy Sketches",
                "Problem-Solution Ads",
            ],
        },
        techSectionTitle: 'Tech & Unboxings',
        techVideos: [
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1789752991/OBSIDIANENGLISH.mp4',
                title: 'OBSIDIAN',    
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1789753582/KDECONECTENGLISH.mp4',
                title: 'KDE CONECT',    
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788115537/smart_band_9_sin_musica.mp4',
                title: 'Spanish Review: Xiaomi Smart Band 9',    
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788121417/te_realme_buds_t110.mp4',
                title: 'Spanish Review: Realme Buds T110',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788110468/wavekeys_unboxing_asmr_-_1.mp4',
                title: 'ASMR Unboxing: Logitech Wavekeys ',
            },
        ] as ExpertiseProps[],
        featuredProjects: {
            sectionTitle: "Social Medias",
            projects: [
                {
                title: '📸 José María | UGC Creator',
                description: 'A space where I share my experience as a UGC creator.',
                tags: ['ugc', 'ugc_creator', 'ugc_content', ],
                repoUrl: 'https://www.tiktok.com/@josemariaugc',
                },
                {
                title: '📱 JohsemaTech / Tech Videos',
                description: 'A space where I post tech reviews and unboxing videos.',
                tags: ['tech_content', 'tiktok', 'review', 'unboxing'],
                repoUrl: 'https://www.tiktok.com/@johsematech',
                },
                {
                title: '📸 Johsema / Vlogs',
                description: 'A space where I share tips and experiences regarding social media posts.',
                tags: ['tips', 'digitalStrategies', 'marketing', 'storytelling'],
                repoUrl: 'https://www.tiktok.com/@johsema',
                },
            ],
        },
        contact: {
            badge: "Open for Collaboration",
            title: "Let's Build Content That Converts",
            subtitle: "Ready to showcase your product with authentic storytelling and high-retention vertical videos? Get in touch directly.",
            namePlaceholder: "Your Name / Brand",
            emailPlaceholder: "Your Email Address",
            messagePlaceholder: "Tell me about your project or campaign...",
            submitBtn: "Send Message 🚀",
            sendingBtn: "Sending...",
            successMsg: "Message sent successfully! I'll get back to you soon.",
            errorMsg: "Something went wrong. Please try again.",
            directEmailText: "Or reach out directly at:",
            copiedText: "Copied!",
        },
    }
};