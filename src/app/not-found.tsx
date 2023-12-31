import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-xl text-white">Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link className="btn btn-outline btn-sm" href="/">
        Return Home
      </Link>
    </div>
  );
}
