import { auth, signIn, signOut } from "auth";
import Link from "next/link";

const Navbar = async () => {

    const session = await auth()

    return <div className="flex justify-between p-4 px-8 container mx-auto">
        <Link href="/">Home</Link>
        <div>
            {
            session && session.user ? (
               <p>{session.user.name}</p>
            ) : (
                <form action={async () => {
                    "use server";
                    await signIn()
                }}>
                    <button className="bg-white">Entrar</button>
                </form>
            )
            }
        </div>
    </div>

}

export default Navbar