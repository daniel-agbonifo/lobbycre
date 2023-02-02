const showNav = document.getElementById('toggle')
const dropDown = document.getElementById('dropdown')
const openMenu = () => {
    dropDown.classList.toggle('dropdownfunction');
    console.log('random')
}
// console.log(dropDown)

const myIframe = document.querySelector('iframe')


const style = `<style type="text/css">
    form{
        background-color: rgb(205, 202, 202);
    }
    *{
        background-color: transparent;
    }
</style>
`

window.onload = () => {
    let doc = myIframe.contentWindow
    console.log(doc);
    // doc.body.innerHTML = doc.body.innerHTML + style
}
// myIframe.addEventListener("load", ev => {
//     const new_style_element = document.createElement("style");
//     new_style_element.textContent = style
//     ev.target.contentDocument.body.appendChild(new_style_element);
//     console.log('hi');
// });