/*
	Tic Tac Toe AI
	Author: Don Cullen
	Date: 2016/05/20
*/

var reset = function () {
    $(".square").each(function () {
        $(this).html("");
    });
};

var AI_Turn = function () {
	var cHuman = "X";
	var cAI = "O";
	var grid = new Array(3);
	var tH0, tH2, tH3;
	var i = 0, l = 0;
	
	// Translate into grid array
	for (i = 0; i < 3; i++) {
		tH0 = $("#S"+i+"0").html().trim();
		tH1 = $("#S"+i+"1").html().trim();
		tH2 = $("#S"+i+"2").html().trim();
		grid[i] = [tH0, tH1, tH2];
	}
	
	console.log("Looking for opportunities to win...");
	// Check rows to see if a winning move can be made, if so, do it.
	for (i = 0; i < 3; i++) {
		if(grid[i][0].length == 0 && grid[i][1] == cAI && grid[i][2] == cAI) {
			$("#S"+i+"0").html(cAI);
			return;
		}
		if(grid[i][0] == cAI && grid[i][1].length == 0 && grid[i][2] == cAI) {
			$("#S"+i+"1").html(cAI);
			return;
		}
		if(grid[i][0] == cAI && grid[i][1] == cAI && grid[i][2].length == 0) {
			$("#S"+i+"2").html(cAI);
			return;
		}
	}
	
	// Check columns to see if a winning move can be made, if so, do it.
	for (i = 0; i < 3; i++) {
		if(grid[0][i].length == 0 && grid[1][i] == cAI && grid[2][i] == cAI) {
			$("#S0"+i).html(cAI);
			return;
		}
		if(grid[0][i] == cAI && grid[1][i].length == 0 && grid[2][i] == cAI) {
			$("#S1"+i).html(cAI);
			return;
		}
		if(grid[0][i] == cAI && grid[1][i] == cAI && grid[2][i].length == 0) {
			$("#S2"+i).html(cAI);
			return;
		}
	}
	
	// Check diagonals to see if a winning move can be made, if so, do it.
	if(grid[0][0].length == 0 && grid[1][1] == cAI && grid[2][2] == cAI) {
		$("#S00").html(cAI);
		return;
	}
	if(grid[0][0] == cAI && grid[1][1].length == 0 && grid[2][2] == cAI) {
		$("#S11").html(cAI);
		return;
	}
	if(grid[0][0] == cAI && grid[1][1] == cAI && grid[2][2].length == 0) {
		$("#S22").html(cAI);
		return;
	}
	if(grid[0][2].length == 0 && grid[1][1] == cAI && grid[2][0] == cAI) {
		$("#S02").html(cAI);
		return;
	}
	if(grid[0][2] == cAI && grid[1][1].length == 0 && grid[2][0] == cAI) {
		$("#S11").html(cAI);
		return;
	}
	if(grid[0][2] == cAI && grid[1][1] == cAI && grid[2][0].length == 0) {
		$("#S20").html(cAI);
		return;
	}
	console.log("No opportunities to win found.");
	// Since no winning moves can be made, check to see if countering is needed.
	
	// Check for blocking human win opportunity in rows
	// Check rows to see if a winning move can be made, if so, block it.
	console.log("Looking for opportunity to block a win...");
	for (i = 0; i < 3; i++) {
		if(grid[i][0].length == 0 && grid[i][1] == cHuman && grid[i][2] == cHuman) {
			console.log("Opportunity to block detected, blocked #S"+i+"0");
			$("#S"+i+"0").html(cAI);
			return;
		}
		if(grid[i][0] == cHuman && grid[i][1].length == 0 && grid[i][2] == cHuman) {
			console.log("Opportunity to block detected, blocked #S"+i+"1");
			$("#S"+i+"1").html(cAI);
			return;
		}
		if(grid[i][0] == cHuman && grid[i][1] == cHuman && grid[i][2].length == 0) {
			console.log("Opportunity to block detected, blocked #S"+i+"2");
			$("#S"+i+"2").html(cAI);
			return;
		}
	}
	
	// Check columns to see if a winning move can be made, if so, block it.
	for (i = 0; i < 3; i++) {
		if(grid[0][i].length == 0 && grid[1][i] == cHuman && grid[2][i] == cHuman) {
			$("#S0"+i).html(cAI);
			return;
		}
		if(grid[0][i] == cHuman && grid[1][i].length == 0 && grid[2][i] == cHuman) {
			$("#S1"+i).html(cAI);
			return;
		}
		if(grid[0][i] == cHuman && grid[1][i] == cHuman && grid[2][i].length == 0) {
			$("#S2"+i).html(cAI);
			return;
		}
	}
	
	// Check diagonals to see if a winning move can be made, if so, block it.
	if(grid[0][0].length == 0 && grid[1][1] == cHuman && grid[2][2] == cHuman) {
		$("#S00").html(cAI);
		return;
	}
	if(grid[0][0] == cHuman && grid[1][1].length == 0 && grid[2][2] == cHuman) {
		$("#S11").html(cAI);
		return;
	}
	if(grid[0][0] == cHuman && grid[1][1] == cHuman && grid[2][2].length == 0) {
		$("#S22").html(cAI);
		return;
	}
	if(grid[0][2].length == 0 && grid[1][1] == cHuman && grid[2][0] == cHuman) {
		$("#S02").html(cAI);
		return;
	}
	if(grid[0][2] == cHuman && grid[1][1].length == 0 && grid[2][0] == cHuman) {
		$("#S11").html(cAI);
		return;
	}
	if(grid[0][2] == cHuman && grid[1][1] == cHuman && grid[2][0].length == 0) {
		$("#S20").html(cAI);
		return;
	}
	console.log("No opportunities found.");
	
	// Since no blocking moves have been made, human must've chose an odd move, have to react.
	console.log("Thinking about what the next best move should be...");
	// Since no winning or blocking moves can be made, determine best move possible.
	var movesMade = 0;
	for (i = 0; i < 3; i++) {
		for (l = 0; l < 3; l++) {
			if(grid[i][l] == cHuman) movesMade++;
		}
	}
	
	if(movesMade == 1) {
		console.log("Since game just started, checking to see what strategy human chose...");
		// Game just started, check where human placed mark
		if(inCenter(cHuman)) {
			console.log("Human chose center strategy.");
			$("#S00").html(cAI);
			return;
		}
		if(inCorner(cHuman)) {
			console.log("Human chose corner strategy.");
			$("#S11").html(cAI);
			return;
		}
		if(inEdge(cHuman)) {
			console.log("Human chose edge strategy.");
			$("#S11").html(cAI);
			return;
		}
	} else if(movesMade > 1) {
		console.log("Player not playing aggressively.  Human's up to something.  Let's short circuit it.");
		
		// Check for known strategies and counter them
		if(movesMade == 2) {
			// Check for Mario AFC (in all forms) & EIHB Strat
			if($("#S11").html() == cAI) {
				if($("#S12").html() == cHuman && $("#S00").html() == cHuman) {
					console.log("Mario AFC strategy detected, countered.");
					$("#S02").html(cAI);
					return;
				}
				if($("#S02").html() == cHuman && $("#S21").html() == cHuman) {
					console.log("Mario AFC strategy detected, countered.");
					$("#S22").html(cAI);
					return;
				}
				if($("#S22").html() == cHuman && $("#S10").html() == cHuman) {
					console.log("Mario AFC strategy detected, countered.");
					$("#S20").html(cAI);
					return;
				}
				if($("#S20").html() == cHuman && $("#S01").html() == cHuman) {
					console.log("Mario AFC strategy detected, countered.");
					$("#S00").html(cAI);
					return;
				}
			}
			if($("#S11").html() == cHuman && $("#S22").html() == cHuman) {
				console.log("Mario EIHB strategy detected, countered.");
				$("#S02").html(cAI);
				return;
			}
			if($("#S02").html() == cHuman && $("#S10").html() == cHuman) {
				console.log("Rick CDG strategy detected, countered.");
				$("#S21").html(cAI);
				return;
			}
			if($("#S20").html() == cHuman && $("#S12").html() == cHuman) {
				console.log("Rick CDG strategy detected, countered.");
				$("#S01").html(cAI);
				return;
			}
		}
		
	
		// Check to see if there's symbol in corner, if so, return available adjuncting edge
		if($("#S00").html() == cHuman) {
			if($("#S10").html().length == 0) {
				$("#S10").html(cAI);
				return;
			}
		}
		if($("#S20").html() == cHuman) {
			if($("#S10").html().length == 0) {
				$("#S10").html(cAI);
				return;
			}
		}
		if($("#S02").html() == cHuman) {
			if($("#S12").html().length == 0) {
				$("#S12").html(cAI);
				return;
			}
		}
		if($("#S22").html() == cHuman) {
			if($("#S12").html().length == 0) {
				$("#S12").html(cAI);
				return;
			}
		}
		
		// No symbols in corner, search for edge symbols, if found, return available adjucting corner
		console.log("No symbols in corner, search for edge symbols, if found, return available adjucting corner");
		if($("#S10").html() == cHuman) {
			if($("#S00").html().length == 0) {
				$("#S00").html(cAI);
				return;
			}
			if($("#S20").html().length == 0) {
				$("#S20").html(cAI);
				return;
			}
		}
		if($("#S01").html() == cHuman) {
			if($("#S00").html().length == 0) {
				$("#S00").html(cAI);
				return;
			}
			if($("#S02").html().length == 0) {
				$("#S02").html(cAI);
				return;
			}
		}
		if($("#S12").html() == cHuman) {
			if($("#S02").html().length == 0) {
				$("#S02").html(cAI);
				return;
			}
			if($("#S22").html().length == 0) {
				$("#S22").html(cAI);
				return;
			}
		}
		if($("#S21").html() == cHuman) {
			console.log("Bottom center marked!");
			if($("#S20").html().length == 0) {
				console.log("Taking bottom left.");
				$("#S20").html(cAI);
				return;
			}
			if($("#S22").html().length == 0) {
				console.log("Taking bottom right.");
				$("#S22").html(cAI);
				return;
			}
		}

		return;
	} else {
		console.log("movesMade failed, value: "+movesMade);
	}
	
	console.log("Should have not made it to this point, AI made an error.");
	console.log("If we're at this point, AI did not make a move (even if the next line says it did).");
};

