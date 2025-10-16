
import React from 'react';

export const Footer = () => {
    return (
        <footer className="border-t border-slate-800 mt-20">
            <div className="container mx-auto px-6 py-6 text-center text-slate-500">
                <p>&copy; {new Date().getFullYear()} Inácio da Silva Mota Pimenta</p>
            </div>
        </footer>
    );
};
