let data = [
  { id: 2, name: "reza", parentId: 1 },
  { id: 4, name: "hosein", parentId: 4 },
  { id: 5, name: "ahmad", parentId: 9 },
  { id: 10, name: "soltan", parentId: 4 },
  { id: 3, name: "mohammad", parentId: 2 },
  { id: 6, name: "hadi", parentId: 2 },
  { id: 8, name: "majid", parentId: 5 },
  { id: 9, name: "kazem", parentId: 4 },
  { id: 11, name: "maryam", parentId: 5 },
  { id: 12, name: "hassan", parentId: 6 },
  { id: 19, name: "saeed", parentId: 14 },
  { id: 16, name: "sajad", parentId: 7 },
  { id: 13, name: "mahdi", parentId: 8 },
  { id: 15, name: "bahman", parentId: 10 },
  { id: 17, name: "erfan", parentId: 11 },
  { id: 1, name: "ali", parentId: null },
  { id: 43, name: "haji", parentId: null },
  { id: 54, name: "mansor", parentId: null },
  { id: 65, name: "mohajer", parentId: null },
  { id: 18, name: "marjan", parentId: 3 },
  { id: 14, name: "bahram", parentId: 7 },
  { id: 7, name: "masoud", parentId: 65 },
  { id: 20, name: "sobhan", parentId: 1 },
]

function makeTree(baseArray) {
  baseArray.forEach((item) => {
    item.children = []
    if (item.children.length > 0) {
      makeTree(item.children)
    }

    baseArray.forEach((element) => {
      if (element.parentId === item.id) {
        item.children.push(element)
      }
    })
  })

  baseArray = baseArray.filter((item) => item.parentId === null)

  return baseArray
}

let tree = makeTree(data)

function makeFlat(tree) {
  let result = []

  tree.forEach((item) => {
    result.push(item)
    if (item.children.length > 0) {
      makeFlat(item.children)
    }
  })
  console.log(result)
}
makeFlat(tree)
// function makeFlat(tree) {

//   tree.forEach((item) => {
//     if (item.children.length > 0) {
//       makeFlat(item.children)
//     }
//   })

//   console.log(result)
// }
