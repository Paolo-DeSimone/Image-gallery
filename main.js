const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Creating images to display*/

const numberOfPhotosInFolder = 4
const altsValues = ['Closeup of a human eye',
    'Rock that looks like a wave',
    'Purple and white pansies',
    'Section of wall from a pharoah\'s tomb',
    'Large moth on a leaf']

for (let i = 1; i <= numberOfPhotosInFolder + 1; i++) {
    let imgPath = "./images" + `\\pic${i}.jpg`
    let newImgHTMLTag = document.createElement("img");
    newImgHTMLTag.setAttribute('src', `${imgPath}`);
    newImgHTMLTag.setAttribute('alt',altsValues[i-1])
    thumbBar.appendChild(newImgHTMLTag);
}

/* Allowing to change the image in displayedImage choosing among thumbBar'images */
thumbBar.addEventListener("click",(e)=>{
    displayedImage.setAttribute('src',e.target.src)
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
