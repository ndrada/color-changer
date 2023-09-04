let colors = ['blue', 'red', 'green', 'purple', 'magenta', 'pink', 'cornflowerblue',"brown", "grey", "yellow", "orange"];

function changeColors(){
    document.getElementById("button").addEventListener("click", () => {
        let index = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[index];
    });
};

changeColors();