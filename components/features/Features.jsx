import paymentIcon from "@/assets/images/icons/payment.svg";
import purchasesIcon from "@/assets/images/icons/purchases.svg";
import shippingIcon from "@/assets/images/icons/shipping.svg";
import supportIcon from "@/assets/images/icons/support.svg";
import Image from "next/image";
const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 container">
      <div>
        <div>
          <Image src={shippingIcon} className="font-bold w-12 my-4" />
          <h3 className=" text-2xl font-bold">Free Shipping</h3>
          <p>Free shipping for order above $150</p>
        </div>
        <div>
          <Image src={supportIcon} className="font-bold w-12 my-4" />
          <h3 className=" text-2xl font-bold">Online Support</h3>
          <p>24 hours a day, 7 days a week</p>
        </div>
      </div>
      <div>
        <div>
          <Image src={purchasesIcon} className="font-bold w-12 my-4" />
          <h3 className=" text-2xl font-bold">Money Guarantee</h3>
          <p>Within 30 days for an exchange</p>
        </div>
        <div>
          <Image src={paymentIcon} className="font-bold w-12 my-4" />
          <h3 className=" text-2xl font-bold">Flexible Payment</h3>
          <p>Pay with multiple credit cards</p>
        </div>
      </div>
    </section>
  );
};
export default Features;
