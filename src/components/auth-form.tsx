"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { Icons } from "./icons";

const socialLoginProviders: { GITHUB: string } = {
  GITHUB: "github",
};

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;

  // this is callback url after login
  const callbackUrl = `${baseAPIUrl}/dashboard`;

  const login = async (provider: string) => {
    setIsLoading(true);
    await signIn(provider, { callbackUrl });
    setIsLoading(false);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const userName = event.target.username.value;
    const password = event.target.password.value;
    console.log(userName, password);
  };

  return (
    <>
      <div className="w-5/3 bg-white p-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              required
            />
          </div>

          <button type="submit" className="bg-blue-700 text-white mt-6 px-2">
            Login
          </button>
        </form>
      </div>

      {/* <Button
      className="flex flex-row gap-2"
      onClick={() => login(socialLoginProviders.GITHUB)}
    >
      {isLoading ? (
        <Icons.spinner size={20} className="animate-spin" />
      ) : (
        <GitHubLogoIcon width={20} height={20} />
      )}
      Sign in with GitHub
    </Button> */}
    </>
  );
}
