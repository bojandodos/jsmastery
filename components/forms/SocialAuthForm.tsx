import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "@/auth";
import ROUTES from "@/lib/constants/route";

export default function SocialAuthForm() {
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      {/* GitHub Auth Form */}
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: ROUTES.HOME });
        }}
        className="flex-1"
      >
        <Button
          type="submit"
          className="w-full cursor-pointer background-dark400 body-medium text-dark200 rounded-2 min-h-12 px-4 py-3.5"
        >
          <Image src="/github.svg" alt="GitHub Logo" width={20} height={20} />
          <p className="text-amber-50">Login with GitHub</p>
        </Button>
      </form>

      {/* Google Auth Form */}
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: ROUTES.HOME });
        }}
        className="flex-1"
      >
        <Button
          type="submit"
          className="w-full cursor-pointer background-dark400 body-medium text-dark200 rounded-2 min-h-12 px-4 py-3.5"
        >
          <Image src="/google.svg" alt="Google Logo" width={20} height={20} />
          <p className="text-amber-50">Login with Google</p>
        </Button>
      </form>
    </div>
  );
}