import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getMongo } from '@/config/api.config';
import Header from '@/components/Header/Header';
import Slider from '@/components/Slider/Slider';
import Footer from '@/components/Footer/Footer';
interface HomePageProps {
  tests: any[];
  isConnected: boolean;
}

const Home = ({ isConnected, tests }: HomePageProps) => {
  console.log({ tests, isConnected });
  return (
    <div>
      <Head>
        <title>Кофе с урбечом</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await getMongo('/get');
    return {
      props: { res, isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default Home;
