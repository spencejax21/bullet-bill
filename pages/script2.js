document.addEventListener("DOMContentLoaded", function(){
    var sendbtn = document.getElementById("go");
    sendbtn.onclick = function(){
        console.log("clicked");
        var items = document.getElementById("items");
        var x = items.rows.length;
        var itemsArr = [];
        var cost = [];

        for(var i = 1; i<x; i++){
            console.log(items.rows[i].cells[0].innerText);
            var select = document.getElementById("person"+i);
            var value = select.options[select.selectedIndex].value;
            var pnum = parseInt(value.substring(value.indexOf("n")+1))-1;
            //var total = 0;

            if(itemsArr[pnum] == null){
                itemsArr[pnum] = items.rows[i].cells[0].innerText;
                var c = items.rows[i].cells[1].innerText;
                c = c.substring(c.indexOf("$")+1);
                console.log(c);
                var c = parseFloat(c);
                //total += c;
                cost[pnum] = c;
            }else{
                itemsArr[pnum] += " " + items.rows[i].cells[0].innerText;
                var c = items.rows[i].cells[1].innerText;
                c = c.substring(c.indexOf("$")+1);
                console.log(c);
                var c = parseFloat(c);
                //total += c;
                cost[pnum] += c;
            }
        }

        var pnumbers = document.getElementById("pnumbers");
        var numbers = [];
        var x = pnumbers.rows.length;
        for(var i = 1; i<x; i++){
            var input = document.getElementById("Person "+i);
            var value = input.value;
            //console.log(value);
            numbers[i-1] = value;
        }
        console.log(itemsArr);
        console.log(numbers);
        console.log(cost);
        console.log(total);
    }
});



