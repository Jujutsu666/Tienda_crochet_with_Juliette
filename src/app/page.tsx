import Image from "next/image";
import myImage from "public/images/logocwj.png";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="min-h-[calc(100vh-96px)] bg-black text-white w-full flex justify-center items-center text-8xl">
        <div>
          <Image
            className="w-[500%] "
            src={myImage}
            alt="Picture of the author"
          />
        </div>
      </section>
    </main>
  );
}

