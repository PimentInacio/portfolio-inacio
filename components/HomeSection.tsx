import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';

interface HomeSectionProps {
    onContactClick: () => void;
}

const FULL_NAME = 'Inácio da Silva Mota Pimenta';

export const HomeSection: React.FC<HomeSectionProps> = ({ onContactClick }) => {
    const [typedName, setTypedName] = useState('');
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (typedName.length < FULL_NAME.length) {
            const timeoutId = setTimeout(() => {
                setTypedName(FULL_NAME.slice(0, typedName.length + 1));
            }, 100);
            return () => clearTimeout(timeoutId);
        } else {
            const timeoutId = setTimeout(() => setShowContent(true), 500);
            return () => clearTimeout(timeoutId);
        }
    }, [typedName]);

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-start text-left pt-24">
            <div className="max-w-3xl">
                <p className="text-xl md:text-2xl text-slate-300 mb-2">Olá, eu sou o</p>
                <h1 className="text-5xl md:text-7xl font-bold text-gradient min-h-[80px] md:min-h-[100px]">
                    {typedName}
                    {typedName.length < FULL_NAME.length && <span className="blinking-cursor">|</span>}
                </h1>
                
                <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-xl md:text-2xl font-medium text-slate-400 mt-4">Desenvolvedor Frontend</h2>
                    
                    <div className="mt-8 flex gap-4">
                        <a href="https://github.com/PimentInacio" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors" aria-label="GitHub">
                            <Github className="w-7 h-7" />
                        </a>
                        <a href="https://www.linkedin.com/in/inacio-pimenta/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-7 h-7" />
                        </a>
                    </div>
    
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="./images/curriculo.pdf" download="Currículo Inácio Pimenta.pdf" className="bg-sky-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105">
                            Download CV
                        </a>
                        <button onClick={onContactClick} className="border border-slate-500 text-slate-200 font-semibold py-3 px-8 rounded-lg hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105">
                            Entrar em Contato
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
