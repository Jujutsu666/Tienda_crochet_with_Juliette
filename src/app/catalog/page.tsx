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

export default function Catalog() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="min-h-[calc(100vh-96px)]  w-full flex flex-col items-center">
        <div>
          <Image
            className="w-[50%] mx-auto mt-[50px] mb-[20px]"
            src={myImage}
            alt="Picture of the author"
          />
        </div>
        <div className="flex justify-center items-center space-x-4 ">
          <div className="flex flex-col items-center">
            <Image
              className="w-[200px] m-4"
              src={Cow1}
              alt="Picture of the author"
            />
            <h3>Fluffy Cow</h3>
          </div>
          <div className="flex flex-col items-center">
            {" "}
            <Image
              className="w-[200px] m-4"
              src={Cow2}
              alt="Picture of the author"
            />
            <h3>Fluffy Cow</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-[265px] m-4"
              src={Bag1}
              alt="Picture of the author"
            />
            <h3>Ocean bag</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-[167px] m-4"
              src={Bag2}
              alt="Picture of the author"
            />
            <h3>Ocean bag</h3>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-[50px]">
          <div className="flex flex-col items-center">
            <Image
              className="w-[195px] m-4 h-[250px]"
              src={Hat1}
              alt="Picture of the author"
            />
            <h3>Ocean hat</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-[200px] m-4 h-[250px]"
              src={Hat2}
              alt="Picture of the author"
            />
            <h3>Kitty hat </h3>
          </div>

          <div className="flex flex-col items-center">
            <Image
              className="w-[265px] m-4  h-[250px]"
              src={KeyChain1}
              alt="Picture of the author"
            />
            <h3>Shrimp keychain</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-[165px] m-4 h-[250px]"
              src={KeyChain2}
              alt="Picture of the author"
            />
            <h3>Fish keychain</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
