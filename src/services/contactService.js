const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL no está definida. Verifica tu archivo .env");
}

// GET - Obtener todos los contactos
export async function fetchContacts() {
  try {
    console.log('🌐 Cargando contactos...');
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const contacts = await response.json();
    console.log('✅ Contactos cargados:', contacts.length);
    return contacts;
  } catch (error) {
    console.error('❌ Error al cargar contactos:', error);
    throw error;
  }
}

// POST - Crear nuevo contacto
export async function createContact(contactData) {
  try {
    console.log('🌐 Creando contacto...');
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const newContact = await response.json();
    console.log('✅ Contacto creado:', newContact);
    return newContact;
  } catch (error) {
    console.error('❌ Error al crear contacto:', error);
    throw error;
  }
}

// PUT - Actualizar contacto
export async function updateContact(id, contactData) {
  try {
    console.log('🌐 Actualizando contacto...');
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const updatedContact = await response.json();
    console.log('✅ Contacto actualizado:', updatedContact);
    return updatedContact;
  } catch (error) {
    console.error('❌ Error al actualizar contacto:', error);
    throw error;
  }
}
