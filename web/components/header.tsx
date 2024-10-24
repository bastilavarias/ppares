'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun, ShoppingCart, User, Heart } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [shouldShowThemeSwitch, setShouldShowThemeSwitch] = useState(false);
    const { setTheme, theme } = useTheme();

    const toggleDarkMode = () => {
        if (theme === 'light') {
            setTheme('dark');
            setDarkMode(true);
        } else {
            setTheme('light');
            setDarkMode(false);
        }
    };

    const getSaveTheme = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || null;
        }
    };

    useEffect(() => {
        const _theme = getSaveTheme();
        if (_theme) {
            setTheme(_theme);
            setDarkMode(_theme === 'dark');
        }
        setShouldShowThemeSwitch(true);
    }, []);

    return (
        <header className="py-4 bg-white">
            <nav className="container mx-auto ">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-black">PPARES</h1>
                    <div></div>
                    <div className="flex items-center space-x-4">
                        <Button size="icon" variant="ghost">
                            <User className="h-5 w-5" />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <ShoppingCart className="h-5 w-5" />
                        </Button>
                        {shouldShowThemeSwitch && (
                            <>
                                <Switch
                                    checked={darkMode}
                                    onCheckedChange={toggleDarkMode}
                                    className="ml-4"
                                    aria-label="Toggle dark mode"
                                />
                                {darkMode ? (
                                    <Moon className="h-5 w-5" />
                                ) : (
                                    <Sun className="h-5 w-5" />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
