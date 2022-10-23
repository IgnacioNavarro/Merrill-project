import type { NextPage } from "next";
import BlueButton from "../components/BlueButton";
import Card from "../components/Card";
import Drawer from "../components/Drawer";
import LayoutSub from "../components/LayoutSub";
import NftCard from "../components/NftCard";
import TopBar from "../components/TopBar";
// import fonts

const Home: NextPage = () => {
  return (
    <LayoutSub>
      <TopBar title="Cartera Tokenizada" />
      <div className="p-5 pt-0">
        <div className="w-full flex justify-end mb-5">
          <BlueButton text="Ver dirección">
            <img className="h-full" src="/component/icon-wallet.svg" />
          </BlueButton>
        </div>
        <Card address="0x1234567890" />
      </div>

      <Drawer>
        <div className="flex flex-col cursor-pointer font-medium text-white w-24 text-center text-xs break-all">
          <img className="h-5 mb-2" src="/component/icon-search.svg" />
          <p>Buscar movi&shy;mie&shy;ntos</p>
        </div>

        <div className="ml-5 flex flex-col cursor-pointer font-medium text-white w-24 text-center text-xs break-all">
          <img className="h-5 mb-2" src="/component/icon-request.svg" />
          <p>Recibir activos</p>
        </div>

        <div className="ml-5 flex flex-col cursor-pointer font-medium text-white w-24 text-center text-xs break-all">
          <img className="h-5 mb-2" src="/component/icon-transfer.svg" />
          <p>Transferencias</p>
        </div>
      </Drawer>
      <div className="p-5 pb-20 bg-gray-200">
        <NftCard
          name="Lebron Experience"
          shortDesc="Acceso prioritario"
          transferable
          id={1}
        />
        <h2 className="select-none cursor-pointer flex justify-center text-sm mt-10 font-medium text-medium-blue">
          Ver activos ya utilizados
        </h2>
      </div>
    </LayoutSub>
  );
};

export default Home;
