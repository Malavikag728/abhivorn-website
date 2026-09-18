import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageIntro from "@/components/ui/PageIntro";
import styles from "./privacy-policy.module.css";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className={`${styles.page} bg-white`}>
        <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
          <PageIntro
            eyebrow="Privacy policy"
            title="Privacy Policy"
            description="This page explains how Abhivorn Technologies collects, uses, stores, and protects personal data."
          />

          <div className="mt-12 space-y-6 text-sm leading-relaxed text-slate-600">
            <p>We collect information that is necessary to provide our software and consulting services, including business contact details, project requirements, and communication history.</p>
            <p>We use this information to design and deliver our solutions, improve the quality of our services, communicate with clients, and maintain operational records.</p>
            <p>We may use trusted third-party tools for hosting, analytics, and operational support. These providers are selected with care and are required to handle data responsibly.</p>
            <p>We store personal and business information only for as long as needed to fulfill the purpose it was collected for, comply with legal obligations, or maintain business records.</p>
            <p>You may contact us to request access, correction, or deletion of your personal data where applicable under applicable law.</p>
            <p>We reserve the right to update this policy from time to time, and material changes will be communicated through our website or direct communication where appropriate.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
