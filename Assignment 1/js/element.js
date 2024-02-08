class Element {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
  }

  createElement() {
    const personElement = document.createElement("div");
    personElement.classList.add("inner__col-element");
    personElement.innerHTML = `
    <span class="icon">${this.icon}</span>
    <span class="name">${this.name}</span>
    `;

    return personElement;
  }
}
