
import ContactList from "./components/ContactList";

import ContactCard from "./components/ContactCard";
import Copyrights from "./components/Copyrights";

export default function App() {
  return (
    <>
      <header>
        <main> 
          <h1>Contact Manager</h1>
          <p>Mis contactos importantes</p>
        </main>
      </header>

      <div className="contact-container">     
        <ContactCard name="Lucy" phone="555-1234" email="Lucy@gmail.com" />
        <ContactCard name="Juan" phone="555-5678" email="juan@gmail.com" />
        <ContactCard name="Ana" phone="555-8765" email="ana@gmail.com" />
        <ContactCard name="Pedro" phone="555-4321" email="pedro@gmail.com" />
        <ContactCard name="Mary" phone="55-8673" email="mary@gmail.com" />
      </div>

      <hr />

      <footer>
        <p>🟢 WhatsApp: 939 814 802</p>
        <p>📧 Email: mario.j.wells89@gmail.com</p>
        <Copyrights />
      </footer>
    </>
  );
}
