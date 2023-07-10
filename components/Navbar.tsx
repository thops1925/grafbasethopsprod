import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "../constant/index";
import { getCurrentUser } from "@/lib/session";

import Button from "./Button";
import AuthProviders from "./AuthProviders";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="flex justify-between gap-4 px-8 py-5 ">
      <div className="flex flex-1 items-center justify-start">
        <Link href="/">
          <Image
            src="/thops3.png"
            alt="logo"
            width={116}
            height={43}
            className="blur-none"
          />
        </Link>

        <ul className="text-small hidden gap-7 xl:flex">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className=" flex items-center justify-center gap-4 ">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href="/create-project">
              <Button title="Share work" />
            </Link>
          </>
        ) : (
          <>
            <AuthProviders />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
