/* 
import '../App.css';

export default function ContactCard({ id, name, phone, email, isFavorite, onToggleFavorite, onClearContact }) {
  return (
    <div className="contact-card">
      <h3>{name}</h3>
      <p>📱 Phone: {phone}</p>
      <p>✉️ Email: {email}</p>

      <button
        onClick={() => onToggleFavorite(id)}
        className="favorite-button"
      >
        {isFavorite ? "⭐️ Favorito" : "☆ Marcar favorito"}
      </button>

      <button
        onClick={() => onClearContact(id)}
        className="clear-button"
        style={{
          marginTop: '10px',
          backgroundColor: '#f39c12',
          border: 'none',
          padding: '6px 10px',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        🧹 Limpiar contacto
      </button>
    </div>
  );
} */ 
import '../App.css';

export default function ContactCard({ id, name, phone, email, isFavorite, onToggleFavorite, onClearContact }) {
  return (
    <div className="contact-card">
      <h3>{name}</h3>
      <p>📱 Phone: {phone}</p>
      <p>✉️ Email: {email}</p>

      <button
        onClick={() => onToggleFavorite(id)}
        className="favorite-button"
      >
        {isFavorite ? "⭐️ Favorito" : "☆ Marcar favorito"}
      </button>

      <button
        onClick={() => onToggleFavorite(id)}
        className="favorite-button"
        style={{ marginTop: "6px", backgroundColor: "#f1c40f", color: "black" }}
      >
        🔁 Toggle Favorito
      </button>

      <button
        onClick={() => onClearContact(id)}
        className="favorite-button"
        style={{ marginTop: "6px", backgroundColor: "#e67e22", color: "white" }}
      >
        🧹 Limpiar Contacto
      </button>
    </div>
  );
}

