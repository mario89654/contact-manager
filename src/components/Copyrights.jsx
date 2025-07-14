// Componente para mostrar los derechos de autor (footer)
export default function Copyrights() {
  // Obtener el año actual dinámicamente
  const year = new Date().getFullYear();

  // Mostrar texto con el año actual y el nombre del autor
  return (
    <div>
      © {year} Mario Wells. Todos los derechos reservados.
    </div>
  );
}
