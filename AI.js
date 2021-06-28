var first = true;

function AI() {
    // AI to make its turn
    let xVal, yVal;
    let move;
    print("AI");
    if (first) {
        let i = random([0, 2]);
        let j = random([0, 2]);
        move = { i, j };
        first = false;
    } else {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == '') {
                    board[i][j] = x;
                    let score = minimax(board, 0, false);
                    board[i][j] = '';
                    if (score > bestScore) {
                        bestScore = score;
                        move = { i, j };
                        print(i, j);
                        print(score);
                    }
                }
            }
        }
    }

    if (move.i == 0) { xVal = 100 } else if (move.i == 1) { xVal = 300 } else if (move.i == 2) { xVal = 500 }

    if (move.j == 0) { yVal = 100 } else if (move.j == 1) { yVal = 300 } else if (move.j == 2) { yVal = 500 }

    fill(255);
    text(x, yVal, xVal);
    s[this.j + this.i * 3] = false;
    board[move.i][move.j] = x;
    // console.table(board);
}

function minimax(board, depth, isMaximizing) {

    if (checkWinner() != null) {
        return checkWinner();
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == '') {
                    board[i][j] = x;
                    bestScore = max(bestScore, minimax(board, depth + 1, false));
                    board[i][j] = '';
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == '') {
                    board[i][j] = o;
                    bestScore = min(bestScore, minimax(board, depth + 1, true));
                    board[i][j] = '';
                }
            }
        }
        return bestScore;
    }
}