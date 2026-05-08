"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setPos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <>
            {/* Ring */}
            <div
                className="pointer-events-none fixed z-[9999] h-10 w-10 rounded-full border border-violet-500/80 shadow-[0_0_15px_rgba(139,92,246,0.5)] backdrop-blur-sm"
                style={{
                    left: pos.x - 20,
                    top: pos.y - 20,
                    transition: "transform 0.08s linear",
                }}
            />

            {/* Dot */}
            <div
                className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.9)]"
                style={{
                    left: pos.x - 4,
                    top: pos.y - 4,
                }}
            />
        </>
    );
}