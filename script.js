async function getSongs(){
    
    let a =  await fetch("C:\Users\hp\Documents\GitHub\SpotifyClone\script.js")
    let response = await a.text();
    console.log(response) 
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for(let index = 0; index< as.length; index++){
        const div = as[index];
        if(div.href.endsWith(".mp3")){
            songs.push(div.href)
        }
    }
    return songs
}

getSongs()