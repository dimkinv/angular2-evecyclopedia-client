import {Ship} from './app/models/ship.model'
import {httpMockData} from './ship-data';

export function getRandomShip(): Ship {
  let name = getRandom(httpMockData);
  let race = getRandom(name.races);
  return getRandom(race.ships);
}

export function getGroups() {
  return httpMockData.map((group) => {
    return {
      name: group.name
    }
  });
}

export function getRacesForGroupName(groupName) {
  let groups = httpMockData.filter((group) => {
    return group.name == groupName;
  });

  if (groups.length === 0) {
    throw new Error(`group ${groupName} not found`);
  }

  return groups[0].races.map((race) => {
    return {
      name: race.name
    }
  });
}

export function getShipsByGroupAndRace(groupName, raceName, full = false) {
  let groups = httpMockData.filter((group) => {
    return group.name == groupName;
  });

  if (groups.length === 0) {
    throw new Error(`group ${groupName} not found`);
  }

  let races = groups[0].races.filter((race) => {
    return race.name == raceName;
  });

  if (races.length === 0) {
    throw new Error(`race ${raceName} not found`);
  }

  if (!full) {
    return races[0].ships.map((ship) => {
      return {
        name: ship.name
      }
    });
  }

  return races[0].ships;
}

export function getShipDetailsByGroupRaceAndShipNames(groupName, raceName, shipName) {
  let ships = getShipsByGroupAndRace(groupName, raceName, true);
  let filteredShips = ships.filter((ship) => {
    return ship.name === shipName;
  });

  if (filteredShips.length === 0) {
    throw new Error(`ship ${shipName} not found`);
  }

  return filteredShips[0];
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length) + 0]
}

