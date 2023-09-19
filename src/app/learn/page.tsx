import Image from "next/image";
import myImage from "public/images/learn.png";

export default function Learn() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="min-h-[calc(100vh-96px)]  w-full flex flex-col items-center">
        <div>
          <Image
            className="w-[100%] mx-auto mt-[50px] mb-[20px]"
            src={myImage}
            alt="Picture of the author"
          />
        </div>

        <div>
  
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aAxGTnVNJiE?si=eOli8BFnpCcbmvSx"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
