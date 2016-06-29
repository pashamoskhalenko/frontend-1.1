function diamond(n){
    var fullRow = Math.ceil(n/2);
    var diam = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++)
        if (i <= fullRow) {
            if (j >= fullRow - i + 1 && j <= fullRow + i - 1) {
                diam += "*";
            } else {
                diam += " ";
            }
        } else {
            if (j > i - fullRow && j <= fullRow + (n - i) ) {
                diam += "*";
            } else {
                diam += " ";
            }

        }
        diam += "\n";
    }
    return diam;
}

console.log(diamond(3));

// || (i > fullRow && j > (fullRow - 1 + i))