function inCorner(symbol) {
	if($("#S00").html() == symbol) return true;
	if($("#S02").html() == symbol) return true;
	if($("#S20").html() == symbol) return true;
	if($("#S22").html() == symbol) return true;
	return false;
}

function inEdge(symbol) {
	if($("#S01").html() == symbol) return true;
	if($("#S12").html() == symbol) return true;
	if($("#S21").html() == symbol) return true;
	if($("#S10").html() == symbol) return true;
	return false;
}

function inCenter(symbol) {
	if($("#S11").html() == symbol) return true;
	return false;
}

var checkterm = function () {
	var cHuman = "X";
	var cAI = "O";
	var grid = new Array(3);
	var tH0, tH2, tH3;
	var i = 0, l = 0;
	
	// Translate into grid array
	for (i = 0; i < 3; i++) {
		tH0 = $("#S"+i+"0").html().trim();
		tH1 = $("#S"+i+"1").html().trim();
		tH2 = $("#S"+i+"2").html().trim();
		grid[i] = [tH0, tH1, tH2];
	}
	
	// Find winning rows
	for (i = 0; i < 3; i++) {
		if(grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2]) {
			if(grid[i][0].length != 0) return grid[i][0];
		}
	}
	
	// Find winning columns
	for (i = 0; i < 3; i++) {
		if(grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i]) {
			if(grid[0][i].length != 0) return grid[0][i];
		}
	}
	
	// Find winning diagonals
	if(grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
		if(grid[0][0].length != 0) return grid[0][0];
	}
	if(grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0]) {
		if(grid[0][2].length != 0) return grid[0][2];
	}
	
	// Check to see if more moves can be made
	for (i = 0; i < 3; i++) {
		for (l = 0; l < 3; l++) {
			if(grid[i][l].length == 0) return false;	// No terminal conditions were found, continue game.
		}
	}
	
	// No further moves are possible, game is a draw.
	return 'd';
};


