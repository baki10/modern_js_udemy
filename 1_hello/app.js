const name = "Baki";
const age = 31;
const job = "Web Developer";
const city = "Askar";
let html;

// es5
html = '<ul>'+
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' + 
        '<li>Job: ' + job + '</li>' + 
       '</ul>';

// es6 (template strings with ``)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'over 30' : 'under 30'}
    </ul>
`;

document.body.innerHTML = html;

function hello() {
    return 'hello world';
}