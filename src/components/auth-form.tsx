"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

const providers: { CREDENTIALS: string } = {
  CREDENTIALS: "credentials",
};

export default function AuthForm() {
  const [isLoginError, setIsLoginError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;

  // this is callback url after login
  const callbackUrl = `${baseAPIUrl}/dashboard`;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    const userName = event.target.username.value;
    const password = event.target.password.value;
    // console.log(userName, password);

    const res = await signIn(providers.CREDENTIALS, {
      username: userName,
      password: password,
      redirect: false,
      // callbackUrl: callbackUrl,
    });

    setIsLoginError(res?.error);
    if (res?.error) {
      toast.error(res?.error);
    }

    if (!res?.error) {
      toast.success("Login success");
    }

    setIsLoading(false);
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
              placeholder="********"
              name="password"
              required
            />
          </div>
          {isLoginError && <p className="text-red-600 mt-2">{isLoginError}</p>}

          <button
            type="submit"
            className={`bg-blue-700 text-white mt-6 px-2`}
            disabled={isLoading ? true : false}
          >
            {isLoading ? "Logining..." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
