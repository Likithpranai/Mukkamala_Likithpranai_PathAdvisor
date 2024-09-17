const fs = require("fs");

const nodesNew = JSON.parse(fs.readFileSync("nodes_new.json", "utf-8"));
const nodesOld = JSON.parse(fs.readFileSync("nodes_old.json", "utf-8"));

const oldNodesMap = new Map();
nodesOld.forEach((node) => {
  if (node.name) {
    oldNodesMap.set(node.name, node);
  }
});

nodesNew.forEach((newNode) => {
  const oldNode = oldNodesMap.get(newNode.name);

  if (oldNode) {
    if (
      newNode.floorId === oldNode.floorId &&
      JSON.stringify(newNode.coordinates) !==
        JSON.stringify(oldNode.coordinates)
    ) {
      console.log(`new coordinates: ${newNode.name}`);
    }
  } else if (newNode.name) {
    console.log(`new entry: ${newNode.name}`);
  }
});
