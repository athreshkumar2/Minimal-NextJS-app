import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Navbar />
      <h1>Hello This is About JS</h1>
      <Image
        src="https://source.unsplash.com/1600x900/?nature,water"
        width="800"
        height="400"
      ></Image>
    </>
  );
};

export default About;
