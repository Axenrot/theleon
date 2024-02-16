import ContactForm from "@/components/sections/Contact/ContactForm";
import ContactLinks from "./ContactLinks";

const Contact = ({ loading = false }: { loading?: boolean }) => {
  return (
    <section
      data-loading={loading}
      id="contact"
      className="data-[loading=true]:hidden w-full py-6 bg-gradient-to-b mb-12 from-zinc-900/60 to-transparent"
    >
      <span className="container px-3 md:px-6 lg:px-12 flex flex-col mx-auto">
        <span className="relative flex flex-col h-full gap-6 p-4 bg-cover border shadow-lg md:p-6 lg:p-12 rounded-xl md:flex-row bg-gradient-to-t from-zinc-100/95 to-white/95">
          <ContactForm />
          <ContactLinks />
        </span>
      </span>
    </section>
  );
};

export default Contact;
