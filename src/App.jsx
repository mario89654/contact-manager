/* 
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

  const toggleContactVisibility = (id, name) => {
    alert(`Seleccionaste: ${name}`);
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

  const hasFavorites = contacts.some((c) => c.isFavorite);

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
                onClick={() => toggleContactVisibility(contact.id, contact.name)}
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

          {!hasFavorites && (
            <p style={{ color: "#888", marginTop: "10px" }}>⚠️ No hay favoritos</p>
          )}
        </main>
      </header>

      <ContactList
        contacts={visibleContacts}
        onToggleFavorite={toggleFavorite}
        onMarkAllAsFavorite={markAllAsFavorite}
        total={contacts.length}
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

  const toggleContactVisibility = (id, name) => {
    alert(`Seleccionaste: ${name}`);
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

  const clearContact = (id) => {
    const confirmed = window.confirm("¿Estás seguro de que deseas limpiar este contacto?");
    if (!confirmed) return;
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, name: "", phone: "", email: "", isFavorite: false } : c
      )
    );
  };

  const filteredContacts = contacts.filter((c) =>
    showFavoritesOnly ? c.isFavorite : true
  );

  const visibleContacts = filteredContacts.filter((c) =>
    visibleContactIds.includes(c.id)
  );

  const hasFavorites = contacts.some((c) => c.isFavorite);

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
                onClick={() => toggleContactVisibility(contact.id, contact.name)}
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

          {!hasFavorites && (
            <p style={{ color: "#888", marginTop: "10px" }}>⚠️ No hay favoritos</p>
          )}
        </main>
      </header>

      <ContactList
        contacts={visibleContacts}
        onToggleFavorite={toggleFavorite}
        onMarkAllAsFavorite={markAllAsFavorite}
        onClearContact={clearContact}
        total={contacts.length}
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
