import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HomeHero from '@/components/home-hero';
import HomeAboutCard from '@/components/home-about-card';
import HomeDonateCard from '@/components/home-donate-card';
import HomeDonationsCard from '@/components/home-donations-card';

export default function Home() {
    return (
        <div>
            <HomeHero />
            <div className="container px-12 mx-auto">
                <Tabs defaultValue="about" className="mt-8">
                    <TabsList>
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="shop">Shop 🛒</TabsTrigger>
                        <TabsTrigger value="shop">Work Stuffs 💼</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about" className="mt-4">
                        <div className="grid md:grid-cols-2 gap-8 relative">
                            <HomeAboutCard />
                            <div className="space-y-8">
                                <HomeDonateCard />
                                <HomeDonationsCard />
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
