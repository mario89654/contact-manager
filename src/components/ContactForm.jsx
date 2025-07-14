// import { useState, useRef, useEffect } from "react";

// export default function ContactForm({ onAddContact, totalContacts }) {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [errors, setErrors] = useState({});
//   const phoneInputRef = useRef(null);

//   const completedFields = [name, phone].filter((field) => field.trim() !== "").length;

//   // Regex para validar formato de teléfono: solo dígitos, espacios, paréntesis o guiones
//   const phoneRegex = /^[0-9\s\-()]+$/;

//   // 🧠 Reto c: Si nombre contiene solo números, enfoca automáticamente el input teléfono
//   useEffect(() => {
//     if (/^\d+$/.test(name)) {
//       phoneInputRef.current?.focus();
//     }
//   }, [name]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (name.trim() === "") newErrors.name = "El nombre es obligatorio.";
//     if (phone.trim() === "") {
//       newErrors.phone = "El teléfono es obligatorio.";
//     } else if (!phoneRegex.test(phone)) {
//       newErrors.phone = "Formato inválido. Ejemplo válido: (123) 456-7890";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     const newContact = {
//       id: Date.now(),
//       name,
//       phone,
//       email: "",
//       isFavorite: false,
//     };

//     onAddContact(newContact);
//     setName("");
//     setPhone("");
//     setErrors({});
//   };

//   const handleClear = () => {
//     if (name || phone) {
//       const confirmed = window.confirm("¿Seguro que deseas limpiar los campos?");
//       if (!confirmed) return;
//     }
//     setName("");
//     setPhone("");
//     setErrors({});
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//       <h3>Agregar nuevo contacto</h3>
//       <p>📇 Total de contactos: {totalContacts}</p>

//       <label>
//         Nombre:
//         <input
//           type="text"
//           value={name}
//           autoComplete="off"
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Ingresa el nombre"
//           style={{ marginLeft: "10px" }}
//         />
//       </label>
//       {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

//       <br /><br />

//       <label>
//         Teléfono:
//         <input
//           type="text"
//           value={phone}
//           ref={phoneInputRef}
//           autoComplete="off"
//           onChange={(e) => setPhone(e.target.value)}
//           placeholder="Ej: (123) 456-7890"
//           style={{ marginLeft: "10px" }}
//         />
//       </label>
//       {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

//       <br /><br />
//       <p>✅ Campos completados: {completedFields}/2</p>

//       <button
//         type="submit"
//         style={{
//           background: "#3498db",
//           color: "white",
//           border: "none",
//           padding: "8px 16px",
//           borderRadius: "6px",
//           cursor: "pointer",
//           marginRight: "10px",
//         }}
//       >
//         ➕ Agregar contacto
//       </button>

//       <button
//         type="button"
//         onClick={handleClear}
//         style={{
//           background: "#e74c3c",
//           color: "white",
//           border: "none",
//           padding: "8px 16px",
//           borderRadius: "6px",
//           cursor: "pointer",
//         }}
//       >
//         🧹 Limpiar
//       </button>
//     </form>
//   );
// }

import { useState, useRef, useEffect } from "react";

// Componente para agregar un nuevo contacto
export default function ContactForm({ onAddContact, totalContacts }) {
  // Estados para nombre, teléfono y errores de validación
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  // Referencia al input del teléfono para enfocar automáticamente
  const phoneInputRef = useRef(null);

  // Calcular cuántos campos se han completado
  const completedFields = [name, phone].filter((field) => field.trim() !== "").length;

  // Expresión regular para validar el formato del teléfono
  const phoneRegex = /^[0-9\s\-()]+$/;

  // 🔁 Enfocar input teléfono si el nombre solo contiene números
  useEffect(() => {
    if (/^\d+$/.test(name)) {
      phoneInputRef.current?.focus();
    }
  }, [name]);

  // 👉 Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validar que el nombre no esté vacío
    if (name.trim() === "") newErrors.name = "El nombre es obligatorio.";

    // Validar que el teléfono no esté vacío ni tenga formato incorrecto
    if (phone.trim() === "") {
      newErrors.phone = "El teléfono es obligatorio.";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Formato inválido. Ejemplo válido: (123) 456-7890";
    }

    // Si hay errores, mostrarlos y detener el envío
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ✅ Crear nuevo contacto válido
    const newContact = {
      id: Date.now(),
      name,
      phone,
      email: "",
      isFavorite: false,
    };

    // 📨 Agregar contacto mediante la función del padre
    onAddContact(newContact);

    // 🔄 Resetear campos y errores
    setName("");
    setPhone("");
    setErrors({});
  };

  // 🧹 Limpiar los campos del formulario (con confirmación)
  const handleClear = () => {
    if (name || phone) {
      const confirmed = window.confirm("¿Seguro que deseas limpiar los campos?");
      if (!confirmed) return;
    }
    setName("");
    setPhone("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Agregar nuevo contacto</h3>
      <p>📇 Total de contactos: {totalContacts}</p>

      {/* Input para nombre */}
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa el nombre"
          style={{ marginLeft: "10px" }}
        />
      </label>
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <br /><br />

      {/* Input para teléfono */}
      <label>
        Teléfono:
        <input
          type="text"
          value={phone}
          ref={phoneInputRef}
          autoComplete="off"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ej: (123) 456-7890"
          style={{ marginLeft: "10px" }}
        />
      </label>
      {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

      <br /><br />

      {/* Indicador de campos completados */}
      <p>✅ Campos completados: {completedFields}/2</p>

      {/* Botón para agregar contacto */}
      <button
        type="submit"
        style={{
          background: "#3498db",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        ➕ Agregar contacto
      </button>

      {/* Botón para limpiar formulario */}
      <button
        type="button"
        onClick={handleClear}
        style={{
          background: "#e74c3c",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        🧹 Limpiar
      </button>
    </form>
  );
}
