'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function NavigationTabs() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const tabName = pathname.substring(1) || 'about'; // Default to 'about' if empty
        setActiveTab(tabName);
    }, [pathname]);

    const handleTabChange = (value) => {
        setActiveTab(value);
        router.push(`/${value === 'about' ? '/' : value}`);
    };

    return (
        <Tabs
            value={activeTab}
            className="mt-8"
            onValueChange={handleTabChange}
        >
            <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="shop">Shop 🛒</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
