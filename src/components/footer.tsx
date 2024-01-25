import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-4 flex flex-row gap-1 items-center border-t">
      Built by{" "}
      <Link
        href="https://x.com/themanafov"
        target="_blank"
        className="underline underline-offset-4"
      >
        themanafov.
      </Link>
      <Link
        href={"https://github.com/themanafov/nextjs-dashboard-template"}
        target="_blank"
        className="underline underline-offset-4"
      >
        GitHub.
      </Link>
    </footer>
  );
}
