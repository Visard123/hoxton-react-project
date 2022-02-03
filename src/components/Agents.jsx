import { useEffect } from "react";

import { useState } from "react/cjs/react.development";

export default function Agents() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/users`)
      .then((resp) => resp.json())
      .then((agentFromServer) => setUsers(agentFromServer));
  }, []);

  return (
    <div className="agents-wrapper">
      <h2>Our Agents</h2>
      <ul className="our-agents">
        {users.map((agent) => (
          <li key={agent.id}>
            <img src={agent.image} alt={agent.name} />
            <p>
              {agent.name} {agent.surname}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
