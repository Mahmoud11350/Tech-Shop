import Image from "next/image";
import heroImg from "@/assets/images/hero-1.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-300px)] lg:h-[calc(100vh-80px)] bg-[#F3F3F3]">
      <Image src={heroImg} alt="Hero Img" fill className="absolute" />
      <div className="container ">
        <div className=" absolute top-1/2 -translate-y-1/2  text-center md:text-left">
          <h1 className=" text-4xl md:text-5xl lg:text-7xl text-primary font-bold">
            Unleash Innovation <br /> in Every Byte.
          </h1>
          <p className="my-3 text-xl">Explore a World of Cutting-Edge Tech</p>
          <Link href={"/products"} className="btn btn-primary pointer text-lg">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
