import DisplayCv from "@/components/displayCv";
import FormCv from "@/components/formCv";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-[#0C0D0E]  text-white h-screen gap-4 p-4">
      <DisplayCv />

      <FormCv />
    </main>
  );
}
