import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import Properties from "./Properties";

export default function Agent() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${params.id}`)
      .then((resp) => resp.json())
      .then((agentFromServer) => setUser(agentFromServer));
  }, []);

  useEffect(() => {
    if (user) {
      fetch("http://localhost:4000/properties")
        .then((resp) => resp.json())
        .then((propertyfromserver) => {
          const properties = propertyfromserver.filter(
            (property) => property.user_Id === user.id
          );
          setProperties(properties);
        });
    }
  }, [user]);
  if (user === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div>{user.name + " " + user.surname}</div>
      {properties ? <Properties properties={properties} /> : null}
    </div>
  );
}
