import MultiGame from '../components/multiGame'
import Head from 'next/head'
import { useRouter } from 'next/router'

const SinglePlayer = () => {
  const router = useRouter()
  const { slug, rounds, name } = router.query
  return (
    <>
      <Head>
        <title>Rockout</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='bg-white text-black'>
          <MultiGame />
        </div>
      </main>
    </>
  )
}

export default SinglePlayer