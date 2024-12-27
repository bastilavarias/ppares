import HomeAboutCard from '@/components/home-about-card';
import HomeDonateCard from '@/components/home-donate-card';
import HomeDonationsCard from '@/components/home-donations-card';

export default function Home() {
    return (
        <div className="grid md:grid-cols-2 gap-8 relative">
            <div>
                <div className="sticky top-5 space-y-5">
                    <HomeDonateCard />
                </div>
            </div>
            <div className="space-y-8">
                <HomeDonationsCard />
            </div>
        </div>
    );
}
