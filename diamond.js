function diamond_Stars(r) {
    for (let i = 0; i < 2 * r - 1; i++) {
        const mid = r - 1; 
        const spaces = Math.abs(i - mid); 
        const stars = 2 * (r - Math.abs(i - mid)) - 1; 
        console.log(' '.repeat(spaces) + '*'.repeat(stars));
    }
}


const r = parseInt(prompt("Enter number of rows: "), 10);
if (!isNaN(r) && r > 0) {
    diamond_Stars(r); 
} else {
    console.log("You entered an Invalid number, Enter a Valid One :");
}

