import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/lib/constants/route";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <h1 className="h1-">Welcome to the world of next.js</h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </>
  );
}
