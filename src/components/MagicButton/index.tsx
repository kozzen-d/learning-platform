"use client";

import clsx from "clsx";
import { useState } from "react";

export default function MagicButton() {
  const [toggle, setToggle] = useState(true);

  return (
    <button
      type="button"
      onClick={() => setToggle((prev) => !prev)}
      className={clsx(
        "m-2 px-4 py-2 rounded-2xl",
        toggle ? "bg-amber-100" : "bg-green-100",
      )}
    >
      Change color
    </button>
  );
}