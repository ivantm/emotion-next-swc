import { Global } from "@emotion/react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Global
        styles={`:root {
  --background-color: rebeccapurple;
}`}
      />
      <Head>
        <title>Create Next App</title>
      </Head>
      This is a page with the Global component
      <br />
      <Link href="/noglobal">Go to a page with no Global component</Link>
    </div>
  );
}
