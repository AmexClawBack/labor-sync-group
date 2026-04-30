import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="logo-wrap">
          <Image
            src="/logo.png"
            alt="Labor Sync Group"
            width={220}
            height={60}
            priority
          />
        </a>

        <nav className="nav">
          <a href="/#hire">Employers</a>
          <a href="/#jobs">Job Seekers</a>
          <a href="/#industries">Industries</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}