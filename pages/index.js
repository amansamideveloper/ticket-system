import Head from 'next/head'
import { data } from '../data'
import Layout from '../components/Layout'
import Services from '../components/Services'
export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Online Bus ticket</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Services services={services} />

    </div>
  )
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: {
      services
    }
  }
}