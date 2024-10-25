import {
    InstagramIcon,
    YoutubeIcon,
    MailIcon,
    SmartphoneIcon,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function HomeAboutCard() {
    const tags = ['Web Developer', 'Content Creator'];
    const socialContacts = [
        {
            icon: <YoutubeIcon className="text-red-600 text-red-900 inline" />,
            link: 'https://www.youtube.com',
            username: 'Sebastian Curtis Lavarias',
        },
        {
            icon: (
                <InstagramIcon className="text-purple-600 hover:text-purple-900 inline" />
            ),
            link: 'https://www.instagram.com',
            username: 'bastilavarias',
        },
        {
            icon: <MailIcon className="text-gray-600 text-gray-900 inline" />,
            link: null,
            value: 'sebastiancurtislavarias@gmail.com',
        },
        {
            icon: (
                <SmartphoneIcon className="text-gray-600 text-gray-900 inline" />
            ),
            link: null,
            value: '(+63) 997-221-7704',
        },
    ];

    return (
        <Card className="sticky top-0 h-76 bg-white rounded-lg border-0">
            <CardHeader className="pb-0">
                <CardTitle className="text-xl font-semibold">About</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 mb-4 border-0">
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

                {/*<p className="text-md font-semibold mb-2">*/}
                {/*    Follow and contact me*/}
                {/*</p>*/}
                {/*<div className="flex flex-col gap-1">*/}
                {/*    {socialContacts.map((socialContact, index) => {*/}
                {/*        return socialContact.link ? (*/}
                {/*            <a*/}
                {/*                key={index}*/}
                {/*                className="text-sm"*/}
                {/*                href={socialContact.link}*/}
                {/*                target="_blank"*/}
                {/*            >*/}
                {/*                {socialContact.icon}{' '}*/}
                {/*                <span className="underline">*/}
                {/*                    {socialContact.username}*/}
                {/*                </span>*/}
                {/*            </a>*/}
                {/*        ) : (*/}
                {/*            <span className="text-sm">*/}
                {/*                {socialContact.icon} {socialContact.value}*/}
                {/*            </span>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</div>*/}
            </CardContent>
        </Card>
    );
}
