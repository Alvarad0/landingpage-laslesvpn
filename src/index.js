import 'bootstrap'
import sass from './scss/main.scss'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel'
import {carousel, carouselComments} from "./js/functions";


require('@fortawesome/fontawesome-free/css/all.min.css')
require('@fortawesome/fontawesome-free/js/all.min')

carousel()
carouselComments()