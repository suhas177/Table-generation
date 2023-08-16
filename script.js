
function ShowTable() {

        tableBody = document.getElementById("tbody")

        tableBody.innerHTML = "";
        var data = [
                { name: "Shubham", age: 24, height: "5ft" },
                { name: "Alice", age: 28, height: "5ft 6in" },
                { name: "Bob", age: 32, height: "6ft" },
                { name: "Eva", age: 21, height: "5ft 2in" },
                { name: "David", age: 30, height: "5ft 10in" },
                { name: "Grace", age: 27, height: "5ft 7in" },
                { name: "John", age: 22, height: "5ft 9in" },
                { name: "Linda", age: 35, height: "5ft 4in" },
                { name: "Michael", age: 29, height: "5ft 11in" },
                { name: "Olivia", age: 26, height: "5ft 3in" }
                
        ];


        data.forEach(function (item) {
                var row = tableBody.insertRow();
                row.class = "data";
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);

                cell1.innerHTML = item.name;
                cell2.innerHTML = item.age;
                cell3.innerHTML = item.height;
        });

        document.getElementById("table").classList.remove("hide");
        document.getElementById('table').style.visibility = "visible";
}

function HideTable() {
        var table = document.getElementById("table");

        document.getElementById('table').style.visibility = "hidden";

}