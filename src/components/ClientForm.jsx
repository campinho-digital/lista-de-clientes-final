import { useState } from "react";
import "../styles/form.css";

const ClientForm = ({ onAddClient }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in both name and phone.");
      return;
    }

    onAddClient({ name, phone, note });
    setName("");
    setPhone("");
    setNote("");
  };

  return (
    <form className="form-client" onSubmit={handleSubmit}>
      <label>Nome*</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Telefone*</label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <label>Observações</label>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} />

      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ClientForm;
