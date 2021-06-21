class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
        this.score=null;
    }
    getCount(){
        database.ref("playerCount").on("value",function (data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    update(){
        database.ref("players"+this.index).set({
            name:this.name,
            distance:this.distance,
            score:this.score
        })
    }

    static getPlayerinfo(){
        database.ref('players').on("value",(data)=>{
            allPlayers=data.val();
        })
    }

}