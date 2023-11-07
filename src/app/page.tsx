import Image from "next/image";
import tb from "public/images/tb.png";
import ph from "public/images/ph.png";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="sm:min-h-[calc(100vh-96px)] min-h-[calc(100vh-96px)] bg-black text-white w-full flex justify-center items-center text-8xl ">
        <div className="flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 ">
          <Image
            className="hidden md:inline p-4 sm:p-8 md:p-12 lg:p-16  xl:p-20 2xl:p-24 "
            src={tb}
            alt="Picture of the author"
          />

          <Image
            className="md:hidden p-4 sm:p-8 md:p-12 lg:p-16  xl:p-20 2xl:p-24 "
            src={ph}
            alt="Picture of the author"
          />
        </div>
      </section>
    </main>
  );
}
