"use client";
import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import logo from "@public/logo.png";
import { client } from "../client";
import Navbar from "../components/Navbar";
import { useActiveAccount } from "thirdweb/react";

export default function Subscription() {
  // const account = useActiveAccount();
  return (
    <div>
      <Navbar />
      <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
        <div className="py-20">
          <Header />
          <div className="flex justify-center mb-20">
            <ConnectButton
              client={client}
              appMetadata={{
                name: "Example App",
                url: "https://example.com",
              }}
            />
          </div>
          <ArticleCard />
        </div>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={logo}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          height: "250px",
          width: "350px",
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        Welcome <span className="text-zinc-300 inline-block mx-1">to</span>
        <br /><span className="inline-block -skew-x-6 text-blue-500">NFTunes</span>
      </h1>
    </header>
  );
}

function ArticleCard() {
  return (
    <div className="text-center flex flex-col border border-zinc-800 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700 p-6">
      <a href="">
        <h1 className="text-lg font-semibold mb-2 p-6">NFTunes Premium</h1>

        <h2 className="text-sm text-zinc-400">Subscribe to NFTunes Premium</h2>
        <br />
        <h1 className="text-lg font-semibold mb-2">5$/month</h1>
      </a>
    </div>
  );
}
