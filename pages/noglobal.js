import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      No Global component on this page!
      <br />
      <Link href="/">Go to a page with a Global component</Link>
    </div>
  );
}
