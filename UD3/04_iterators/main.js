'use strict'

const { log } = require('console');

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

//iterar e imprimir los pilotos utilizandoun for normal
function iterateSimple() {

  for (let i = 0; i < pilots.length; i++) {
    console.log(pilots[i]);
  }
}
//iterateSimple();

//iterar e imprimir los pilotos utilizando array.forEach
function iterateForEach() {
  pilots.forEach(pilot => {
    console.log(pilot);
  });
}
//iterateForEach();

// devolver un array con los ids de los pilotos utilizando array.map
function mapIds() {
  let result = pilots.map(pilot => pilot.id);
  return result;
  
}
//mapIds();

// devolver un array con los pilotos que son rebeldes utilizando array.filter
function rebels() {
   let result = pilots.filter(pilot => pilot.faction === 'Rebels');
   return result;
}

//devolver el numero de pilotos de una determinada fraccion
function totalFaction(faction) {
  let result = pilots.filter(pilots => pilots.faction === faction).length;
  return result;
}

//totalFaction('Empire');

//calcular la media de años de los pilotos de una fraccion
function avgYears(faction) {
  const factionPilots = pilots.filter(pilot => pilot.faction === faction);
  const totalYears = factionPilots.reduce((sum, pilot) => sum + pilot.years, 0);
  return totalYears / factionPilots.length;
}
//console.log(avgYears('Empire'));


console.log('IDs:', mapIds());
console.log('Pilotos rebeldes:', rebels());
console.log('Total Rebels:', totalFaction('Rebels'));
console.log('Media años Rebels:', avgYears('Rebels'));
console.log('Media años Empire:', avgYears('Empire'));

try {
  assert.deepStrictEqual(mapIds(), [2,8,40,66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

  assert.deepStrictEqual(totalFaction('Rebels'), 2)

  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error)
}
  