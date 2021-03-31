const page1 = document.getElementById('MainPage');
const page2 = document.getElementById('About-Me');
const page3 = document.getElementById('Service');
const page4 = document.getElementById('Skill');
const page5 = document.getElementById('Contact');
let sound=new Audio("assest/sounds/Button%20Click-SoundBible.com-1931397433.wav");

function forPageOne() {
    page1.style.zIndex = 200
    page2.style.zIndex = -200
    page3.style.zIndex = -200
    page4.style.zIndex = -200
    page5.style.zIndex = -200
    sound.play();

    page1.classList.add('animate__animated');
    page1.classList.add('animate__zoomInDown');

    page2.classList.remove('animate__animated');
    page2.classList.remove('animate__zoomInDown')
    page2.classList.remove('animate__backInDown')
    page2.classList.remove('animate__rotateIn')
    page2.classList.remove('animate__zoomInUp')
    page2.classList.remove('animate__flip')



    page3.classList.remove('animate__animated');
    page3.classList.remove('animate__zoomInDown')
    page3.classList.remove('animate__backInDown')
    page3.classList.remove('animate__rotateIn')
    page3.classList.remove('animate__zoomInUp')
    page3.classList.remove('animate__flip')



    page4.classList.remove('animate__animated');
    page4.classList.remove('animate__zoomInDown')
    page4.classList.remove('animate__backInDown')
    page4.classList.remove('animate__rotateIn')
    page4.classList.remove('animate__zoomInUp')
    page4.classList.remove('animate__flip')



    page5.classList.remove('animate__animated');
    page5.classList.remove('animate__zoomInDown')
    page5.classList.remove('animate__backInDown')
    page5.classList.remove('animate__rotateIn')
    page5.classList.remove('animate__zoomInUp')
    page5.classList.remove('animate__flip')






    // page1.classList.add('animated')
    // page2.classList.remove('animated')
    // page3.classList.remove('animated')
    // page4.classList.remove('animated')
    // page5.classList.remove('animated')
}

function forPage02() {
    page1.style.zIndex = -200
    page2.style.zIndex = 200
    page3.style.zIndex = -200
    page4.style.zIndex = -200
    page5.style.zIndex = -200

    sound.play();
    // page1.classList.remove('animated')
    // page2.classList.add('animated')
    // page3.classList.remove('animated')
    // page4.classList.remove('animated')
    // page5.classList.remove('animated')

    page1.classList.remove('animate__animated');
    page1.classList.remove('animate__backInDown');
    page1.classList.remove('animate__zoomInDown');
    page1.classList.remove('animate__rotateIn')
    page1.classList.remove('animate__zoomInUp')
    page1.classList.remove('animate__flip')



    page2.classList.add('animate__animated');
    page2.classList.add('animate__backInDown')

    page3.classList.remove('animate__animated');
    page3.classList.remove('animate__backInDown')
    page3.classList.remove('animate__zoomInDown')
    page3.classList.remove('animate__rotateIn')
    page3.classList.remove('animate__zoomInUp')
    page3.classList.remove('animate__flip')



    page4.classList.remove('animate__animated');
    page4.classList.remove('animate__backInDown')
    page4.classList.remove('animate__zoomInDown')
    page4.classList.remove('animate__rotateIn')
    page4.classList.remove('animate__zoomInUp')
    page4.classList.remove('animate__flip')



    page5.classList.remove('animate__animated');
    page5.classList.remove('animate__backInDown')
    page5.classList.remove('animate__zoomInDown')
    page5.classList.remove('animate__rotateIn')
    page5.classList.remove('animate__zoomInUp')
    page5.classList.remove('animate__flip')




}

