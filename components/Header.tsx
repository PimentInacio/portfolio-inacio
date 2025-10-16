
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', ...NAV_LINKS.map(link => link.href.substring(1))];
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element && scrollPosition >= element.offsetTop) {
                    setActiveSection(sectionId);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = (
        <>
            {NAV_LINKS.map(link => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-slate-300 hover:text-white relative nav-link ${activeSection === link.href.substring(1) ? 'active-link' : ''}`}
                >
                    {link.label}
                </a>
            ))}
        </>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-lg border-b border-slate-800">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-gradient">Inácio.dev</a>
                <nav className="hidden md:flex items-center gap-8">
                    {navItems}
                </nav>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white z-50">
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-0 left-0 w-full bg-slate-900 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="pt-20 pb-8 px-6 flex flex-col items-center gap-6">
                    {navItems}
                </div>
            </div>
        </header>
    );
};
