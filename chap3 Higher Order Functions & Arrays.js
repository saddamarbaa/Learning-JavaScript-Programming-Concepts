/*
JavaScript Higher Order Functions & Arrays
*/

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

// JavaScript Array filter() Method

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

// JavaScript Array map() Method

// Create Array Of company Names
const companyNames = companies.map((company) => {
  // console.log(companyNames);
  return `${company.name} [${company.start} - ${company.end}]`;
});

console.log(companyNames);

// array of ages Square
const agesSquare = ages.map((age) => Math.sqrt(age));
console.log(agesSquare);

// JavaScript Array sort() Method

// Sort Companies by Sart year
const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanies);

const sortedCompanies2 = companies.sort((a, b) => (b.start > a.start ? 1 : -1));

console.log(sortedCompanies2);

// Sort Ages

const sortedAges = ages.sort((a, b) => (a > b ? 1 : -1));
console.log(sortedAges);

const sortedAges2 = ages.sort((a, b) => a - b);
console.log(sortedAges2);

// JavaScript Array reduce() Method

// Sum All the number in array with for loop

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

// Sum All the number in array  with reduce method

let ageSum2 = ages.reduce(function (total, age) {
  return total + age;
}, 0);

console.log(ageSum2);

// Sum All the number in array  with reduce method and Arrow Function

let ageSum3 = ages.reduce((total, age) => total + age, 0);

console.log(ageSum2);

// Get Total Years For all compnies
let totalYears = companies.reduce(function (total, company) {
  return total + company.end - company.start;
}, 0);

console.log(totalYears);

let totalYears2 = companies.reduce(
  (total, company) => total + company.end - company.start,
  0
);

console.log(totalYears2);
