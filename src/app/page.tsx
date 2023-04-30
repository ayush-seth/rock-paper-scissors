import Image from "next/image";
import logo from "./logo.svg";

export default function Home() {
  return (
    <div>
      <div className="mx-auto flex justify-between mt-10 rounded-xl border-[3px] max-w-[650px] p-6 border-slate-500">
        <Image src={logo} alt="rock paper scissors" />
        <div className="bg-white rounded-lg flex flex-col items-center px-10 py-2">
          <span className="uppercase tracking-widest text-[hsl(229,64%,46%)]">
            Score
          </span>
          <span className="text-[hsl(229,25%,31%)] text-6xl font-bold">12</span>
        </div>
      </div>
    </div>
  );
}
