const _colors = require("./colors");
const ColorTool = require("color");
const res = {
  ":root": {},
  "html.dark": {},
};
const _colors_key = Object.keys(_colors);

_colors_key.forEach((k) => {
  let v = _colors[k];
  if (typeof v === "object") {
    const _v_key = Object.keys(v);
    _v_key.forEach((k2) => {
      let v2 = v[k2];
      const {
        color: [r, g, b],
      } = ColorTool(v2).rgb();
      _colors[k][k2] = `${r},${g},${b}`;
    });
  } else {
    const {
      color: [r, g, b],
    } = ColorTool(v).rgb();
    _colors[k] = `${r},${g},${b}`;
  }
});

_colors_key.forEach((k1) => {
  let v1 = _colors[k1];
  if (typeof v1 === "object") {
    const _v_key = Object.keys(v1);
    _v_key.forEach((k2) => {
      const v2 = v1[k2];
      const op = v1[1000 - k2];
      res[":root"][`--tw-var-${k1}-${k2}`] = v2;
      res["html.dark"][`--tw-var-${k1}-${k2}`] = op;
    });
  }
});

require("fs").writeFileSync("cssVar.json", JSON.stringify(res));
require("fs").writeFileSync("cssRGB.json", JSON.stringify(_colors));
