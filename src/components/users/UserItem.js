export default function UserItem({ user }) {
  const { name, username, email } = user;

  return (
    <div>
      <h3>{name}</h3>
      <p>{username}</p>
      <pre>{email}</pre>
      <hr />
    </div>
  );
}
