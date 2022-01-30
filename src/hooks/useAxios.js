import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      (async () => {
        try {
          await axios.get(url).then(({ data }) => {
            setUsers(data);
            setIsLoading(false);
          });
        } catch (err) {
          setIsLoading(false);
          setError(err);
        }
      })();
      clearTimeout(timer);
    }, 2000);
  }, [url]);

  return { users, isLoading, error };
};
