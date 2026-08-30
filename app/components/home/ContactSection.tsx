import React from 'react';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
    email?: string;
    whatsappNumber?: string;
}

export default function ContactSection({
    email = 'johsematech@gmail.com', // Reemplaza por tu correo comercial
}: ContactSectionProps) {
    const mailtoUrl = `mailto:${email}?subject=UGC%20Content%20Inquiry%20-%20[Nombre%20de%20la%20Marca]&body=Hola%20José%20María,%20nos%20interesa%20crear%20contenido%20UGC%20para%20nuestra%20marca...`;

    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.container}>
                <div className={styles.availabilityBadge}>
                    <span className={styles.dot}></span>
                    <span>Open for Collaboration</span>
                </div>

                <h2 className={styles.title}>Let's Build Content That Converts</h2>
                <p className={styles.subtitle}>
                    Ready to showcase your product with authentic storytelling and high-retention vertical videos? Get in touch directly.
                </p>

                <div className={styles.cardsGrid}>
                    {/* Card de Correo */}
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>✉️</div>
                        <h3 className={styles.cardTitle}>Send an Email</h3>
                        <p className={styles.cardText}>
                            Best for campaign briefs, script requirements, and detailed proposals.
                        </p>
                        <a href={mailtoUrl} className={`${styles.actionBtn} ${styles.primaryBtn}`}>
                            Email Commercial Inquiry
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}