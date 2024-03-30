import { Injectable } from '@angular/core';
import { Tile } from './tile';
import { ExpansionPack } from './expansion';

@Injectable({
  providedIn: 'root',
})
export class TileDatasetsService {

  //Static data defining each expansion of the game

  static readonly BaseC3: ExpansionPack = {
    codeName: 'BaseC3',
    realName: 'Base Game',
    printing: '3rd Edition',
    tiles: [
      {
        expansion: 'BaseC3',
        expId: 0,
        sides: 'FFRF',
        image: 'Base_Game_C3_Tile_A.png',
        stringRep: 'This is a tile',
        monastery: true,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 1,
        sides: 'FFFF',
        image: 'Base_Game_C3_Tile_B.png',
        stringRep: 'This is a tile',
        monastery: true,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 2,
        sides: 'CCCC',
        image: 'Base_Game_C3_Tile_C.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: true,
      },
      {
        expansion: 'BaseC3',
        expId: 3,
        sides: 'CRFR',
        image: 'Base_Game_C3_Tile_D.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 4,
        sides: 'CFFF',
        image: 'Base_Game_C3_Tile_E.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 5,
        sides: 'FCFC',
        image: 'Base_Game_C3_Tile_F.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: true,
      },
      {
        expansion: 'BaseC3',
        expId: 6,
        sides: 'FCFC',
        image: 'Base_Game_C3_Tile_G.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 7,
        sides: 'CFCF',
        image: 'Base_Game_C3_Tile_H.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 8,
        sides: 'CFFC',
        image: 'Base_Game_C3_Tile_I.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 9,
        sides: 'CRRF',
        image: 'Base_Game_C3_Tile_J.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 10,
        sides: 'CFRR',
        image: 'Base_Game_C3_Tile_K.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 11,
        sides: 'CRRR',
        image: 'Base_Game_C3_Tile_L.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 12,
        sides: 'CCFF',
        image: 'Base_Game_C3_Tile_M.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: true,
      },
      {
        expansion: 'BaseC3',
        expId: 13,
        sides: 'CCFF',
        image: 'Base_Game_C3_Tile_N.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 14,
        sides: 'CRRC',
        image: 'Base_Game_C3_Tile_O.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: true,
      },
      {
        expansion: 'BaseC3',
        expId: 15,
        sides: 'CRRC',
        image: 'Base_Game_C3_Tile_P.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 16,
        sides: 'CCFC',
        image: 'Base_Game_C3_Tile_Q.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: true,
      },
      {
        expansion: 'BaseC3',
        expId: 17,
        sides: 'CCFC',
        image: 'Base_Game_C3_Tile_R.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 18,
        sides: 'CCRC',
        image: 'Base_Game_C3_Tile_S.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: true,
      },
      {
        expansion: 'BaseC3',
        expId: 19,
        sides: 'CCRC',
        image: 'Base_Game_C3_Tile_T.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 20,
        sides: 'RFRF',
        image: 'Base_Game_C3_Tile_U.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 21,
        sides: 'FFRR',
        image: 'Base_Game_C3_Tile_V.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 22,
        sides: 'FRRR',
        image: 'Base_Game_C3_Tile_W.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'BaseC3',
        expId: 23,
        sides: 'RRRR',
        image: 'Base_Game_C3_Tile_X.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
    ],
  };

  static readonly InnsAndCathedralsC3: ExpansionPack = {
    codeName: 'InnsAndCathedralsC3',
    realName: 'Expansion 1: Inns and Cathedrals',
    printing: '3rd Edition',
    tiles: [
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 0,
        sides: 'FFRR',
        image: 'Inns_And_Cathedrals_C3_Tile_A.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        inn: true,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 1,
        sides: 'FRFR',
        image: 'Inns_And_Cathedrals_C3_Tile_B.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        inn: true,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 2,
        sides: 'FRRR',
        image: 'Inns_And_Cathedrals_C3_Tile_C.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        inn: true,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 3,
        sides: 'FRFR',
        image: 'Inns_And_Cathedrals_C3_Tile_D.png',
        stringRep: 'This is a tile',
        monastery: true,
        shield: false,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 4,
        sides: 'RRRR',
        image: 'Inns_And_Cathedrals_C3_Tile_E.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 5,
        sides: 'CRFC',
        image: 'Inns_And_Cathedrals_C3_Tile_F.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 6,
        sides: 'FFFC',
        image: 'Inns_And_Cathedrals_C3_Tile_G.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 7,
        sides: 'CCCC',
        image: 'Inns_And_Cathedrals_C3_Tile_H.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 8,
        sides: 'CRCR',
        image: 'Inns_And_Cathedrals_C3_Tile_I.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 9,
        sides: 'CFRF',
        image: 'Inns_And_Cathedrals_C3_Tile_J.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 10,
        sides: 'CCCC',
        image: 'Inns_And_Cathedrals_C3_Tile_Ka.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        cathedral: true,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 11,
        sides: 'CCCC',
        image: 'Inns_And_Cathedrals_C3_Tile_Kb.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        cathedral: true,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 12,
        sides: 'CRRC',
        image: 'Inns_And_Cathedrals_C3_Tile_L.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: true,
        inn: true,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 13,
        sides: 'CFRR',
        image: 'Inns_And_Cathedrals_C3_Tile_M.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        inn: true,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 14,
        sides: 'CFRC',
        image: 'Inns_And_Cathedrals_C3_Tile_N.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        inn: true,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 15,
        sides: 'CCFC',
        image: 'Inns_And_Cathedrals_C3_Tile_O.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 16,
        sides: 'CFCC',
        image: 'Inns_And_Cathedrals_C3_Tile_P.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: true,
      },
      {
        expansion: 'InnsAndCathedralsC3',
        expId: 17,
        sides: 'RCRC',
        image: 'Inns_And_Cathedrals_C3_Tile_Q.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: true,
      },
    ],
  };

