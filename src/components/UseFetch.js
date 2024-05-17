import { useState, useEffect } from "react";

const Usefetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  },[url]);
  return { data };
};

export default Usefetch;
