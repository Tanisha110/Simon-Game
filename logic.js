function newRandom(){
    var rand= Math.floor(Math.random()*4);
    var arr=["red", "yellow","green","blue"];
    chosen= arr[rand];
    pattern.push(chosen);
        $("#"+chosen).fadeOut(150);
        $("#"+chosen).fadeIn(150);
        var audioa=new Audio("./"+chosen+".mp3 ");
        audioa.play();
    }
    function detect()
    {
        $(".btn").click(function() {
            flag=flag+1;
            console.log(flag);
            userChose=this.id;
            userPattern.push(userChose);
            var audioa=new Audio("./"+userChose+".mp3 ");
            audioa.play();
            $("#"+userChose).fadeOut(150);
            $("#"+userChose).fadeIn(150);
                if(userPattern[flag-1]!==pattern[flag-1])
                    {
                        $("h1").text("Game Over");
                        lvl=1;
                        flag=0;
                        var audioa=new Audio("./wrong.mp3 ");
                        audioa.play();
                    }
                    if ((flag===pattern.length)&&(userPattern[flag-1]===pattern[flag-1])){
                        setTimeout(newRandom, 2000);
                         lvl=lvl+1;
                         flag=0;
                         userPattern=[];
                         $("h1").text("Level "+lvl);
                    }

            }
        )
            $(document).keypress(function(){
                $("h1").text("Level 1");
                setTimeout(newRandom, 1000);
                pattern=[];
                userPattern=[];
                flag=0;
                 })
        
                }
    $(".rules").click(function(){
        $(".rules").fadeOut(80);
        $(".rules").fadeIn(80);
        $(".hello").slideToggle();
    })
    var pattern=[];
    var userPattern=[];
    var userChose;
    var start=0;
    var i=0;
    var flag=0;
    var lvl=1;
    detect();