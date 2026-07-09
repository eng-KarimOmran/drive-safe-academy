"use client";

import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;

        const animate = (time: number) => {
            if (!startTime) startTime = time;

            const progress = Math.min((time - startTime) / duration, 1);

            // Ease Out
            const ease = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(ease * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
}