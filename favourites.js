// write js code here corresponding to favourites.html


var tata=JSON.parse(localStorage.getItem("favourites"))

displaydata(tata)

function displaydata(data){
    data.forEach(function(ele){
       

        var row=document.createElement("tr");

        var col1=document.createElement("td");
        col1.innerText=ele.matchNum;

        var col2=document.createElement("td");
        col2.innerText=ele.teamA;

        var col3=document.createElement("td");
        col3.innerText=ele.teamB;


        var col4=document.createElement("td");
        col4.innerText=ele.date;

         var col5=document.createElement("td");
        col5.innerText=ele.venue;

        var col6=document.createElement("td");
        col6.innerText="Delet"
        col6.style.cursor="pointer"
        col6.addEventListener("click",function(){
            dada(ele)
        })
row.append(col1,col2,col3,col4,col5,col6)
document.querySelector("tbody").append(row)

    })
    function dada(ele,index){
    tata.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(tata))
    window.location.reload()
    }


}
