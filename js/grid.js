const grid = {
    
     // Function to create a grid container with specified styles.
    gridContainer : function (columns) {
    const sectionGrid = document.createElement("section");
        sectionGrid.classList.add("grid", "gridContainer");
        document.body.appendChild(sectionGrid);
        sectionGrid.textContent = sectionGrid.classList.value;
        sectionGrid.style.backgroundColor = "blue";
        sectionGrid.style.width = "90vw";
        sectionGrid.style.display = "grid";
        sectionGrid.style.marginLeft = "auto";
        sectionGrid.style.marginRight = "auto";
        sectionGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        sectionGrid.style.gridTemplateRows = "auto";
        sectionGrid.style.gridAutoFlow = "row";
        sectionGrid.style.justifyContent = "center";
        sectionGrid.style.gap = "10px";
        sectionGrid.style.padding = "10px";
        sectionGrid.style.alignItems = "center";
        sectionGrid.style.textAlign = "center";
    },
    // Function to create a grid item with specified styles.
    gridItem : function () {
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        document.querySelector(".gridContainer").appendChild(gridItem);
        gridItem.textContent = gridItem.classList.value;
        gridItem.style.backgroundColor = "red";
        gridItem.style.padding = "10px";
    },
    //TODO: Add more grid items.
    //TODO: add rows
    //Créer les boutons pour le nombre de colonnes
    buttonsColumns : function () {
        const sectionButtons = document.createElement("section");
        sectionButtons.classList.add("sectionButtonColunns");
        document.body.appendChild(sectionButtons);
        sectionButtons.textContent = sectionButtons.classList.value;
        sectionButtons.style.display = "flex";
        sectionButtons.style.flexDirection = "row";
        sectionButtons.style.flexWrap = "nowrap";
        sectionButtons.style.justifyContent = "center";
        sectionButtons.style.Gap = "10px";
        sectionButtons.style.padding = "10px";
        sectionButtons.style.textAlign = "center";
        const buttonValues = [3, 6, 9, 12]
            for (let buttonValue of buttonValues) {
                const btn = document.createElement("button");
                btn.classList.add("buttonColumns");
                btn.textContent = buttonValue;
                sectionButtons.appendChild(btn);
                btn.addEventListener("click", function () {
                    grid.nbColumns = buttonValue;
                    console.log("nb de colums : " + grid.nbColumns);
                    grid.resetSection();
                    grid.gridContainer(grid.nbColumns);
                    const areaColumns = [];
                    
                    for (let i = 0; i < grid.nbColumns; i++) {
                        grid.gridItem();
                        grid.gridItem();
                        }
                    for (let i = 0; i < Math.ceil((document.querySelector(".gridContainer").children.length) / grid.nbColumns); i++) {
                        let countRows = i + 1;

                        for (let i = 0; i < (grid.nbColumns / Math.ceil((document.querySelector(".gridContainer").children.length))); i++) {
                            const rowsLentgh = countRows;
                            areaColumns.push(`${rowsLentgh}-${i}`);
                            console.log(areaColumns);
                        }
                    }
                })
            }
    },
    resetSection : function () {
        document.querySelector(".gridContainer").remove();
    },
        
    //Stocker le nombre de colonnes
    nbColumns: 0,
 
    //TODO: NAME Frames
    //TODO: 

}
grid.buttonsColumns();
grid.gridContainer();
grid.gridItem();
grid.gridItem();

