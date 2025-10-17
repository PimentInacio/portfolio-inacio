import type { Project, Skill } from './types';

import jsIcon from './images/javascript.png';
import pythonIcon from './images/python.png';
import cppIcon from './images/cpp.png';
import htmlIcon from './images/html5.png';
import cssIcon from './images/css3.png';
import reactIcon from './images/react.png';
import gitIcon from './images/git.png';
import githubIcon from './images/github.png';
import figmaIcon from './images/figma.png';
import excelIcon from './images/excel.png';

export const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

export const PROJECTS: Project[] = [
  {
    title: "Student Allocation System",
    shortDescription: "Sistema web para distribuição otimizada de alunos em provas, utilizando Programação Linear para uma alocação eficiente.",
    longDescription: "Um sistema web desenvolvido para otimizar a distribuição de alunos em salas de prova, utilizando Programação Linear para garantir uma alocação eficiente e justa. O projeto resolve um problema complexo de logística acadêmica com uma solução tecnológica robusta.",
    tech: ["Python", "JavaScript", "HTML", "CSS", "GLPK"],
    githubUrl: "https://github.com/PimentInacio/student-allocation",
  },
  {
    title: "ClickCocho (Extensão UFJF)",
    shortDescription: "Aplicativo para otimizar o manejo de cocho de bovinos utilizando visão computacional, com foco em uma interface de usuário responsiva e intuitiva para o campo.",
    longDescription: "Neste projeto de extensão da UFJF, o desafio foi aplicar visão computacional para analisar o cocho e automatizar o manejo. Atuei no desenvolvimento da interface do aplicativo que exibe os dados e permite a interação do usuário.",
    tech: ["React Native", "JavaScript", "Expo"],
  },
  {
    title: "PiattoBurger Website",
    shortDescription: "Projeto de ponta a ponta: da prototipagem no Figma ao desenvolvimento e implementação de Google Analytics para o cliente.",
    longDescription: "Realizei o ciclo completo de desenvolvimento para este projeto, desde a prototipagem da interface no Figma até a codificação final. Atendi às necessidades do cliente criando um hub de links responsivo e implementei o Google Analytics via JavaScript para o acompanhamento de métricas de acesso.",
    tech: ["Figma", "HTML", "CSS", "Google Analytics"],
    liveUrl: "https://piatto-burger.vercel.app/",
  },
];

export const SKILL_CATEGORIES: { title: string; skills: Skill[] }[] = [
    {
        title: "Linguagens",
        skills: [
            { name: "JavaScript", icon: jsIcon },
            { name: "Python", icon: pythonIcon },
            { name: "C++", icon: cppIcon },
        ],
    },
    {
        title: "Desenvolvimento Web",
        skills: [
            { name: "HTML5", icon: htmlIcon },
            { name: "CSS3", icon: cssIcon },
            { name: "React", icon: reactIcon },
        ],
    },
    {
        title: "Ferramentas e Tecnologias",
        skills: [
            { name: "Git", icon: gitIcon },
            { name: "GitHub", icon: githubIcon },
            { name: "Figma", icon: figmaIcon },
            { name: "Excel", icon: excelIcon },
        ],
    },
];
