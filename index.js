const themeColors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "rgba(var(--tw-var-black), <alpha-value>)",
  white: "rgba(var(--tw-var-white), <alpha-value>)",
  slate: {
    50: "rgba(var(--tw-var-slate-50), <alpha-value>)",
    100: "rgba(var(--tw-var-slate-100), <alpha-value>)",
    200: "rgba(var(--tw-var-slate-200), <alpha-value>)",
    300: "rgba(var(--tw-var-slate-300), <alpha-value>)",
    400: "rgba(var(--tw-var-slate-400), <alpha-value>)",
    500: "rgba(var(--tw-var-slate-500), <alpha-value>)",
    600: "rgba(var(--tw-var-slate-600), <alpha-value>)",
    700: "rgba(var(--tw-var-slate-700), <alpha-value>)",
    800: "rgba(var(--tw-var-slate-800), <alpha-value>)",
    900: "rgba(var(--tw-var-slate-900), <alpha-value>)",
    950: "rgba(var(--tw-var-slate-950), <alpha-value>)",
  },
  gray: {
    50: "rgba(var(--tw-var-gray-50), <alpha-value>)",
    100: "rgba(var(--tw-var-gray-100), <alpha-value>)",
    200: "rgba(var(--tw-var-gray-200), <alpha-value>)",
    300: "rgba(var(--tw-var-gray-300), <alpha-value>)",
    400: "rgba(var(--tw-var-gray-400), <alpha-value>)",
    500: "rgba(var(--tw-var-gray-500), <alpha-value>)",
    600: "rgba(var(--tw-var-gray-600), <alpha-value>)",
    700: "rgba(var(--tw-var-gray-700), <alpha-value>)",
    800: "rgba(var(--tw-var-gray-800), <alpha-value>)",
    900: "rgba(var(--tw-var-gray-900), <alpha-value>)",
    950: "rgba(var(--tw-var-gray-950), <alpha-value>)",
  },
  zinc: {
    50: "rgba(var(--tw-var-zinc-50), <alpha-value>)",
    100: "rgba(var(--tw-var-zinc-100), <alpha-value>)",
    200: "rgba(var(--tw-var-zinc-200), <alpha-value>)",
    300: "rgba(var(--tw-var-zinc-300), <alpha-value>)",
    400: "rgba(var(--tw-var-zinc-400), <alpha-value>)",
    500: "rgba(var(--tw-var-zinc-500), <alpha-value>)",
    600: "rgba(var(--tw-var-zinc-600), <alpha-value>)",
    700: "rgba(var(--tw-var-zinc-700), <alpha-value>)",
    800: "rgba(var(--tw-var-zinc-800), <alpha-value>)",
    900: "rgba(var(--tw-var-zinc-900), <alpha-value>)",
    950: "rgba(var(--tw-var-zinc-950), <alpha-value>)",
  },
  neutral: {
    50: "rgba(var(--tw-var-neutral-50), <alpha-value>)",
    100: "rgba(var(--tw-var-neutral-100), <alpha-value>)",
    200: "rgba(var(--tw-var-neutral-200), <alpha-value>)",
    300: "rgba(var(--tw-var-neutral-300), <alpha-value>)",
    400: "rgba(var(--tw-var-neutral-400), <alpha-value>)",
    500: "rgba(var(--tw-var-neutral-500), <alpha-value>)",
    600: "rgba(var(--tw-var-neutral-600), <alpha-value>)",
    700: "rgba(var(--tw-var-neutral-700), <alpha-value>)",
    800: "rgba(var(--tw-var-neutral-800), <alpha-value>)",
    900: "rgba(var(--tw-var-neutral-900), <alpha-value>)",
    950: "rgba(var(--tw-var-neutral-950), <alpha-value>)",
  },
  stone: {
    50: "rgba(var(--tw-var-stone-50), <alpha-value>)",
    100: "rgba(var(--tw-var-stone-100), <alpha-value>)",
    200: "rgba(var(--tw-var-stone-200), <alpha-value>)",
    300: "rgba(var(--tw-var-stone-300), <alpha-value>)",
    400: "rgba(var(--tw-var-stone-400), <alpha-value>)",
    500: "rgba(var(--tw-var-stone-500), <alpha-value>)",
    600: "rgba(var(--tw-var-stone-600), <alpha-value>)",
    700: "rgba(var(--tw-var-stone-700), <alpha-value>)",
    800: "rgba(var(--tw-var-stone-800), <alpha-value>)",
    900: "rgba(var(--tw-var-stone-900), <alpha-value>)",
    950: "rgba(var(--tw-var-stone-950), <alpha-value>)",
  },
  red: {
    50: "rgba(var(--tw-var-red-50), <alpha-value>)",
    100: "rgba(var(--tw-var-red-100), <alpha-value>)",
    200: "rgba(var(--tw-var-red-200), <alpha-value>)",
    300: "rgba(var(--tw-var-red-300), <alpha-value>)",
    400: "rgba(var(--tw-var-red-400), <alpha-value>)",
    500: "rgba(var(--tw-var-red-500), <alpha-value>)",
    600: "rgba(var(--tw-var-red-600), <alpha-value>)",
    700: "rgba(var(--tw-var-red-700), <alpha-value>)",
    800: "rgba(var(--tw-var-red-800), <alpha-value>)",
    900: "rgba(var(--tw-var-red-900), <alpha-value>)",
    950: "rgba(var(--tw-var-red-950), <alpha-value>)",
  },
  orange: {
    50: "rgba(var(--tw-var-orange-50), <alpha-value>)",
    100: "rgba(var(--tw-var-orange-100), <alpha-value>)",
    200: "rgba(var(--tw-var-orange-200), <alpha-value>)",
    300: "rgba(var(--tw-var-orange-300), <alpha-value>)",
    400: "rgba(var(--tw-var-orange-400), <alpha-value>)",
    500: "rgba(var(--tw-var-orange-500), <alpha-value>)",
    600: "rgba(var(--tw-var-orange-600), <alpha-value>)",
    700: "rgba(var(--tw-var-orange-700), <alpha-value>)",
    800: "rgba(var(--tw-var-orange-800), <alpha-value>)",
    900: "rgba(var(--tw-var-orange-900), <alpha-value>)",
    950: "rgba(var(--tw-var-orange-950), <alpha-value>)",
  },
  amber: {
    50: "rgba(var(--tw-var-amber-50), <alpha-value>)",
    100: "rgba(var(--tw-var-amber-100), <alpha-value>)",
    200: "rgba(var(--tw-var-amber-200), <alpha-value>)",
    300: "rgba(var(--tw-var-amber-300), <alpha-value>)",
    400: "rgba(var(--tw-var-amber-400), <alpha-value>)",
    500: "rgba(var(--tw-var-amber-500), <alpha-value>)",
    600: "rgba(var(--tw-var-amber-600), <alpha-value>)",
    700: "rgba(var(--tw-var-amber-700), <alpha-value>)",
    800: "rgba(var(--tw-var-amber-800), <alpha-value>)",
    900: "rgba(var(--tw-var-amber-900), <alpha-value>)",
    950: "rgba(var(--tw-var-amber-950), <alpha-value>)",
  },
  yellow: {
    50: "rgba(var(--tw-var-yellow-50), <alpha-value>)",
    100: "rgba(var(--tw-var-yellow-100), <alpha-value>)",
    200: "rgba(var(--tw-var-yellow-200), <alpha-value>)",
    300: "rgba(var(--tw-var-yellow-300), <alpha-value>)",
    400: "rgba(var(--tw-var-yellow-400), <alpha-value>)",
    500: "rgba(var(--tw-var-yellow-500), <alpha-value>)",
    600: "rgba(var(--tw-var-yellow-600), <alpha-value>)",
    700: "rgba(var(--tw-var-yellow-700), <alpha-value>)",
    800: "rgba(var(--tw-var-yellow-800), <alpha-value>)",
    900: "rgba(var(--tw-var-yellow-900), <alpha-value>)",
    950: "rgba(var(--tw-var-yellow-950), <alpha-value>)",
  },
  lime: {
    50: "rgba(var(--tw-var-lime-50), <alpha-value>)",
    100: "rgba(var(--tw-var-lime-100), <alpha-value>)",
    200: "rgba(var(--tw-var-lime-200), <alpha-value>)",
    300: "rgba(var(--tw-var-lime-300), <alpha-value>)",
    400: "rgba(var(--tw-var-lime-400), <alpha-value>)",
    500: "rgba(var(--tw-var-lime-500), <alpha-value>)",
    600: "rgba(var(--tw-var-lime-600), <alpha-value>)",
    700: "rgba(var(--tw-var-lime-700), <alpha-value>)",
    800: "rgba(var(--tw-var-lime-800), <alpha-value>)",
    900: "rgba(var(--tw-var-lime-900), <alpha-value>)",
    950: "rgba(var(--tw-var-lime-950), <alpha-value>)",
  },
  green: {
    50: "rgba(var(--tw-var-green-50), <alpha-value>)",
    100: "rgba(var(--tw-var-green-100), <alpha-value>)",
    200: "rgba(var(--tw-var-green-200), <alpha-value>)",
    300: "rgba(var(--tw-var-green-300), <alpha-value>)",
    400: "rgba(var(--tw-var-green-400), <alpha-value>)",
    500: "rgba(var(--tw-var-green-500), <alpha-value>)",
    600: "rgba(var(--tw-var-green-600), <alpha-value>)",
    700: "rgba(var(--tw-var-green-700), <alpha-value>)",
    800: "rgba(var(--tw-var-green-800), <alpha-value>)",
    900: "rgba(var(--tw-var-green-900), <alpha-value>)",
    950: "rgba(var(--tw-var-green-950), <alpha-value>)",
  },
  emerald: {
    50: "rgba(var(--tw-var-emerald-50), <alpha-value>)",
    100: "rgba(var(--tw-var-emerald-100), <alpha-value>)",
    200: "rgba(var(--tw-var-emerald-200), <alpha-value>)",
    300: "rgba(var(--tw-var-emerald-300), <alpha-value>)",
    400: "rgba(var(--tw-var-emerald-400), <alpha-value>)",
    500: "rgba(var(--tw-var-emerald-500), <alpha-value>)",
    600: "rgba(var(--tw-var-emerald-600), <alpha-value>)",
    700: "rgba(var(--tw-var-emerald-700), <alpha-value>)",
    800: "rgba(var(--tw-var-emerald-800), <alpha-value>)",
    900: "rgba(var(--tw-var-emerald-900), <alpha-value>)",
    950: "rgba(var(--tw-var-emerald-950), <alpha-value>)",
  },
  teal: {
    50: "rgba(var(--tw-var-teal-50), <alpha-value>)",
    100: "rgba(var(--tw-var-teal-100), <alpha-value>)",
    200: "rgba(var(--tw-var-teal-200), <alpha-value>)",
    300: "rgba(var(--tw-var-teal-300), <alpha-value>)",
    400: "rgba(var(--tw-var-teal-400), <alpha-value>)",
    500: "rgba(var(--tw-var-teal-500), <alpha-value>)",
    600: "rgba(var(--tw-var-teal-600), <alpha-value>)",
    700: "rgba(var(--tw-var-teal-700), <alpha-value>)",
    800: "rgba(var(--tw-var-teal-800), <alpha-value>)",
    900: "rgba(var(--tw-var-teal-900), <alpha-value>)",
    950: "rgba(var(--tw-var-teal-950), <alpha-value>)",
  },
  cyan: {
    50: "rgba(var(--tw-var-cyan-50), <alpha-value>)",
    100: "rgba(var(--tw-var-cyan-100), <alpha-value>)",
    200: "rgba(var(--tw-var-cyan-200), <alpha-value>)",
    300: "rgba(var(--tw-var-cyan-300), <alpha-value>)",
    400: "rgba(var(--tw-var-cyan-400), <alpha-value>)",
    500: "rgba(var(--tw-var-cyan-500), <alpha-value>)",
    600: "rgba(var(--tw-var-cyan-600), <alpha-value>)",
    700: "rgba(var(--tw-var-cyan-700), <alpha-value>)",
    800: "rgba(var(--tw-var-cyan-800), <alpha-value>)",
    900: "rgba(var(--tw-var-cyan-900), <alpha-value>)",
    950: "rgba(var(--tw-var-cyan-950), <alpha-value>)",
  },
  sky: {
    50: "rgba(var(--tw-var-sky-50), <alpha-value>)",
    100: "rgba(var(--tw-var-sky-100), <alpha-value>)",
    200: "rgba(var(--tw-var-sky-200), <alpha-value>)",
    300: "rgba(var(--tw-var-sky-300), <alpha-value>)",
    400: "rgba(var(--tw-var-sky-400), <alpha-value>)",
    500: "rgba(var(--tw-var-sky-500), <alpha-value>)",
    600: "rgba(var(--tw-var-sky-600), <alpha-value>)",
    700: "rgba(var(--tw-var-sky-700), <alpha-value>)",
    800: "rgba(var(--tw-var-sky-800), <alpha-value>)",
    900: "rgba(var(--tw-var-sky-900), <alpha-value>)",
    950: "rgba(var(--tw-var-sky-950), <alpha-value>)",
  },
  blue: {
    50: "rgba(var(--tw-var-blue-50), <alpha-value>)",
    100: "rgba(var(--tw-var-blue-100), <alpha-value>)",
    200: "rgba(var(--tw-var-blue-200), <alpha-value>)",
    300: "rgba(var(--tw-var-blue-300), <alpha-value>)",
    400: "rgba(var(--tw-var-blue-400), <alpha-value>)",
    500: "rgba(var(--tw-var-blue-500), <alpha-value>)",
    600: "rgba(var(--tw-var-blue-600), <alpha-value>)",
    700: "rgba(var(--tw-var-blue-700), <alpha-value>)",
    800: "rgba(var(--tw-var-blue-800), <alpha-value>)",
    900: "rgba(var(--tw-var-blue-900), <alpha-value>)",
    950: "rgba(var(--tw-var-blue-950), <alpha-value>)",
  },
  indigo: {
    50: "rgba(var(--tw-var-indigo-50), <alpha-value>)",
    100: "rgba(var(--tw-var-indigo-100), <alpha-value>)",
    200: "rgba(var(--tw-var-indigo-200), <alpha-value>)",
    300: "rgba(var(--tw-var-indigo-300), <alpha-value>)",
    400: "rgba(var(--tw-var-indigo-400), <alpha-value>)",
    500: "rgba(var(--tw-var-indigo-500), <alpha-value>)",
    600: "rgba(var(--tw-var-indigo-600), <alpha-value>)",
    700: "rgba(var(--tw-var-indigo-700), <alpha-value>)",
    800: "rgba(var(--tw-var-indigo-800), <alpha-value>)",
    900: "rgba(var(--tw-var-indigo-900), <alpha-value>)",
    950: "rgba(var(--tw-var-indigo-950), <alpha-value>)",
  },
  violet: {
    50: "rgba(var(--tw-var-violet-50), <alpha-value>)",
    100: "rgba(var(--tw-var-violet-100), <alpha-value>)",
    200: "rgba(var(--tw-var-violet-200), <alpha-value>)",
    300: "rgba(var(--tw-var-violet-300), <alpha-value>)",
    400: "rgba(var(--tw-var-violet-400), <alpha-value>)",
    500: "rgba(var(--tw-var-violet-500), <alpha-value>)",
    600: "rgba(var(--tw-var-violet-600), <alpha-value>)",
    700: "rgba(var(--tw-var-violet-700), <alpha-value>)",
    800: "rgba(var(--tw-var-violet-800), <alpha-value>)",
    900: "rgba(var(--tw-var-violet-900), <alpha-value>)",
    950: "rgba(var(--tw-var-violet-950), <alpha-value>)",
  },
  purple: {
    50: "rgba(var(--tw-var-purple-50), <alpha-value>)",
    100: "rgba(var(--tw-var-purple-100), <alpha-value>)",
    200: "rgba(var(--tw-var-purple-200), <alpha-value>)",
    300: "rgba(var(--tw-var-purple-300), <alpha-value>)",
    400: "rgba(var(--tw-var-purple-400), <alpha-value>)",
    500: "rgba(var(--tw-var-purple-500), <alpha-value>)",
    600: "rgba(var(--tw-var-purple-600), <alpha-value>)",
    700: "rgba(var(--tw-var-purple-700), <alpha-value>)",
    800: "rgba(var(--tw-var-purple-800), <alpha-value>)",
    900: "rgba(var(--tw-var-purple-900), <alpha-value>)",
    950: "rgba(var(--tw-var-purple-950), <alpha-value>)",
  },
  fuchsia: {
    50: "rgba(var(--tw-var-fuchsia-50), <alpha-value>)",
    100: "rgba(var(--tw-var-fuchsia-100), <alpha-value>)",
    200: "rgba(var(--tw-var-fuchsia-200), <alpha-value>)",
    300: "rgba(var(--tw-var-fuchsia-300), <alpha-value>)",
    400: "rgba(var(--tw-var-fuchsia-400), <alpha-value>)",
    500: "rgba(var(--tw-var-fuchsia-500), <alpha-value>)",
    600: "rgba(var(--tw-var-fuchsia-600), <alpha-value>)",
    700: "rgba(var(--tw-var-fuchsia-700), <alpha-value>)",
    800: "rgba(var(--tw-var-fuchsia-800), <alpha-value>)",
    900: "rgba(var(--tw-var-fuchsia-900), <alpha-value>)",
    950: "rgba(var(--tw-var-fuchsia-950), <alpha-value>)",
  },
  pink: {
    50: "rgba(var(--tw-var-pink-50), <alpha-value>)",
    100: "rgba(var(--tw-var-pink-100), <alpha-value>)",
    200: "rgba(var(--tw-var-pink-200), <alpha-value>)",
    300: "rgba(var(--tw-var-pink-300), <alpha-value>)",
    400: "rgba(var(--tw-var-pink-400), <alpha-value>)",
    500: "rgba(var(--tw-var-pink-500), <alpha-value>)",
    600: "rgba(var(--tw-var-pink-600), <alpha-value>)",
    700: "rgba(var(--tw-var-pink-700), <alpha-value>)",
    800: "rgba(var(--tw-var-pink-800), <alpha-value>)",
    900: "rgba(var(--tw-var-pink-900), <alpha-value>)",
    950: "rgba(var(--tw-var-pink-950), <alpha-value>)",
  },
  rose: {
    50: "rgba(var(--tw-var-rose-50), <alpha-value>)",
    100: "rgba(var(--tw-var-rose-100), <alpha-value>)",
    200: "rgba(var(--tw-var-rose-200), <alpha-value>)",
    300: "rgba(var(--tw-var-rose-300), <alpha-value>)",
    400: "rgba(var(--tw-var-rose-400), <alpha-value>)",
    500: "rgba(var(--tw-var-rose-500), <alpha-value>)",
    600: "rgba(var(--tw-var-rose-600), <alpha-value>)",
    700: "rgba(var(--tw-var-rose-700), <alpha-value>)",
    800: "rgba(var(--tw-var-rose-800), <alpha-value>)",
    900: "rgba(var(--tw-var-rose-900), <alpha-value>)",
    950: "rgba(var(--tw-var-rose-950), <alpha-value>)",
  },
};

