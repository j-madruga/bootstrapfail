fetch("./names.json")
.then(dir => dir.json())
.then(json => {
    json.forEach(n => {
        fetch("./msgES.json")
        .then(msg => msg.json())
        .then(json => json[Math.floor(Math.random(1)*50)])
        .then(msg => {
            nombre = n.name
            currMsg = msg
            let p = document.createElement("p")
            let h2 = document.createElement("h2")
            let article = document.createElement("article")
            let h3 = document.createElement("h3")
            h3.innerHTML = "GRACIAS LU!"
            article.appendChild(h3)
            article.id = nombre
            article.className = "rellenar"
            main = document.getElementById("main")
            main.appendChild(article)
            p.innerHTML = currMsg.mensajito
            h2.innerHTML = nombre
            document.getElementById(nombre).appendChild(p)
            document.getElementById(nombre).appendChild(h2)
            document.getElementById(nombre).style.setProperty("--bgn", `hsl(${360*Math.random()}, ${(0.2 + Math.random()/2)*100}%, ${50}%)`)
            document.getElementById(nombre).style.setProperty("--bgn1", `hsl(${360*Math.random()}, ${(0.2 + Math.random()/2)*100}%, ${50}%)`)
})
})
})