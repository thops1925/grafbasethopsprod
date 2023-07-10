import { footerLinks } from "@/constant";
import FooterCol from "@/utils/FooterCol";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const Footer = () => {
  return (
    <section className="flex justify-start items-start flex-col lg:px-20 py-6 px-5 gap-20 bg-light-white">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex justify-start items-start flex-col">
          <Image
            src="/thops3.png"
            alt="logo"
            width={116}
            height={43}
            className="blur-none"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-sm mx-4">
            "Unlocking the Power of Sharing: Join the Online Revolution of Community Collaboration"
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterCol title={footerLinks[0].title} links={footerLinks[0].links} />
          <div className="flex-1 flex flex-col gap-4">
            <FooterCol title={footerLinks[1].title} links={footerLinks[1].links} />
            <FooterCol title={footerLinks[2].title} links={footerLinks[2].links} />
          </div>
          <FooterCol title={footerLinks[3].title} links={footerLinks[3].links} />
          <div className="flex-1 flex flex-col gap-4">
            <FooterCol title={footerLinks[5].title} links={footerLinks[5].links} />
            <FooterCol title={footerLinks[4].title} links={footerLinks[4].links} />

          </div>
          <FooterCol title={footerLinks[6].title} links={footerLinks[6].links} />

        </div>
      </div>
    </ section>
  );
};
