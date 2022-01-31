import axios from "axios";
import { useEffect, useState } from "react";
import { capitalize } from "../../utils";

export default function withEditableResource(
  Component,
  resourcePath,
  resourceName
) {
  //
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        try {
          await axios.get(resourcePath).then(({ data }) => {
            setOriginalData(data);
            setData(data);
          });
        } catch (err) {
          console.log(err);
        }
      })();
    }, []);

    const onChange = (changes) => {
      setData({
        ...data,
        ...changes
      });
    };

    const onSave = async () => {
      try {
        const res = await axios.put(resourcePath, data);
        setOriginalData(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset
    };

    return <Component {...resourceProps} {...props} />;
  };
}
