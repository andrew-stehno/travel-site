import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

if(module.hot){
    module.hot.accept()
}

let revealOnScroll = new RevealOnScroll();

let mobileMenu = new MobileMenu();

