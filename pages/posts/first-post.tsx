import Layout from '@/components/layout'
import Head from 'next/head'
import Link from 'next/link'
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first-blog</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">back to home</Link>
      </h2>
    </Layout>
  )
}
