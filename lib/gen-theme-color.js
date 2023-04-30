// dsl: rgba(var(--tw-var-black), <alpha-value>)
const _colors = require("./colors");
const _colors_key = Object.keys(_colors);

_colors_key.forEach((k1) => {
  let v = _colors[k1];
  if (typeof v === "object") {
    const _v_key = Object.keys(v);
    _v_key.forEach((k2) => {
      _colors[k1][k2] = `rgba(var(--tw-var-${k1}-${k2}), <alpha-value>)`;
    });
  } else {
    _colors[k1] = `rgba(var(--tw-var-${k1}), <alpha-value>)`;
  }
});
