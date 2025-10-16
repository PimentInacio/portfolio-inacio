import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SKILL_CATEGORIES } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
        <div className="skill-card rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <img src={skill.icon} alt={`${skill.name} logo`} className="w-12 h-12 mb-3 object-contain" />
            <span className="text-sm font-medium text-slate-300">{skill.name}</span>
        </div>
    );
};

export const SkillsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(sectionRef);

    return (
        <section 
            id="habilidades" 
            ref={sectionRef}
            className={`py-24 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">Habilidades</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mb-12"></div>
            
            <div className="max-w-5xl mx-auto space-y-12">
                {SKILL_CATEGORIES.map((category) => (
                    <div key={category.title}>
                        <h3 className="text-2xl font-semibold text-slate-200 mb-6 text-center md:text-left">{category.title}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {category.skills.map(skill => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
