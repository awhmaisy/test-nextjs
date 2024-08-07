import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="m-0 box-border flex w-full flex-col items-start p-0 pb-2.5">
      <div className="grid">
        <Image
          src="/ca-logo.png"
          alt="Logo"
          width={250}
          height={100}
          className="max-w-[250px] p-5"
        />
      </div>
      <div className="flex w-full justify-between">
        <a href="/declaration" className="nav-link">
          Declaration of Existence
        </a>
        <a href="/shop" className="nav-link">
          Shop
        </a>
        <a href="/understand" className="nav-link">
          Seek to Understand
        </a>
        <a href="/play" className="nav-link">
          Fiddle with us
        </a>
      </div>
    </nav>
  );
}
