const funcButtons = [
  {
    op: false,
    name: "clear",
    symbol: "C",
    style: ["button", "wide-button"],
  },
  {
    op: false,
    name: "delete",
    symbol: "←",
    style: ["button", "wide-button"],
  },
];

const ops = [
  {
    op: true,
    name: "add",
    symbol: "+",
    style: ["button"],
  },
  {
    op: true,
    name: "sub",
    symbol: "-",
    style: ["button"],
  },
  {
    op: true,
    name: "mul",
    symbol: "x",
    style: ["button"],
  },
  {
    op: true,
    name: "div",
    symbol: "/",
    style: ["button"],
  },

  {
    op: true,
    name: "exp",
    symbol: "xⁿ",
    style: ["button"],
  },

  {
    op: true,
    name: "sqrt",
    symbol: "√x",
    style: ["button"],
  },
  {
    op: true,
    name: "square",
    symbol: "x²",
    style: ["button"],
  },
  {
    op: true,
    name: "equals",
    symbol: "=",
    style: ["button"],
  },
];

export const buttons = [...funcButtons, ...ops];

export const numbers = [
  {
    op: false,
    name: "one",
    symbol: "1",
    style: ["button"],
  },
  {
    op: false,
    name: "two",
    symbol: "2",
    style: ["button"],
  },
  {
    op: false,
    name: "three",
    symbol: "3",
    style: ["button"],
  },
  {
    op: false,
    name: "four",
    symbol: "4",
    style: ["button"],
  },
  {
    op: false,
    name: "five",
    symbol: "5",
    style: ["button"],
  },
  {
    op: false,
    name: "six",
    symbol: "6",
    style: ["button"],
  },
  {
    op: false,
    name: "seven",
    symbol: "7",
    style: ["button"],
  },
  {
    op: false,
    name: "eight",
    symbol: "8",
    style: ["button"],
  },
  {
    op: false,
    name: "nine",
    symbol: "9",
    style: ["button"],
  },
  {
    op: false,
    name: "pos-neg",
    symbol: "-/+",
    style: ["button"],
  },
  {
    op: false,
    name: "zero",
    symbol: "0",
    style: ["button"],
  },
  {
    op: false,
    name: "decimal",
    symbol: ".",
    style: ["button"],
  },
];
