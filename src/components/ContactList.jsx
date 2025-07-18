// // Importa el componente que representa cada tarjeta individual
// import ContactCard from "./ContactCard";

// // Componente que muestra una lista de contactos
// export default function ContactList({
//   contacts,             // Lista de contactos visibles
//   onToggleFavorite,     // Función para alternar favorito
//   onClearContact,       // Función para limpiar contacto
//   onMarkAllAsFavorite,  // Función para marcar todos como favoritos
//   total,                // Total de contactos
// }) {
//   return (
//     <div style={{ padding: "0 24px", marginTop: "20px" }}>
//       {/* Encabezado con total de contactos y botón para marcarlos todos como favoritos */}
//       <div style={{ marginBottom: "10px" }}>
//         <strong>Total de contactos: {total}</strong>

//         <button
//           onClick={onMarkAllAsFavorite} // Marca todos como favoritos
//           style={{
//             backgroundColor: "#f39c12",
//             color: "white",
//             padding: "6px 12px",
//             marginLeft: "10px",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//           }}
//         >
//           ⭐️ Marcar todos como favoritos
//         </button>
//       </div>

//       {/* Contenedor de tarjetas de contacto en diseño de grilla responsive */}
//       <div
//         className="contact-container"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Columnas automáticas mínimo 250px
//           gap: "24px", // Espaciado entre tarjetas
//         }}
//       >
//         {/* Renderiza cada contacto visible como una tarjeta */}
//         {contacts.map((contact) => (
//           <ContactCard
//             key={contact.id} // Clave única para React
//             {...contact} // Desestructura las propiedades del contacto (id, name, etc.)
//             onToggleFavorite={onToggleFavorite} // Pasa función para alternar favorito
//             onClearContact={onClearContact}     // Pasa función para limpiar contacto
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// src/components/ContactList.jsx
import { useState, useEffect } from "react";
import { fetchContacts } from "../services/contactService";

export default function ContactList({ onContactSelect }) {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadContacts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchContacts();
      setContacts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect para cargar los contactos al montar el componente
  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>📡 Lista de contactos (API)</h3>
      <button onClick={loadContacts} disabled={isLoading}>
        {isLoading ? "Cargando..." : "🔄 Cargar"}
      </button>

      {error && (
        <p style={{ color: "red" }}>
          ❌ {error} <button onClick={loadContacts}>Reintentar</button>
        </p>
      )}

     
{contacts.map((contact) => (
  <div
    key={contact.id}
    onClick={() => onContactSelect?.(contact)}
    style={{
      border: "1px solid #ccc",
      marginTop: "10px",
      padding: "10px",
      borderRadius: "6px",
      backgroundColor: contact.isFavorite ? "#ffe066" : "#e0e0e0", // <-- color según favorito
      color: "#333",
      cursor: "pointer",
    }}
  >
    <strong>{contact.name}</strong> {contact.isFavorite && "⭐"}
    <p>{contact.phone}</p>
  </div>
))}
 </div>
  );
} 
