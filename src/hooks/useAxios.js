import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      (async () => {
        try {
          await axios.get(url).then(({ data }) => {
            setUser(data);
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

  return { user, isLoading, error };
};
