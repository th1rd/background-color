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
    const root = document.getElementById('root')
    const btn = document.getElementById('change-btn')

    btn.addEventListener('click', function(){
        const bgColor = generateRGBColor()
        root.style.backgroundColor = bgColor;
    })
}

// Step 2 - Random color genertor function
function generateRGBColor(){
    // rgb(0, 0, 0), rgb(255, 255, 255)
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`
}
// Step 3 - Collect all necessary references

// Step 4 - Handle the click event
