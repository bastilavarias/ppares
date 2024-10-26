import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function DonorCard() {
    return (
        <Card className="bg-white dark:bg-primary-foreground p-0 border-0 shadow-none">
            <CardHeader className="py-1 pl-0 pr-1 mt-0">
                <CardTitle className="text-sm font-bold">🍲 Chy</CardTitle>
                <CardDescription className="flex flex-col space-y-2">
                    <span className="flex justify-center items-center">
                        <span className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tempore, voluptatum...
                        </span>
                        <span className="text-lg font-semibold text-primary">
                            ₱60.00
                        </span>
                    </span>
                    <img
                        className="w-20 h-auto"
                        src="https://media1.tenor.com/m/UIu1svqZ9wAAAAAC/shrek-reaction.gif"
                        alt="Sample GIF"
                    />
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
