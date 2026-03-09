import React, { useState } from 'react';
import { Modal, Button, Form, Alert, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com'; // ← ADICIONE ESTA LINHA
import './ContactModal.css';

const ContactModal = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [showAlert, setShowAlert] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alertType, setAlertType] = useState('success'); // 'success' ou 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // DEFINA templateParams AQUI - ANTES de usar
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'ins4nityhz@gmail.com' // SEU EMAIL REAL AQUI
        };

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_rw65j59',
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_5a3bqu2',
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'afhxTW6cc58fNJRwz'
            );

            // Sucesso
            console.log('✅ Email enviado com sucesso!');
            setAlertType('success');
            setShowAlert(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setShowAlert(false);
                handleClose();
            }, 3000);

        } catch (error) {
            // Erro DETALHADO
            console.error('❌ Erro AO ENVIAR EMAIL:', error);
            console.log('🔍 Detalhes do erro:', {
                code: error.code,
                message: error.text,
                status: error.status
            });

            setAlertType('error');
            setShowAlert(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleModalClose = () => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setShowAlert(false);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleModalClose} size="lg" centered className="contact-modal">
            <Modal.Header closeButton className="modal-header-custom">
                <Modal.Title>CONTATO</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="text-center mb-4">
                    <p>Entre em contato comigo para discutir oportunidades, projetos ou colaborações.</p>
                </div>

                <Form onSubmit={handleSubmit}>
                    {showAlert && (
                        <Alert variant={alertType === 'success' ? 'success' : 'danger'} className="alert-message">
                            <i className={`bx ${alertType === 'success' ? 'bx-check-circle' : 'bx-error'}`}></i>
                            {alertType === 'success'
                                ? 'Sua mensagem foi enviada com sucesso! Obrigado.'
                                : 'Erro ao enviar mensagem. Tente novamente.'
                            }
                        </Alert>
                    )}

                    {/* Resto do formulário permanece igual */}
                    <Row>
                        <Col md={6} className="form-group">
                            <Form.Label htmlFor="name">Seu Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
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
                                    <i className="bx bx-send me-2"></i>
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