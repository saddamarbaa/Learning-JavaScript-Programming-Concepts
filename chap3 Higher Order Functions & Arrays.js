const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// console.log(companies);
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// forEach

companies.forEach((company) => {
  // console.log(company);
  console.log(company.name);
});

// Filter Using Normal for loop

// let canDrink = [];

// for (let age = 0; age < ages.length; age++) {
//   if (ages[age] > 21) {
//     canDrink.push(ages[age]);
//   }
// }

// console.log(canDrink);

// filter using filter method

// let canDrink = ages.filter((age) => {
//   if (age > 21) {
//     return true;
//   }
// });

// console.log(canDrink);

// Filter Using ES6 functionality

let canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

// Fillter Retail Compaines

// const retailCompanies = companies.filter((company) => {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

console.log(companies);

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

console.log(retailCompanies);

// Get 80s Companies
const CompaniesOf80s = companies.filter(
  (company) => company.start > 1980 && company.end <= 1990
);

console.log(CompaniesOf80s);

// Get Companies That Lasted 10 Years Or More

const CompaniesLastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(CompaniesLastedTenYears);
