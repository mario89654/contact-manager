/* import ContactCard from "./ContactCard";

export default function ContactList() {
  return (
    <div className="contact-container">
      <ContactCard name="Lucy" phone="555-1234" email="lucy@gmail.com" />
      <ContactCard name="Juan" phone="555-5678" email="juan@mail.com" />
      <ContactCard name="Ana" phone="555-8765" email="ana@mail.com" />
    </div>
  );
}
 */  

import ContactCard from "./ContactCard";

export default function ContactList({ contacts, onToggleFavorite, onMarkAllAsFavorite }) {
  return (
    <div>
      {/* Mensaje del total */}
      <div style={{ textAlign: "right", marginRight: "24px" }}>
        <p><strong>Total:</strong> {contacts.length}</p>

        {/* Botón: Marcar todos como favoritos */}
        <button
          onClick={onMarkAllAsFavorite}
          style={{
            background: "#f39c12",
            color: "black",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          ⭐ Marcar todos como favoritos
        </button>
      </div>

      {/* Lista de contactos */}
      <div
        className="contact-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "24px",
          padding: "0 24px",
        }}
      >
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            {...contact}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}
