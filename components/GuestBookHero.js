import Link from "next/link";

const GuestBookHero = () => {
  return (
    <section className="container my-10 md:my-20">
      <h1 className="text-3xl lg:text-5xl mb-2 font-medium text-gray-900 dark:text-white">
        guestbook
      </h1>
      <p className="hidden md:block text-gray-500 dark:text-gray-400 leading-relaxed text-md max-w-2xl">
        sign my guestbook with a comment. it could be words of appreciation,
        information, wisdom, or even humor.
      </p>
      <div className="bg-gray-200 p-6 mt-6 rounded-lg">
        <h5 className="font-semibold md:text-lg text-gray-900 dark:text-white">
          sign guestbook
        </h5>
        <div>
          <form className="flex my-4">
            <input
              type="text"
              placeholder="sign guestbook"
              className="w-full p-2 rounded-tl-lg rounded-bl-lg"
            />
            <Link href="/api/auth/login">
              <a className="bg-gray-900 text-white p-2 rounded-tr-lg rounded-br-lg">
                login
              </a>
            </Link>
          </form>
        </div>
        <p className="text-xs">
          Your information is only used to display your name and reply by email.
        </p>
      </div>
    </section>
  );
};

export default GuestBookHero;