$(document).ready(function () {
	var cHuman = "X";
	var cAI = "O";
    $(".square").on("click", function () {
		console.log("Human made a move.");
        if ($(this).html() == "") {
            $.when($(this).html(cHuman)).then(function(){
				console.log("Checking for game terminal conditions...");
				termsig = checkterm();
				if(termsig) {
					console.log("Terminal condition met.");
					if(termsig == cHuman) {
						console.log("Human won.");
						$("#message").html("Whelps, you won!");
						$("#messagebox").addClass("drawmessage");
						$("#overlay").css("display", "flex");
						return;
					} else if (termsig == 'd') {
						console.log("Nobody won, game ended in a draw.");
						$("#message").html("Game is<br>a draw");
						$("#messagebox").addClass("drawmessage");
						$("#overlay").css("display", "flex");
						return;
					}
				}
				console.log("AI's turn.");
				AI_Turn();
				console.log("AI made a move.");
				termsig = checkterm();
				console.log("Checking for game terminal conditions...");
				if(termsig) {
					console.log("Terminal condition met.");
					if(termsig == cAI) {
						console.log("AI won.");
						$("#message").html("You lose");
						$("#messagebox").addClass("lossmessage");
						$("#overlay").css("display", "flex");
						return;
					} else if (termsig == 'd') {
						console.log("Nobody won, game ended in a draw.");
						$("#message").html("Game is<br>a draw");
						$("#messagebox").addClass("drawmessage");
						$("#overlay").css("display", "flex");
						return;
					}
				}
				console.log("Human's turn.");
			});
        }
    });
	
	$('#restart').on('click', function (event) {
		$("#messagebox").removeClass();
		$("#overlay").hide();
		reset();
	});
});