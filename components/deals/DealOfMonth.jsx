import monthDeal from "@/assets/images/month-deal.svg";
import Image from "next/image";
import DealsCounter from "./DealsCounter";

const DealOfMonth = () => {
  return (
    <section className="container">
      <h1 className="main-heading mb-4">Deals Of The Month </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div>
          <p className="text-lg pb-4 ">
            Get ready for a shopping experience like never before with our Deals
            of the Month! Every purchase comes with exclusive perks and offers,
            making this month a celebration of savvy choices and amazing deals.
            Don't miss out! 🎁🛒
          </p>
          <DealsCounter />
        </div>
        <div>
          <Image src={monthDeal} />
        </div>
      </div>
    </section>
  );
};
export default DealOfMonth;
