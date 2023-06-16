import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
  const [infoApi, setInfoApi] = useState();

  const getApi = () => {
    axios
      .get(baseUrl)
      .then((res) => {
        setInfoApi(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return [infoApi, getApi];
};

export default useFetch;
