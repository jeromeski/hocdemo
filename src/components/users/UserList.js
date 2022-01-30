export default function UserList({
  data,
  resourceName,
  itemComponent: ItemComponent
}) {
  return (
    <>
      {data &&
        data
          .slice(0, 5)
          .map((item) => (
            <ItemComponent key={item.id} {...{ [resourceName]: item }} />
          ))}
    </>
  );
}
