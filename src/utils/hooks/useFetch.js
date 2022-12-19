import { useEffect, useState } from "react";

/**
 *
 * @param {string | {url, method, body}} query
 * @returns
 */

export function useFetch(query) {
  //Toma como parametro cualquier dato
  const [data, setData] = useState([]);
  //Carga
  const [isLoading, setIsLoading] = useState(true);

  //si el tipo de dato es string manda un query
  if (typeof query === "string") {
    query = { url: query, method: "GET", body: {} }; //Body vacio en caso de que pidamos un post,put y los demas
  }

  let options = {
    method: query.method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  //esto permitira la entrada de otra peticion
  if (query.method !== "GET") {
    options.body = JSON.stringify(query.body);
  }
  useEffect(() => {
    setIsLoading(true);
    fetch(query.url, options)
      .then(query.url, options)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);
  return { data, isLoading };
}
