//50   100 150 200 250 200 150  100  50   0  50  100  150 200 250 250 200 150 100 50  0   left right
//0    1   2   3   4   5   6   7    8    9   10  11  12   13  14  15  16  17  18  19  20   index
var json=[
    {//0
        z_index:11,
        left:"-85px",
        transform:"scale(0.05)",
        bh:0
    },
    {//1
        z_index:12,
        left:"-112.5px",
        top:"-430px",
        transform:"scale(0.1)",
        bh:1
    },
    {//2
        z_index:13,
        left:"-175px",
        transform:"scale(0.2)",
        bh:2
    },
    {//3
        z_index:14,
        left:"-237.5px",
        transform:"scale(0.3)",
        bh:3
    },
    {//4
        z_index:15,
        left:"-310px",
        transform:"scale(0.4)",
        bh:4
    },
    {//5
        z_index:16,
        left:"-250px",
        transform:"scale(0.5)",
        bh:5
    },
    {//6
        z_index:17,
        left:"-200px",
        transform:"scale(0.6)",
        bh:6
    },
    {//7
        z_index:18,
        left:"-150px",
        transform:"scale(0.7)",
        bh:7
    },
    {//8
        z_index:19,
        left:"-100px",
        transform:"scale(0.8)",
        bh:8
    },
    {//9
        z_index:20,
        transform:"scale(0.9)",
        left:"-50px",
        bh:9
    },
    {//10
        z_index:21,
        transform:"scale(1)",
        right:"0",
        bh:10
    },
    {//11
        z_index:10,
        transform:"scale(0.9)",
        right:"-100px",
        bh:11
    },
    {//12
        z_index:9,
        transform:"scale(0.8)",
        right:"-150px",
        bh:12
    },
    {//13
        z_index:8,
        transform:"scale(0.7)",
        right:"-200px",
        bh:13
    },
    {//14
        z_index:7,
        transform:"scale(0.6)",
        right:"-250px",
        bh:14
    },
    {//15
        z_index:6,
        transform:"scale(0.5)",
        right:"-300px",
        bh:15
    },
    {//16
        z_index:5,
        transform:"scale(0.4)",
        right:"-350px",
        bh:16
    },
    {//17
        z_index:4,
        transform:"scale(0.3)",
        right:"-287.5px",
        bh:17
    },
    {//18
        z_index:3,
        transform:"scale(0.2)",
        right:"-225px",
        bh:18,
    },
    {//19
        z_index:2,
        transform:"scale(0.1)",
        right:"-162.5px",
        bh:19
    },
    {//20
        z_index:1,
        transform:"scale(0.05)",
        right:"-100px",
        bh:20
    }

];
var liimg=document.querySelectorAll("#pic>li");
var ls=parseInt(liimg.length/2);
for(var i=0;i<liimg.length;i++){
    liimg[i].style.left=json[i].left;
    liimg[i].style.right=json[i].right;
    liimg[i].style.zIndex=json[i].z_index;
    liimg[i].style.transform=json[i].transform;
}
var leftClick=document.getElementById("leftArrow");
var jsq=0;
leftClick.onclick=function () {
    jsq++;
    if(jsq>21){
        jsq=1;
    }
    for(var i=0;i<liimg.length;i++){
        var k=0;
        if(json[i].bh<jsq){
            k=json[i].bh+21-jsq;
            liimg[i].style.zIndex=json[k].z_index;
            liimg[i].style.transform=json[k].transform;
            if(k<10){
                liimg[i].style.right="";
                liimg[i].style.left=json[k].left;
            }else{
                liimg[i].style.left="";
                liimg[i].style.right=json[k].right;
            }
        }else{
            k=json[i].bh-jsq;
            liimg[i].style.zIndex=json[k].z_index;
            liimg[i].style.transform=json[k].transform;
            if(k<10){
                liimg[i].style.right="";
                liimg[i].style.left=json[k].left;
            }else{
                liimg[i].style.left="";
                liimg[i].style.right=json[k].right;
            }

        }
        console.log(k);

    }

}