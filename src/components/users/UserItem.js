export default function UserItem({ user }) {
  return user ? (
    <>
      <h3>{user.name}</h3>
      <p>{user.username}</p>
      <pre>{user.email}</pre>
      <hr />
    </>
  ) : (
    <h1>Loading...</h1>
  );
}
