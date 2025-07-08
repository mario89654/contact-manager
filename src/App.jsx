/* 
import { useState } from "react";
import ContactCard from "./components/ContactCard";
import Copyrights from "./components/Copyrights";
import ContactList from "./components/ContactList";


export default function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Lucy", phone: "555-1234", email: "lucy@gmail.com", isFavorite: false },
    { id: 2, name: "Juan", phone: "555-5678", email: "juan@gmail.com", isFavorite: false },
    { id: 3, name: "Ana", phone: "555-8765", email: "ana@gmail.com", isFavorite: false },
    { id: 4, name: "Pedro", phone: "555-4321", email: "pedro@gmail.com", isFavorite: false },
    { id: 5, name: "Mary", phone: "55-8673", email: "mary@gmail.com", isFavorite: false },
  ]);

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [visibleContactIds, setVisibleContactIds] = useState([]);

  const toggleFavorite = (id) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isFavorite: !c.isFavorite } : c
      )
    );
  };

  const resetFavorites = () => {
    setContacts((prev) => prev.map((c) => ({ ...c, isFavorite: false })));
  };

  const handleFilterChange = () => {
    setShowFavoritesOnly((prev) => !prev);
  };

  const toggleContactVisibility = (id) => {
    setVisibleContactIds((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const handleNextContact = () => {
    const filtered = contacts.filter((c) =>
      showFavoritesOnly ? c.isFavorite : true
    );

    const invisible = filtered.find((c) => !visibleContactIds.includes(c.id));
    if (invisible) {
      setVisibleContactIds([...visibleContactIds, invisible.id]);
      alert(`Seleccionaste: ${invisible.name}`);
    } else {
      alert("No hay más contactos para mostrar.");
    }
  };

  const handleFirstFavorite = () => {
    const firstFavorite = contacts.find((c) => c.isFavorite);
    if (firstFavorite) {
      setVisibleContactIds([firstFavorite.id]);
      alert(`Seleccionaste: ${firstFavorite.name}`);
    } else {
      alert("No hay contactos favoritos.");
    }
  };

  const filteredContacts = contacts.filter((c) =>
    showFavoritesOnly ? c.isFavorite : true
  );

  const visibleContacts = filteredContacts.filter((c) =>
    visibleContactIds.includes(c.id)
  );

  return (
    <>
      <header>
        <main>
          <h1>📞 Contact Manager</h1>
          <p>Mis contactos importantes</p>

          <h3>Filtros</h3>
          <label>
            <input
              type="checkbox"
              checked={showFavoritesOnly}
              onChange={handleFilterChange}
            />
            Mostrar Favoritos
          </label>

          <div style={{ marginTop: "10px" }}>
            {contacts.map((contact) => (
              <button
                key={contact.id}
                style={{
                  background: visibleContactIds.includes(contact.id)
                    ? "#3ada49"
                    : "#2f7cff",
                  color: "black",
                  border: "none",
                  padding: "6px 10px",
                  margin: "4px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  toggleContactVisibility(contact.id);
                  alert(`Seleccionaste: ${contact.name}`);
                }}
              >
                Contact {contact.id} {contact.isFavorite ? "⭐️" : "☆"}
              </button>
            ))}
          </div>

          <div style={{ marginTop: "10px" }}>
            <button
              onClick={resetFavorites}
              style={{
                background: "#e74c3c",
                color: "black",
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              🔄 Resetear favoritos
            </button>

            <button
              onClick={handleNextContact}
              style={{
                background: "#2ecc71",
                color: "black",
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                marginTop: "10px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              👉 Siguiente
            </button>

            <button
              onClick={handleFirstFavorite}
              style={{
                background: "#2ecc71", 
                color: "black",
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                marginTop: "10px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              🌟 Primer Favorito
            </button>
          </div>

          {showFavoritesOnly && filteredContacts.length === 0 && (
            <p style={{ marginTop: "10px", color: "#f1c40f" }}>
              ⚠️ No hay favoritos.
            </p>
          )}

          <p style={{ marginTop: "10px" }}>
            Mostrando {visibleContacts.length} de {contacts.length} contactos
          </p>
        </main>
      </header>

      <div
        className="contact-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "24px",
          marginTop: "20px",
          padding: "0 24px",
        }}
      >
        {visibleContacts.map((contact) => (
          <ContactCard
            key={contact.id}
            {...contact}
            onToggleFavorite={toggleFavorite}
          />
        ))}
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
 */  

