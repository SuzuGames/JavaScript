// !! TESTED IN RPG MAKER MV !!

var ad = Math.floor((Math.random() * 5) + 1);

console.log("Número de ad =",ad)

if (navigator.onLine)
{
    console.log("Conectado a Internet.")

    if (ad === 1)
    {
        console.log("Entrando en 1")
        var windowObjRef = window.open("https://roadtic.com");

    };

    if (ad === 2)
    {

        console.log("Entrando en 2")
        var windowObjRef = window.open("https://www.twitch.tv/yilicit/profile");

    };

    if (ad === 3)
    {

        console.log("Entrando en 3")
        var windowObjRef = window.open("https://www.youtube.com/user/SACKEXILON1");

    };

    if (ad === 4)
    {

        console.log("Entrando en 4")
        var windowObjRef = window.open("https://www.youtube.com/channel/UCnWgRdBNm1A6wSuokc32XBQ/videos");

    };

    if (ad === 5)
    {

        console.log("Entrando en 5")
        var windowObjRef = window.open("https://www.youtube.com/c/JEOSGameplay/featured");
        
    };

    this.wait("600");

setTimeout(function(){

    if (windowObjRef.closed)
    {
    
        // You closed the ad. No rewards.
        console.log("Premio no recibido.")
    
    }else{
    
        // The ad keeps opened. Take your random reward.
        AudioManager.playSe({name: "coin", pan: 0, pitch: 100, volume: 100});
        var adgold = Math.floor((Math.random() * 10) + 1);
        $gameParty.gainGold(adgold);
        console.log("Premio recibido.")
        windowObjRef.close();
    
    }
    
}, 10000);

};