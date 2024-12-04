'use client'

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const route = useRouter

export function Appbar() {
    const session = useSession();
    return <div>
        <button onClick={() => {
            signIn()
        }}>
            Login
        </button>

        <button onClick={() => {
            signOut()
        }}>
            Logout
        </button>
        <div>
            {JSON.stringify(session)}
        </div>
    </div>
}