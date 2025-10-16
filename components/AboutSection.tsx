import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

export const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(sectionRef);

    return (
        <section 
            id="sobre" 
            ref={sectionRef}
            className={`py-24 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">Sobre Mim</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mb-12"></div>
            
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                
                <div className="lg:w-2/3">
                     <p className="text-lg text-slate-300 leading-relaxed text-center lg:text-left">
                        Sou um desenvolvedor apaixonado por transformar ideias em interfaces interativas e eficientes. Cursando <span className="text-sky-400 font-medium">Ciências Exatas</span> e <span className="text-sky-400 font-medium">Análise e Desenvolvimento de Sistemas</span>, busco constantemente novos desafios para aprimorar minhas habilidades e construir experiências digitais incríveis.
                    </p>
                </div>
        
                <div className="lg:w-1/3 w-full max-w-sm flex flex-col items-center">
                    <div className="w-full max-w-[250px] mx-auto p-1 photo-gradient-border rounded-full mb-8">
                        <img src="./images/foto.jpeg" alt="Foto de perfil de Inácio Pimenta" className="rounded-full w-full h-auto" />
                    </div>
                     <div className="w-full">
                        <h3 className="text-2xl font-semibold text-slate-100 mb-6 text-center">Formação Acadêmica</h3>
                        <div className="space-y-4">
                            <div className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 p-4 rounded-lg">
                                <h4 className="font-bold text-sky-300">Análise e Desenvolvimento de Sistemas (Cursando)</h4>
                                <p className="text-sm text-slate-400">Centro Universitário Internacional (Uninter)</p>
                                <p className="text-sm text-slate-500">Previsão: 12/2027</p>
                            </div>
                            <div className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 p-4 rounded-lg">
                                <h4 className="font-bold text-sky-300">Bacharelado em Ciências Exatas (Cursando)</h4>
                                <p className="text-sm text-slate-400">Universidade Federal de Juiz de Fora (UFJF)</p>
                                <p className="text-sm text-slate-500">Previsão: 12/2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
