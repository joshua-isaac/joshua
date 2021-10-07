import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-white bg-opacity-60 sticky-nav">
      <div className="container flex justify-between p-4 text-sm md:text-base text-gray-900">
        <div>
          <Link href="/">
            <a>joshua</a>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 text-sm md:text-base">
            <li>
              <Link href="/work">
                <a>work</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>services</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
