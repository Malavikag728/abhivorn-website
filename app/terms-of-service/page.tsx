import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageIntro from "@/components/ui/PageIntro";
import styles from "./terms-of-service.module.css";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className={`${styles.page} bg-white`}>
        <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
          <PageIntro
            eyebrow="Terms of service"
            title="Terms of Service"
            description="These terms govern the use of our website and the software development services we provide."
          />

          <div className="mt-12 space-y-6 text-sm leading-relaxed text-slate-600">
            <p>By using this website or engaging with Abhivorn Technologies, you agree to the terms described here and any additional terms agreed in writing for a specific project.</p>
            <p>Our company provides software design, development, consultation, implementation, and support services. Deliverables, timelines, and responsibilities will be governed by the relevant proposal, statement of work, or agreement signed between the parties.</p>
            <p>All content on this website, including text, branding, visuals, and code examples, is provided for informational purposes. We do not guarantee uninterrupted website availability or that all information is error-free.</p>
            <p>Clients remain responsible for the information, data, and approvals they provide for assigned work. We will act in good faith to meet agreed objectives, but project outcomes depend on clear requirements, timely feedback, and access to required resources.</p>
            <p>We reserve the right to update, modify, or discontinue any part of our services or website without prior notice when required for operational, legal, or business reasons.</p>
            <p>Any disputes related to our services or website usage will be resolved in the appropriate courts in Hyderabad, Telangana, India, subject to applicable law.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
