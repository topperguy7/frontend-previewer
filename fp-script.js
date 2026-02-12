const editor = document.getElementById("textarea");
const preview = document.getElementById("preview");

let currentTab = "html";

let htmlCode = "<h1>Hello</h1>";
let cssCode = "h1 { color: red; }";
let jsCode = "console.log('Hello');";

editor.value = htmlCode;

function switchTab(tab) {

    if (currentTab === "html") htmlCode = editor.value;
    if (currentTab === "css") cssCode = editor.value;
    if (currentTab === "js") jsCode = editor.value;

    currentTab = tab;

    if (tab === "html") editor.value = htmlCode;
    if (tab === "css") editor.value = cssCode;
    if (tab === "js") editor.value = jsCode;

    title.textContent = tab.toUpperCase();
}

function updatePreview() {
    if (currentTab === "html") htmlCode = editor.value;
    if (currentTab === "css") cssCode = editor.value;
    if (currentTab === "js") jsCode = editor.value;

    preview.srcdoc = `
        <!DOCTYPE html>
        <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>
                ${jsCode}
                <\/script>
            </body>
        </html>
        `;
}

editor.addEventListener("input", updatePreview);

updatePreview();

//------------------theme change--------------------

const themebtn = document.getElementById("toggle-theme");
const savedtheme = localStorage.getItem("theme");

if(savedtheme === "dark"){
    document.body.classList.add("dark");
    themebtn.textContent = "☀️";
} else{
    themebtn.textContent = "🌙";
}

themebtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");

    const isdark = document.body.classList.contains("dark");

    themebtn.textContent = isdark ? "☀️" : "🌙";

    localStorage.setItem("theme", isdark ? "dark" : "light");
});

//-------------------about modal-UI-------------------

const abtbtn = document.getElementById("abtbtn");
const closebtn = document.getElementById("closebtn");
const box = document.getElementById("box");

abtbtn.addEventListener("click", ()=>{
    box.classList.add("show");
});

closebtn.addEventListener("click", ()=>{
    box.classList.remove("show");
});