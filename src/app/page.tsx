// Home.tsx
"use client";
import DisplayCv from "@/components/displayCv";
import FormCv from "@/components/formCv";
import React, { useState } from "react";
import { toPng } from "html-to-image";

interface CvData {
  fullName: string;
  skills: string;
  registerDate: Date | null;
  avatarUrl: string | null;
  fileName: string;
  country: string;
}

const dataObj: CvData = {
  fullName: "",
  skills: "",
  registerDate: null,
  avatarUrl: null,
  fileName: "",
  country: "",
};

export default function Home() {
  const [data, setData] = useState<CvData>(dataObj);

  const displayRef = React.useRef<HTMLDivElement>(null);
  const saveImage = async () => {
    const url = await toPng(displayRef.current, { pixelRatio: 1.5 });
    const fileName = "efi.png";

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
  };

  return (
    <main className="flex flex-col justify-center items-center bg-[#0C0D0E] text-white h-screen gap-4 p-4">
      <DisplayCv data={data} setData={setData} />
      <FormCv data={data} setData={setData} dataObj={dataObj} />
    </main>
  );
}
