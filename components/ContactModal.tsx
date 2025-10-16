
import React from 'react';
import { Mail, Phone, Linkedin, X } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-lg w-full max-w-md p-8 transition-all duration-300 transform"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-100">Informações de Contato</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-white">
                        <X size={28} />
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-sky-400" />
                        <div>
                            <h4 className="font-semibold">Email</h4>
                            <p className="text-slate-300">inacio21maio@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-sky-400" />
                        <div>
                            <h4 className="font-semibold">Telefone</h4>
                            <p className="text-slate-300">(32) 99817-9372</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Linkedin className="w-6 h-6 text-sky-400" />
                        <div>
                            <h4 className="font-semibold">LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/inacio-pimenta/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors">linkedin.com/in/inacio-pimenta</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
