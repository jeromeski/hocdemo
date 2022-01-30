// import UserList from "./components/users/UserList";
import UserItem from "./components/users/UserItem";
import { useAxios } from "./hooks/useAxios";
import "./styles.css";
import printProps from "./components/printProps";
import { withUserLoader } from "./components/withUserLoader";

export default function App() {
  const baseUrl = "https://jsonplaceholder.typicode.com/users/1";
  const { user } = useAxios(baseUrl);
  const WrappedUserItem = printProps(UserItem);

  const UserItemWithLoader = withUserLoader(UserItem, 3);

  return (
    <div className="App">
      <WrappedUserItem user={user} a={0} b="sample" c={{ name: "babygirl" }} />
      <UserItemWithLoader />
    </div>
  );
}
