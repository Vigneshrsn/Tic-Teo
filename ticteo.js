var board = [

    ['', '', ''],
    ['', '', ''],
    ['', '', '']

]


function showBoard() {
    // console.table(board);
    checkWinner();
}


function checkWinner() {
    let winner = null;

    //Horizontal Win
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != '') {
            return result(board[i][0]);
        }
    }
    //Vertical Win
    for (let j = 0; j < 3; j++) {
        if (board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[0][j] != '') {
            return result(board[0][j]);
        }
    }

    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                openSpots++;
            }
        }
    }

    if (winner == null && openSpots == 0) {
        return result('tie');
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
        return result(board[0][0]);
    } else if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '') {
        return result(board[0][2]);
    } else {
        return winner;
    }
}

function result(win) {
    if (win == x) {
        return 10;
    } else if (win == o) {
        return -10;
    }
    return 0;
}