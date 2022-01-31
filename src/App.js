// import UserList from "./components/users/UserList";
import UserItem from "./components/hoc-print-props/UserItem";
// import { useAxios } from "./hooks/useAxios";
import slugify from "slugify";
import "./styles.css";
import printProps from "./components/hoc-print-props/printProps";
import { withUserLoader } from "./components/hoc-fetch-user/withUserLoader";
import UserInfoForm from "./components/hoc-edit-user/UserInfoForm";
import withEditableResource from "./components/hoc-edit-user/withEditableResource";
import UserInfo from "./components/hoc-edit-user/UserInfo";

export default function App() {
  let name = "Patricia Lebsack";

  const handleSlug = (id) => {
    let slug = id.toLowerCase();
    return slugify(slug);
  };

  const WrappedUserItem = printProps(UserItem);
  const UserItemWithLoader = withUserLoader(UserItem, handleSlug(name));

  return (
    <div className="App">
      <WrappedUserItem a={0} b="sample" c={{ name: "babygirl" }} />
      <UserItemWithLoader />
      <UserInfoForm />
    </div>
  );
}
