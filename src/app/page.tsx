"use client";
import DisplayCv from "@/components/displayCv";
import FormCv from "@/components/formCv";
import { useState } from "react";

interface CvData {
  fullName: string;
  skills: string;
  registerDate: number | null;
  avatarUrl: string | null;
  fileName: string;
  country: string;
}

const dataObj: CvData = {
  fullName: "foshati",
  skills: "html css",
  registerDate: 0,
  avatarUrl: null,
  fileName: "rc",
  country: "usa",
};

export default function Home() {
  const [data, setData] = useState<CvData>(dataObj);
  return (
    <main className="flex flex-col justify-center items-center bg-[#0C0D0E] text-white h-screen gap-4 p-4">
      <DisplayCv data={data} setData={setData} />
      <FormCv data={data} setData={setData} />
    </main>
  );
}
