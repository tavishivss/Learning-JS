let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    
    let abc=Math.floor(Math.random()*fighters.length)
    let def=Math.floor(Math.random()*fighters.length)
    stageEl.innerHTML=(fighters[abc]+" vs "+fighters[def])
    
})
