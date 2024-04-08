const myDiagram = new go.Diagram("myDiagramDiv",
  {
    "undoManager.isEnabled": true,
    layout: new go.TreeLayout({ angle: 90, layerSpacing: 35 })
  });

myDiagram.nodeTemplate =
  new go.Node("Horizontal",
    { background: "#44CCFF" })
    .add(new go.Picture(
        { margin: 10, width: 50, height: 50, background: "red" })
        .bind("source"))
    .add(new go.TextBlock("Default Text",
        { margin: 12, stroke: "white", font: "bold 16px sans-serif" })
        .bind("text", "name"));

// define a Link template that routes orthogonally, with no arrowhead
myDiagram.linkTemplate =
  new go.Link(
    // default routing is go.Link.Normal
    // default corner is 0
    { routing: go.Link.Orthogonal, corner: 5 })
    // the link path, a Shape
    .add(new go.Shape({ strokeWidth: 3, stroke: "#555" }))
    // if we wanted an arrowhead we would also add another Shape with toArrow defined:
    //.add(new go.Shape({  toArrow: "Standard", stroke: null  }))

// it's best to declare all templates before assigning the model
myDiagram.model = new go.TreeModel(
  [
    { key: "1",              name: "Don Meow",   source: "cat1.png" },
    { key: "2", parent: "1", name: "Demeter",    source: "cat2.png" },
    { key: "3", parent: "1", name: "Copricat",   source: "cat3.png" },
    { key: "4", parent: "3", name: "Jellylorum", source: "cat4.png" },
    { key: "5", parent: "3", name: "Alonzo",     source: "cat5.png" },
    { key: "6", parent: "2", name: "Munkustrap", source: "cat6.png" }
  ]);