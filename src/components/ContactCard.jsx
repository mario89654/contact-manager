import '../App.css';

export default function ContactCard({ name, phone, email}) {
  return (
    <>
      <header className="h1"> </header>
      <div className="contact-card">
        <h3>{name}</h3>
        <p>📱 Phone: {phone}</p>
        <p>✉️ Email: {email}</p>
      </div>
    </>
  );
}
