
// Importar hooks y componentes necesarios
import {useEffect, useState } from "react";
import { fetchContacts } from "./services/contactService";
import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Copyrights from "./components/Copyrights";

export default function App() {
  // Estado principal con los contactos iniciales
  const [contacts, setContacts] = useState([
    { id: 1, name: "Lucy", phone: "555-1234", email: "lucy@gmail.com", isFavorite: false },
    { id: 2, name: "Juan", phone: "555-5678", email: "juan@gmail.com", isFavorite: false },
    { id: 3, name: "Ana", phone: "555-8765", email: "ana@gmail.com", isFavorite: false },
    { id: 4, name: "Pedro", phone: "555-4321", email: "pedro@gmail.com", isFavorite: false },
    { id: 5, name: "Mary", phone: "55-8673", email: "mary@gmail.com", isFavorite: false },
  ]);



// ...agregar o cerrar lista de carga...
// export default App;
 function App() {
  const [myContacts, setMyContacts] = useState([]);

  // Función para agregar un contacto a tu lista personal
  const handleAddContact = (contact) => {
    setMyContacts((prev) => [...prev, contact]);
  };

  // Función para seleccionar un contacto (ejemplo)
  const handleContactSelect = (contact) => {
    // Aquí puedes mostrar detalles, etc.
    alert(`Seleccionaste a ${contact.name}`);
  };

  return (
    <>
      {/* ...otros componentes... */}
      <ContactList
        onContactSelect={handleContactSelect}
        onAddContact={handleAddContact}
      />
      {/* ...otros componentes... */}
    </>
  );
}





  // Mostrar solo favoritos o todos
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  // Lista de IDs visibles
  const [visibleContactIds, setVisibleContactIds] = useState([]);
  // Input de teléfono (no usado actualmente)
  const [phoneInput, setPhoneInput] = useState("");
  // Mensaje temporal (éxito o advertencia)
  const [notification, setNotification] = useState("");

  const [apiContacts, setApiContacts] = useState([]);
const [selectedContact, setSelectedContact] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const loadContactsFromAPI = async () => {
  setIsLoading(true);
  setError(null);
  try {
    const data = await fetchContacts();
    setApiContacts(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};





  // 👉 Alternar favorito individual
  const toggleFavorite = (id) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isFavorite: !c.isFavorite } : c
      )
    );
  };

  // 🔁 Resetear todos los favoritos
  const resetFavorites = () => {
    setContacts((prev) => prev.map((c) => ({ ...c, isFavorite: false })));
  };

  // ✅ Alternar filtro de favoritos
  const handleFilterChange = () => {
    setShowFavoritesOnly((prev) => !prev);
  };

  // 👁️ Mostrar u ocultar un contacto al hacer clic en su botón
  const toggleContactVisibility = (id, name) => {
    alert(`Seleccionaste: ${name}`);
    setVisibleContactIds((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  // 👉 Mostrar siguiente contacto aún oculto
  const handleNextContact = () => {
    const filtered = contacts.filter((c) =>
      showFavoritesOnly ? c.isFavorite : true
    );
    const hidden = filtered.filter((c) => !visibleContactIds.includes(c.id));
    if (hidden.length > 0) {
      setVisibleContactIds((prev) => [...prev, hidden[0].id]);
    }
  };

  // ⭐ Mostrar primer favorito aún oculto
  const handleFirstFavorite = () => {
    const firstFavorite = contacts.find((c) => c.isFavorite);
    if (firstFavorite && !visibleContactIds.includes(firstFavorite.id)) {
      setVisibleContactIds((prev) => [...prev, firstFavorite.id]);
    }
  };

  // 💚 Marcar todos los contactos como favoritos
  const markAllAsFavorite = () => {
    setContacts((prev) => prev.map((c) => ({ ...c, isFavorite: true })));
  };

  // 🧼 Limpiar la información de un contacto (nombre, teléfono, email, favorito)
  const clearContact = (id) => {
    const confirmed = window.confirm("¿Estás seguro de que deseas limpiar este contacto?");
    if (!confirmed) return;
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, name: "", phone: "", email: "", isFavorite: false } : c
      )
    );
  };

  // 🗑️ Eliminar un contacto completamente
  const deleteContact = (id) => {
    const confirmed = window.confirm("¿Deseas borrar completamente este contacto?");
    if (!confirmed) return;

    setContacts((prev) => prev.filter((c) => c.id !== id));
    setVisibleContactIds((prev) => prev.filter((cid) => cid !== id));
  };

  // ➕ Agregar un nuevo contacto, verificando duplicados
  const handleAddContact = (newContact) => {
    // Verificar duplicado por nombre (insensible a mayúsculas)
    const isDuplicate = contacts.some(
      (c) => c.name.trim().toLowerCase() === newContact.name.trim().toLowerCase()
    );

    if (isDuplicate) {
      setNotification(`⚠️ Ya existe un contacto llamado "${newContact.name}"`);
      setTimeout(() => setNotification(""), 3000);
      return;
    }

    // Agregar nuevo contacto al estado
    setContacts((prev) => [...prev, newContact]);
    setVisibleContactIds((prev) => [...prev, newContact.id]);

    // Mostrar notificación temporal
    setNotification(`✅ ${newContact.name} agregado a tus contactos`);
    setTimeout(() => setNotification(""), 3000);
  };

  // 🔍 Aplicar filtro de favoritos si está activo
  const filteredContacts = contacts.filter((c) =>
    showFavoritesOnly ? c.isFavorite : true
  );

  // 👁️ Mostrar solo contactos visibles
  const visibleContacts = filteredContacts.filter((c) =>
    visibleContactIds.includes(c.id)
  );

  // 📍 Saber si hay algún contacto favorito
  const hasFavorites = contacts.some((c) => c.isFavorite);

  useEffect(() => {
  loadContactsFromAPI(); // o puedes dejarlo solo bajo demanda
}, []);

  return (
    <>
      <header>
        <main>
          <h1>📞 Contact Manager</h1>
          <p>Mis contactos importantes</p>

          {/* 🔔 Mostrar notificación temporal */}
          {notification && (
            <p
              style={{
                background: notification.startsWith("✅") ? "#d4edda" : "#f8d7da",
                color: notification.startsWith("✅") ? "#155724" : "#721c24",
                padding: "8px",
                borderRadius: "6px",
                marginTop: "10px"
              }}
            >
              {notification}
            </p>
          )}

          {/* 📋 Formulario para agregar contacto */}
          <ContactForm onAddContact={handleAddContact} totalContacts={contacts.length} />

          {/* 📌 Filtro para mostrar solo favoritos */}
          <h3>Filtros</h3>
          <label>
            <input
              type="checkbox"
              checked={showFavoritesOnly}
              onChange={handleFilterChange}
            />
            Mostrar Favoritos
          </label>

          {/* 🔘 Botones individuales para mostrar/ocultar contactos */}
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
                  {contact.name} {contact.isFavorite ? "⭐️" : "☆"} 
              </button>
            ))}
          </div>

          {/* 🔘 Botones de acciones generales */}
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

          {/* 🧮 Mostrar conteo de contactos visibles */}
          <p style={{ marginTop: "10px" }}>
            Mostrando {visibleContacts.length} de {contacts.length} contactos
          </p>

          {/* ⚠️ Mostrar mensaje si no hay favoritos */}
          {!hasFavorites && (
            <p style={{ color: "#888", marginTop: "10px" }}>⚠️ No hay favoritos</p>
          )}
        </main>
      </header>

      {/* 🧾 Lista de contactos visibles */}
      <ContactList
        contacts={visibleContacts}
        onToggleFavorite={toggleFavorite}
        onMarkAllAsFavorite={markAllAsFavorite}
        onClearContact={clearContact}
        onDeleteContact={deleteContact}
        total={contacts.length}
      />

      <hr />

      {/* 📞 Footer con datos de contacto */}
      <footer>
        <p>🟢 WhatsApp: 939 814 802</p>
        <p>📧 Email: mario.j.wells89@gmail.com</p>
        <Copyrights />
      </footer>
    </>
  );
}
