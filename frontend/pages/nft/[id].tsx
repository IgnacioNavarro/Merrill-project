import type { NextPage } from "next";
import { useRouter } from "next/router";
import BlueButton from "../../components/BlueButton";
import ButtonAction from "../../components/ButtonAction";
import Card from "../../components/Card";
import Drawer from "../../components/Drawer";
import Layout from "../../components/Layout";
import LayoutSub from "../../components/LayoutSub";
import NftCard from "../../components/NftCard";
import NftFull from "../../components/NftFull";
import NftPart from "../../components/NftPart";
import TopBar from "../../components/TopBar";
import WarningText from "../../components/WarningText";
// import fonts

const Home: NextPage = () => {

  const router = useRouter();

  return (
    <LayoutSub className="relative">
      <TopBar title="Cartera Tokenizada"/>
      <div className="p-5 pt-0">
        <div className="w-full flex justify-end mb-5">
          <BlueButton text="Ver a tamaño completo">
            <img className="h-full" src="/component/icon-zoomin.svg" />
          </BlueButton>
        </div>
        <div className="h-60 w-full -z-20"></div>
        <NftPart className="absolute top-32 left-20 right-20 -z-10" />
      </div>

      <Drawer>
        <div className="flex flex-col cursor-pointer font-medium text-white w-24 text-center text-xs break-all">
          <img className="h-5 mb-2" src="/component/icon-gift.svg" />
          <p>
            Canjear
            <br />
            beneficio
          </p>
        </div>

        <div className="ml-24 flex flex-col cursor-pointer font-medium text-white w-24 text-center text-xs break-all">
          <img className="h-5 mb-2" src="/component/icon-transfer-to.svg" />
          <p>Transferir</p>
        </div>
      </Drawer>
      <div className="p-8 px-8 pb-20 bg-gray-200 text-gray-600 text-sm">
        <p>
          Este activo te proporciona las siguientes ventajas permanentes por
          tenerlo en propiedad:
        </p>
        <ul className="font-medium mt-5 pl-3">
          <li>Acceso prioritario al Lounge VIP del estadio Palau Blaugrana</li>
          <li>Descuento del 20% al comprar 2 entradas o más</li>
          <li>Descuento del 40% al comprar 5 entradas o más</li>
        </ul>
        <p className="my-7 font-medium text-medium-blue text-center cursor-pointer">
          ¿Cómo funciona?
        </p>
        <p>Al consumir este activo, obtienes lo siguiente:</p>
        <ul className="font-medium mt-5 pl-3">
          <li>Canjeable por 2 entradas VIP para el estadio Palau Blaugrana</li>
        </ul>
        {/* <WarningText className="mt-20">
          Una vez canjees este beneficio, ya no podrás transferir el activo y
          perderás las ventajas permanentes.
        </WarningText> */}
        <div className="flex justify-center w-full mt-10">
          <ButtonAction>
            <img className="h-5 mr-2" src="/component/icon-gift.svg" />
            Canjear beneficio
          </ButtonAction>
        </div>
      </div>
    </LayoutSub>
  );
};

export default Home;
