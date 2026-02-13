import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface CourseCardProps {
    title: string;
    description: string;
    duration: string;
    batchSize?: string;
    href: string;
}

export default function CourseCard({
    title,
    description,
    duration,
    batchSize = "Small Batches",
    href,
}: CourseCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-t-secondary bg-[#10172a] border-x-0 border-b-0 group hover:-translate-y-2">
            <CardHeader>
                <CardTitle className="text-xl text-white font-bold group-hover:text-secondary transition-colors">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-neutral-400 mb-6 text-sm leading-relaxed">{description}</p>
                <div className="flex flex-col gap-3 text-sm text-neutral-500">
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-secondary" />
                        <span className="text-neutral-300">Duration: {duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users size={16} className="text-secondary" />
                        <span className="text-neutral-300">{batchSize}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Link href={href} className="w-full">
                    <Button variant="outline" className="w-full justify-between group border-neutral-700 text-neutral-300 hover:bg-secondary hover:text-black hover:border-secondary transition-all font-semibold">
                        View Details
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
