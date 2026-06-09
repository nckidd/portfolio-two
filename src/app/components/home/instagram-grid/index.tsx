"use client";
// components/InstagramGrid.tsx
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import InstagramLightbox from "./instagram-lightbox"
import type { GridTile } from "@/app/api/instagram-grid/route";

const PlayIcon = () => (
    <svg
        className="w-8 h-8 text-white drop-shadow-lg"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
);

const InstagramGrid = () => {
    const [gridTiles, setGridTiles] = useState<GridTile[]>([]);
    const [activeTile, setActiveTile] = useState<GridTile | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/instagram-grid");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setGridTiles(data?.gridTiles ?? []);
            } catch (error) {
                console.error("Error fetching instagram grid:", error);
            }
        };
        fetchData();
    }, []);

    const handleClose = useCallback(() => setActiveTile(null), []);

    return (
        <>
            <section>
                <div className="container">
                    <div className="border-x border-primary/10">
                        {/* Header — mirrors your FeaturedWork pattern */}
                        <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                    Visuals
                                </p>
                                {/* Optional: swap for a real handle if you ever want to link out */}
                                <p className="text-sm text-primary/40 font-mono">✦ a curated glimpse</p>
                            </div>
                        </div>

                        {/* 3-column square grid */}
                        <div className="grid grid-cols-3 border-t border-primary/10">
                            {gridTiles.map((tile) => (
                                <button
                                    key={tile.id}
                                    onClick={() => setActiveTile(tile)}
                                    aria-label={`Open: ${tile.alt}`}
                                    // aspect-square enforces uniform squares regardless of source dimensions
                                    className="group relative aspect-square overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                >
                                    {/* Thumbnail — always the poster/image, never autoplay in grid */}
                                    {tile.type === "video" ? (
                                        <Image
                                            src={tile.poster ?? ""}
                                            alt={tile.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 33vw, 20vw"
                                        />
                                    ) : (
                                        <Image
                                            src={tile.src}
                                            alt={tile.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 33vw, 20vw"
                                        />
                                    )}

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                        {/* Play badge for videos */}
                                        {tile.type === "video" && (
                                            <span className="absolute top-2 right-2 opacity-80">
                                                <PlayIcon />
                                            </span>
                                        )}
                                        {/* Caption preview on hover */}
                                        <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs text-center px-3 leading-relaxed line-clamp-3">
                                            {tile.caption}
                                        </p>
                                    </div>

                                    {/* 1px grid lines between tiles */}
                                    <span className="pointer-events-none absolute inset-0 border-b border-r border-primary/10" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portal-rendered lightbox — escapes any overflow:hidden ancestors */}
            {activeTile && (
                <InstagramLightbox tile={activeTile} onClose={handleClose} />
            )}
        </>
    );
};

export default InstagramGrid;