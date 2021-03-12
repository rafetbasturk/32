// elements
const hamburger = document.querySelector("#hamburger")
const closeIcon = document.querySelector("#close")
const nav = document.querySelector(".header__nav")
const btn = document.querySelector(".main__form__button")
const inp = document.querySelector(".main__form__div--input")
const i = document.querySelector("i")

// event listeners
hamburger.addEventListener("click", () => {
    closeIcon.style.display = "block"
    hamburger.style.display = "none"
    nav.style.display = "block"
})

closeIcon.addEventListener("click", () => {
    hamburger.style.display = "block"
    closeIcon.style.display = "none"
    nav.style.display = "none"
})

btn.addEventListener("click", (e) => {
    if (inp.value == "") {
        e.preventDefault()
        i.style.display = "block"
        inp.style.borderColor = "hsl(0, 87%, 67%)"
        setTimeout(() => {
            i.style.display = "none"
            inp.style.borderColor = "transparent"
        }, 4000)
    }
})

inp.addEventListener("click", () => {
    i.style.display = "none"
    inp.style.borderColor = "transparent"
})

document.querySelector(".main").addEventListener("click", (e) => {
    if (e.target.classList.contains("copy")) {
        e.preventDefault()
        let r = document.createRange()
        r.selectNode(e.target.parentNode.previousElementSibling.children[1])
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(r)
        document.execCommand('copy')
        window.getSelection().removeAllRanges()
        e.target.style.background = "hsl(257, 27%, 26%)"
        e.target.innerText = "Copied!"
        setTimeout(() => {
            e.target.style.background = "hsl(180, 66%, 49%)"
            e.target.innerText = "Copy"
        }, 4000)
    }
})

// code to prevent to send the form again with refresh
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}