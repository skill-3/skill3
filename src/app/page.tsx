"use client";
import Image from "next/image";
import { useState } from "react";
import SparkleIcon from "./component/SparkleIcon";
import useWallet from "@/lib/useWallet";
import useStorage from "@/lib/useStorage";
import Typewriter from "./component/Typewriter";

export default function Home() {
  const {
    wallet,
    isLoading,
    isError,
    address,
    setAddress,
    createNewWallet,
    signInWallet,
  } = useWallet();
  const { removeItem } = useStorage();
  const [newUsername, setNewUsername] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [ic, setIc] = useState<string>("");

  const [username, setUsername] = useState<string>("");
  const [addr, setAddr] = useState<string>("");

  const handleCreateAccount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Boolean(newUsername) && Boolean(newEmail) && Boolean(ic)) {
      console.log("creating account");
      createNewWallet(newUsername, newEmail, ic);
    } else {
      console.log("nope");
    }
  };

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Boolean(username) && Boolean(addr)) {
      console.log("signing in");
      signInWallet(username, addr);
    } else {
      console.log("nope");
    }
  };

  const handleSignOut = () => {
    removeItem("currentAddr");
  };

  return (
    <main className="w-full h-full grid grid-cols-2 place-content-center max-w-7xl">
      <div className="flex flex-col space-y-4 text-center justify-center">
        <h1 className="font-display text-7xl">Skill³</h1>
        <p className="text-xl font-light">
          You are valid, and so are your skills!
        </p>
      </div>
      <div className="flex- flex-col space-y-4 p-8">
        {address ? (
          <div>
            <h1 className="text-2xl font-bold">Logged in</h1>
            <p className="text-xl">{wallet && wallet.name}</p>
            <p className="text-md">{wallet && wallet.address}</p>
            <button
              className="bg-white px-4 py-2 w-max"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col space-y-2 p-4 bg-cyan-400/50 w-full rounded-lg text-cyan-700">
              <SparkleIcon className="h-8 w-8" />
              <p className="text-lg font-light">
                <Typewriter
                  text="Hey there! Start your journey with a new account, or continue
                using your existing one."
                  onFinished={() => {}}
                />
              </p>
            </div>
            <h1 className="text-2xl font-bold">Create Account</h1>
            <form
              className="flex flex-col space-y-3"
              onSubmit={handleCreateAccount}
            >
              <div className="flex flex-col space-y-1">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="ic">IC Number</label>
                <input
                  type="text"
                  name="ic"
                  value={ic}
                  onChange={(e) => setIc(e.target.value)}
                />
              </div>
              <input type="submit" className="w-max px-4 py-2 bg-white" />
            </form>
            <hr className="border-black/20" />
            <h1 className="text-2xl font-bold">Sign In</h1>
            <form className="flex flex-col space-y-3" onSubmit={handleSignIn}>
              <div className="flex flex-col space-y-1">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="addr">Wallet address</label>
                <input
                  type="text"
                  name="addr"
                  value={addr}
                  onChange={(e) => setAddr(e.target.value)}
                />
              </div>
              <input type="submit" className="w-max px-4 py-2 bg-white" />
            </form>
          </>
        )}
      </div>
    </main>
  );
}
