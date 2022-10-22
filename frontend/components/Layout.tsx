import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-mesh-blue bg-center">
      <Head>
        <title>Tokenización Aqua</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-auto md:max-w-[430px] md:max-h-[630px] w-full h-full bg-navy border-2 border-navy overflow-y-scroll">
        {children}
      </main>
    </div>
  );
}
