import instagram from "../../assets/social links img/Instagram.png";
import facebook from "../../assets/social links img/Facebook.png";
import twitter from "../../assets/social links img/Twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white pt-30 ">
      <div className="grid text-center grid-cols-2 gap-8 lg:grid-cols-5 justify-between items-center container mx-auto mb-20">
        <div className="space-y-4">
          <h5 className="font-extrabold text-3xl">DigiTools</h5>
          <p className="text-white/50">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>

        <div className="space-y-4">
          <h6 className="text-xl">Product</h6>
          <ul className="text-white/50 space-y-4">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h6 className="text-xl ">Company</h6>
          <ul className="text-white/50 space-y-4">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h6 className="text-xl">Resources</h6>
          <ul className="text-white/50 space-y-4">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h6 className="text-xl">Social Links</h6>
          <div className="flex gap-3 justify-center lg:justify-start">
            <a href="">
              <img src={instagram} alt="" />
            </a>

            <a href="">
              <img src={facebook} alt="" />
            </a>

            <a href="">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto  border-t border-white/50 py-8 flex justify-between">
        <p>&copy; 2026 Digitools. All rights reserved.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <a href="">Privacy Policy</a>
          <a href=""> Terms of Service</a>
          <a href=""> Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
