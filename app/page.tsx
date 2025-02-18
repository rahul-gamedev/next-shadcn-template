import { Button } from "@/components/ui/button";
import { File, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-4xl font-extrabold my-1">Next App with ShadCn</h1>
      <p>Generated by create next app</p>
      <div className="my-4">
        <Button className="mx-2" asChild>
          <Link href="https://ui.shadcn.com/">
            <File />
            Open Docs
          </Link>
        </Button>

        <Button className="mx-2" variant={"outline"} asChild>
          <Link href="https://github.com/rahul-gamedev/next-shadcn-template">
            <Github></Github>
            Open Github
          </Link>
        </Button>
      </div>
    </div>
  );
}
