// collection of values
// values must be unique
//mix of different data types
// sets are iterable

const set = new Set([1, 2, 3, "Eman"]);
set.add(4);

console.log(set.has(3)); // if set contains 3 ?

set.delete(2); // 2 is value no index

console.log(set.size);

set.clear(); // delete the whole set
for (const item of set) {
  console.log(item);
}
