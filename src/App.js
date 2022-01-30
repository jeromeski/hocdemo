import { useEffect, useState } from "react";
import UserList from "./components/users/UserList";
import UserItem from "./components/users/UserItem";
import { useAxios } from "./hooks/useAxios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com/users";
  const { users, isLoading, error } = useAxios(baseUrl);

  useEffect(() => {
    if (users) {
      setData(users);
    }
  }, [users]);
  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && !error && (
        <UserList data={data} itemComponent={UserItem} resourceName="user" />
      )}
      {error && <h1>Error loading users.</h1>}
    </div>
  );
}
