import axios from "axios";
import { useEffect, useState } from "react";

export default function withEditableUser(Component, id) {
  //
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    const baseUrl = `https://whispering-earth-86544.herokuapp.com/api/user/${id}`;

    useEffect(() => {
      if (id) {
        (async () => {
          try {
            await axios.get(baseUrl).then(({ data }) => {
              setOriginalUser(data);
              setUser(data);
            });
          } catch (err) {
            console.log(err);
          }
        })();
      }
    }, [baseUrl]);

    const onChangeUser = (changes) => {
      setUser({
        ...user,
        ...changes
      });
    };

    const onSaveUser = async () => {
      try {
        await axios.put(baseUrl, user).then(({ data }) => {
          setOriginalUser(data);
          setUser(data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
        user={user}
        {...props}
      />
    );
  };
}
