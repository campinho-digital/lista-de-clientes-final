import "../styles/form.css";

const ClientList = ({ clients }) => {
  if (clients.length === 0) {
    return <p className="no-client">No clients registered yet.</p>;
  }

  return (
    <div className="client-list">
      {clients.map((client, index) => (
        <div key={index} className="client-card">
          <h3>{client.name}</h3>
          <p>
            <strong>Telefone:</strong> {client.phone}
          </p>
          <p>
            <strong>Observações:</strong> {client.note || "None"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClientList;
