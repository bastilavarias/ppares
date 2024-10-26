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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque debitis deleniti dolor id ipsum magni odit
                    perspiciatis quas recusandae. Accusamus ad consequuntur
                    dignissimos eius, explicabo fugiat illo inventore iste, iure
                    magnam perferendis perspiciatis quibusdam quo sapiente totam
                    veniam vitae voluptatem? Architecto atque corporis debitis
                    dignissimos eaque est, facilis id laboriosam recusandae sed
                    sequi suscipit vero voluptate.
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