  static readonly RiverIC2: ExpansionPack = {
    codeName: 'RiverIC2',
    realName: 'Base Game - River',
    printing: '2nd Edition',
    tiles: [
      {
        expansion: 'RiverIC2',
        expId: 0,
        sides: 'FFSF',
        image: 'River_I_C2_Tile_A.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 1,
        sides: 'CSRS',
        image: 'River_I_C2_Tile_B.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 2,
        sides: 'CSCS',
        image: 'River_I_C2_Tile_C.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 3,
        sides: 'SFSF',
        image: 'River_I_C2_Tile_D.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 4,
        sides: 'CCSS',
        image: 'River_I_C2_Tile_E.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 5,
        sides: 'SFSF',
        image: 'River_I_C2_Tile_F.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 6,
        sides: 'SFFS',
        image: 'River_I_C2_Tile_G.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 7,
        sides: 'FSRS',
        image: 'River_I_C2_Tile_H.jpg',
        stringRep: 'This is a tile',
        monastery: true,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 8,
        sides: 'RSSR',
        image: 'River_I_C2_Tile_I.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 9,
        sides: 'FSSF',
        image: 'River_I_C2_Tile_J.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 10,
        sides: 'SRSR',
        image: 'River_I_C2_Tile_K.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'RiverIC2',
        expId: 11,
        sides: 'SFFF',
        image: 'River_I_C2_Tile_L.jpg',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
    ],
  };

  static readonly TradersAndBuildersC3: ExpansionPack = {
    codeName: 'TradersAndBuildersC3',
    realName: 'Expansion 2: Traders and Builders',
    printing: '3rd Edition',
    tiles: [
      {
        expansion: 'TradersAndBuildersC3',
        expId: 0,
        sides: 'CRFF',
        image: 'Traders_And_Builders_C3_Tile_A.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 1,
        sides: 'RRRR',
        image: 'Traders_And_Builders_C3_Tile_B.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 2,
        sides: 'CFRR',
        image: 'Traders_And_Builders_C3_Tile_C.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 3,
        sides: 'CCRC',
        image: 'Traders_And_Builders_C3_Tile_D.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wheat: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 4,
        sides: 'FCRC',
        image: 'Traders_And_Builders_C3_Tile_E.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wheat: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 5,
        sides: 'CFRC',
        image: 'Traders_And_Builders_C3_Tile_F.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wheat: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 6,
        sides: 'CFFC',
        image: 'Traders_And_Builders_C3_Tile_G.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wheat: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 7,
        sides: 'CCFC',
        image: 'Traders_And_Builders_C3_Tile_H.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wheat: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 8,
        sides: 'CFRC',
        image: 'Traders_And_Builders_C3_Tile_I.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wheat: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 9,
        sides: 'FRRR',
        image: 'Traders_And_Builders_C3_Tile_J.png',
        stringRep: 'This is a tile',
        monastery: true,
        shield: false,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 10,
        sides: 'CCRF',
        image: 'Traders_And_Builders_C3_Tile_K.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        cloth: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 11,
        sides: 'CCRC',
        image: 'Traders_And_Builders_C3_Tile_L.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        cloth: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 12,
        sides: 'CCCC',
        image: 'Traders_And_Builders_C3_Tile_M.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        cloth: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 13,
        sides: 'CCFC',
        image: 'Traders_And_Builders_C3_Tile_N.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        cloth: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 14,
        sides: 'CRRC',
        image: 'Traders_And_Builders_C3_Tile_O.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        cloth: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 15,
        sides: 'FCCC',
        image: 'Traders_And_Builders_C3_Tile_P.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wine: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 16,
        sides: 'FCFC',
        image: 'Traders_And_Builders_C3_Tile_Q.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wine: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 17,
        sides: 'RCRC',
        image: 'Traders_And_Builders_C3_Tile_R.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wine: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 18,
        sides: 'FCRC',
        image: 'Traders_And_Builders_C3_Tile_S.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wine: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 19,
        sides: 'CFFC',
        image: 'Traders_And_Builders_C3_Tile_T.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wine: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 20,
        sides: 'CRRC',
        image: 'Traders_And_Builders_C3_Tile_U.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wine: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 21,
        sides: 'CCRC',
        image: 'Traders_And_Builders_C3_Tile_V.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wine: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 22,
        sides: 'CRFC',
        image: 'Traders_And_Builders_C3_Tile_W.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wine: true,
      },
      {
        expansion: 'TradersAndBuildersC3',
        expId: 23,
        sides: 'CCCC',
        image: 'Traders_And_Builders_C3_Tile_X.png',
        stringRep: 'This is a tile',
        monastery: false,
        shield: false,
        wine: true,
      },
    ],
  };

  
  // IMPORTANT: when new expansions are added, they will only display if it exists in this list
  static readonly expansions = [
    TileDatasetsService.BaseC3,
    TileDatasetsService.InnsAndCathedralsC3,
    TileDatasetsService.RiverIC2,
    TileDatasetsService.TradersAndBuildersC3,
  ];

  constructor() {}

  baseC3Tiles(): Tile[] {
    return TileDatasetsService.BaseC3.tiles;
  }

  innsAndCathedralsC3Tiles(): Tile[] {
    return TileDatasetsService.InnsAndCathedralsC3.tiles;
  }

  riverIC2Tiles(): Tile[] {
    return TileDatasetsService.RiverIC2.tiles;
  }

  tradersAndBuildersC3Tiles(): Tile[] {
    return TileDatasetsService.TradersAndBuildersC3.tiles;
  }

  tilesEqual(t1: Tile, t2: Tile): boolean {
    return t1.expansion === t2.expansion && t1.expId === t2.expId;
  }
}
