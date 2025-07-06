import { useState } from "react";
import ClientForm from "./components/ClientForm";
import ClientList from "./components/ClientList";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("form");
  const [clients, setClients] = useState([]);

  const handleAddClient = (client) => {
    setClients([...clients, client]);
  };

  return (
    <div className="container">
      <h1>Registro de Cliente</h1>
      <div className="tabs">
        <button
          className={selectedTab === "form" ? "active" : ""}
          onClick={() => setSelectedTab("form")}
        >
          Registrar Clientes
        </button>
        <button
          className={selectedTab === "list" ? "active" : ""}
          onClick={() => setSelectedTab("list")}
        >
          Ver clientes
        </button>
      </div>

      {selectedTab === "form" && <ClientForm onAddClient={handleAddClient} />}
      {selectedTab === "list" && <ClientList clients={clients} />}
    </div>
  );
};

export default App;
