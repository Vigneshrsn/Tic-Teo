var s = [];
var x = 'x';
var o = 'o';

function setup() {

    var canvas = createCanvas(600, 600);
    canvas.parent('canvas');
    background(40);
    textSize(100);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);

    for (let i = 0; i < 9; i++) {
        s[i] = true;
    }

    for (let i = 0; i <= 600; i += 200) {
        stroke(255);
        strokeWeight(5);
        line(i, 0, i, 600);
        line(0, i, 600, i);
    }
    // AI();

}

//================================================================================================================================

function draw() {
    push();
    stroke(0);
    if (checkWinner() !== null) {
        noLoop();
        if (checkWinner() == 10) {
            fill(0);
            fill(255);
            text('X win', 300, 300);
            location.reload();
        } else if (checkWinner() == -10) {
            fill(255);
            text('O win', 300, 300);
            location.reload();
        } else if (checkWinner() == 0) {
            fill(255);
            text('tie', 300, 300);
            location.reload();
        }
    }
    pop();
}

function player(x, y, i, j) {
    console.log('Player');
    board[i][j] = 'o';
    text('O', x, y);
    s[j + i * 3] = false;
    AI();
    console.table(board);

    showBoard();

}
//=================================================================================================================================

function touchStarted() {

    //	1
    if (s[0] && 0 < mouseX && mouseX < 200 && 0 < mouseY && mouseY < 200) {
        player(100, 100, 0, 0);
        s[0] = false;
    }

    // 2
    else if (s[1] && 200 < mouseX && mouseX < 400 && 0 < mouseY && mouseY < 200) {
        player(300, 100, 0, 1);
        s[1] = false;

    }

    //3
    else if (s[2] && 400 < mouseX && mouseX < 600 && 0 < mouseY && mouseY < 200) {
        player(500, 100, 0, 2);
        s[2] = false;
    }

    //4
    else if (s[3] && 0 < mouseX && mouseX < 200 && 200 < mouseY && mouseY < 400) {
        s[3] = false;
        player(100, 300, 1, 0);
    }

    //5
    else if (s[4] && 200 < mouseX && mouseX < 400 && 200 < mouseY && mouseY < 400) {
        s[4] = false;
        player(300, 300, 1, 1);
    }

    //6
    else if (s[5] && 400 < mouseX && mouseX < 600 && 200 < mouseY && mouseY < 400) {
        s[5] = false;
        player(500, 300, 1, 2);
    }

    //7
    else if (s[6] && 0 < mouseX && mouseX < 200 && 400 < mouseY && mouseY < 600) {
        s[6] = false;
        player(100, 500, 2, 0);
    }

    //8
    else if (s[7] && 200 < mouseX && mouseX < 400 && 400 < mouseY && mouseY < 600) {
        s[7] = false;
        player(300, 500, 2, 1);
    }

    //9
    else if (s[8] && 400 < mouseX && mouseX < 600 && 400 < mouseY && mouseY < 600) {
        s[8] = false;
        player(500, 500, 2, 2);
    }
}
//=================================================================================================================================