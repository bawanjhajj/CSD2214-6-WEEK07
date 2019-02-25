// Your code here!

var bird = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
};


var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: "",
    maxOffspring: 3,
    noisy: true,
    deadly: true

};

var days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
document.write(days.length);
for (i = days.length; i >=0; i--) {
    document.write(days[i]+"<p>");
}
