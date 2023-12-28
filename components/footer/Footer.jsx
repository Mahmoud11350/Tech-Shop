import facebookIcon from "@/assets/images/icons/facebook.svg";
import twitterIcon from "@/assets/images/icons/twitter.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-primary ">
      <div className="container grid grid-cols-3 text-white  py-8 justify-center">
        <div className="text-center">Mahmoud Salah</div>
        <div className="text-center">
          &#169; 2023 Tech Shop. All Rights are reserved
        </div>
        <div className="">
          <ul className="flex items-center gap-4 justify-center">
            <li className="flex items-center gap-4 text-center">
              <Image src={facebookIcon} />
              <a href="https://www.facebook.com/profile.php?id=100012477769227"></a>
            </li>
            <li className="flex items-center gap-4">
              <Image src={twitterIcon} />

              <a href="https://twitter.com/Mahmoud11350"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
