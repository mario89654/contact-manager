import ContactCard from "./ContactCard";

export default function ContactList({ contacts, onToggleFavorite, onClearContact, onMarkAllAsFavorite, total }) {
  return (
    <div style={{ padding: "0 24px", marginTop: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <strong>Total de contactos: {total}</strong>
        <button
          onClick={onMarkAllAsFavorite}
          style={{
            backgroundColor: "#f39c12",
            color: "white",
            padding: "6px 12px",
            marginLeft: "10px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ⭐️ Marcar todos como favoritos
        </button>
      </div>

      <div
        className="contact-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            {...contact}
            onToggleFavorite={onToggleFavorite}
            onClearContact={onClearContact}
          />
        ))}
      </div>
    </div>
  );
}
