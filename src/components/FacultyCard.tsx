import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

interface FacultyCardProps {
    name: string;
    role: string;
    experience: string;
    imageUrl?: string;
    qualification: string;
}

export default function FacultyCard({
    name,
    role,
    experience,
    imageUrl,
    qualification,
}: FacultyCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-none bg-[#24332B] group hover:-translate-y-2">
            <div className="relative h-72 w-full bg-neutral-900 overflow-hidden">
                <Image
                    src={imageUrl || "/images/logo.png"}
                    alt={name}
                    fill
                    className="object-contain object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24332B] via-transparent to-transparent opacity-80"></div>
            </div>
            <CardHeader className="pb-2 text-center relative -mt-12 z-10">
                <div className="inline-block px-3 py-1 bg-[#FACC15] text-black text-xs font-bold rounded-full mb-3 shadow-lg">
                    {role}
                </div>
                <h3 className="text-xl font-bold text-white whitespace-pre-line">{name}</h3>
            </CardHeader>
            <CardContent className="text-center pb-8">
                <p className="text-[#FACC15] font-medium text-sm mb-3">{qualification}</p>
                <p className="text-neutral-400 text-sm border-t border-white/10 pt-3 mx-4">{experience}</p>
            </CardContent>
        </Card>
    );
}
