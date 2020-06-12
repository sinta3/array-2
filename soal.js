let teamA = ['Tika' , 'Junita', 'Riri' , 'Ayu'];
let teamB = teamA.splice(2);
let leaderA = teamA[1];
let leaderB = teamB[1];

console.log(`tim terdiri dari tim A ${teamA} dengan ketua ${leaderA} dan tim B ${teamB} dengan ketua ${leaderB}`);


document.getElementById('array').innerHTML = `tim terdiri dari tim A ${teamA} dengan ketua ${leaderA} dan tim B ${teamB} dengan ketua ${leaderB}`;