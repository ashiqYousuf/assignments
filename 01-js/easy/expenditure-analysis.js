/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (!Array.isArray(transactions) || !transactions.length) return []

  const categoryCosts = transactions.reduce((hashMap, transObj) => {
    const category = transObj.category

    if (category in hashMap) {
      let obj = hashMap[category]
      obj.totalSpent += transObj.price
      hashMap[category] = obj
    } else {
      hashMap[category] = {
        category: category,
        totalSpent: transObj.price
      }
    }

    return hashMap
  }, {})

  let output = []

  for (let key in categoryCosts) {
    output.push(categoryCosts[key])
  }

  return output
}

module.exports = calculateTotalSpentByCategory;
