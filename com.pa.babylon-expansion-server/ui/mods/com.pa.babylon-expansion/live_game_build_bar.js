var babylonLiveGameBuildBarLoaded;

if (!babylonLiveGameBuildBarLoaded) {
  babylonLiveGameBuildBarLoaded = true;

  function babylonLiveGameBuildBar() {
    
      if (model.BuildSet && model.BuildSet.tabsTemplate) {
          model.BuildSet.tabsTemplate = model.BuildSet.tabsTemplate.concat([
          ["B_factory", "!LOC:factory", true],
          ["B_combat", "!LOC:combat", true],
          ["B_utility", "!LOC:utility", true],
          ["B_vehicle", "!LOC:vehicle"],
          ["B_bot", "!LOC:bot"],
          ["B_air", "!LOC:air"],
          ["B_sea", "!LOC:sea"],
          ["B_orbital", "!LOC:orbital", true],
          ["B_orbital_structure", "orbital structure", true],
          ["B_ammo", "!LOC:ammo", true],
        ]);
      }

      ko.computed(function() {
        var buildSet = model.buildSet();
        if (!buildSet)
            return;
        var hotkeys = model.hotkeys();
        var groups = buildSet.tabsByGroup()

        setTimeout(function() {
            // Get tab hotkeys
            _.forEach(buildSet.tabs(), function(tab) {
                var baseTab = tab.group().replace('B_', '')
                if (!tab.label()) {
                    tab.label(groups[baseTab].label())
                }
                tab.hotkey(hotkeys['tab_' + baseTab] || '');

                tab.buildGroup = tab.buildGroup || ko.observable(baseTab)
                tab.buildGroup(baseTab)
            });
        }, 0)
    })

      handlers.start_build_sequence = model.startBuildSequence = function(params) {
        var group = params.group;
        var locked = params.locked;

        var tabs = model.buildSet().tabs().filter(function(tab) {
            return tab.visible() && tab.buildGroup() == group
        })
        if (tabs.length < 1) return
        group = tabs[0].group()

        model.activeBuildGroup(group);
        if (locked)
            model.activeBuildGroupLocked(locked);
    };
    

      
    try
    {
    babylonLiveGameBuildBar();
    }
    catch (e)
    {
    console.error(e);
    console.error(JSON.stringify(e));
    }
  }
}
