export default {
    importEmpireScore(req, socket){
        $.post('/includes/gR.php', {a: 0, b: 56}, (data) => {
            let payload = {
                path: '/import/empire/score',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importEmpireMilitary(req, socket){
        $.post('/includes/gR.php', {a: 16, b: 56}, (data) => {
            let payload = {
                path: '/import/empire/military',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importEmpireOffense(req, socket){
        $.post('/includes/gR.php', {a: 17, b: 56}, (data) => {
            let payload = {
                path: '/import/empire/offense',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importEmpireDefense(req, socket){
        $.post('/includes/gR.php', {a: 18, b: 56}, (data) => {
            let payload = {
                path: '/import/empire/defense',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importAllianceScore(req, socket){
        $.post('/includes/gR.php', {a: 1, b: 56}, (data) => {
            let payload = {
                path: '/import/alliance/score',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importAllianceReputation(req, socket){
        $.post('/includes/gR.php', {a: 19}, (data) => {
            let payload = {
                path: '/import/alliance/reputation',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importAllianceMilitary(req, socket){
        $.post('/includes/gR.php', {a: 20, b: 56}, (data) => {
            let payload = {
                path: '/import/alliance/military',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importCombatReputation(req, socket){
        $.post('/includes/gR.php', {a: 8}, (data) => {
            let payload = {
                path: '/import/combat/reputation',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importCombatOffesiveReputation(req, socket){
        $.post('/includes/gR.php', {a: 3}, (data) => {
            let payload = {
                path: '/import/combat/offensivereputation',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importCombatDefensiveReputation(req, socket){
        $.post('/includes/gR.php', {a: 4}, (data) => {
            let payload = {
                path: '/import/combat/defensivereputation',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importCombatUnitKills(req, socket){
        $.post('/includes/gR.php', {a: 5}, (data) => {
            let payload = {
                path: '/import/combat/unitkills',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importCombatPlundered(req, socket){
        $.post('/includes/gR.php', {a: 6}, (data) => {
            let payload = {
                path: '/import/combat/plundered',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importRaidingCaverns(req, socket){
        $.post('/includes/gR.php', {a: 7}, (data) => {
            let payload = {
                path: '/import/raiding/caverns',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importRaidingBosses(req, socket){
        $.post('/includes/gR.php', {a: 12}, (data) => {
            let payload = {
                path: '/import/raiding/bosses',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importTemplesPlayer(req, socket){
        $.post('/includes/gR.php', {a: 13, b: 56}, (data) => {
            let payload = {
                path: '/import/player/cities',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importTemplesAlliance(req, socket){
        $.post('/includes/gR.php', {a: 14, b: 56}, (data) => {
            let payload = {
                path: '/import/temples/alliance',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importIncomingAttacks(req, socket){
        $.post('/includes/getIO.php', {}, (data) => {
            let payload = {
                path: '/import/attack/incoming',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data.inc,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    importOutgoingAttacks(req, socket){
        $.post('/includes/getIO.php', {}, (data) => {
            let payload = {
                path: '/import/attack/outgoing',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data.out,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    importAllianceDonations(req, socket){
        $.post('/includes/gaDon.php', {}, (data) => {
            let payload = {
                path: '/import/alliance/donations',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importPlayerCities(req, socket){
        $.post('/overview/citover.php', {}, (data) => {
            let payload = {
                path: '/import/player/cities',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    },
    
    importPlayerMilitary(req, socket){
        $.post('/overview/trpover.php', {}, (data) => {
            let payload = {
                path: '/import/player/military',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: sessionStorage.getItem('app.cotg.ext.token'),
                data: data,
            }
            socket.send(JSON.stringify(payload));
        });
    }
}

