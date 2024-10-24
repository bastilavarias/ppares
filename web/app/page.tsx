import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
    SoupIcon,
} from 'lucide-react';
import HomeHero from '@/components/home-hero';
import { Badge } from '@/components/ui/badge';
import HomeAboutCard from '@/components/home-about-card';

export default function Home() {
    return (
        <div>
            <HomeHero />
            <div className="container px-12 mx-auto">
                <Tabs defaultValue="about" className="mt-8">
                    <TabsList>
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="shop">Shop</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about" className="mt-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <HomeAboutCard />
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4">
                                    Buy a Coffee for Long Cat Media
                                </h2>
                                <div className="flex items-center justify-between mb-4">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        One time
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full ml-2"
                                    >
                                        Membership
                                    </Button>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-bold">
                                        £3 each
                                    </span>
                                    <div className="flex items-center">
                                        <Button
                                            variant="outline"
                                            className="px-2 py-1"
                                        >
                                            -
                                        </Button>
                                        <span className="mx-4">1</span>
                                        <Button
                                            variant="outline"
                                            className="px-2 py-1"
                                        >
                                            +
                                        </Button>
                                    </div>
                                </div>
                                <Input placeholder="£ 3" className="mb-4" />
                                <Input
                                    placeholder="Your name or nickname"
                                    className="mb-4"
                                />
                                <Textarea
                                    placeholder="Your message"
                                    className="mb-4"
                                />
                                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                                    Donate £3
                                </Button>
                                <p className="text-center text-sm text-gray-500 mt-2">
                                    Payments go directly to Long Cat Media
                                </p>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="gallery" className="mt-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="relative aspect-square">
                                    <Image
                                        src="/placeholder.svg"
                                        alt={`Gallery item ${i}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                        <Button variant="link" className="mt-4">
                            View Gallery
                        </Button>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
