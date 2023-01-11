import React from "react";
import { useQuery } from "react-query";
import { getPeople } from "../api/api";

const People = () => {
  const { data, status } = useQuery("people", getPeople);
  console.log({ data, status });
  return (
    <div>
      {status === "loading" && <div>Loading....</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ul>
          {data?.results?.map((item) => {
            return <li key={item.name}>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default People;
