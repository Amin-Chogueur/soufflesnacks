"use client";
import { useState } from "react";
import styles from "./contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [status, setStatus] = useState("Envoyer");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("On Envoie...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setStatus(result.status);
      toast.success("Votre message a été envoyé");
    } catch (error) {
      setStatus("Submission failed");
      toast.error("Error sending email!");
    } finally {
      setStatus("Envoyer");
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <h2>CONTACTEZ-NOUS</h2>
        <div>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Telephone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{status}</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
