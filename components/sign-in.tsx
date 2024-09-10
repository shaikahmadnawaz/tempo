import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        // await signIn("google", { redirectTo: "/" });
        await signIn("google");
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  );
}
