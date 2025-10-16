
import React, { useRef } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useOnScreen } from '../hooks/useOnScreen';

export const ContactSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(sectionRef);

    return (
        <section 
            id="contato" 
            ref={sectionRef}
            className={`py-24 text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">Vamos Conversar?</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mb-12"></div>
            <div className="max-w-md mx-auto flex flex-col gap-6">

                <div className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-lg flex items-center p-4 transition-transform transform hover:scale-105 duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-700/50 rounded-md flex items-center justify-center">
                        <Mail className="text-sky-400" />
                    </div>
                    <div className="ml-4 text-left">
                        <h3 className="font-semibold text-slate-200">Email</h3>
                        <p className="text-slate-400 text-sm">inacio2maio@gmail.com</p>
                    </div>
                </div>

                <div className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-lg flex items-center p-4 transition-transform transform hover:scale-105 duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-700/50 rounded-md flex items-center justify-center">
                        <Phone className="text-sky-400" />
                    </div>
                    <div className="ml-4 text-left">
                        <h3 className="font-semibold text-slate-200">Telefone</h3>
                        <p className="text-slate-400 text-sm">(32) 99817-9372</p>
                    </div>
                </div>

                <div className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-lg flex items-center p-4 transition-transform transform hover:scale-105 duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-700/50 rounded-md flex items-center justify-center">
                        <Linkedin className="text-sky-400" />
                    </div>
                    <div className="ml-4 text-left">
                        <h3 className="font-semibold text-slate-200">LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/inacio-pimenta/" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm hover:text-sky-400 transition-colors">in/inacio-pimenta</a>
                    </div>
                </div>

            </div>
        </section>
    );
};
