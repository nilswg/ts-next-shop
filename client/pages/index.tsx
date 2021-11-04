import { InferGetStaticPropsType } from "next";
import { API_URL } from "../utils/config";
import { catchError } from "../utils/catchError";

const Home = ({ pong }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1> PING/PONG Test</h1>
      <h3>If test success, you will see pong below 👇</h3>
      {pong ? <h2>{pong.value}</h2> : <h2>PING... </h2>}
    </>
  );
};

export default Home;

interface PongData {
  value: string;
}

export async function getStaticProps() {
  let pong: PongData;

  try {
    let res = await (
      await fetch(`${API_URL}/ping`, {
        method: "GET",
      })
    ).json();

    pong = res.data;
  } catch (error) {
    throw new Error(catchError(error));
  }

  return {
    props: {
      pong,
    },
    revalidate: 60, //page re-generation after sencods
  };
}
