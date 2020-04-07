console.log('Hello from B2S!');
let viz;

const vizContainer = document.getElementById("vizContainer");
const url = "https://public.tableau.com/views/MakeovermondayWeshouldallbevegetarians/Makeovermonday";
const options = {
    device: "desktop",
};

const exportToPDF = document.getElementById('exportToPDF')
const exportToImage = document.getElementById('exportToImage')

function initViz() {
    console.log("Hello Bene, you are so sexy");
   viz = new tableau.Viz(vizContainer,url,options)
}

exportToPDF.addEventListener('click',function(){

    console.log('Hello from my export PDF button!');
    viz.showExportPDFDialog();
});


exportToImage.addEventListener('click',function(){

    console.log('Hello from my export Image button!');
    viz.showExportImageDialog();
});


document.addEventListener("DOMContentLoaded", initViz())