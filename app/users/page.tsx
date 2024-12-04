import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";

export default async function () {
    const session = await getServerSession(NEXT_AUTH);
    console.log(session)
    return <div className="flex gap-1">
        <div>
            User Component = 
        </div>
        <div>
            {JSON.stringify(session)}
        </div>
    </div>
}