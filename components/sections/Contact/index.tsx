import ContactForm from "@/components/sections/Contact/ContactForm";
import ContactLinks from "./ContactLinks";
import circuit from "../../../../public/Circuit2.svg";

const Contact = () => {
  return (
    <section className="w-full py-6 bg-gradient-to-b from-zinc-900/50 to-transparent">
      <span className="container px-3 md:px-6 lg:px-12 flex flex-col mx-auto">
        <span className="relative flex flex-col h-full gap-6 p-4 bg-cover border shadow-lg md:p-6 lg:p-12 rounded-xl md:flex-row bg-gradient-to-t from-zinc-100/90 to-white/90">
          <ContactForm />
          <ContactLinks />
        </span>
      </span>
    </section>
  );
};

export default Contact;
