import axios from "axios";
import { useEffect, useState } from "react";

export const withUserLoader = (Component, id) => {
  // returns a function
  return (props) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      if (id) {
        const baseUrl = `https://whispering-earth-86544.herokuapp.com/api/user/${id}`;
        setIsLoading(true);
        (async () => {
          try {
            await axios.get(baseUrl).then(({ data }) => {
              setUser(data);
              setIsLoading(false);
            });
          } catch (err) {
            setIsLoading(false);
            setError(err);
            console.log(error);
          }
        })();
      }
    }, [error]);

    // then finally return Component passing props from state
    return <Component user={user} isLoading={isLoading} />;
  };
};
