//POV: your system is really bored one night
function K_encode(input) {
  let chunk = input;
  let storage = "";
  chunk = chunk.replaceAll(" ", "ඞ");
  while (chunk.length > 2) {
    let first = chunk[0];
    let last = chunk[chunk.length - 1];
    storage += first + last;
    chunk = chunk.slice(1, -1);
    let inner = "";
    for (let i = chunk.length - 1; i >= 0; i--) {
      inner += chunk[i];
    }
    chunk = inner;
  }
  let output = "";
  for (const letter of storage) {
    output += letter;
  }
  output += chunk;
  output = output.replaceAll("ඞ", " ");
  return output;
}
function K_decode(input) {
  let chunk = input;
  let left = "";
  let right = "";
  let reverse = false;
  chunk = chunk.replaceAll(" ", "ඞ");
  while (chunk.length > 2) {
    left += reverse ? chunk[1] : chunk[0];
    right = reverse ? chunk[0] + right : chunk[1] + right;
    let inner = chunk.slice(2);
    chunk = inner;
    reverse = !reverse;
  }
  chunk = chunk.split("").reverse().join("");
  let output = left + chunk + right;
  output = output.replaceAll("ඞ", " ");
  return output;
}
//Y.xesob,  tthxeist  itls uaa fed

const suits = [
  ["🂥", "e"],
  ["🂵", "t"],
  ["🃅", "o"],
  ["🂤", "d"],
  ["🂴", "r"],
  ["🃄", "m"],
  ["🃔", "b"],
  ["🂣", "a"],
  ["🂳", "a"],
  ["🃃", "a"],
  ["🃓", "u"],
  ["🂢", "p"],
  ["🂲", "e"],
  ["🃂", "i"],
  ["🃒", "l"],
  ["🂡", "s"],
  ["🂱", "h"],
  ["🃁", "d"],
  ["🃑", "c"],
];
//club, heart, diamond, spade
//"thank you fireisgood for showing us the unicode cards", we all say in a slowed unison
function M_encode(input) {
  suits.forEach(([card, letter]) => {
    input = input.replaceAll(letter, card);
  });
  return input;
}
function M_decode(input) {
  suits.forEach(([card, letter]) => {
    input = input.replaceAll(card, letter);
  });
  return input;
}
// Y🂥🂡, 🂵🂱🃂🂡 🃂🂡 🂣 🂤🂥f🂣🃓🃒🂵 🂵🂥x🂵 🃔🃅x.

const ike = "bcdfghqrvxyz";
const angry = [
  ["b", "!"],
  ["c", "@"],
  ["d", "#"],
  ["f", "$"],
  ["g", "%"],
  ["h", "^"],
  ["q", "&"],
  ["r", "*"],
  ["v", "("],
  ["x", ")"],
  ["y", "-"],
  ["z", "+"],
];
function A_encode(input) {
  let encode = "";
  let kijetesantakalu = "🦝";
  let waste = "🗑️";
  let bin = "";
  input = input.replaceAll(" ", "¬");
  let i = 0;
  while (i < input.length) {
    if (ike.includes(input[i].toLowerCase())) {
      for (let pair of angry) {
        if (input[i].toLowerCase() == pair[0]) {
          kijetesantakalu += pair[1];
          break;
        }
      }
      bin += "1";
    } else {
      encode += input[i];
      bin += "ඞ";
    }
    i++;
    if (bin.length == 4) {
      bin = bin.replaceAll("ඞ", "0");
      waste += parseInt(bin, 2).toString(16).toUpperCase();
      bin = "";
    }
  }
  if (bin.length > 0) {
    bin.padEnd(4, "ඞ");
    bin = bin.replaceAll("ඞ", "0");
    waste += parseInt(bin, 2).toString(16).toUpperCase();
  }
  encode = encode + kijetesantakalu + waste;
  encode = encode.replaceAll("¬", " ");
  return encode;
}
function A_decode(input) {
  let decode = "";
  input = input.replaceAll(" ", "¬");
  let chunks = input.split("🦝");
  let start = chunks[0];
  if (chunks[1] == undefined) {
    return "Error";
  }
  chunks = chunks[1].split("🗑️");
  for (let pair of angry) {
    chunks[0] = chunks[0].replaceAll(pair[1], pair[0]);
  }
  if (start && chunks) {
    let split = chunks[1].split("");
    let bin = "";
    for (let pair in split) {
      let nibble = parseInt(split[pair], 16).toString(2);
      while (nibble.length < 4) {
        nibble = "0" + nibble;
      }
      bin += nibble;
    }
    let i = 0,
      j = 0;
    for (let bit of bin) {
      if (bit == "1") {
        if (chunks[0][i] == null) {
          continue;
        }
        decode += chunks[0][i];
        i++;
      } else {
        if (start[j] == null) {
          continue;
        }
        decode += start[j];
        j++;
      }
    }
  }
  decode = decode.replaceAll("¬", " ");
  return decode;
}
//es, tis is a eault tet o.🦝-^#$)!)🗑️8201404A

