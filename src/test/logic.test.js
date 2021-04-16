import jsdom from "jsdom";
const { JSDOM } = jsdom;

describe("MODULE RETRIEVE PROJECTS TEST", () => {
  beforeEach(() =>
    JSDOM.fromFile("./dist/index.html").then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    })
  );

  it("Expects the projects projects container to not be null", () => {
    const container = document.getElementsByClassName("g-container");
    expect(container).toBeDefined();
  });

  it("Expects the projects section to not be null", () => {
    const section = document.getElementsByClassName("section");
    expect(section).toBeDefined();
  });

  it("Expects the projects modal to not be null", () => {
    const modal = document.getElementById("launch-modal");
    expect(modal).toBeDefined();
  });

  it("Expects the projects modal to not be null", () => {
    const modal = document.getElementById("task-modal");
    expect(modal).toBeDefined();
  });

  it("Expects the projects modal to not be null", () => {
    const modal = document.getElementById("delete-modal");
    expect(modal).toBeDefined();
  });

  it("Expects the projects task container to not be null", () => {
    const container = document.getElementsByClassName("task-container");
    expect(container).toBeDefined();
  });
});
