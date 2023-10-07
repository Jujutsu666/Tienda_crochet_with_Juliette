import Image from "next/image";
import myImage from "public/images/catalog2.png";
import Cow1 from "public/images/sale/cow1.jpg";
import Cow2 from "public/images/sale/cow2.jpg";
import Bag1 from "public/images/sale/bag1.jpg";
import Bag2 from "public/images/sale/bag2.jpg";
import Hat1 from "public/images/sale/hat1.jpg";
import Hat2 from "public/images/sale/hat2.jpg";
import KeyChain1 from "public/images/sale/keychain1.jpg";
import KeyChain2 from "public/images/sale/keychain2.jpg";
import heartFull from "public/images/heart1.png";
import shop from "public/images/shop.png";

export default function Catalog() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="min-h-[calc(100vh-96px)]  w-full flex flex-col items-center">
        <div>
          <Image
            className="w-[50%] mx-auto mt-[50px] mb-[50px]"
            src={myImage}
            alt="Picture of the author"
          />
        </div>

        <div className="flex items-center flex-wrap justify-around ">
          <div className=" basis-3/12 min-w-[200px] mb-[50px] p-2.5">
            <Image
              className="w-[200px] "
              src={Cow1}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              Fluffy Cow
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$50.00</p>
              <a
                href="#"
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
              className="w-[200px] "
              src={Cow2}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              Fluffy Cow
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$50.00</p>
              <a
                href="#"
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
              src={Bag1}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              Ocean bag
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$50.00</p>
              <a
                href="#"
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
              className="w-[167px] "
              src={Bag2}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              Ocean bag
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px]  mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$50.00</p>
              <a
                href="#"
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
              src={Hat1}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              Ocean hat
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px]  mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$50.00</p>
              <a
                href="#"
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
              src={Hat2}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              Kitty hat
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px]  mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$50.00</p>
              <a
                href="#"
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
              src={KeyChain1}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              Shrimp keychain
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px]  mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$50.00</p>
              <a
                href="#"
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
              className="w-[165px] h-[250px]"
              src={KeyChain2}
              alt="Picture of the author"
            />
            <h4 className="font-bold uppercase tracking-[1px] font-normal my-0 mt-1">
              Fish keychain
            </h4>
            <div className="flex mt-1">
              <Image className="w-[10px]  mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
              <Image className="w-[10px] mr-1" src={heartFull} alt="rating" />
            </div>
            <div className="flex items-center justify-between ">
              <p className="mt-1">$50.00</p>
              <a
                href="#"
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
