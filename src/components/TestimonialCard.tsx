import { Quote } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    exam: string;
}

export default function TestimonialCard({
    name,
    role,
    content,
    exam,
}: TestimonialCardProps) {
    return (
        <Card className="h-full bg-neutral-50 border-none shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4 text-primary/10">
                <Quote size={64} />
            </div>
            <CardContent className="pt-8 relative z-10">
                <p className="text-neutral-700 italic mb-6">"{content}"</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start pt-0">
                <h4 className="font-bold text-primary">{name}</h4>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <span>{role}</span>
                    <span className="w-1 h-1 rounded-full bg-secondary" />
                    <span className="text-secondary font-medium uppercase">{exam}</span>
                </div>
            </CardFooter>
        </Card>
    );
}
