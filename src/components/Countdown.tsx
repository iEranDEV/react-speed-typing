import { useEffect, useState } from "react";

function Countdown({ status }: {status: boolean}) {
    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        if(status) {
            const interval = setInterval(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () =>  clearInterval(interval);
        }
    }, [status, countdown])

    return (
        <div className="w-24 h-24 aspect-square bg-stone-200 p-2 rounded-full flex flex-col items-center justify-center border-4 border-green-500">
            <p className="font-bold text-stone-700 text-3xl">{countdown}</p>
            <span className="text-sm md:text-xs font-semibold tracking-wider text-stone-500">SECONDS</span>
        </div>
    )
}

export default Countdown;