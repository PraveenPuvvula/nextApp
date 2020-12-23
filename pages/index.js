import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <Link href="/blog">
      <a>Blog!</a>
    </Link>
  );
}
