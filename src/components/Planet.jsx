import React, { useState } from "react";
import { useQuery } from "react-query";
import { getPlanets } from "../api/api";

const Planet = () => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    data: planets,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["projects", page],
    queryFn: () => getPlanets(page),
    keepPreviousData: true,
  });

  return (
    <div>
      <h1>Planet</h1>

      {(isLoading || isPreviousData) && <div>Loading ...</div>}
      {isError && <div>Error: {error.message}</div>}
      {!isPreviousData && isSuccess && (
        <div>
          <ul>
            {planets?.results?.map((planet) => {
              return <li key={planet.name}>{planet.name}</li>;
            })}
          </ul>
          <span>Current Page: {page}</span>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <button
            onClick={() => {
                setPage((old) => old + 1);
              }
            }
            disabled={page === 6}
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Planet;
