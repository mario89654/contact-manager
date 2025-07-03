
import '../App.css';

export default function ContactCard({ id, name, phone, email, isFavorite, onToggleFavorite }) {
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
    </div>
  );
}

