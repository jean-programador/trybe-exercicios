const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => {
    return Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
}

const damageWarrior = () => {
    const minDamage = warrior.strength;
    const maxDamege = warrior.weaponDmg * minDamage;
    return Math.floor(Math.random() * (maxDamege - minDamage + 1)) + minDamage;
}

const damageMage = () => {
    const minDamage = mage.intelligence;
    const maxDamege = minDamage * 2;
    const mageTurn = {
        dan: "Não possui mana suficiente",
        man: 0
    };
    
    if (mage.mana > 15) {
        let damage = Math.floor(Math.random() * (maxDamege - minDamage + 1)) + minDamage;
        mageTurn.man = 15;
        mageTurn.dan = damage;
        return mageTurn;
    }
    return mageTurn;

}

const gameActions = {
    warriorTurn: (atackWarrior) => {
        dragon.healthPoints -= atackWarrior();
        warrior.damage = atackWarrior();
    },
    mageTurn: (atackMage) => {
        dragon.healthPoints -= atackMage().dan;
        mage.damage = atackMage().dan;
        mage.mana -= atackMage().man;
    },
    dragonTurn: (atackDragon) => {
        mage.healthPoints -= atackDragon();
        warrior.healthPoints -= atackDragon();
        dragon.damage = atackDragon();
    },
    result: () => battleMembers,
};

gameActions.warriorTurn(damageWarrior);
gameActions.mageTurn(damageMage);
gameActions.dragonTurn(damageDragon);
gameActions.warriorTurn(damageWarrior);
gameActions.mageTurn(damageMage);
gameActions.dragonTurn(damageDragon);
gameActions.mageTurn(damageMage);
gameActions.mageTurn(damageMage);
gameActions.mageTurn(damageMage);
gameActions.mageTurn(damageMage);
gameActions.mageTurn(damageMage);
gameActions.mageTurn(damageMage);
gameActions.mageTurn(damageMage);
console.log(gameActions.result());