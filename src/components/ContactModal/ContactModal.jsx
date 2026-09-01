import React, { useState } from 'react';
import { Modal, Button, Form, Alert, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './ContactModal.css';

/*
 * Credenciais vêm exclusivamente do ambiente (.env.local em dev, variáveis do
 * projeto na Vercel em produção). Sem fallback embutido: qualquer valor no
 * bundle é público, e um fallback no código anula o .gitignore do .env.
 */
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const CONTACT_EMAIL = 'andre.nagybhe.ramos@gmail.com';

const isConfigured = Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
);

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

const ContactModal = ({ show, handleClose }) => {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | 'unconfigured'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isConfigured) {
            setStatus('unconfigured');
            return;
        }

        setIsSubmitting(true);
        setStatus(null);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: CONTACT_EMAIL
                },
                { publicKey: EMAILJS_PUBLIC_KEY }
            );

            setStatus('success');
            setFormData(EMPTY_FORM);

            setTimeout(() => {
                setStatus(null);
                handleClose();
            }, 3000);
        } catch (error) {
            console.error('Falha ao enviar o formulário de contato:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleModalClose = () => {
        setFormData(EMPTY_FORM);
        setStatus(null);
        handleClose();
    };

    const alert = {
        success: {
            variant: 'success',
            icon: 'bx-check-circle',
            text: 'Sua mensagem foi enviada com sucesso! Obrigado.'
        },
        error: {
            variant: 'danger',
            icon: 'bx-error',
            text: 'Erro ao enviar a mensagem. Tente novamente em instantes.'
        },
        unconfigured: {
            variant: 'warning',
            icon: 'bx-error',
            text: `Envio indisponível no momento. Fale comigo direto em ${CONTACT_EMAIL}.`
        }
    }[status];

    return (
        <Modal show={show} onHide={handleModalClose} size="lg" centered className="contact-modal glass-modal">
            <Modal.Header closeButton className="modal-header-custom">
                <Modal.Title>CONTATO</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="text-center mb-4">
                    <p>Entre em contato comigo para discutir oportunidades, projetos ou colaborações.</p>
                </div>

                <Form onSubmit={handleSubmit}>
                    <div aria-live="polite" aria-atomic="true">
                        {alert && (
                            <Alert variant={alert.variant} className="alert-message">
                                <i className={`bx ${alert.icon}`} aria-hidden="true"></i>
                                {alert.text}
                            </Alert>
                        )}
                    </div>

                    <Row>
                        <Col md={6} className="form-group">
                            <Form.Label htmlFor="name">Seu Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Digite seu nome completo"
                            />
                        </Col>
                        <Col md={6} className="form-group">
                            <Form.Label htmlFor="email">Seu Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="seu.email@exemplo.com"
                            />
                        </Col>
                    </Row>

                    <div className="form-group mt-3">
                        <Form.Label htmlFor="subject">Assunto</Form.Label>
                        <Form.Control
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Assunto da mensagem"
                        />
                    </div>

                    <div className="form-group mt-3">
                        <Form.Label htmlFor="message">Mensagem</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="5"
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Descreva sua mensagem aqui..."
                        />
                    </div>

                    <div className="text-center mt-4">
                        <Button
                            type="submit"
                            className="contact-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <i className="bx bx-send me-2" aria-hidden="true"></i>
                                    Enviar Mensagem
                                </>
                            )}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ContactModal;
