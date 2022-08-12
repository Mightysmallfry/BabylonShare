var newBuild = {

    //FABRICATORS
    "/pa/units/land/b_fab_turret/b_fab_turret.json": ["factory", 0, {row : 2, column : 5}],
    "/pa/units/land/b_adv_fab_turret/b_adv_fab_turret.json" : ["factory", 0, {row : 1, column : 5}],

    //LAND STRUCTURE UNITS
    "/pa/units/land/b_artillery_napalm/b_artillery_napalm.json": ["combat", 0, {row : 0, column : 2}],
    "/pa/units/land/b_artillery_long/b_artillery_long.json": ["combat", 0, { row : 1 , column : 2}],
    "/pa/units/land/b_artillery_short/b_artillery_short.json": ["combat", 0, { row : 2 , column : 2}],
    
    



    "/pa/units/land/b_shield_gen/b_shield_gen.json": ["combat", 0, {row : 1 , column : 5}],
    "/pa/units/land/b_radar_adv/b_radar_adv.json": ["combat", 0, {row : 2 , column : 5}],
    "/pa/units/land/b_system_radar/b_system_radar.json": ["utility", 0, {row : 0, column : 2}],
    "/pa/units/land/b_radar_jammer_titan/b_radar_jammer_titan.json" : ["utility", 0, {row : 1, column : 5}],
    "/pa/units/orbital/b_ion_defense/b_ion_defense.json" : ["combat", 0, {row : 2, column : 4}],

    //TITANS
    "/pa/units/air/b_titan_air/b_titan_air.json" : ["factory", 0, {row : 0, column : 4}],


    //LAND DEMI_TITANS
    "/pa/units/land/b_demi_titan_bot/b_demi_titan_bot.json" : ["factory", 0, {row : 0, column : 5}],

    //LAND BOT UNITS
    "/pa/units/land/b_bot_basic/b_bot_basic.json" : ["bot", 0, {row : 2, column : 1}],
    "/pa/units/land/b_bot_sniper/b_bot_sniper.json" : ["bot", 0, {row : 1, column : 2}],
    "/pa/units/land/b_adv_heavy_bot/b_adv_heavy_bot.json" : ["bot", 0, {row : 1, column : 5}],
    "/pa/units/land/b_hell_hound/b_hell_hound.json" : ["bot", 0, {row : 2, column : 2}],
    "/pa/units/land/b_bot_seismic/b_bot_seismic.json" : ["bot", 0, {row : 1, column : 5}],

    //AIR UNITS
    "/pa/units/air/b_gunship/b_gunship.json": ["air", 0, {row : 2, column : 1}],

    //SEA STRUCTURE UNITS
    "/pa/units/sea/b_adv_mining_platform/b_adv_mining_platform.json" : ["utility", 0, {row : 0, column : 5}],

    //ORBITAL STRUCTURE UNITS
    "/pa/units/orbital/b_mining_platform/b_mining_platform.json" : ["orbital_structure", 0, {row : 1, column : 1}],

    //ORBITAL UNITS
    "/pa/units/orbital/b_orbital_fab_bot_adv/b_orbital_fab_bot_adv.json" : ["orbital", 0, {row : 1, column: 0}],
    "/pa/units/orbital/b_orbital_battleship/b_orbital_battleship.json": ["orbital", 0, {row : 0, column : 0}],
    "/pa/units/orbital/b_orbital_frigate/b_orbital_frigate.json" : ["orbital", 0, {row : 0, column : 1}],
    "/pa/units/orbital/b_orbital_frigate/b_drone/b_drone.json" : ["orbital", 0, {row : 0, column : 4}],
    "/pa/units/orbital/b_orbital_railgun/b_orbital_railgun.json" : ["orbital", 0, {row : 0, column : 4}]



}

if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}