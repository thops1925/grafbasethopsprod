import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    id: string;
    key: string;
    image: string;
    name: string;
    avatarUrl: string;
    userId: string;
    title: string;
}

const ProjectCard = ({ id, key, image, name, avatarUrl, userId, title }: Props) => {
    return (
        <div className='flex items-center justify-center flex-col rounded-sm drop-shadow-md' key={key}>
            <Link href={`/project/${id}`} className='flex items-center justify-center group relative w-full h-full'>
                <Image src={image} alt='image' width={414} height={314} className='w-full h-full object-contain rounded-sm blur-0 drop-shadow-sm' />
                <div className='hidden group-hover:flex justify-end items-end w-full h-1/3
                 bg-gradient-to-b from-transparent to-black/50 rounded-b-2xl gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4'>
                    <p className='w-full'>
                        {title}
                    </p>
                </div>
            </Link>
            <div className='flex justify-between w-full px-2 mt-3 font-semibold text-sm'>
                <Link href={`/profile/${userId}`}>
                    <div className='flex items-center justify-center gap-2'>
                        <Image
                            src={avatarUrl}
                            width={24}
                            height={24}
                            className='rounded-full'
                            alt='profile'
                        />
                        <p>{name}</p>
                    </div>
                </Link>
                <div className='flex items-center justify-center gap-3'>
                    {/* <div className='flex items-center justify-center gap-2'>
                        <Image
                            src={"/hearth.svg"}
                            width={13}
                            height={12}
                            className='rounded-full'
                            alt='heart'
                        />
                        <p className='text-sm'>1</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <Image
                            src={"/eye.svg"}
                            width={13}
                            height={12}
                            className='rounded-full'
                            alt='heart'
                        />
                        <p className='text-sm'>1k</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard