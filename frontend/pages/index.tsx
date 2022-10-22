import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
// import fonts

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-gray-100 font-medium">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <div className="p-5">
        <Card address="0x1234567890" />
      </div>

      <p className="text-gray-100">Get started by editing </p>
    </Layout>
  );
};

export default Home;
