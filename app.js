function get() {
    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.210:3000/bulb';
    Http.open("GET", url);

    // Http.setRequestHeader("Content-Type", "application/json");
    // Http.send(JSON.stringify({ name: "Muaaz Awan", time: "2pm" }));

    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        // document.write(Http.responseText)
    }
}



function post() {
    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.210:3000/bulb';
    Http.open("POST", url);

    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ name: "Saleh Awan", time: "2pm" }));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        // document.write(Http.responseText)

    }
}


function put() {
    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.210:3000/bulb';
    Http.open("PUT", url);

    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ name: "Jawad Ahmed", time: "2pm" }));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        // document.write(Http.responseText)

    }
}


function delet() {
    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.210:3000/bulb';
    Http.open("DELETE", url);

    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ name: "Raja Shakir", time: "2pm" }));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        // document.write(Http.responseText)

    }
}
