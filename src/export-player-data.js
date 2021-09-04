
import dataImporter from './import';

export default class {
    constructor(router){
        this.bindExportPlayerRoutes(router);
    }

    bindExportPlayerRoutes(router){
        router.bind('/import/player/cities', dataImporter.importPlayerCities);
        router.bind('/import/player/military', dataImporter.importPlayerMilitary);
    }
}

