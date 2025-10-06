// demonstrating closures in javaScript 
// a closure is basically a function with lexical scoping 

function createGame(){
    let score = 0 
    
    function increaseScore( pts){
        score+=pts
        console.log(`+${pts} points`)
        
    }
    function decreaseScore( pts){
        score-=pts
        console.log(`-${pts} points`)
    }
    function displayScore(){
        console.log(`Score is ${ score }`)
    }
    
    return { increaseScore , decreaseScore ,displayScore}
}

const game = createGame()
game.increaseScore(5)
game.increaseScore(10)
game.displayScore()
game.decreaseScore(2)
game.displayScore()

// a point to be noted while writing closures is that inner function can use the values of outer functions. 