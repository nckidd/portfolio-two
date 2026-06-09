// app/api/instagram-grid/route.ts
import { NextResponse } from "next/server";

export type GridTile = {
    id: string;
    type: "image" | "video";
    src: string;           // for video: the video file src
    poster?: string;       // for video: thumbnail shown before play & in grid
    caption: string;
    alt: string;
};

const gridTiles: GridTile[] = [
    {
        id: "1",
        type: "image",
        src: "/images/instagram-grid/bridal_shot1.png",
        caption: "Bridal corset back shot of the dress made for a graceful exit.",
        alt: "Editorial shot of bridal gown",
    },
    {
        id: "2",
        type: "image",
        src: "/images/instagram-grid/beauty_shot.png",
        caption: "Close-up beauty shot portrait.",
        alt: "Beauty close-up of beautiful woman",
    },
    {
        id: "3",
        type: "image",
        src: "/images/instagram-grid/bridal_shot2.png",
        caption: "Bridal front shot.",
        alt: "Editorial shot of bridal gown",
    },
    {
        id: "4",
        type: "image",
        src: "/images/instagram-grid/wedding_venue1.png",
        caption: "Wedding florals by the lake for a day to remember.",
        alt: "Imagery of bridal scenery with lake and flowers",
    },
    {
        id: "5",
        type: "video",
        src: "/images/instagram-grid/ash_blessings.mov",
        poster: "/images/instagram-grid/ash_blessings.png",
        caption: "Have you gifted a blessing today? This is the only question worth considering when you end the day. This is a charity project I collaborated on with a local group in Venice Beach.",
        alt: "Charity video clip of girl handing out blessing bags at Venice Beach in 2020",
    },
    {
        id: "6",
        type: "image",
        src: "/images/instagram-grid/wedding_venue2.png",
        caption: "White hydrangea details on the big day.",
        alt: "Imagery of bridal backdrop and flowers",
    },
    {
        id: "7",
        type: "image",
        src: "/images/instagram-grid/fashion_shot1.png",
        caption: "A garment as punctuation.",
        alt: "Editorial fashion shot of woman in red dress",
    },
    {
        id: "8",
        type: "image",
        src: "/images/instagram-grid/fashion_shot2.png",
        caption: "Red floral lace in an ornate memory.",
        alt: "Editorial fashion shot of woman in red dress",
    },
    {
        id: "9",
        type: "image",
        src: "/images/instagram-grid/fashion_shot3.png",
        caption: "The concept was: scarlet letter, but make it couture.",
        alt: "Editorial fashion shot of woman in red dress",
    },
];

export async function GET() {
    return NextResponse.json({ gridTiles });
}