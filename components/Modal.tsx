"use client"

import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useCallback, useRef } from "react"

const Modal = ({ children }: { children: React.ReactNode }) => {
    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const router = useRouter()

    const onDismiss = useCallback(() => {
        router.push('/')
    }, [router])

    const handleClick = useCallback((e: React.MouseEvent) => {
        if (e.target === overlay.current && onDismiss)
            onDismiss()
    }, [onDismiss, overlay])

    return (
        <div ref={overlay} onClick={handleClick} className=" fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80">
            <button type="button" onClick={onDismiss} className="absolute top-4 right-8 z-10">
                <Image src='/close.svg' alt="close" width={24} height={24} className="bg-black rounded-full " />
            </button>
            <div ref={wrapper}
                className="flex justify-start items-center flex-col absolute h-screen
                        w-full bottom-0 
                        bg-slate-100 lg:px-40 px-8 pt-14 pb-72 
                        overflow-auto">
                {children}
            </div>
        </div>
    )
}

export default Modal