import React, { useState } from "react";
import classnames from "classnames";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [number, setNumber] = useState(0);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setNumber(number - 1)}
      >
        -
      </button>
      <h2>{number}</h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setNumber(number + 1)}
      >
        +
      </button>
    </>
  );
}
