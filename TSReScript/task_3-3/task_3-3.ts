import { initPrintOut, printOut, newLine } from "../../lib/utils.ts";
initPrintOut(document.getElementById("txtOut")!);

printOut(" Part 1:----------------------------------------------------------------------------------------");
function dato(){
    const datoTid = new Date();
    const Valg =
    {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const norskTid = datoTid.toLocaleDateString("no-NO", Valg);
    printOut(norskTid);
}

dato();
printOut(newLine);

printOut(" Part 2:--------------------------------------------------------------------------------------");
function DatoPart2(){
    const datoTid = new Date();
    return datoTid;
}

function countDownMaker(relaseDate: Date){
    const dateToday = new Date();
}
