var babylonCommanders = ["/pa/units/commanders/b_vespucci/b_vespucci.json"];

//babylon commander picker colouring
loadCSS(
  "coui://ui/mods/com.pa.babylon-expansion/css/babylon_commander_picker.css"
);

//Faction distinctions
model.isBabylon = function (commander) {
  return _.includes(babylonCommanders, commander);
};

model.isCustomFaction = function (commander) {
  return model.isBabylon(commander);
};

//Style Commander Picker
$("#commander-picker .div-commander-picker-item.btn_std_ix").attr(
  "data-bind",
  "css: {babylonCommander: model.isBabylon($data), click: function () { model.setCommander($index()) }, click_sound: 'default', rollover_sound: 'default'"
);

$("#ai-commander-picker .div-commander-picker-item.btn_std_ix").attr(
  "data-bind",
  "css: {babylonCommander: model.isBabylon($data), click: function () { model.setAICommander(model.selectedAI(), $data) }, click_sound: 'default', rollover_sound: 'default'"
);

//Style Slots
$(".slot-player").attr(
  "data-bind",
  "css: {babylonslot: !$data.isEmpty() && model.isBabylon($data.commander()), mlaslot: !$data.isEmpty() && !model.isCustomFaction($data.commander()), ready: isReady, loading: isLoading}"
);

_.defer(function () {
  model.localChatMessage(
    loc("Babylon Expansion"),
    loc(
      "To play as the babylonian faction select one of the orange Commanders."
    )
  );
});
