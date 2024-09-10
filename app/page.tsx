import { auth } from "@/auth";
import { ModeToggle } from "@/components/mode-toggle";
import SignIn from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  console.log(session?.user);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Tempo</h1>
      <p className="text-lg">Orchestrate Your Day</p>
      <Button className="mt-4">Get Started</Button>
      <SignIn />
      {session && <SignOut />}

      <ModeToggle />
    </div>
  );
}
