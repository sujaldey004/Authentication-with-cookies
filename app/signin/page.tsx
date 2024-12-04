"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";


export default function () {
    const router = useRouter();
    return <div className="flex justify-center h-screen items-center">
        <div className="w-1/4 flex flex-col">
            <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-col">
                    Email
                    <input type="text" placeholder="samAsher@mail.com" />
                </div>
                <div className="flex flex-col">
                    Password
                    <input type="password" placeholder="asd123!@#" />
                </div>
                <button onClick={async () => {
                    await signIn("credentials", {
                        username: "",
                        password: "",
                        redirect: false
                    });
                    router.push("/");
                }}>Login with Email</button>
            </div>

            <div className="font-bold flex justify-center mt-3">
                OR
            </div>

            <div className="flex justify-center mt-2">
                <button onClick={async () => {
                    await signIn("google")
                }}>
                    Login wth Google
                </button>
            </div>

            <div className="flex justify-center mt-2">
                <button onClick={async() => {
                    const res = await signIn("github");
                    console.log(res);
                }}>
                    Login with Github
                </button>
            </div>
        </div>
    </div>
}