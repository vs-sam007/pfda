import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo Gallery & Life at PFDA | Path Finder Defence Academy",
    description: "Explore photos of classrooms, physical training, GTO ground, discipline, and glory at Lucknow's best NDA coaching academy.",
    alternates: {
        canonical: "https://pathfinderdefenceacademy.com/gallery/photos/",
    },
};

export default function GalleryPhotosLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
