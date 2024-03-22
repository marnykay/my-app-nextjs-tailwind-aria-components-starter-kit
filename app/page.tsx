import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="mb-4">
        A Starter Kit with NextJS, Tailwind CSS, React Aria Components,
        Storybook, Typescript, Prettier and more.
      </p>
      <div className="grid gap-3">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>
    </main>
  );
}