const themePlugin = ({ addBase }) => {
  addBase({
    ":root": {
      "--tw-var-black": "12,12,12",
      "--tw-var-white": "255,255,255",
      "--tw-var-slate-50": "248,250,252",
      "--tw-var-slate-100": "241,245,249",
      "--tw-var-slate-200": "226,232,240",
      "--tw-var-slate-300": "203,213,225",
      "--tw-var-slate-400": "148,163,184",
      "--tw-var-slate-500": "100,116,139",
      "--tw-var-slate-600": "71,85,105",
      "--tw-var-slate-700": "51,65,85",
      "--tw-var-slate-800": "30,41,59",
      "--tw-var-slate-900": "15,23,42",
      "--tw-var-slate-950": "2,6,23",
      "--tw-var-gray-50": "249,250,251",
      "--tw-var-gray-100": "243,244,246",
      "--tw-var-gray-200": "229,231,235",
      "--tw-var-gray-300": "209,213,219",
      "--tw-var-gray-400": "156,163,175",
      "--tw-var-gray-500": "107,114,128",
      "--tw-var-gray-600": "75,85,99",
      "--tw-var-gray-700": "55,65,81",
      "--tw-var-gray-800": "31,41,55",
      "--tw-var-gray-900": "17,24,39",
      "--tw-var-gray-950": "3,7,18",
      "--tw-var-zinc-50": "250,250,250",
      "--tw-var-zinc-100": "244,244,245",
      "--tw-var-zinc-200": "228,228,231",
      "--tw-var-zinc-300": "212,212,216",
      "--tw-var-zinc-400": "161,161,170",
      "--tw-var-zinc-500": "113,113,122",
      "--tw-var-zinc-600": "82,82,91",
      "--tw-var-zinc-700": "63,63,70",
      "--tw-var-zinc-800": "39,39,42",
      "--tw-var-zinc-900": "24,24,27",
      "--tw-var-zinc-950": "9,9,11",
      "--tw-var-neutral-50": "250,250,250",
      "--tw-var-neutral-100": "245,245,245",
      "--tw-var-neutral-200": "229,229,229",
      "--tw-var-neutral-300": "212,212,212",
      "--tw-var-neutral-400": "163,163,163",
      "--tw-var-neutral-500": "115,115,115",
      "--tw-var-neutral-600": "82,82,82",
      "--tw-var-neutral-700": "64,64,64",
      "--tw-var-neutral-800": "38,38,38",
      "--tw-var-neutral-900": "23,23,23",
      "--tw-var-neutral-950": "10,10,10",
      "--tw-var-stone-50": "250,250,249",
      "--tw-var-stone-100": "245,245,244",
      "--tw-var-stone-200": "231,229,228",
      "--tw-var-stone-300": "214,211,209",
      "--tw-var-stone-400": "168,162,158",
      "--tw-var-stone-500": "120,113,108",
      "--tw-var-stone-600": "87,83,78",
      "--tw-var-stone-700": "68,64,60",
      "--tw-var-stone-800": "41,37,36",
      "--tw-var-stone-900": "28,25,23",
      "--tw-var-stone-950": "12,10,9",
      "--tw-var-red-50": "254,242,242",
      "--tw-var-red-100": "254,226,226",
      "--tw-var-red-200": "254,202,202",
      "--tw-var-red-300": "252,165,165",
      "--tw-var-red-400": "248,113,113",
      "--tw-var-red-500": "239,68,68",
      "--tw-var-red-600": "220,38,38",
      "--tw-var-red-700": "185,28,28",
      "--tw-var-red-800": "153,27,27",
      "--tw-var-red-900": "127,29,29",
      "--tw-var-red-950": "69,10,10",
      "--tw-var-orange-50": "255,247,237",
      "--tw-var-orange-100": "255,237,213",
      "--tw-var-orange-200": "254,215,170",
      "--tw-var-orange-300": "253,186,116",
      "--tw-var-orange-400": "251,146,60",
      "--tw-var-orange-500": "249,115,22",
      "--tw-var-orange-600": "234,88,12",
      "--tw-var-orange-700": "194,65,12",
      "--tw-var-orange-800": "154,52,18",
      "--tw-var-orange-900": "124,45,18",
      "--tw-var-orange-950": "67,20,7",
      "--tw-var-amber-50": "255,251,235",
      "--tw-var-amber-100": "254,243,199",
      "--tw-var-amber-200": "253,230,138",
      "--tw-var-amber-300": "252,211,77",
      "--tw-var-amber-400": "251,191,36",
      "--tw-var-amber-500": "245,158,11",
      "--tw-var-amber-600": "217,119,6",
      "--tw-var-amber-700": "180,83,9",
      "--tw-var-amber-800": "146,64,14",
      "--tw-var-amber-900": "120,53,15",
      "--tw-var-amber-950": "69,26,3",
      "--tw-var-yellow-50": "254,252,232",
      "--tw-var-yellow-100": "254,249,195",
      "--tw-var-yellow-200": "254,240,138",
      "--tw-var-yellow-300": "253,224,71",
      "--tw-var-yellow-400": "250,204,21",
      "--tw-var-yellow-500": "234,179,8",
      "--tw-var-yellow-600": "202,138,4",
      "--tw-var-yellow-700": "161,98,7",
      "--tw-var-yellow-800": "133,77,14",
      "--tw-var-yellow-900": "113,63,18",
      "--tw-var-yellow-950": "66,32,6",
      "--tw-var-lime-50": "247,254,231",
      "--tw-var-lime-100": "236,252,203",
      "--tw-var-lime-200": "217,249,157",
      "--tw-var-lime-300": "190,242,100",
      "--tw-var-lime-400": "163,230,53",
      "--tw-var-lime-500": "132,204,22",
      "--tw-var-lime-600": "101,163,13",
      "--tw-var-lime-700": "77,124,15",
      "--tw-var-lime-800": "63,98,18",
      "--tw-var-lime-900": "54,83,20",
      "--tw-var-lime-950": "26,46,5",
      "--tw-var-green-50": "240,253,244",
      "--tw-var-green-100": "220,252,231",
      "--tw-var-green-200": "187,247,208",
      "--tw-var-green-300": "134,239,172",
      "--tw-var-green-400": "74,222,128",
      "--tw-var-green-500": "34,197,94",
      "--tw-var-green-600": "22,163,74",
      "--tw-var-green-700": "21,128,61",
      "--tw-var-green-800": "22,101,52",
      "--tw-var-green-900": "20,83,45",
      "--tw-var-green-950": "5,46,22",
      "--tw-var-emerald-50": "236,253,245",
      "--tw-var-emerald-100": "209,250,229",
      "--tw-var-emerald-200": "167,243,208",
      "--tw-var-emerald-300": "110,231,183",
      "--tw-var-emerald-400": "52,211,153",
      "--tw-var-emerald-500": "16,185,129",
      "--tw-var-emerald-600": "5,150,105",
      "--tw-var-emerald-700": "4,120,87",
      "--tw-var-emerald-800": "6,95,70",
      "--tw-var-emerald-900": "6,78,59",
      "--tw-var-emerald-950": "2,44,34",
      "--tw-var-teal-50": "240,253,250",
      "--tw-var-teal-100": "204,251,241",
      "--tw-var-teal-200": "153,246,228",
      "--tw-var-teal-300": "94,234,212",
      "--tw-var-teal-400": "45,212,191",
      "--tw-var-teal-500": "20,184,166",
      "--tw-var-teal-600": "13,148,136",
      "--tw-var-teal-700": "15,118,110",
      "--tw-var-teal-800": "17,94,89",
      "--tw-var-teal-900": "19,78,74",
      "--tw-var-teal-950": "4,47,46",
      "--tw-var-cyan-50": "236,254,255",
      "--tw-var-cyan-100": "207,250,254",
      "--tw-var-cyan-200": "165,243,252",
      "--tw-var-cyan-300": "103,232,249",
      "--tw-var-cyan-400": "34,211,238",
      "--tw-var-cyan-500": "6,182,212",
      "--tw-var-cyan-600": "8,145,178",
      "--tw-var-cyan-700": "14,116,144",
      "--tw-var-cyan-800": "21,94,117",
      "--tw-var-cyan-900": "22,78,99",
      "--tw-var-cyan-950": "8,51,68",
      "--tw-var-sky-50": "240,249,255",
      "--tw-var-sky-100": "224,242,254",
      "--tw-var-sky-200": "186,230,253",
      "--tw-var-sky-300": "125,211,252",
      "--tw-var-sky-400": "56,189,248",
      "--tw-var-sky-500": "14,165,233",
      "--tw-var-sky-600": "2,132,199",
      "--tw-var-sky-700": "3,105,161",
      "--tw-var-sky-800": "7,89,133",
      "--tw-var-sky-900": "12,74,110",
      "--tw-var-sky-950": "8,47,73",
      "--tw-var-blue-50": "239,246,255",
      "--tw-var-blue-100": "219,234,254",
      "--tw-var-blue-200": "191,219,254",
      "--tw-var-blue-300": "147,197,253",
      "--tw-var-blue-400": "96,165,250",
      "--tw-var-blue-500": "59,130,246",
      "--tw-var-blue-600": "37,99,235",
      "--tw-var-blue-700": "29,78,216",
      "--tw-var-blue-800": "30,64,175",
      "--tw-var-blue-900": "30,58,138",
      "--tw-var-blue-950": "23,37,84",
      "--tw-var-indigo-50": "238,242,255",
      "--tw-var-indigo-100": "224,231,255",
      "--tw-var-indigo-200": "199,210,254",
      "--tw-var-indigo-300": "165,180,252",
      "--tw-var-indigo-400": "129,140,248",
      "--tw-var-indigo-500": "99,102,241",
      "--tw-var-indigo-600": "79,70,229",
      "--tw-var-indigo-700": "67,56,202",
      "--tw-var-indigo-800": "55,48,163",
      "--tw-var-indigo-900": "49,46,129",
      "--tw-var-indigo-950": "30,27,75",
      "--tw-var-violet-50": "245,243,255",
      "--tw-var-violet-100": "237,233,254",
      "--tw-var-violet-200": "221,214,254",
      "--tw-var-violet-300": "196,181,253",
      "--tw-var-violet-400": "167,139,250",
      "--tw-var-violet-500": "139,92,246",
      "--tw-var-violet-600": "124,58,237",
      "--tw-var-violet-700": "109,40,217",
      "--tw-var-violet-800": "91,33,182",
      "--tw-var-violet-900": "76,29,149",
      "--tw-var-violet-950": "46,16,101",
      "--tw-var-purple-50": "250,245,255",
      "--tw-var-purple-100": "243,232,255",
      "--tw-var-purple-200": "233,213,255",
      "--tw-var-purple-300": "216,180,254",
      "--tw-var-purple-400": "192,132,252",
      "--tw-var-purple-500": "168,85,247",
      "--tw-var-purple-600": "147,51,234",
      "--tw-var-purple-700": "126,34,206",
      "--tw-var-purple-800": "107,33,168",
      "--tw-var-purple-900": "88,28,135",
      "--tw-var-purple-950": "59,7,100",
      "--tw-var-fuchsia-50": "253,244,255",
      "--tw-var-fuchsia-100": "250,232,255",
      "--tw-var-fuchsia-200": "245,208,254",
      "--tw-var-fuchsia-300": "240,171,252",
      "--tw-var-fuchsia-400": "232,121,249",
      "--tw-var-fuchsia-500": "217,70,239",
      "--tw-var-fuchsia-600": "192,38,211",
      "--tw-var-fuchsia-700": "162,28,175",
      "--tw-var-fuchsia-800": "134,25,143",
      "--tw-var-fuchsia-900": "112,26,117",
      "--tw-var-fuchsia-950": "74,4,78",
      "--tw-var-pink-50": "253,242,248",
      "--tw-var-pink-100": "252,231,243",
      "--tw-var-pink-200": "251,207,232",
      "--tw-var-pink-300": "249,168,212",
      "--tw-var-pink-400": "244,114,182",
      "--tw-var-pink-500": "236,72,153",
      "--tw-var-pink-600": "219,39,119",
      "--tw-var-pink-700": "190,24,93",
      "--tw-var-pink-800": "157,23,77",
      "--tw-var-pink-900": "131,24,67",
      "--tw-var-pink-950": "80,7,36",
      "--tw-var-rose-50": "255,241,242",
      "--tw-var-rose-100": "255,228,230",
      "--tw-var-rose-200": "254,205,211",
      "--tw-var-rose-300": "253,164,175",
      "--tw-var-rose-400": "251,113,133",
      "--tw-var-rose-500": "244,63,94",
      "--tw-var-rose-600": "225,29,72",
      "--tw-var-rose-700": "190,18,60",
      "--tw-var-rose-800": "159,18,57",
      "--tw-var-rose-900": "136,19,55",
      "--tw-var-rose-950": "76,5,25",
    },
    ":root.dark": {
      "--tw-var-black": "255,255,255",
      "--tw-var-white": "12,12,12",
      "--tw-var-slate-50": "2,6,23",
      "--tw-var-slate-100": "15,23,42",
      "--tw-var-slate-200": "30,41,59",
      "--tw-var-slate-300": "51,65,85",
      "--tw-var-slate-400": "71,85,105",
      "--tw-var-slate-500": "100,116,139",
      "--tw-var-slate-600": "148,163,184",
      "--tw-var-slate-700": "203,213,225",
      "--tw-var-slate-800": "226,232,240",
      "--tw-var-slate-900": "241,245,249",
      "--tw-var-slate-950": "248,250,252",
      "--tw-var-gray-50": "3,7,18",
      "--tw-var-gray-100": "17,24,39",
      "--tw-var-gray-200": "31,41,55",
      "--tw-var-gray-300": "55,65,81",
      "--tw-var-gray-400": "75,85,99",
      "--tw-var-gray-500": "107,114,128",
      "--tw-var-gray-600": "156,163,175",
      "--tw-var-gray-700": "209,213,219",
      "--tw-var-gray-800": "229,231,235",
      "--tw-var-gray-900": "243,244,246",
      "--tw-var-gray-950": "249,250,251",
      "--tw-var-zinc-50": "9,9,11",
      "--tw-var-zinc-100": "24,24,27",
      "--tw-var-zinc-200": "39,39,42",
      "--tw-var-zinc-300": "63,63,70",
      "--tw-var-zinc-400": "82,82,91",
      "--tw-var-zinc-500": "113,113,122",
      "--tw-var-zinc-600": "161,161,170",
      "--tw-var-zinc-700": "212,212,216",
      "--tw-var-zinc-800": "228,228,231",
      "--tw-var-zinc-900": "244,244,245",
      "--tw-var-zinc-950": "250,250,250",
      "--tw-var-neutral-50": "10,10,10",
      "--tw-var-neutral-100": "23,23,23",
      "--tw-var-neutral-200": "38,38,38",
      "--tw-var-neutral-300": "64,64,64",
      "--tw-var-neutral-400": "82,82,82",
      "--tw-var-neutral-500": "115,115,115",
      "--tw-var-neutral-600": "163,163,163",
      "--tw-var-neutral-700": "212,212,212",
      "--tw-var-neutral-800": "229,229,229",
      "--tw-var-neutral-900": "245,245,245",
      "--tw-var-neutral-950": "250,250,250",
      "--tw-var-stone-50": "12,10,9",
      "--tw-var-stone-100": "28,25,23",
      "--tw-var-stone-200": "41,37,36",
      "--tw-var-stone-300": "68,64,60",
      "--tw-var-stone-400": "87,83,78",
      "--tw-var-stone-500": "120,113,108",
      "--tw-var-stone-600": "168,162,158",
      "--tw-var-stone-700": "214,211,209",
      "--tw-var-stone-800": "231,229,228",
      "--tw-var-stone-900": "245,245,244",
      "--tw-var-stone-950": "250,250,249",
      "--tw-var-red-50": "69,10,10",
      "--tw-var-red-100": "127,29,29",
      "--tw-var-red-200": "153,27,27",
      "--tw-var-red-300": "185,28,28",
      "--tw-var-red-400": "220,38,38",
      "--tw-var-red-500": "239,68,68",
      "--tw-var-red-600": "248,113,113",
      "--tw-var-red-700": "252,165,165",
      "--tw-var-red-800": "254,202,202",
      "--tw-var-red-900": "254,226,226",
      "--tw-var-red-950": "254,242,242",
      "--tw-var-orange-50": "67,20,7",
      "--tw-var-orange-100": "124,45,18",
      "--tw-var-orange-200": "154,52,18",
      "--tw-var-orange-300": "194,65,12",
      "--tw-var-orange-400": "234,88,12",
      "--tw-var-orange-500": "249,115,22",
      "--tw-var-orange-600": "251,146,60",
      "--tw-var-orange-700": "253,186,116",
      "--tw-var-orange-800": "254,215,170",
      "--tw-var-orange-900": "255,237,213",
      "--tw-var-orange-950": "255,247,237",
      "--tw-var-amber-50": "69,26,3",
      "--tw-var-amber-100": "120,53,15",
      "--tw-var-amber-200": "146,64,14",
      "--tw-var-amber-300": "180,83,9",
      "--tw-var-amber-400": "217,119,6",
      "--tw-var-amber-500": "245,158,11",
      "--tw-var-amber-600": "251,191,36",
      "--tw-var-amber-700": "252,211,77",
      "--tw-var-amber-800": "253,230,138",
      "--tw-var-amber-900": "254,243,199",
      "--tw-var-amber-950": "255,251,235",
      "--tw-var-yellow-50": "66,32,6",
      "--tw-var-yellow-100": "113,63,18",
      "--tw-var-yellow-200": "133,77,14",
      "--tw-var-yellow-300": "161,98,7",
      "--tw-var-yellow-400": "202,138,4",
      "--tw-var-yellow-500": "234,179,8",
      "--tw-var-yellow-600": "250,204,21",
      "--tw-var-yellow-700": "253,224,71",
      "--tw-var-yellow-800": "254,240,138",
      "--tw-var-yellow-900": "254,249,195",
      "--tw-var-yellow-950": "254,252,232",
      "--tw-var-lime-50": "26,46,5",
      "--tw-var-lime-100": "54,83,20",
      "--tw-var-lime-200": "63,98,18",
      "--tw-var-lime-300": "77,124,15",
      "--tw-var-lime-400": "101,163,13",
      "--tw-var-lime-500": "132,204,22",
      "--tw-var-lime-600": "163,230,53",
      "--tw-var-lime-700": "190,242,100",
      "--tw-var-lime-800": "217,249,157",
      "--tw-var-lime-900": "236,252,203",
      "--tw-var-lime-950": "247,254,231",
      "--tw-var-green-50": "5,46,22",
      "--tw-var-green-100": "20,83,45",
      "--tw-var-green-200": "22,101,52",
      "--tw-var-green-300": "21,128,61",
      "--tw-var-green-400": "22,163,74",
      "--tw-var-green-500": "34,197,94",
      "--tw-var-green-600": "74,222,128",
      "--tw-var-green-700": "134,239,172",
      "--tw-var-green-800": "187,247,208",
      "--tw-var-green-900": "220,252,231",
      "--tw-var-green-950": "240,253,244",
      "--tw-var-emerald-50": "2,44,34",
      "--tw-var-emerald-100": "6,78,59",
      "--tw-var-emerald-200": "6,95,70",
      "--tw-var-emerald-300": "4,120,87",
      "--tw-var-emerald-400": "5,150,105",
      "--tw-var-emerald-500": "16,185,129",
      "--tw-var-emerald-600": "52,211,153",
      "--tw-var-emerald-700": "110,231,183",
      "--tw-var-emerald-800": "167,243,208",
      "--tw-var-emerald-900": "209,250,229",
      "--tw-var-emerald-950": "236,253,245",
      "--tw-var-teal-50": "4,47,46",
      "--tw-var-teal-100": "19,78,74",
      "--tw-var-teal-200": "17,94,89",
      "--tw-var-teal-300": "15,118,110",
      "--tw-var-teal-400": "13,148,136",
      "--tw-var-teal-500": "20,184,166",
      "--tw-var-teal-600": "45,212,191",
      "--tw-var-teal-700": "94,234,212",
      "--tw-var-teal-800": "153,246,228",
      "--tw-var-teal-900": "204,251,241",
      "--tw-var-teal-950": "240,253,250",
      "--tw-var-cyan-50": "8,51,68",
      "--tw-var-cyan-100": "22,78,99",
      "--tw-var-cyan-200": "21,94,117",
      "--tw-var-cyan-300": "14,116,144",
      "--tw-var-cyan-400": "8,145,178",
      "--tw-var-cyan-500": "6,182,212",
      "--tw-var-cyan-600": "34,211,238",
      "--tw-var-cyan-700": "103,232,249",
      "--tw-var-cyan-800": "165,243,252",
      "--tw-var-cyan-900": "207,250,254",
      "--tw-var-cyan-950": "236,254,255",
      "--tw-var-sky-50": "8,47,73",
      "--tw-var-sky-100": "12,74,110",
      "--tw-var-sky-200": "7,89,133",
      "--tw-var-sky-300": "3,105,161",
      "--tw-var-sky-400": "2,132,199",
      "--tw-var-sky-500": "14,165,233",
      "--tw-var-sky-600": "56,189,248",
      "--tw-var-sky-700": "125,211,252",
      "--tw-var-sky-800": "186,230,253",
      "--tw-var-sky-900": "224,242,254",
      "--tw-var-sky-950": "240,249,255",
      "--tw-var-blue-50": "23,37,84",
      "--tw-var-blue-100": "30,58,138",
      "--tw-var-blue-200": "30,64,175",
      "--tw-var-blue-300": "29,78,216",
      "--tw-var-blue-400": "37,99,235",
      "--tw-var-blue-500": "59,130,246",
      "--tw-var-blue-600": "96,165,250",
      "--tw-var-blue-700": "147,197,253",
      "--tw-var-blue-800": "191,219,254",
      "--tw-var-blue-900": "219,234,254",
      "--tw-var-blue-950": "239,246,255",
      "--tw-var-indigo-50": "30,27,75",
      "--tw-var-indigo-100": "49,46,129",
      "--tw-var-indigo-200": "55,48,163",
      "--tw-var-indigo-300": "67,56,202",
      "--tw-var-indigo-400": "79,70,229",
      "--tw-var-indigo-500": "99,102,241",
      "--tw-var-indigo-600": "129,140,248",
      "--tw-var-indigo-700": "165,180,252",
      "--tw-var-indigo-800": "199,210,254",
      "--tw-var-indigo-900": "224,231,255",
      "--tw-var-indigo-950": "238,242,255",
      "--tw-var-violet-50": "46,16,101",
      "--tw-var-violet-100": "76,29,149",
      "--tw-var-violet-200": "91,33,182",
      "--tw-var-violet-300": "109,40,217",
      "--tw-var-violet-400": "124,58,237",
      "--tw-var-violet-500": "139,92,246",
      "--tw-var-violet-600": "167,139,250",
      "--tw-var-violet-700": "196,181,253",
      "--tw-var-violet-800": "221,214,254",
      "--tw-var-violet-900": "237,233,254",
      "--tw-var-violet-950": "245,243,255",
      "--tw-var-purple-50": "59,7,100",
      "--tw-var-purple-100": "88,28,135",
      "--tw-var-purple-200": "107,33,168",
      "--tw-var-purple-300": "126,34,206",
      "--tw-var-purple-400": "147,51,234",
      "--tw-var-purple-500": "168,85,247",
      "--tw-var-purple-600": "192,132,252",
      "--tw-var-purple-700": "216,180,254",
      "--tw-var-purple-800": "233,213,255",
      "--tw-var-purple-900": "243,232,255",
      "--tw-var-purple-950": "250,245,255",
      "--tw-var-fuchsia-50": "74,4,78",
      "--tw-var-fuchsia-100": "112,26,117",
      "--tw-var-fuchsia-200": "134,25,143",
      "--tw-var-fuchsia-300": "162,28,175",
      "--tw-var-fuchsia-400": "192,38,211",
      "--tw-var-fuchsia-500": "217,70,239",
      "--tw-var-fuchsia-600": "232,121,249",
      "--tw-var-fuchsia-700": "240,171,252",
      "--tw-var-fuchsia-800": "245,208,254",
      "--tw-var-fuchsia-900": "250,232,255",
      "--tw-var-fuchsia-950": "253,244,255",
      "--tw-var-pink-50": "80,7,36",
      "--tw-var-pink-100": "131,24,67",
      "--tw-var-pink-200": "157,23,77",
      "--tw-var-pink-300": "190,24,93",
      "--tw-var-pink-400": "219,39,119",
      "--tw-var-pink-500": "236,72,153",
      "--tw-var-pink-600": "244,114,182",
      "--tw-var-pink-700": "249,168,212",
      "--tw-var-pink-800": "251,207,232",
      "--tw-var-pink-900": "252,231,243",
      "--tw-var-pink-950": "253,242,248",
      "--tw-var-rose-50": "76,5,25",
      "--tw-var-rose-100": "136,19,55",
      "--tw-var-rose-200": "159,18,57",
      "--tw-var-rose-300": "190,18,60",
      "--tw-var-rose-400": "225,29,72",
      "--tw-var-rose-500": "244,63,94",
      "--tw-var-rose-600": "251,113,133",
      "--tw-var-rose-700": "253,164,175",
      "--tw-var-rose-800": "254,205,211",
      "--tw-var-rose-900": "255,228,230",
      "--tw-var-rose-950": "255,241,242",
    },
  });
};

const darkMode = ["class"];

module.exports.themeColors = themeColors;
module.exports.themePlugin = themePlugin;
module.exports.darkMode = darkMode;
