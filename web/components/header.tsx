'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
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
    }, [setTheme]);

    return (
        <header className="py-8 bg-white dark:bg-inherit">
            <nav className="container mx-auto ">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-black text-primary">PPARES</h1>
                    <div></div>
                    <div className="flex items-center space-x-4">
                        {shouldShowThemeSwitch && (
                            <>
                                <Switch
                                    checked={darkMode}
                                    onCheckedChange={toggleDarkMode}
                                    className="mr-2"
                                    aria-label="Toggle dark mode"
                                />
                                {darkMode ? '🌑' : '☀️'}
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
