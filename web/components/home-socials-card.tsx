import {
    InstagramIcon,
    YoutubeIcon,
    MailIcon,
    SmartphoneIcon,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function HomeSocialsCard() {
    const contactLinks = [
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
            icon: <MailIcon className="text-gray-900 dark:text-white inline" />,
            link: null,
            value: 'sebastiancurtislavarias@gmail.com',
        },
        {
            icon: (
                <SmartphoneIcon className="text-gray-900 dark:text-white inline" />
            ),
            link: null,
            value: '(+63) 997-221-7704',
        },
    ];

    return (
        <Card className="sticky rounded-lg border-0 bg-white dark:bg-primary-foreground">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">
                    contact & links
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    {contactLinks.map((contactLink, index) => {
                        return contactLink.link ? (
                            <a
                                key={index}
                                className="text-sm"
                                href={contactLink.link}
                                target="_blank"
                            >
                                {contactLink.icon}{' '}
                                <span className="underline">
                                    {contactLink.username}
                                </span>
                            </a>
                        ) : (
                            <span className="text-sm">
                                {contactLink.icon} {contactLink.value}
                            </span>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
