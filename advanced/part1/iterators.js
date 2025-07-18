//iterators and generators in JavaScript
//we will discuss about advanced JavaScript concepts
//iterators are objects that allow us to traverse through a collection (like arrays, strings, etc.)
//generators are a special type of iterator that can pause and resume execution
function* generatorExample() {
  console.log("Generator started");
  yield "First yield";
  console.log("Generator resumed");
  yield "Second yield";
  console.log("Generator completed");
}


let gen=generatorExample(); // Start the generator
console.log(gen.next().value); // Output: First yield
console.log(gen.next().value); // Output: Second yield
console.log(gen.next().value); // Output: undefined (generator completed)
