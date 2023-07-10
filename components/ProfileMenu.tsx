"use client"

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SessionInterface } from "@/common";
import Button from "./Button";


const ProfileMenu = ({ session }: { session: SessionInterface }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="flex items-center justify-center z-10 flex-col relative">
            <Menu as="div">
                <Menu.Button className="flex items-center justify-center" onClick={() => setOpenModal(!openModal)} >
                    {session?.user?.image && (
                        <Image
                            src={session.user.image}
                            width={40}
                            height={40}
                            className="rounded-full  border-sky-500 border-2"
                            alt="user profile image"
                        />
                    )}
                </Menu.Button>

                <Transition
                    show={openModal}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        static
                        className="flex items-start justify-start flex-col absolute right-1/2 translate-x-1/2 mt-6 p-7 sm:min-w-[300px] min-w-max rounded-xl bg-white border border-nav-border shadow-menu "
                        onMouseLeave={() => setOpenModal(!openModal)}
                    >
                        <div className="flex flex-col items-center gap-y-4">
                            {session?.user?.image && (
                                <Image
                                    src={session?.user?.image}
                                    className="rounded-full"
                                    width={80}
                                    height={80}
                                    alt="profile Image"
                                />
                            )}
                            <p className="font-semibold">{session?.user?.name}</p>
                        </div>

                        <div className="flex flex-col gap-3 pt-10 items-start w-full">
                            <Menu.Item>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">Work Preferences</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">Settings</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">Profile</Link>
                            </Menu.Item>
                        </div>
                        <div className="w-full flex items-start justify-start border-t border-nav-border mt-5 pt-5">
                            <Menu.Item>
                                <Button title=' Sign Out' type="button" handleClick={() => signOut()} />
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default ProfileMenu