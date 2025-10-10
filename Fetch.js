
// fetching API in JavaScript

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error fetching data:", err));
  
  // fetching API in JavaScript using async/await

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

fetchData();

