import { Grid } from "./grid"
import { preloadImages } from "./utils"

preloadImages('.column__item-img').then(() => {
    document.body.classList.remove('loading')

    new Grid(document.querySelector('.columns'))
})