import WebSocket from './socket';
import ExportPlayerData from './export-player-data';
import ExportRankingData from './export-ranking-data';
import UI from './ui';
import Router from './router';
import Authenticate from './authenticate';

let lib = {
    'UI': UI,
    'WebSocket': WebSocket,
    'ExportPlayerData': ExportPlayerData,
    'ExportRankingData': ExportRankingData,
    'Router': Router,
    'Authenticate': Authenticate,
}

window.$extClient = lib;