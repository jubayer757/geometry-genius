function calculateRectangle(){
    //input for rectangle width
    const rectangle = document.getElementById('rectangle-w');
    const value = rectangle.value;
    const mainValue = parseFloat(value);
    console.log(value);
    //input for rectangle length
    const recL = document.getElementById('rectangle-l');
    const Lvalue = recL.value;
    const main = parseFloat(Lvalue);
    console.log(main);
    //calculate the area 
    const area = mainValue * main ;
    console.log('area of rectangle is ',area);
    //print the area 
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText=area;

}