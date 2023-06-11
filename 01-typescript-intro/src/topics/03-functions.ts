interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number) => {
    character.hp += amount;
}

const Linda: Character ={
    name: 'lindapazw',
    hp:50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    },


}

healCharacter( Linda,50);
Linda.showHp();


export{};