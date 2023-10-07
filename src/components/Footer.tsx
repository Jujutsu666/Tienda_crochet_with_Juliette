/*export default function Footer() {
  return (
    <footer className="bg-black w-full text-white">
      <div className=" text-gray-800  flex justify-center items-center  space-x-4 ">
        <p className="hover:text-white">Author: Juliette Redois-Guillard</p>
        <a className="hover:text-white" href="mailto:jr.traduction1@gmail.com">
          crochetwithjuliette@gmail.com
        </a>
      
        <p className=" hover:text-white ">© Copy Right 2023</p>
      </div>
    </footer>
  );
}*/

import Image from "next/image";
import whatsapp from "public/images/whatsapp.png";
import instagram from "public/images/instagram.png";
export default function Footer() {
  return (
    <footer className="box-border m-0 p-0 bg-[#111]">
      <div className="w-full pt-[70px] pb-5 px-[30px]">
        <div className="flex justify-center ">
          <a
            className="no-underline bg-[white] m-5 p-2.5 rounded-[50%] transition-[background-color] duration-[0.5s] hover:bg-pink-500 opacity-90"
            href="https://instagram.com/crochette_with_juliette?igshid=OGQ5ZDc2ODk2ZA=="
          >
            <Image
              src={instagram}
              alt="instagram"
              className="w-[30px] text-[black] opacity-70 m-0.5"
            />
          </a>
          <a
            className="no-underline bg-[white] m-5 p-2.5 rounded-[50%] transition-[background-color] duration-[0.5s] hover:bg-green-500 opacity-90"
            href="tel:+52613-139-3743"
          >
            <Image
              className="w-[30px] text-[black] opacity-70 m-0.5"
              src={whatsapp}
              alt="whatsapp"
            />
          </a>
        </div>
        <div className="mx-0 my-[30px]">
          <ul className="flex justify-center list-[none] ">
            <li>
              <a
                href=""
                className="text-[white] no-underline text-[1.3em] opacity-70 transition-[0.4s] m-5 hover:opacity-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-[white] no-underline text-[1.3em] opacity-70 transition-[0.4s] m-5 hover:opacity-100"
                href="/catalog"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                className="text-[white] no-underline text-[1.3em] opacity-70 transition-[0.4s] m-5 hover:opacity-100"
                href="/pattern"
              >
                Pattern
              </a>
            </li>
            <li>
              <a
                className="text-[white] no-underline text-[1.3em] opacity-70 transition-[0.4s] m-5 hover:opacity-100"
                href="/about-us"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="text-[white] no-underline text-[1.3em] opacity-70 transition-[0.4s] m-5 hover:opacity-100"
                href="/learn"
              >
                Learn
              </a>
            </li>
            <li>
              <a
                className="text-[white] no-underline text-[1.3em] opacity-70 transition-[0.4s] m-5 hover:opacity-100"
                href="mailto:jr.traduction1@gmail.com"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" bg-black text-center p-5">
        <p className="text-[white]">
          Copyright &copy;2023; Designed by
          <span className="opacity-70 uppercase tracking-[1px] font-normal mx-[5px] my-0">
            Juliette
          </span>
        </p>
      </div>
    </footer>
  );
}
