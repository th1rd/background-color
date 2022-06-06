/**
 * Project requirement
 * - Change background color by generating random rgb color by clicking a button.
 * 
 */

//Steps

// Step 1 - Create onload handler
window.onload = () => {
    main()
}

function main(){
    const root = document.getElementById('root');
    const changeBtn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');

    changeBtn.addEventListener('click', function(){
        const bgColor = generateRGBColor()
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value);
    });
}

// Step 2 - Random color genertor function
function generateRGBColor(){
    // rgb(0, 0, 0), rgb(255, 255, 255)
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
// Step 3 - Collect all necessary references

// Step 4 - Handle the click event
