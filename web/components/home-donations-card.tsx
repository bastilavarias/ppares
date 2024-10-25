import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import DonorCard from '@/components/donor-card';

export default function HomeDonationsCard() {
    return (
        <Card className="border-0 bg-white rounded-lg">
            <CardHeader>
                <CardDescription className="mt-0">
                    Mga nagbigay pang pares so far...
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {[1, 2, 3].map((n, index) => (
                        <DonorCard key={index} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
