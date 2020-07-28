var Jimp = require('jimp')
var Jimp = require('jimp')
const pixelArr = []
Jimp.read('./ascii-pineapple.jpg')
    .then(pine => {
        console.log("Successfully loaded image!")
        let pineWidth = pine.getWidth()
        let pineHeight = pine.getHeight()
        console.log(`Image size: ${pineWidth} x ${pineHeight}`)
        console.log("Iterating through pixel contents")
        for(let xpixel = 0; xpixel <= pineWidth; xpixel++){
            for(let ypixel = 0; ypixel <= pineHeight; ypixel++){
                let rgb = Jimp.intToRGBA(pine.getPixelColor(xpixel, ypixel))
                delete rgb.a;
                console.log(rgb)
                pixelArr.push(rgb)
            }
        }
    })
    .catch(err =>{
        console.log(err)
    })

