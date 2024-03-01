import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-purple-600 text-transparent bg-clip-text hover:cursor-pointer"
    >
      Build form
    </Link>
  );
}
