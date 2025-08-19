import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const ContactsSection = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7x79gyq",      // Service ID
        "template_ucdfc7w",     //Template ID
        formRef.current,
        "L5k_0Vh3KXOKKaVpS"     //Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="space-y-6 opacity-0 animate-fade-in-delay-1">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <span>rahageersaadman2000@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <span>+8801601930941</span>
            </div>
            <div className="flex items-center gap-4">
              <Github className="h-6 w-6 text-primary" />
              <a
                href="https://github.com/Rahageer90"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/Rahageer90
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="h-6 w-6 text-primary" />
              <a
                href="https://www.linkedin.com/in/rahageer-saadman-islam-7b8401350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/rahageer-saadman-islam-7b8401350
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="gradient-border p-8 card-hover flex items-start gap-4 opacity-0 animate-fade-in">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your First Name"
                  required
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your Last Name"
                  required
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="cosmic-button w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
