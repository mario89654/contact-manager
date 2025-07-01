export default function Copyrights() {
  const year = new Date().getFullYear();
  return (
    <div>
      © {year} Mario Wells. Todos los derechos reservados.
    </div>
  );
}