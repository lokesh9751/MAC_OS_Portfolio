import React from 'react'
import MoveWindows from './MoveWindows'
import * as TerminalModule from 'react-console-emulator';
const TerminalEmulator = TerminalModule.default.default;
import './cli.scss'

const portfolioCommands = {
    about: {
        description: 'Learn more about Lokesh Harbola.',
        usage: 'about',
        fn: () => 'Lokesh Harbola is a frontend developer who enjoys turning practical ideas into polished, reliable products.'
    },
    skills: {
        description: 'List the technologies used across the portfolio.',
        usage: 'skills',
        fn: () => 'Frontend: React, JavaScript, Tailwind CSS\nBackend: Node.js \nData & tools: Git, Figma'
    },
    projects: {
        description: 'Showcase featured projects.',
        usage: 'projects',
        fn: () => '1. Scheds       - Course schedule generator\n2. FinTrack      - Personal finance dashboard\n3. SecureAuth    - Backend identity service\n4. ChatStream    - Real-time messaging app\n5. TerminalX     - CLI productivity tool\n\nOpen the GitHub window for project details and links.'
    },
    contact: {
        description: 'Display contact information.',
        usage: 'contact',
        fn: () => 'Email: lokesh.harbola.dev@gmail.com\nGitHub: github.com/lokesh9751\nStatus: Open to interesting opportunities'
    },
    resume: {
        description: 'Point to the resume window.',
        usage: 'resume',
        fn: () => 'Opening resume.pdf... Use the Resume icon in the dock to view it.'
    },
    ls: {
        description: 'List portfolio files and windows.',
        usage: 'ls',
        fn: () => 'about.md   contact.txt   projects/   resume.pdf   skills.txt'
    },
    whoami: {
        description: 'Print the current portfolio identity.',
        usage: 'whoami',
        fn: () => 'lokeshharbola'
    },
    echo: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: (...args) => args.join(' ')
    }
}

const Terminalcli = ({tab_naam,setWindowState}) => {
    return (
        <MoveWindows tab_naam={tab_naam} setWindowState={setWindowState} tab_name={'lokeshharbola - zsh'}>
            <div className="terminal-window">
                <TerminalEmulator
                    commands={portfolioCommands}
                    welcomeMessage={'Welcome to Lokesh Harbola\'s portfolio terminal!\nType help to see the available commands, or try about, skills, projects, contact, resume, and ls.'}
                    promptLabel={'lokeshharbola:~$'}
                    promptLabelStyle={{ color: 'red' }}
                    inputStyle={{ color: 'rgb(16, 223, 16)' }}
                    contentStyle={{ color: 'cyan' }} />
            </div>
        </MoveWindows>
    )
}

export default Terminalcli