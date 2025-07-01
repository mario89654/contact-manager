import ContactCard from "./ContactCard";

export default function ContactList() {
  return (
    <div className="contact-container">
      <ContactCard name="Lucy" phone="555-1234" email="lucy@gmail.com" />
      <ContactCard name="Juan" phone="555-5678" email="juan@mail.com" />
      <ContactCard name="Ana" phone="555-8765" email="ana@mail.com" />
    </div>
  );
}
