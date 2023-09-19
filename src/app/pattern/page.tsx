import Image from "next/image";
import MyImage from "public/images/pattern5.png";
import bag3 from "public/images/sale/bag3.jpg";
import bag4 from "public/images/sale/bag4.jpg";
import bag5 from "public/images/sale/bag5.jpg";
import bag6 from "public/images/sale/bag6.jpg";
import bunny1 from "public/images/sale/bunny1.jpg";
import bunny3 from "public/images/sale/bunny3.jpg";
import lavender2 from "public/images/sale/lavender2.jpg";
import lavender3 from "public/images/sale/lavender3.jpg";

export default function Pattern() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="min-h-[calc(100vh-96px)]  w-full flex flex-col items-center ">
        <div className="">
          <Image
            className="w-[50%] mx-auto mt-[50px] mb-[50px]"
            src={MyImage}
            alt="Picture of the author"
          />
        </div>

        <div className="flex justify-center items-center space-x-4 ">
          <div className="flex flex-col items-center">
            <Image
              className="w-[200px] m-4"
              src={bag3}
              alt="Picture of the author"
            />
            <h3>Bag</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-[200px] m-4 h-[268px]"
              src={bag4}
              alt="Picture of the author"
            />
            <h3>Bag</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-[200px] m-4 h-[268px]"
              src={bag5}
              alt="Picture of the author"
            /><h3>Bag</h3>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              className="w-[200px] m-4 h-[268px]"
              src={bag6}
              alt="Picture of the author"
            />
            <h3>Bag</h3>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-[50px]">
          <div className="flex flex-col items-center">
            <Image
              className="w-[200px] m-4 h-[240px]"
              src={bunny1}
              alt="Picture of the author"
            />
            <h3>Bunny</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-[200px] m-4 h-[240px]"
              src={bunny3}
              alt="Picture of the author"
            />
            <h3>Bunny</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-[200px] m-4 h-[240px]"
              src={lavender3}
              alt="Picture of the author"
            />
            <h3>Lavender</h3>
          </div>

          <div className="flex flex-col items-center">
            <Image
              className="w-[200px] m-4 h-[240px]"
              src={lavender2}
              alt="Picture of the author"
            />
            <h3>Lavender</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
