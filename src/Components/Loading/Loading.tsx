import { FadeLoader } from "react-spinners";

type LoadingProps = {
    isFullPage?: boolean
}

export default function Loading({ isFullPage }: LoadingProps) {
    return (
        <div className={`loading flex justify-center items-center ${isFullPage ? "h-screen w-full" : "gap-2"}`}>
            <FadeLoader className="child:dark:bg-white-important" />
            {!isFullPage && "Loading..."}
        </div>
    )
}