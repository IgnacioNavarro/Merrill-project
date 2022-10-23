import { AnimatePresence, motion, Variants } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import BlueButton from "../../../components/BlueButton";
import ButtonAction from "../../../components/ButtonAction";
import ButtonSand from "../../../components/ButtonSand";
import Drawer from "../../../components/Drawer";
import LayoutSub from "../../../components/LayoutSub";
import NftPart from "../../../components/NftPart";
import TopBar from "../../../components/TopBar";
import WarningText from "../../../components/WarningText";
// import fonts

const variants: Variants = {
  // hidden: { opacity: 0.2, y: 0 },
  initial: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  hidden: { opacity: 1, y: 400, transition: { duration: 0.3, ease: "easeIn" } },
};

const variantsnftNoFull: Variants = {
  initial: { scale: 1 },
  hidden: { scale: 0.9 },
};

const variantsNftFull: Variants = {
  initial: { scale: 1 },
  hidden: { scale: 1.2 },
};

const Home: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <LayoutSub className="relative">
      <TopBar title="Lebron Experience" />
      <div className="p-5 pt-0">
        <div className="w-full flex justify-end mb-5  h-8" />
        <AnimatePresence mode="wait">
          <motion.div
            variants={variantsnftNoFull}
            key={3}
            // transition={{ duration: 2 }}
            initial="hidden"
            animate="initial"
            exit="hidden"
            className="absolute top-32 left-20 right-20 -z-10"
          >
            {/* <NftFull className="h-full" /> */}
            <NftPart />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={`h-40 w-full -z-20`}></div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="initial"
        exit="hidden"
        // animate={isFull ? "hidden" : "initial"}
      >
        <div className="bg-gray-200 text-xs h-14 w-full flex justify-between items-center transition-colors">
          <div
            onClick={() => setCurrentTab(0)}
            className={`transition-colors pt-5 cursor-pointer w-full h-full hover:bg-gray-300 flex justify-center align-center border-b-[1px] ${
              currentTab === 0
                ? "border-core-blue font-medium text-core-blue"
                : "border-gray-400"
            }`}
          >
            Ventajas permanentes
          </div>
          <div
            onClick={() => setCurrentTab(1)}
            className={`transition-colors pt-5 cursor-pointer w-full h-full flex hover:bg-gray-300 justify-center align-center border-b-[1px] ${
              currentTab === 1
                ? "border-core-blue font-medium text-core-blue"
                : "border-gray-400"
            }`}
          >
            Un solo uso
          </div>
        </div>
        <div className="p-8 px-8 pb-24 flex flex-col justify-between bg-gray-200 text-gray-600 text-sm">
          <div>
            {currentTab === 0 && (
              <>
                <ul className=" pl-3">
                  <li>
                    Acceso prioritario al Lounge VIP del estadio Palau Blaugrana
                  </li>
                  <li>Descuento del 20% al comprar 2 entradas o más</li>
                  <li>Descuento del 40% al comprar 5 entradas o más</li>
                </ul>
                <p className="mt-10 mb-3 font-medium uppercase">
                  Cómo canjearlo
                </p>
                <p>Presenta el código en el comercio.</p>
              </>
            )}

            {currentTab === 1 && (
              <>
                <ul className="pl-3">
                  <li>Canjeable por 2 entradas VIP para el estadio Palau Blaugrana</li>
                  </ul>
                <p className="mt-10 mb-3 font-medium uppercase">
                  Cómo canjearlo
                </p>
                <p>Presenta el código en el comercio.</p>
              </>
            )}
          </div>

          <div>
            {currentTab === 1 && (
              <WarningText className="mt-10">
                Una vez canjees este beneficio, ya no podrás transferir el
                activo y perderás las ventajas permanentes.
              </WarningText>
            )}
            <div className="flex justify-center w-full mt-10">
              {currentTab === 0 ? (
                <ButtonAction onClick={() => router.push('/nft/'+id+'/sign')}>
                  <img className="h-5 mr-2" src="/component/icon-qr.svg" />
                  Mostrar código
                </ButtonAction>
              ) : (
                <ButtonSand onClick={() => router.push('/nft/'+id+'/confirm')}>
                  <img className="h-5 mr-2" src="/component/icon-qr.svg" />
                  Mostrar código
                </ButtonSand>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </LayoutSub>
  );
};

export default Home;
