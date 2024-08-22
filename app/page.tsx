import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Tempo</h1>
      <p className="text-lg">Orchestrate Your Day</p>
      <Button className="mt-4">Get Started</Button>

      <ModeToggle />
    </div>
  );
}
