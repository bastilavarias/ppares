import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SoupIcon } from 'lucide-react';

export default function HomeHero() {
    return (
        <div className="bg-white">
            <div className="container px-12 mx-auto">
                <div className="relative h-64 md:h-96 overflow-hidden rounded-b-lg">
                    <Image
                        src="/assets/images/cover.jpg"
                        alt="Cover"
                        layout="fill"
                    />
                </div>
                <div className="-mt-3 relative flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 pb-4">
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/assets/images/profile.jpg"
                            alt="Profile"
                            width={100}
                            height={100}
                            className="w-36 h-36 rounded-full object-cover shadow-xl"
                        />
                        <div>
                            <h1 className="text-3xl font-bold">
                                Sebastian Curtis Lavarias
                            </h1>
                            <p className="text-gray-600">One step at a time</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <Button className="w-36 h-12 px-32 rounded-full t text-white">
                            <SoupIcon /> Bigyan ng Pares
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}