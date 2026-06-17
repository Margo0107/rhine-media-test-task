import Header from "../components/Header";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center px-6 py-35 text-white">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}