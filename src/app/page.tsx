// Home.tsx
"use client";
import DisplayCv from "@/components/displayCv";
import FormCv from "@/components/formCv";
import React, { useState, useRef } from "react";
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
  fileName: "Name Export",
  country: "",
};

export default function Home() {
  const [data, setData] = useState<CvData>(dataObj);
  const displayRef = useRef<HTMLDivElement>(null);

  const saveImage = async () => {
    if (displayRef.current) {
      try {
        const url = await toPng(displayRef.current, { pixelRatio: 1.5 });
        const fileName = `${data.fileName || "photo"}.png`;

        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
      } catch (error) {
        console.error("Error generating image:", error);
      }
    } else {
      console.error("DisplayCv ref is not available");
    }
  };

  return (
    <main className="flex flex-col justify-center items-center bg-[#0C0D0E] text-white h-screen gap-4 p-4">
      <DisplayCv ref={displayRef} data={data} setData={setData} />
      <FormCv
        data={data}
        setData={setData}
        dataObj={dataObj}
        saveImage={saveImage}
      />
    </main>
  );
}
