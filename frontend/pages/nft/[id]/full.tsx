import type { NextPage } from "next";
import BlueButton from "../../../components/BlueButton";
import LayoutSub from "../../../components/LayoutSub";
import NftFull from "../../../components/NftFull";
import TopBar from "../../../components/TopBar";
// import fonts

const Home: NextPage = () => {
  return (
    <LayoutSub className="relative">
      <TopBar title="Cartera Tokenizada" />
      <div className="p-5 pt-0">
        <div className="w-full flex justify-end mb-5">
          <BlueButton text="Volver">
            <img className="h-full" src="/component/icon-zoomout.svg" />
          </BlueButton>
        </div>
        <div className="h-60 w-full -z-20"></div>
        <NftFull className="absolute top-32 left-20 right-20 -z-10" />
      </div>
    </LayoutSub>
  );
};

export default Home;