import { useState } from "react";
import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";
import Copyrights from "./components/Copyrights";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Lucy", phone: "555-1234", email: "lucy@gmail.com", isFavorite: false },
    { id: 2, name: "Juan", phone: "555-5678", email: "juan@gmail.com", isFavorite: false },
    { id: 3, name: "Ana", phone: "555-8765", email: "ana@gmail.com", isFavorite: false },
    { id: 4, name: "Pedro", phone: "555-4321", email: "pedro@gmail.com", isFavorite: false },
    { id: 5, name: "Mary", phone: "55-8673", email: "mary@gmail.com", isFavorite: false },
  ]);

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [visibleContactIds, setVisibleContactIds] = useState([]);

  const toggleFavorite = (id) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isFavorite: !c.isFavorite } : c
      )
    );
  };

  const resetFavorites = () => {
    setContacts((prev) => prev.map((c) => ({ ...c, isFavorite: false })));
  };

  const handleFilterChange = () => {
    setShowFavoritesOnly((prev) => !prev);
  };

  const toggleContactVisibility = (id) => {
    setVisibleContactIds((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const handleNextContact = () => {
    const filtered = contacts.filter((c) =>
      showFavoritesOnly ? c.isFavorite : true
    );
    const hidden = filtered.filter((c) => !visibleContactIds.includes(c.id));
    if (hidden.length > 0) {
      setVisibleContactIds((prev) => [...prev, hidden[0].id]);
    }
  };

  const handleFirstFavorite = () => {
    const firstFavorite = contacts.find((c) => c.isFavorite);
    if (firstFavorite && !visibleContactIds.includes(firstFavorite.id)) {
      setVisibleContactIds((prev) => [...prev, firstFavorite.id]);
    }
  };

  const markAllAsFavorite = () => {
    setContacts((prev) => prev.map((c) => ({ ...c, isFavorite: true })));
  };

  const filteredContacts = contacts.filter((c) =>
    showFavoritesOnly ? c.isFavorite : true
  );

  const visibleContacts = filteredContacts.filter((c) =>
    visibleContactIds.includes(c.id)
  );

  return (
    <>
      <header>
        <main>
          <h1>📞 Contact Manager</h1>
          <p>Mis contactos importantes</p>

          <h3>Filtros</h3>
          <label>
            <input
              type="checkbox"
              checked={showFavoritesOnly}
              onChange={handleFilterChange}
            />
            Mostrar Favoritos
          </label>

          <div style={{ marginTop: "10px" }}>
            {contacts.map((contact) => (
              <button
                key={contact.id}
                style={{
                  background: visibleContactIds.includes(contact.id)
                    ? "#3ada49"
                    : "#2f7cff",
                  color: "black",
                  border: "none",
                  padding: "6px 10px",
                  margin: "4px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => toggleContactVisibility(contact.id)}
              >
                Contact {contact.id} {contact.isFavorite ? "⭐️" : "☆"}
              </button>
            ))}
          </div>

          <div style={{ marginTop: "10px" }}>
            <button
              onClick={resetFavorites}
              style={{
                background: "#e74c3c",
                color: "black",
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              🔄 Resetear favoritos
            </button>

            <button
              onClick={handleNextContact}
              style={{
                background: "#2ecc71",
                color: "black",
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                marginTop: "10px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              👉 Siguiente
            </button>

            <button
              onClick={handleFirstFavorite}
              style={{
                background: "#2ecc71",
                color: "black",
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                marginTop: "10px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              🌟 Primer Favorito
            </button>
          </div>

          <p style={{ marginTop: "10px" }}>
            Mostrando {visibleContacts.length} de {contacts.length} contactos
          </p>
        </main>
      </header>

      {/* ✅ Nuevo componente con total y botón extra */}
      <ContactList
        contacts={visibleContacts}
        onToggleFavorite={toggleFavorite}
        onMarkAllAsFavorite={markAllAsFavorite}
      />

      <hr />

      <footer>
        <p>🟢 WhatsApp: 939 814 802</p>
        <p>📧 Email: mario.j.wells89@gmail.com</p>
        <Copyrights />
      </footer>
    </>
  );
}