function Z_encode(input) {
  let encode = "";
  let hexbins = [];
  let hex = btoa(input);
  hex = hex.replaceAll("=", "");
  let i = 0;
  for (let j = 0; j < 6; j++) {
    hexbins[j] = "";
  }
  while (i < hex.length) {
    hexbins[i % 6] += hex[i];
    i++;
  }
  for (let j = 0; j < 6; j++) {
    hexbins[j] += "=";
    encode += hexbins[j];
  }
  return encode;
}
function Z_decode(input) {
  let decode = "";
  let hexbins = input.split("=");
  if (hexbins.length == 7) {
    let i = 0;
    while (i < input.length) {
      if (hexbins[i % 6][Math.floor(i / 6)] != null) {
        decode += hexbins[i % 6][Math.floor(i / 6)];
      }
      i++;
    }
  } else {
    return "The person that sent you this encrypted text messed up. Laugh at them.";
  }
  return atob(decode);
}
//WBIEYBI4=W0GgX0G=ValZVZJ=zGzGsXv=LlIVdhe=CzGmC0C=

const O2d = [
  ["a", "b", "c", "d", "e", "f"],
  ["g", "h", "i", "j", "k", "l"],
  ["m", "n", "o", "p", "q", "r"],
  ["s", "t", "u", "v", "w", "x"],
  ["y", "z", "A", "B", "C", "D"],
  ["E", "F", "G", "H", "I", "J"],
  ["K", "L", "M", "N", "O", "P"],
  ["Q", "R", "S", "T", "U", "V"],
  ["W", "X", "Y", "Z", "ඞ"],
];
const ocaps = "ABCDEF";
function O_encode(input, maxlen) {
  let encode = "linear-gradient(to right, ";
  let i = 0;
  let hex = "";
  let first = true;
  input = input.replace(/[^a-zA-Z ]/g, "");
  input = input.replaceAll(" ", "ඞ");
  while (i < input.length) {
    let j = 0;
    let k = 0;
    let found = false;
    while (!found) {
      if (input[i] == O2d[k][j]) {
        hex += ocaps[j] + k.toString();
        found = true;
        break;
      }
      j++;
      if (j == 6) {
        j = 0;
        k++;
      }
      if (k == 8 && j == 5) {
        found = true;
        break;
      }
    }
    if (hex.length == maxlen) {
      if (first) {
        first = false;
        hex = "#" + hex;
      } else {
        hex = ", #" + hex;
      }
      encode += hex;
      hex = "";
    }
    i++;
  }
  if (hex.length != 0) {
    hex = hex.padEnd(maxlen, "F");
    if (first) {
      first = false;
      hex = "#" + hex;
    } else {
      hex = ", #" + hex;
    }
    encode += hex;
  }
  return encode + ")";
}
function O_decode(input) {
  input = input.replaceAll("linear-gradient(to right, ", "");
  input = input.replaceAll("#", "");
  input = input.replaceAll(", ", "");
  input = input.replaceAll(")", "");
  input = input.replaceAll("FF", "");
  let output = "";
  let i = 0;
  let reverse = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5 };
  while (i < input.length) {
    if (reverse[input[i]] == null || parseInt(input[i + 1]) == NaN) {
      return "The person that sent you this encrypted text messed up. Laugh at them.";
    }
    output += O2d[parseInt(input[i + 1])][reverse[input[i]]];
    i += 2;
  }
  output = output.replaceAll("ඞ", " ");
  return output;
}

let finalInput = "";
let currentCipher = "";
let encoding = true;
let globalOut = "";
const output = $("#output");
function update() {
  let outputText = finalInput;
  $("#gradient").show();
  switch (currentCipher) {
    case "Bread":
      outputText = encoding ? K_encode(finalInput) : K_decode(finalInput);
      break;
    case "ATS":
      outputText = encoding ? M_encode(finalInput) : M_decode(finalInput);
      break;
    case "Kijetesantakalu":
      outputText = encoding ? A_encode(finalInput) : A_decode(finalInput);
      break;
    case "Hex":
      outputText = encoding ? Z_encode(finalInput) : Z_decode(finalInput);
      break;
    case "Gradient":
      outputText = encoding ? O_encode(finalInput, 6) : O_decode(finalInput);
      break;
    case "GradientA":
      outputText = encoding ? O_encode(finalInput, 8) : O_decode(finalInput);
      break;
  }
  if (
    (currentCipher == "Gradient" || currentCipher == "GradientA") &&
    encoding
  ) {
    $("#gradient").show();
    $("#gradient").css("background", outputText);
    $("#copyg").show();
  } else {
    $("#gradient").hide();
    $("#copyg").hide();
  }
  $("#output").val(outputText);
  globalOut = outputText;
}

async function clipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
    //doesn't work in iframes (aka the vscode extension preview window)
  }
}

$(function () {
  const input = $("#input");
  $("#output").val(input.val());
  input.on("keyup change", function (e) {
    let key = e.key;
    if (toString(key).length > 1) {
      key = "";
    }
    finalInput = input.val() + key;
    update();
  });
  const dropdown = $("#dropcontent");
  dropdown.on("change", function () {
    const dropvalue = dropdown.val();
    currentCipher = dropvalue;
    finalInput = input.val();
    update();
  });
  $("#encodetoggle").on("click", function () {
    encoding = !encoding;
    if (encoding) {
      $("#encodetoggle").html("<b>Encoding</b>");
      $("#encodetoggle").removeClass("secondary");
    } else {
      $("#encodetoggle").html("<b>Decoding</b>");
      $("#encodetoggle").addClass("secondary");
    }
    update();
  });
  $("#copy").on("click", function () {
    $("#output").setSelectionRange(0, 99999);
    clipboard(output.val());
  });
  $("#gradient").hide();
  $("#shift").hide();
  $("#copyg").hide();
});
