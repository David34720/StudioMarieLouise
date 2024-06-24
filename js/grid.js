const grid = {
    
     // Function to create a grid container with specified styles.
    gridContainer : function () {
    const sectionGrid = document.createElement("section");
        sectionGrid.classList.add("grid", "gridContainer");
        document.body.appendChild(sectionGrid);
        sectionGrid.textContent = sectionGrid.classList.value;
        sectionGrid.style.display = "grid";
        sectionGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
        sectionGrid.style.gridTemplateRows = "auto";
        sectionGrid.style.justifyContent = "center";
        sectionGrid.style.gridGap = "10px";
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
    }

}
grid.gridContainer();
grid.gridItem();
grid.gridItem();