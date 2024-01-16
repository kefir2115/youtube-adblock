const settings = [
    new setting("yt:Skip Ads", "BOOL"),
    new setting("yt:Remove banners", "BOOL"),
    new setting("yt:Remove Youtube Premium info", "BOOL"),
];
function setting(name, type) {
    this.name = name.replace(name.split(":")[0]+":", "");
    this.camel = camelize(name.split(":")[1]);
    this.category = name.split(":")[0];
    this.type = type;
}
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

function getCategories() {
    return [
        {name: "Youtube", short: "yt"}
    ];
}
function getSettings(category) {
    return settings.filter(a => a.category == category);
}

function addToHTML() {
    let main = document.querySelector(".settings");
    for(let c of getCategories()) {
        let e = document.createElement("div");
        e.className = "category";
        e.setAttribute("category", c.short);
        e.innerHTML = c.name;

        main.appendChild(e);
        for(let s of getSettings(c.short)) {
            e = document.createElement("div");
            e.className = "setting";
            e.innerHTML = s.name;

            main.appendChild(e);
        }
    }
}

function init() {
    addToHTML();
}
init();