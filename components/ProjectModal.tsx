
import React from 'react';
import type { Project } from '../types';
import { Github, ExternalLink, X } from 'lucide-react';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-lg w-full max-w-2xl p-8 transition-all duration-300 transform"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-white">
                        <X size={28} />
                    </button>
                </div>
                <p className="text-slate-300 mb-6">{project.longDescription}</p>
                <div className="mb-6">
                    <h4 className="font-semibold text-slate-100 mb-2">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="bg-sky-900/50 text-sky-300 py-1 px-3 rounded-md text-sm">{t}</span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-slate-500 text-slate-200 font-semibold py-2 px-6 rounded-lg hover:bg-slate-700 transition-all duration-300 inline-flex items-center gap-2">
                            <Github className="w-4 h-4" /> GitHub
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-sky-600 transition-all duration-300 inline-flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" /> Ver Site
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
