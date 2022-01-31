import slugify from "slugify";
import withEditableUser from "./withEditableUser";

let nameInput = "Dennis Schulist";
const handleSlug = (id) => {
  let slug = id.toLowerCase();
  return slugify(slug);
};

const UserInfoForm = withEditableUser(
  ({ user, onChangeUser, resetUser, onSaveUser }) => {
    const { name, username, email } = user || {};

    return user ? (
      <>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => onChangeUser({ username: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => onChangeUser({ email: e.target.value })}
          />
        </div>

        <button type="button" onClick={resetUser}>
          Reset
        </button>
        <button type="button" onClick={onSaveUser}>
          Save User
        </button>
      </>
    ) : (
      <h1>Loading...</h1>
    );
  },
  handleSlug(nameInput)
);

export default UserInfoForm;
