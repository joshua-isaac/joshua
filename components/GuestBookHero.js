import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const GuestBookHero = () => {
  const session = useSession();
  console.log(session);
  return (
    <section className="container my-10 md:my-20">
      <h1 className="text-3xl lg:text-5xl mb-2 font-medium text-gray-900 dark:text-white">
        Guestbook
      </h1>
      <p className="hidden md:block text-gray-500 dark:text-gray-400 leading-relaxed text-md max-w-2xl">
        Sign my guestbook with words of appreciation, information, wisdom, or
        humor.
      </p>
      <div className="bg-gray-200 p-4 mt-6 rounded-lg">
        <h5 className="font-semibold md:text-lg text-gray-900 dark:text-white">
          sign guestbook
        </h5>
        <div>
          <form className="flex my-4">
            {session.data ? (
              <>
                <input
                  type="text"
                  placeholder="leave a message..."
                  className="w-full py-2 px-4 rounded-tl-lg rounded-bl-lg"
                />
                <button className="bg-gray-900 text-white py-2 px-6 rounded-tr-lg rounded-br-lg">
                  sign
                </button>
              </>
            ) : (
              <Link href="/api/auth/signin/google">
                <a
                  className="bg-gray-900 text-white py-2 px-6 rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("google");
                  }}
                >
                  login
                </a>
              </Link>
            )}
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
