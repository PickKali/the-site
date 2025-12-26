const titles = [
  "No title? Guess I'm just Kali then!",
  "I should put a disclaimer that this isn't a survey.",
  "Make sure you have IRB approval first.",
  "Remember to cut your curbs!",
  "Unlimited games, but no games.",
  "I haven't mastered the art of digifu.",
  "Baked a cake in 36.550 seconds."
];

$(function () {
  $("#titleselect").on('change', function(e) {
    const newtitle = this.value;
    $("#flavortext").text(titles[newtitle]);
  });
});
