const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" }
];

const listEl = document.getElementById("freelancer-list");
const avgEl = document.getElementById("average-price");
function renderFreelancers() {
  listEl.innerHTML = "";
  freelancers.forEach((freelancer) => {
    const li = document.createElement("li");
    li.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
    listEl.appendChild(li);
  });
}
function updateAverage() {
  const total = freelancers.reduce((sum, f) => sum + f.price, 0);
  const avg = (total / freelancers.length).toFixed(2);
  avgEl.textContent = `Average starting price: $${avg}`;
}
const names = ["Carol", "Dave", "Eve", "Frank", "Grace"];
const occupations = ["Programmer", "Designer", "Artist", "Engineer", "Coach"];

function addRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 100) + 20;

  freelancers.push({ name, occupation, price });
  renderFreelancers();
  updateAverage();
}
renderFreelancers();
updateAverage();
setInterval(addRandomFreelancer, 3000);
