let settings = {
    location: "Cypress",
    luck: 0,
    scale: 0,
    variant: 0
}

let locations = {
    "Cypress": [4,4,3,1,1],
    "Kenai": [5,4,3,2,1],
    "Biwa": [5,4,3,2,1],
    "Murray": [6,3,2,2,1],
    "Everglades": [5,3,2,2,2],
    "KeyWest": [8,7,6,3,3],
    "Toledo": [8,8,5,3,3],
    "Great": [8,7,5,2,2],
    "Danube": [5,3,3,3,3],
    "Amazon": [12,10,7,4,3],
    "Mediterranean": [14,9,8,5,3],
    "CapeCod": [5,4,4,3,2],
    "Hawaii": [7,7,4,3,2],
    "Cairns": [9,9,6,4,3]
}

let rarities = ['C','R','E','L','M']
function calc(){
    settings.location = $("#location").val();
    settings.luck = ($("#luck").val()=="") ? 0 : $("#luck").val();
    settings.luck = settings.luck<0 ? 0 : settings.luck;
    settings.scale = ($("#scale").val()=="") ? 0 : $("#scale").val();
    settings.scale = settings.scale<0 ? 0 : settings.scale;
    settings.variant = ($("#variant").val()=="") ? 0 : $("#variant").val();
    settings.variant = settings.variant>100 ? 100 : settings.variant;
    let full = "";
    //Adapted from danny's zombie calculator :3
    let r = (30+(settings.luck*0.002))*0.01
    let e = (10+(settings.luck*0.004))*0.01
    let l = (4+(settings.luck*0.006))*0.01
    let m = (1+(settings.luck*0.008))*0.01
    let o = (r + e + l + m) < 1
    let luck;
    if (o) {
        luck = [ (1-(r+e+l+m))/locations[settings.location][0],
            r / locations[settings.location][1],
            e / locations[settings.location][2],
            l / locations[settings.location][3],
            m / locations[settings.location][4],
        ]
    } else {
        luck = [0,
            (r / (r + e + l + m)) / locations[settings.location][1],
            (e / (r + e + l + m)) / locations[settings.location][2],
            (l / (r + e + l + m)) / locations[settings.location][3],
            (m / (r + e + l + m)) / locations[settings.location][4],
        ]
    }
    let rarity = 0;
    for (let count of locations[settings.location]){
        for (let i = 0; i < count; i++){
            let square = '<div class="square '+rarities[rarity]+'"><p><br><normal>1/';
            square += (1/luck[rarity]).toFixed(0);
            square += '</normal><br><albino>1/';
            square += (1/((luck[rarity])*(1/(5000*((100-settings.variant)/100))))).toFixed(0);
            square += '</albino><br><melan>1/';
            square += (1/((luck[rarity])*(1/(10000*((100-settings.variant)/100))))).toFixed(0);
            square += '</melan><br><trophy>1/';
            square += (1/((luck[rarity])*(1/(15000*((100-settings.variant)/100))))).toFixed(0);
            square += '</trophy><br><giga> 1/';
            square += (1/((0.2 + (settings.scale * 0.001))*0.01*luck[rarity])).toFixed(0);
            square += '</giga></p></div>';
            full += square;
        }
        rarity+=1;
    }
    $("#species").html("");
    $("#species").append(full);
    $("#species").hide().show(0);
}

$(function () {
    calc();
    $("#location").on("change", function () {calc()});
    $("#luck").on("change", function () {calc()});
    $("#scale").on("change", function () {calc()});
    $("#variant").on("change", function () {calc()});
});