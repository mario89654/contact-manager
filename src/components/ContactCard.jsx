// Importa los estilos CSS del componente principal
import '../App.css';

// Componente para mostrar una tarjeta de contacto individual
export default function ContactCard({
  id,               // ID único del contacto
  name,             // Nombre del contacto
  phone,            // Teléfono del contacto
  email,            // Email del contacto
  isFavorite,       // Booleano: ¿Es favorito?
  onToggleFavorite, // Función para marcar/desmarcar como favorito
  onClearContact,   // Función para eliminar/limpiar el contacto
}) {
  return (
    <div className="contact-card">
      {/* Nombre del contacto */}
      <h3>{name}</h3>

      {/* Teléfono */}
      <p>📱 Phone: {phone}</p>

      {/* Email */}
      <p>✉️ Email: {email}</p>

      {/* Botón para alternar estado de favorito */}
      <button
        onClick={() => onToggleFavorite(id)} // Llama a la función pasando el ID
        className="favorite-button"
        style={{ backgroundColor: "#f1c40f", color: "black" }}
      >
        🔁 Toggle Favorito
      </button>

      {/* Botón para limpiar/eliminar el contacto */}
      <button
        onClick={() => onClearContact(id)} // Llama a la función pasando el ID
        className="favorite-button"
        style={{
          marginTop: "6px",
          backgroundColor: "#e67e22",
          color: "white",
        }}
      >
        🧹 Limpiar Contacto
      </button>
    </div>
  );
}
