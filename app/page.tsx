"use client";
import { Button } from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row gap-4 font-thin "> this goig to work</div>

      <Button>Click me</Button>
    </main>
  );
}
