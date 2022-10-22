import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const element = useRef<HTMLElement>(null);
  useEffect(() => {
    setTimeout(() => {
      element.current?.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  }, [router.route]);

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-mesh-blue bg-center">
      <Head>
        <title>Tokenización Aqua</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        ref={element}
        className="m-auto md:max-w-[430px] md:max-h-[880px]  w-full h-full bg-navy border-2 border-navy overflow-y-scroll relative"
      >
        {children}
      </main>
    </div>
  );
}
