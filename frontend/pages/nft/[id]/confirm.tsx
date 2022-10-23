import { AnimatePresence, motion, Variants } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import BlueButton from "../../../components/BlueButton";
import ButtonAction from "../../../components/ButtonAction";
import ButtonSand from "../../../components/ButtonSand";
import ConfirmBar from "../../../components/ConfirmBar";
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
  return (
    <LayoutSub className="relative bg-sand-dark">
      <ConfirmBar title="Canjear" />
      <div className={`h-40 w-full -z-20 flex justify-center align-end`}>
        <img
          className="mt-10 h-20"
          src="/component/icon-chat-bubble-color.svg"
        />
      </div>
      <motion.div
        // animate={isFull ? "hidden" : "initial"}
      >
        <div className="p-8 px-8 h-[600px] pb-24 flex flex-col bg-gray-200 text-gray-600 text-sm">
          <div className="flex flex-col items-center justify-center text-center bg-sand-light p-5">
            <img className="h-5" src="/component/icon-info-warning.svg" />
            <span className="font-medium text-sand-dark">
              Atención: Una vez canjees este beneficio, ya no podrás transferir
              el activo y perderás las ventajas permanentes.
            </span>
          </div>
          <div className="flex justify-center">
            <ButtonAction onClick={() => router.push('/nft/'+id+'/sign')}className="mt-10">Canjear</ButtonAction>
          </div>
        </div>
      </motion.div>
    </LayoutSub>
  );
};

export default Home;
