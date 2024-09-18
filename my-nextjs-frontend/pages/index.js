// pages/index.js
import Head from "next/head";
import ChatComponent from "../component/ChatComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Chat application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to the Chat App</h1>
        <ChatComponent />
      </main>
    </div>
  );
}
