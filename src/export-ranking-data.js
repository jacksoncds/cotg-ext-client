import dataImporter from './import';

export default class {
    constructor(router){
        this.bindExportPlayerRoutes(router);
    }

    bindExportPlayerRoutes(router){
        router.bind('/import/empire/score', dataImporter.importPlayerCities);
        router.bind('/import/empire/military', dataImporter.importPlayerMilitary);
        router.bind('/import/empire/offense', dataImporter.importEmpireOffense);
        router.bind('/import/empire/defense', dataImporter.importEmpireDefense);
        router.bind('/import/alliance/score', dataImporter.importAllianceScore);
        router.bind('/import/alliance/military', dataImporter.importAllianceMilitary);
        router.bind('/import/alliance/reputation', dataImporter.importAllianceReputation);
        router.bind('/import/combat/reputation', dataImporter.importCombatReputation);
        router.bind('/import/combat/offensivereputation', dataImporter.importCombatOffesiveReputation);
        router.bind('/import/combat/defensivereputation', dataImporter.importCombatDefensiveReputation);
        router.bind('/import/combat/unitkills', dataImporter.importCombatUnitKills);
        router.bind('/import/combat/plundered', dataImporter.importCombatPlundered);
        router.bind('/import/raiding/caverns', dataImporter.importRaidingCaverns);
        router.bind('/import/raiding/bosses', dataImporter.importRaidingBosses);
        router.bind('/import/temples/player', dataImporter.importTemplesPlayer);
        router.bind('/import/temples/alliance', dataImporter.importTemplesAlliance);
        router.bind('/import/alliance/donations', dataImporter.importAllianceDonations);
    }
}