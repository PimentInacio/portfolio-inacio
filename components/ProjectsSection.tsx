
import React, { useRef } from 'react';
import type { Project } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

interface ProjectsSectionProps {
    projects: Project[];
    onProjectClick: (project: Project) => void;
}

const ProjectCard: React.FC<{ project: Project, onClick: () => void }> = ({ project, onClick }) => (
    <div 
        className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-lg overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2 duration-300 cursor-pointer"
        onClick={onClick}
    >
        <div className="p-6">
            <h3 className="font-bold text-xl text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                {project.shortDescription}
            </p>
        </div>
        <div className="p-6 bg-slate-900/50 text-xs text-slate-400 flex flex-wrap gap-2 mt-auto">
            {project.tech.slice(0, 3).map(t => (
                <span key={t} className="bg-sky-900/50 text-sky-300 py-1 px-2 rounded">{t}</span>
            ))}
            {project.tech.length > 3 && (
                <span className="bg-sky-900/50 text-sky-300 py-1 px-2 rounded">...</span>
            )}
        </div>
    </div>
);


export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onProjectClick }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(sectionRef);

    return (
        <section 
            id="projetos" 
            ref={sectionRef}
            className={`py-24 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">Projetos</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.title} project={project} onClick={() => onProjectClick(project)} />
                ))}
            </div>
        </section>
    );
};
