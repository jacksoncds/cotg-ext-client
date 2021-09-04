import dataImporter from './import';

export default class {
    constructor(router){
        this.bindExportPlayerRoutes(router);
    }

    bindExportPlayerRoutes(router){
        router.bind('/import/attack/incoming', dataImporter.importIncomingAttacks);
        router.bind('/import/attack/outgoing', dataImporter.importOutgoingAttacks);
    }
}