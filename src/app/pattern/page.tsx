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

import heartFull from "public/images/heart1.png";
import shop from "public/images/shop.png";

export default function Pattern() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="min-h-[calc(100vh-96px)]  w-full flex flex-col items-center">
        <div>
          <Image
            className="w-[50%] mx-auto mt-[50px] mb-[50px]"
            src={MyImage}
            alt="Picture of the author"
          />
        </div>

        <div className="flex items-center flex-wrap justify-around ">
          <div className=" basis-3/12 min-w-[200px] mb-[50px] p-2.5">
            <Image
              className="w-[200px] "
              src={bag3}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              BLUE RIBBON BAG
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$20.00</p>
              <a
                href="/shopCart"
                className=" inline-block no-underline transition-[background-color] duration-[0.5s]   hover:bg-[black] rounded-[50px] "
              >
                <Image
                  className="w-[40px] h-[40px] leading-[40px] pl-[8px] pr-[10px] pt-[9px] pb-[9px] hover:invert  "
                  src={shop}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>

          <div className="basis-3/12 min-w-[200px] mb-[50px] p-2.5">
            <Image
              className="w-[200px] h-[265px] "
              src={bag4}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              PINK RIBBON BAG
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$20.00</p>
              <a
                href="/shopCart"
                className=" inline-block no-underline transition-[background-color] duration-[0.5s]   hover:bg-[black] rounded-[50px] "
              >
                <Image
                  className="w-[40px] h-[40px] leading-[40px] pl-[8px] pr-[10px] pt-[9px] pb-[9px] hover:invert  "
                  src={shop}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>

          <div className="basis-3/12 min-w-[200px] mb-[50px] p-2.5">
            <Image
              className="w-[265px] h-[265px] "
              src={bag5}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              BLACK BAG
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$20.00</p>
              <a
                href="/shopCart"
                className=" inline-block no-underline transition-[background-color] duration-[0.5s]   hover:bg-[black] rounded-[50px] "
              >
                <Image
                  className="w-[40px] h-[40px] leading-[40px] pl-[8px] pr-[10px] pt-[9px] pb-[9px] hover:invert  "
                  src={shop}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>

          <div className="basis-3/12 min-w-[200px] mb-[50px] p-2.5">
            <Image
              className="w-[200px] h-[265px] "
              src={bag6}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              RIBBON BAG
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px]  mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$20.00</p>
              <a
                href="/shopCart"
                className=" inline-block no-underline transition-[background-color] duration-[0.5s]   hover:bg-[black] rounded-[50px] "
              >
                <Image
                  className="w-[40px] h-[40px] leading-[40px] pl-[8px] pr-[10px] pt-[9px] pb-[9px] hover:invert  "
                  src={shop}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-around">
          <div className="basis-3/12 min-w-[200px] mb-[50px] p-2.5">
            <Image
              className="w-[195px]  h-[250px]"
              src={bunny1}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              BLACK RABBIT
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px]  mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$20.00</p>
              <a
                href="/shopCart"
                className=" inline-block no-underline transition-[background-color] duration-[0.5s]   hover:bg-[black] rounded-[50px] "
              >
                <Image
                  className="w-[40px] h-[40px] leading-[40px] pl-[8px] pr-[10px] pt-[9px] pb-[9px] hover:invert  "
                  src={shop}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>
          <div className="basis-3/12 min-w-[200px] mb-[50px] p-2.5">
            <Image
              className="w-[200px]  h-[250px]"
              src={bunny3}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              CUTE RABBIT
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px]  mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$20.00</p>
              <a
                href="/shopCart"
                className=" inline-block no-underline transition-[background-color] duration-[0.5s]   hover:bg-[black] rounded-[50px] "
              >
                <Image
                  className="w-[40px] h-[40px] leading-[40px] pl-[8px] pr-[10px] pt-[9px] pb-[9px] hover:invert  "
                  src={shop}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>

          <div className="basis-3/12 min-w-[200px] mb-[50px] p-2.5">
            <Image
              className="w-[265px]  h-[250px]"
              src={lavender2}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              LAVENDER
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px]  mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$20.00</p>
              <a
                href="/shopCart"
                className=" inline-block no-underline transition-[background-color] duration-[0.5s]   hover:bg-[black] rounded-[50px] "
              >
                <Image
                  className="w-[40px] h-[40px] leading-[40px] pl-[8px] pr-[10px] pt-[9px] pb-[9px] hover:invert  "
                  src={shop}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>
          <div className="basis-3/12 min-w-[200px] mb-[50px] p-2.5">
            <Image
              className="w-[200px] h-[250px] "
              src={lavender3}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              LAVENDER
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px]  mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$20.00</p>
              <a
                href="/shopCart"
                className=" inline-block no-underline transition-[background-color] duration-[0.5s]   hover:bg-[black] rounded-[50px] "
              >
                <Image
                  className="w-[40px] h-[40px] leading-[40px] pl-[8px] pr-[10px] pt-[9px] pb-[9px] hover:invert  "
                  src={shop}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
