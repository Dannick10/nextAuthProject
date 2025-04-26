import { auth, signIn, signOut } from "auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="border-b-2">
      <div className="flex justify-between p-4 px-8 container mx-auto">
        <Link href="/">Home</Link>
        <div>
          {session && session.user ? (
            <div className="flex gap-4 justify-center items-center">
              <p>{session.user.name}</p>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button className="bg-zinc-200 text-zinc-900 px-8 pt-2 rounded-md flex justify-center items-center cursor-pointer hover:bg-zinc-300">
                  Sair
                </button>
              </form>
            </div>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <button className="bg-zinc-200 text-zinc-900 px-8 pt-2 rounded-md flex justify-center items-center cursor-pointer hover:bg-zinc-300">
                Entrar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
