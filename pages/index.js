import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <h1>Hello This is Index JS</h1>
      <Image src="/1.jpg" width="800" height="400"></Image>
    </>
  );
};

export default index;
