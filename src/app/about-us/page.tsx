import Image from "next/image";
import myImage from "public/images/logoblack1.png";

export default function AboutUsPage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="min-h-[calc(100vh-96px)]  w-full flex flex-col items-center ">
        <div className="">
          <Image
            className="w-[200%] mx-auto mt-[50px] mb-[50px]"
            src={myImage}
            alt="Picture of the author"
          />
        </div>
        <div className="w-[60%] font-sans[vantura-thin]">
          <p className="">
            Crochet with Juliette was born out of a love for handmade creations.
            With a passion for crochet and an eye for detail, we curate a
            collection of exquisite crochet items to add warmth and charm to
            your life.
            <br /> <br />
            Discover handcrafted treasures, from cozy blankets and scarves to
            adorable amigurumi. Each piece is lovingly made by Juliette,
            inspired by the beauty of yarn and the joy of creating.
            <br />
            <br />
            We believe in the magic of handmade. Whether you are treating
            yourself or finding the perfect gift, our crochet items add a touch
            of warmth and uniqueness to any occasion.
            <br />
            <br />
            Thank you for supporting small businesses and embracing the art of
            crochet. Join us in celebrating the craft and the joy of handmade
            creations. <br />
            <br />
            Warm regards, <br />
            Juliette
          </p>
        </div>
      </section>
    </main>
  );
}

/* IMAGE */
