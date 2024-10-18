// unordered collection of key value pair
//both of key and value of any data type
//map is iterable

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

map.set("d", 4); // add

console.log(map.has("b")); // if map contains b ?

map.delete("a");

console.log("size of map is : ", map.size);

map.clear(); //  delete the whole map
for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
