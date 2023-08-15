let data = [
  { id: 2, name: "reza", parentId: 1, children: [] },
  { id: 4, name: "hosein", parentId: 4, children: [] },
  { id: 5, name: "ahmad", parentId: 9, children: [] },
  { id: 10, name: "soltan", parentId: 4, children: [] },
  { id: 3, name: "mohammad", parentId: 2, children: [] },
  { id: 6, name: "hadi", parentId: 2, children: [] },
  { id: 8, name: "majid", parentId: 5, children: [] },
  { id: 9, name: "kazem", parentId: 4, children: [] },
  { id: 11, name: "maryam", parentId: 5, children: [] },
  { id: 12, name: "hassan", parentId: 6, children: [] },
  { id: 19, name: "saeed", parentId: 14, children: [] },
  { id: 16, name: "sajad", parentId: 7, children: [] },
  { id: 13, name: "mahdi", parentId: 8, children: [] },
  { id: 15, name: "bahman", parentId: 10, children: [] },
  { id: 17, name: "erfan", parentId: 11, children: [] },
  { id: 1, name: "ali", parentId: null, children: [] },
  { id: 18, name: "marjan", parentId: 3, children: [] },
  { id: 14, name: "bahram", parentId: 12, children: [] },
  { id: 7, name: "masoud", parentId: 3, children: [] },
  { id: 20, name: "sobhan", parentId: 19, children: [] },
]

function addtoTree(arr) {
  let root = {}
  let el = document.getElementById("tree")

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].parentId === null) {
      root = arr[i]
    }
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].id === arr[i].parentId) {
        arr[j].children.push(arr[i])
      }
    }
  }
  return root
}

function renderTree(node) {
  let el = document.createElement("div")
  let span = document.createElement("span")
  span.classList.add("caret")
  span.textContent = node.name
  el.appendChild(span)

  let details = document.createElement("ul")
  for (let prop in node) {
    if (
      prop !== "id" &&
      prop !== "name" &&
      prop !== "parentId" &&
      prop !== "children"
    ) {
      let detail = document.createElement("li")
      detail.textContent = prop + ": " + node[prop]

      details.appendChild(detail)
    }
  }
  el.appendChild(details)

  if (node.children && node.children.length > 0) {
    let childrenEl = document.createElement("div")
    for (let child of node.children) {
      childrenEl.appendChild(renderTree(child))
    }
    childrenEl.classList.add("nested")
    el.appendChild(childrenEl)
    span.classList.add("caret")
    span.classList.add("caret-down")
    span.addEventListener("click", function () {
      childrenEl.classList.toggle("active")
      span.classList.toggle("caret-down")
    })
  }

  return el
}

let root = addtoTree(data)
let treeEl = document.getElementById("tree")
treeEl.appendChild(renderTree(root))
console.log(addtoTree(data))
