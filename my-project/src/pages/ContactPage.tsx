import Header from "../components/layout/Header";
import ContactSection from "../components/sections/contact/ContactSection";
import Footer from "../components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
