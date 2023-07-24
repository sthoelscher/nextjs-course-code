import Link from "next/link";

function IndexPage() {
  return (
    <div>
      <h1>Welcome to the index page.</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default IndexPage;
