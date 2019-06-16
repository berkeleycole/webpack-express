// When you run the file over webpack, webpack will try not to litter the global scope and so the function will not be made available globally by default.
//
// If you want the function to be accessible outside the scope of he JS file, you should put it in the global scope.

// window.handleSubmit = function() {
//     event.preventDefault()
//
//     console.log("clicked!")
//     fetch('http://localhost:3000/api')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.remaining
//     })
// }
import { handleSubmit, handleSubmitArticle } from './js/interaction.js'

import './styles/base.scss'
import './styles/header.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/main.scss'

export {
    handleSubmit,
    handleSubmitArticle
}
