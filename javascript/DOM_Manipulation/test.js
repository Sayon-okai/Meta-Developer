let h1 = document.querySelector('h1')
let arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click']

function handleClicks() { 
    switch (h1.innerText) {
        case arr.indexOf[0]:
                h1.innerText = arr.indexOf[1]
         break;
        case arr.indexOf[1]: 
                h1.innerText = arr.indexOf[2] 
          break;
            case arr.indexOf[2]:
                 h1.innerText = arr.indexOf[3]
           break;

            default:
                h1.innerText = arr.indexOf[0]

    }
}

h1.addEventListener('click',  handleClicks())