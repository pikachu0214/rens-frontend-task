const images = [
    {
    src: './images/brand1.jpg',
    alt: 'shoes',
    flipped: false,
    },
    {
    src: './images/brand2.jpg',
    alt: 'more shoes',
    flipped: false,
    },    
]

const nav = [
    "Rens",
    "Men",
   "Women",
   "Kids",
   "SignUp",
]

new Vue({
    el: '#root',
    data: {
        navs: nav,
        imageList: images,
        theme: 'comforts that comes naturally'.toUpperCase(),
    },
    methods: {
        toggleImage:function(image){
           image.flipped = !image.flipped;
        }
    }
});