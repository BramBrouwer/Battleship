   
    function FieldCell(x,y,state)
    {
        this.x = x;
        this.y = y;
        this.state = state;
    }
    
    function Game(gameID,gameStatus,enemyID,enemyName,winnerID,isAI){
        this.gameID = gameID;
        this.gameStatus = gameStatus;
        this.enemyID = enemyID;
        this.enemyName = enemyName;
        this.winnerID = winnerID;
        this.isAI = isAi;
    }
    
    