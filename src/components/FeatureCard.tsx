import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <Card className="hover:shadow-xl transition-all duration-300 group border-l-4 border-l-secondary bg-[#10172a] border-t-0 border-r-0 border-b-0 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Icon className="text-secondary w-8 h-8" />
                </div>
                <CardTitle className="text-lg text-white font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
            </CardContent>
        </Card>
    );
}
