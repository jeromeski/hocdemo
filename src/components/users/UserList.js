export default function UserList({
  data,
  resourceName,
  itemComponent: ItemComponent
}) {
  return (
    <>
      {data &&
        data.map((item) => (
          <ItemComponent key={item.id} {...{ [resourceName]: item }} />
        ))}
    </>
  );
}
