import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function HomeAboutCard() {
    const tags = ['Web Developer', 'Content Creator'];
    const socialMedias = [
        {
            icon: <YoutubeIcon className="text-red-600 hover:text-gray-900" />,
            link: 'https://www.youtube.com',
        },
        {
            icon: (
                <InstagramIcon className="text-purple-600 hover:text-gray-900" />
            ),
            link: 'https://www.instagram.com',
        },
    ];

    return (
        <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-600 mb-4">
                Hello! Laurence and Lindsay here. We are a two-person,
                award-winning audio fiction production company. We're the
                creators of The Ballad of Anne & Mary, Mockery Manor, Madame
                Magenta and Magenta Presents. Subscribe wherever you get
                podcasts, and keep an eye on our website and socials for news of
                upcoming projects!
            </p>
            <div className="space-y-2">
                <a href="#" className="text-blue-500 hover:underline">
                    longcatmedia.com
                </a>
                <div className="flex space-x-4">
                    {socialMedias.map((media, index) => (
                        <a
                            href={media.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {media.icon}
                        </a>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge className="text-white text-sm">{tag}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
