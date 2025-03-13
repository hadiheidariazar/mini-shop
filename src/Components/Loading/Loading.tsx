import { FadeLoader } from "react-spinners";

type LoadingProps = {
    isFullPage?: boolean
}

export default function Loading({ isFullPage }: LoadingProps) {
    return (
        <div className={`loading flex justify-center items-center w-full ${isFullPage ? "h-screen" : "gap-2"}`}>
            <FadeLoader className="child:dark:bg-white-important" />
            {!isFullPage && "Loading..."}
        </div>
    )
}