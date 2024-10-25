import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function HomeDonateCard() {
    return (
        <Card className="border-0 bg-white rounded-lg">
            <CardHeader>
                <CardTitle className="mb-0">Bilhan moko ng Pares 🍲</CardTitle>
                <CardDescription className="mt-0">
                    Pang boost lang ng discord server bossing! 🙏
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold">₱20 each 🍲</span>
                    <div className="flex items-center">
                        <Button variant="outline" className="px-2 py-1">
                            -
                        </Button>
                        <span className="mx-4">3</span>
                        <Button variant="outline" className="px-2 py-1">
                            +
                        </Button>
                    </div>
                </div>
                <form action="" className="space-y-4">
                    <Input placeholder="₱60.00" readOnly />
                    <Input placeholder="Your name or nickname" />
                    <Textarea placeholder="Your message (Optional)" />
                    <Button className="w-full bg-primary text-white">
                        Donate ₱60.00
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
