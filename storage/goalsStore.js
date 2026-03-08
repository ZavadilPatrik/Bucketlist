//Práce se souborem goals.json - načítání a ukládání cílů

const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '../data/goals.json');

module.exports = {
  readAll: () => { //Funkce pro načtení všech cílů ze souboru
    try {
      if (!fs.existsSync(DATA_PATH)) return [];
      return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    } catch (e) { return []; }
  },
  saveAll: (goals) => { //Funkce pro uložení všech cílů do souboru
    fs.writeFileSync(DATA_PATH, JSON.stringify(goals, null, 2));
  }
};