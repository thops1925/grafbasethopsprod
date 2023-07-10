"use client";

import { useRouter } from "next/navigation";

import Button from "./Button";

type Props = {
    startCursor: string
    endCursor: string
    hasPreviousPage: boolean
    hasNextPage: boolean
}

const LoadMore = ({ startCursor, endCursor, hasPreviousPage, hasNextPage }: Props) => {
    const router = useRouter();

    const handleNavigation = (type: string) => {
        const currentParams = new URLSearchParams(window.location.search);

        if ((type === "prev" && hasPreviousPage) || (type === "next" && hasNextPage)) {
            currentParams.delete("endcursor");
            currentParams.delete("startcursor");
            currentParams.set(type === "prev" ? "startcursor" : "endcursor", type === "prev" ? startCursor : endCursor);

            const newSearchParams = currentParams.toString();
            const newPathname = `${window.location.pathname}?${newSearchParams}`;

            router.push(newPathname);
        }
    };


    return (
        <div className="w-full flex items-center justify-center gap-5 mt-10">
            {hasPreviousPage && (
                <Button title="First Page" handleClick={() => handleNavigation('prev')} />
            )}
            {hasNextPage && (
                <Button title="Next Page" handleClick={() => handleNavigation('next')} />
            )}
        </div>
    );
};

export default LoadMore;