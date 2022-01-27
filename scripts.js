// write your code here
const ltr = (el, txt) => {
    const parent = el.parentElement;
	const rightList = document.querySelector(".lists > ul:last-child");

	
	console.log(removedEl)
}

const leftButtons = document.querySelectorAll(".lists > ul:first-child > li > button")
const rightButtons = document.querySelectorAll(".lists > ul:last-child > li > button")

leftButtons.forEach(btn => {
	const arr = btn.parentElement.innerText.split(" ");
	const txt = arr[1] + " " + arr[2];
	
	const parent = btn.parentElement;

	btn.addEventListener('click', () => {ltr(btn)})
	

})
rightButtons.forEach(btn => btn.addEventListener('click', ltr))