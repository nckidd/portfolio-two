"use client";
// components/InstagramLightbox.tsx
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { GridTile } from "@/app/api/instagram-grid/route";

interface LightboxProps {
    tile: GridTile;
    onClose: () => void;
}

const InstagramLightbox = ({ tile, onClose }: LightboxProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        // Prevent background scroll
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    // Close on backdrop click only
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) onClose();
    };

    const content = (
        <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
        >
            <div className="relative flex flex-col max-w-xl w-full sm:w-1/3 bg-background border border-primary/10 shadow-2xl">
                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Close lightbox"
                    className="absolute top-3 right-3 z-10 text-primary/50 hover:text-primary transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>

                {/* Media */}
                <div className="relative w-full aspect-[2/3] bg-primary/5">
                    {tile.type === "video" ? (
                        <video
                            src={tile.src}
                            poster={tile.poster}
                            controls
                            autoPlay
                            loop
                            playsInline
                            className="w-full h-full"
                        />
                    ) : (
                        <Image
                            src={tile.src}
                            alt={tile.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 576px"
                        />
                    )}
                </div>

                {/* Caption */}
                <div className="px-5 py-4 border-t border-primary/10">
                    <p className="text-sm text-primary/70 leading-relaxed">{tile.caption}</p>
                </div>
            </div>
        </div>
    );

    return createPortal(content, document.body);
};

export default InstagramLightbox;