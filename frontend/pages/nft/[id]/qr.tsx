import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import LayoutSub from "../../../components/LayoutSub";
import TopBar from "../../../components/TopBar";
import BlueButton from "../../../components/BlueButton";
import NftFull from "../../../components/NftFull";
import NftPart from "../../../components/NftPart";
import NftQr from "../../../components/NftQr";
// import fonts

const Home: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <LayoutSub className="relative h-[calc(100vh-4px)] overflow-hidden">
      <TopBar title="Cartera Tokenizada" />
      <div className="p-5 pt-0">
        <div className="w-full flex justify-end mb-5">
          <BlueButton text="Volver" onClick={() => router.push('/nft/'+id)}>
            <img className="h-full" src={"/component/icon-zoomout.svg"} />
          </BlueButton>
        </div>
        <div className={`h-60 w-full -z-20 absolute top-0 h-0`}></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={3}
            className=""
          >
            {/* <NftFull className="h-full" */}
            {/* /> */}
            {/* <NftPart /> */}
            <NftQr />
            
          </motion.div>
        </AnimatePresence>
      </div>
    </LayoutSub>
  );
};

export default Home;
