import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import DonorCard from '@/components/donor-card';

export default function HomeDonationsCard() {
    return (
        <Card className="bg-white dark:bg-primary-foreground border-0 rounded-lg">
            <CardHeader>
                <CardDescription className="mt-0">
                    Mga nagbigay pang pares so far...
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n, index) => (
                        <DonorCard key={index} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
