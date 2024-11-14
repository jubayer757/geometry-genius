function calculateTriangle(){
    //taking value for base
    const triangle =document.getElementById('triangle-base');
    const value=triangle.value;
    const mainValue =parseFloat(value);
    console.log(mainValue);

    //taking value for height
    const height = document.getElementById('triangle-height');
    const heightValue=height.value;
    const mainHeight=parseFloat(heightValue);
    console.log(mainHeight);

    //calculate the triangle area
    const area =0.5 * mainValue * mainHeight ;
    console.log('area of triangle is',area);

    //giving output
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText=area;
    
}