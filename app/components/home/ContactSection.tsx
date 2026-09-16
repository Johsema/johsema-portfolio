'use client';

import React, { useState } from 'react';
import styles from './ContactSection.module.css';
import { useLanguage } from '@/app/context/LanguageContext';
import { CONTENT } from '@/app/components/data/ContentData';

export default function ContactSection() {
    const { language } = useLanguage();
    const { contact } = CONTENT[language] || CONTENT['es'];

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [copied, setCopied] = useState(false);
    
    const email = "johsematech@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);

        // ⚠️ REEMPLAZA ESTO CON EL ID DE TU GOOGLE FORM
        const GOOGLE_FORM_ID = "1FAIpQLSclVuQquwar13E28yk_4KGTZpqrvxWaJZubkOZxM8SMoIosuQ";

        // ⚠️ REEMPLAZA ESTOS ENTRY_IDs CON LOS DE TU FORMULARIO
        const GOOGLE_ENTRY_NAME = "entry.2135589268";   // ID del campo Nombre
        const GOOGLE_ENTRY_EMAIL = "entry.151979621";  // ID del campo Email
        const GOOGLE_ENTRY_MESSAGE = "entry.533763095";// ID del campo Mensaje

        const googleFormsUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

        const bodyParams = new URLSearchParams();
        bodyParams.append(GOOGLE_ENTRY_NAME, formData.get("name") as string);
        bodyParams.append(GOOGLE_ENTRY_EMAIL, formData.get("email") as string);
        bodyParams.append(GOOGLE_ENTRY_MESSAGE, formData.get("message") as string);

        try {
        // Usamos mode: 'no-cors' porque Google Forms no devuelve cabeceras CORS para peticiones AJAX directas
        await fetch(googleFormsUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            },
            body: bodyParams.toString(),
        });

        // Como mode es no-cors, la promesa se resuelve con éxito siempre que el envío se realice
        setStatus('success');
        form.reset();
        } catch {
        // En caso de fallar la conexión a la red
        setStatus('success'); // Generalmente no falla a menos que no haya internet
        }
    };

    return (
        <section className={styles.contactSection} id="contact">
        <div className={styles.container}>
            <div className={styles.availabilityBadge}>
            <span className={styles.dot}></span>
            <span>{contact.badge}</span>
            </div>

            <h2 className={styles.title}>{contact.title}</h2>
            <p className={styles.subtitle}>{contact.subtitle}</p>

            <div className={styles.formCard}>
            {status === 'success' ? (
                <div className={styles.successBox}>
                <span>✅</span>
                <p>{contact.successMsg}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input
                    type="text"
                    name="name"
                    required
                    placeholder={contact.namePlaceholder}
                    className={styles.input}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <input
                    type="email"
                    name="email"
                    required
                    placeholder={contact.emailPlaceholder}
                    className={styles.input}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={contact.messagePlaceholder}
                    className={styles.textarea}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={styles.submitBtn}
                >
                    {status === 'submitting' ? contact.sendingBtn : contact.submitBtn}
                </button>
                </form>
            )}
                {/* Bloque discreto con el correo directo */}
                <div className={styles.directEmailBox}>
                    <p className={styles.directEmailText}>{contact.directEmailText}</p>
                    <button type="button" onClick={handleCopyEmail} className={styles.emailBadgeBtn}>
                    ✉️ {email} {copied ? `(${contact.copiedText})` : ''}
                    </button>
                </div>
            </div>
        </div>
        </section>
    );
}