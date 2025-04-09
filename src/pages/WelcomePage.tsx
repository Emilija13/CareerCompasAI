import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const WelcomePage = () => {
  return (
    <div className="w-full  bg-linear-127 from-[#00A7B3] to-[#002847] ">
      <Header pageName="welcome"/>

      <div className="flex justify-center w-full">
        <div className="flex justify-center items-center relative w-[1280px] h-[600px] text-white inria-sans-regular mx-11 mt-7 bg-black text-center rounded-3xl">
          <img src="/src/images/compass.jpg" className=" h-auto" />
          <div className="absolute top-[120px] left-4">
            <div className="text-[64px]">Explore your future with</div>
            <div className="text-[96px] lalezar-regular">CareerCompas AI</div>
            <div className="text-2xl">
              Embark your journey of self-discovery and career exploration with
              CareerCompass AI, your personal guide to uncovering your ideal
              professional path.
            </div>
            <button className="mt-11 px-7 py-2 text-xl bg-[#0071C7] rounded-3xl">
              Get started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WelcomePage;
