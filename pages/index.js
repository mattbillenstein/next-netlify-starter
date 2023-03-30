import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  console.log("Rendered home");
  console.log("Rendered home2");

  const url = 'https://hexcloud.co/v1/flow/fR5wxrP7ttnb/stream'
  const now = new Date();
  var data = {"account_id": "12346", "site_id": "site1", "deploy_id": "depid1", "request_id": "req1", "timestamp": now.toISOString()}

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => console.log(JSON.stringify(response)))

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
