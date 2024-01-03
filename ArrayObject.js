let display = [
  {
    brand: "LG",
    inch: "23",
    price: 200000,
    year: "2022",
  },
  {
    brand: "sony",
    inch: "31",
    price: 300000,
    year: "2021",
  },
  {
    brand: "sony",
    inch: "31",
    price: 300000,
    year: "2021",
  },
  {
    brand: "sony",
    inch: "31",
    price: 300000,
    year: "2021",
  },
  {
    brand: "sony",
    inch: "31",
    price: "300000",
    year: "2021",
  },
  {
    brand: "sony",
    inch: "31",
    price: "300000",
    year: "2021",
  },
  {
    brand: "sony",
    inch: "31",
    price: "300000",
    year: "2021",
  },
  {
    brand: "sony",
    inch: "31",
    price: "300000",
    year: "2021",
  },
];

let iphone15 = {
  brand: "apple",
  prices: [
    {
      year: 2020,
      price: 900,
    },
    {
      year: 2021,
      price: 850,
    },
    {
      year: 2022,
      price: 800,
    },
  ],
};

iphone15.prices[2].price = 790;

for (let i = 0; i < display.length; i++) {
  display[i].price = display[i].price * 0.9;
}
for (let i = 1; i < display.length; i++) {
  display[i].brand = "Sony";
}

console.log(display);
console.log(iphone15);
