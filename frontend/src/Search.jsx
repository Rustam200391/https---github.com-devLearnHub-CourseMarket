import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  return (
    <div className="App">
      <p>Value of uid: {uid}</p>
      <p>Value of token: {token}</p>
    </div>
  );
};

export default Search;
