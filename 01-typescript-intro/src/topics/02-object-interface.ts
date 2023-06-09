const skills: string[] = ['golpear', 'matar', 'abrazo'];

interface Charanter {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const Linda: Charanter = {
    name: "Linda",
    hp: 100,
    skills: ['abrazo', 'golpear']
};

Linda.hometown = 'Salta'
console.table(Linda)

export {};