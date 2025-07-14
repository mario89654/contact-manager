// Importa el componente que representa cada tarjeta individual
import ContactCard from "./ContactCard";

// Componente que muestra una lista de contactos
export default function ContactList({
  contacts,             // Lista de contactos visibles
  onToggleFavorite,     // Función para alternar favorito
  onClearContact,       // Función para limpiar contacto
  onMarkAllAsFavorite,  // Función para marcar todos como favoritos
  total,                // Total de contactos
}) {
  return (
    <div style={{ padding: "0 24px", marginTop: "20px" }}>
      {/* Encabezado con total de contactos y botón para marcarlos todos como favoritos */}
      <div style={{ marginBottom: "10px" }}>
        <strong>Total de contactos: {total}</strong>

        <button
          onClick={onMarkAllAsFavorite} // Marca todos como favoritos
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

      {/* Contenedor de tarjetas de contacto en diseño de grilla responsive */}
      <div
        className="contact-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Columnas automáticas mínimo 250px
          gap: "24px", // Espaciado entre tarjetas
        }}
      >
        {/* Renderiza cada contacto visible como una tarjeta */}
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id} // Clave única para React
            {...contact} // Desestructura las propiedades del contacto (id, name, etc.)
            onToggleFavorite={onToggleFavorite} // Pasa función para alternar favorito
            onClearContact={onClearContact}     // Pasa función para limpiar contacto
          />
        ))}
      </div>
    </div>
  );
}
