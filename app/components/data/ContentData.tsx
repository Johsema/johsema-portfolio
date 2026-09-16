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
    beautySectionTitle: string;
    techVideos: ExpertiseProps[];
    beautyVideos: ExpertiseProps[];
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
        beautySectionTitle: 'Perfumes & Cuidado Personal',
        techVideos: [
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788115537/smart_band_9_sin_musica.mp4',
                title: 'Reseña del Xiaomi Smart Band 9',    
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788117274/VN20260611_161109.mp4',
                title: 'Tips de productividad en Xiaomi',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788121417/te_realme_buds_t110.mp4',
                title: 'Reseña del Realme Buds T110',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788110466/PROYECTO_UNBOXING_-_3.mp4',
                title: 'Redmi Pad 2 Pro Unboxing',
                
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788110468/wavekeys_unboxing_asmr_-_1.mp4',
                title: 'Logitech Wavekeys ASMR Unboxing',
            },
        ] as ExpertiseProps[],
        beautyVideos: [
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788118836/co_zentro.mp4',
                title: 'Eau de Parfum Zentro Review',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788118840/co_skincare.mp4',
                title: 'Rutina de Cuidado Facial para Hombres',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788117804/VID_20260826_212311_660_bsl.mp4',
                title: 'Reseña cinemática de las Chinelas Luofu',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788118833/co_bleu.mp4',
                title: 'Reseña del Parfum Bleu Intense',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788120257/co_kalos.mp4',
                title: 'Reseña: Eau de Toilette Kalos',
            },
        ] as ExpertiseProps[],
        featuredProjects: {
            sectionTitle: "Redes Sociales",
            projects: [
                {
                title: '📱 JohsemaTech / Tech Videos',
                description: 'Espacio donde publico reseñas de tecnología y videos de unboxing.',
                tags: ['contenido_tech', 'tiktok', 'reseñas', 'unboxing'],
                repoUrl: 'https://www.tiktok.com/@johsematech',
                },
                {
                title: '🍇 Lic. Parfum / Parfum Videos',
                description: 'Espacio donde publico reseñas y análisis de perfumes y productos de cuidado personal.',
                tags: ['perfumes', 'cuidado_personal', 'catálogo', 'reseñas'],
                repoUrl: 'https://www.tiktok.com/@lic.parfum',
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
        beautySectionTitle: 'Parfums and Personal Care',
        techVideos: [
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788115537/smart_band_9_sin_musica.mp4',
                title: 'Xiaomi Smart Band 9 Review',    
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788117274/VN20260611_161109.mp4',
                title: 'Tips de productividad en Xiaomi',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788121417/te_realme_buds_t110.mp4',
                title: 'Realme Buds T110 Review',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788110466/PROYECTO_UNBOXING_-_3.mp4',
                title: 'Redmi Pad 2 Pro Unboxing',
                
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788110468/wavekeys_unboxing_asmr_-_1.mp4',
                title: 'Logitech Wavekeys ASMR Unboxing',
            },
        ] as ExpertiseProps[],
        beautyVideos: [
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788118836/co_zentro.mp4',
                title: 'Eau de Parfum Zentro Review',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788118840/co_skincare.mp4',
                title: 'Skincare for Men',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788117804/VID_20260826_212311_660_bsl.mp4',
                title: 'Chinelas Luofu Cinematic Review',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788118833/co_bleu.mp4',
                title: 'Parfum Bleu Intense Review',
            },
            {
                videoSrc: 'https://res.cloudinary.com/rw4adlao/video/upload/v1788120257/co_kalos.mp4',
                title: 'Eau de Toilette Kalos Review',
            },
        ] as ExpertiseProps[],
        featuredProjects: {
            sectionTitle: "Social Medias",
            projects: [
                {
                title: '📱 JohsemaTech / Tech Videos',
                description: 'A space where I post tech reviews and unboxing videos.',
                tags: ['tech_content', 'tiktok', 'review', 'unboxing'],
                repoUrl: 'https://www.tiktok.com/@johsematech',
                },
                {
                title: '🍇 Lic. Parfum / Parfum Videos',
                description: 'A space where I post reviews and analyses of perfumes and personal care products.',
                tags: ['parfum', 'personal_care', 'catalog', 'review'],
                repoUrl: 'https://www.tiktok.com/@lic.parfum',
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