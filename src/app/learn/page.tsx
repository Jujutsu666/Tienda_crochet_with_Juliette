import Image from "next/image";
import myImage from "public/images/learn.png";
import "./style.css"

export default function Learn() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="min-h-[calc(100vh-96px)]  w-full flex flex-col items-center">
        <div className="pt-[70px] pb-[20px] ">
          <h1>LEARN TO CROCHET</h1>
        </div>

        <div className="pt-[50px] pb-[50px] text-left">
          <h2>Introduction to Crochet</h2>
          <ul>
            <li>
              <a href="https://youtu.be/GILITf4wsFQ">Crochet vs knitting</a>
            </li>
            <li>
              <a href="https://youtu.be/zsUbW2d2Bfg">
                Crochet tools and materials
              </a>
            </li>
            <li>Crochet terminology (US vs. UK terms)</li>
            <li>Common crochet abbreviations</li>
            <li>
              <a href="https://youtu.be/sHfUsoElVDk">Terms you should know</a>
            </li>
          </ul>

          <h2>Crochet Hooks</h2>
          <ul>
            <li>
              <a href="https://youtu.be/_cXRPUbV6Ro">
                Types of crochet hooks, sizes and how to read them
              </a>
            </li>
            <li>
              <a href="https://youtu.be/95uMoNa_5Sw">
                Selecting the right hook for your yarn and project
              </a>
            </li>
            <li>
              <a href="https://youtu.be/yC2XpaXo48A">
                How to hold a crochet hook for comfortable crocheting
              </a>
            </li>
            <li>
              <a href="https://youtu.be/YvdfdkaL1Qw">
                Another video on how to hold a crochet hook
              </a>
            </li>
          </ul>

          <h2>Yarn</h2>
          <ul>
            <li>
              <a href="https://youtu.be/QKryW4HFiY0">Yarn weight categories</a>
            </li>
            <li>
              <a href="https://youtu.be/cRuAe6DkDFg">Yarn fiber types</a>
            </li>
            <li>
              <a href="https://youtu.be/z-wMuHHT7rw">How to read yarn labels</a>
            </li>
            <li>
              <a href="https://youtu.be/SBh1xYOrOFw">
                Yarn substitutions and color selection
              </a>
            </li>
            <li>
              <a href="https://youtu.be/5xzjp72afow">
                Another video on yarn substitutions and color selection
              </a>
            </li>
            <li>
              <a href="https://youtu.be/yyMwEdE-DtU">
                Techniques for working with specialty yarns
              </a>
            </li>
            <li>
              <a href="https://youtu.be/OEjrupJDVXk">
                Another video on techniques for working with specialty yarns
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