function forPage03() {
    page1.style.zIndex = -200
    page2.style.zIndex = -200
    page3.style.zIndex = 200
    page4.style.zIndex = -200
    page5.style.zIndex = -200
    sound.play();


    page1.classList.remove('animate__animated');
    page1.classList.remove('animate__zoomInDown');
    page1.classList.remove('animate__rotateIn')
    page1.classList.remove('animate__zoomInUp')
    page1.classList.remove('animate__flip')


    page2.classList.remove('animate__animated');
    page2.classList.remove('animate__zoomInDown')
    page2.classList.remove('animate__backInDown')
    page2.classList.remove('animate__rotateIn')
    page2.classList.remove('animate__zoomInUp')
    page2.classList.remove('animate__flip')


    page3.classList.add('animate__animated');
    page3.classList.add('animate__rotateIn')

    page4.classList.remove('animate__animated');
    page4.classList.remove('animate__zoomInDown')
    page4.classList.remove('animate__backInDown')
    page4.classList.remove('animate__rotateIn')
    page4.classList.remove('animate__zoomInUp')
    page4.classList.remove('animate__flip')


    page5.classList.remove('animate__animated');
    page5.classList.remove('animate__zoomInDown')
    page5.classList.remove('animate__backInDown')
    page5.classList.remove('animate__rotateIn')
    page5.classList.remove('animate__zoomInUp')
    page5.classList.remove('animate__flip')




}

function forPage04() {
    page4.style.zIndex = 200
    page1.style.zIndex = -200
    page2.style.zIndex = -200
    page3.style.zIndex = -200
    page5.style.zIndex = -200
    sound.play();


    page1.classList.remove('animate__animated');
    page1.classList.remove('animate__zoomInDown');
    page1.classList.remove('animate__rotateIn')
    page1.classList.remove('animate__zoomInUp')
    page1.classList.remove('animate__flip')


    page2.classList.remove('animate__animated');
    page2.classList.remove('animate__zoomInDown')
    page2.classList.remove('animate__backInDown')
    page2.classList.remove('animate__rotateIn')
    page2.classList.remove('animate__zoomInUp')
    page2.classList.remove('animate__flip')


    page3.classList.remove('animate__animated');
    page3.classList.remove('animate__rotateIn')
    page3.classList.remove('animate__zoomInUp')
    page3.classList.remove('animate__flip')


    // page4.classList.remove('animate__animated');
    // page4.classList.remove('animate__zoomInDown')
    // page4.classList.remove('animate__backInDown')
    // page4.classList.remove('animate__rotateIn')

    page4.classList.add('animate__animated');
    page4.classList.add('animate__zoomInUp')

    page5.classList.remove('animate__animated');
    page5.classList.remove('animate__zoomInDown')
    page5.classList.remove('animate__backInDown')
    page5.classList.remove('animate__rotateIn')
    page5.classList.remove('animate__zoomInUp')
    page5.classList.remove('animate__flip')



}

function forPage05() {
    page5.style.zIndex = 200
    page4.style.zIndex = -200
    page1.style.zIndex = -200
    page2.style.zIndex = -200
    page3.style.zIndex = -200

    sound.play();


    page1.classList.remove('animate__animated');
    page1.classList.remove('animate__zoomInDown');
    page1.classList.remove('animate__rotateIn')
    page1.classList.remove('animate__zoomInUp')
    page1.classList.remove('animate__flip')


    page2.classList.remove('animate__animated');
    page2.classList.remove('animate__zoomInDown')
    page2.classList.remove('animate__backInDown')
    page2.classList.remove('animate__rotateIn')
    page2.classList.remove('animate__zoomInUp')
    page2.classList.remove('animate__flip')


    page3.classList.remove('animate__animated');
    page3.classList.remove('animate__rotateIn')
    page3.classList.remove('animate__zoomInUp')
    page3.classList.remove('animate__flip')



    page4.classList.remove('animate__animated');
    page4.classList.remove('animate__zoomInUp')
    page4.classList.remove('animate__flip')


    // page5.classList.remove('animate__animated');
    // page5.classList.remove('animate__zoomInDown')
    // page5.classList.remove('animate__backInDown')
    // page5.classList.remove('animate__rotateIn')
    // page5.classList.remove('animate__zoomInUp')
    page5.classList.add('animate__animated');
    page5.classList.add('animate__flip')




}
