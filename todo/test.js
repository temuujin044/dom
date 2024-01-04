function createTag(tagName, tagClass, tagId) {
  const tag = document.createElement(`${tagName}`);
  if (tagClass != "" && tagClass != undefined) {
    tag.setAttribute("class", `${tagClass}`);
  }
  if (tagId != "" && tagId != undefined) {
    tag.setAttribute("id", `${tagId}`);
  }
  return tag;
}
let boardName = [
  {
    title: "Todo",
    arr: [],
  },
  {
    title: "Inprocess",
    arr: [],
  },
  {
    title: "Stuck",
    arr: [],
  },
  {
    title: "Done",
    arr: [],
  },
];
let priotity = ["Low", "Medium", "High"];
const root = document.getElementById("root");
const container = createTag("div", "container");
root.appendChild(container);
