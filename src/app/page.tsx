"use client";
import DisplayCv from "@/components/displayCv";
import FormCv from "@/components/formCv";
import { useState } from "react";

const dataObj = {};

export default function Home() {
  const [data, setData] = useState(dataObj);

  return (
    <main className="flex flex-col justify-center items-center bg-[#0C0D0E]  text-white h-screen gap-4 p-4">
      <DisplayCv />

      <FormCv />
    </main>
  );
}
