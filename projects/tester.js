var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" }
}

// console.log(votes["Alex"])

for (var vote in votes){
console.log(votes[vote])
}
// console.log(votes.Alex)
// console.log(votes["Alex"])

// console.log(votes.Alex.treasurer)
// console.log(votes["Alex"].treasurer)
// console.log(votes.Alex["treasurer"])
// console.log(votes["Alex"]["treasurer"])
