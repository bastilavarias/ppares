import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function HomeAboutCard() {
    const tags = ['Web Developer', 'Content Creator'];

    return (
        <Card className="sticky rounded-lg border-0 bg-white dark:bg-primary-foreground">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">
                    about me
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-4 border-0 text-gray-600 dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores assumenda commodi incidunt possimus voluptates.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                    {tags.map((tag, index) => (
                        <Badge key={index} className="text-white text-sm">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
