
const getListItems = document.getElementById('btn--getlist')
getListItems.addEventListener('click', function () {

    var x = document.getElementById("mySelect");
    langthoflist = document.getElementById("mySelect").length;
    console.log(langthoflist + "langth")

    var message = "In Your List Item Total No.: ";

    message = message + langthoflist;

    for (var i = 0; i < x.length; i++) {

        message = message + "\n \n" + x.options[i].text;
    }

    alert(message);
    console.log(message)
})