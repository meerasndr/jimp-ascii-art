var Jimp = require('jimp')
var Jimp = require('jimp')
const pixelArr = []
const brightnessArr = []
const asciiArr = []
Jimp.read('ascii-pineapple.jpg') // pick any of the images in the same folder
    .then(pine => {
        pine.resize(80, 60 )
        console.log("Successfully loaded image!")
       let pineWidth = pine.getWidth()
        let pineHeight = pine.getHeight()
        console.log(`Image size: ${pineWidth} x ${pineHeight}`)
        console.log("Iterating through pixel contents")
        for(let ypixel = 0; ypixel <= pineHeight; ypixel++){
            for(let xpixel = 0; xpixel <= pineWidth; xpixel++){
                let rgb = Jimp.intToRGBA(pine.getPixelColor(xpixel, ypixel))
                delete rgb.a;
                pixelArr.push(rgb)
            }
        }
        for (const pixel of pixelArr) {
           let pixAvg = (pixel.r + pixel.g + pixel.b) / 3
            brightnessArr.push(pixAvg)
        }
        const asciiString = '`^\",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';
        const asciiStringLength = asciiString.length;
        const brightnessRange = 256 / asciiStringLength
        //console.log(brightnessRange)
        //Say we have 1 to 100 brightness values. And, say we have 20 characters to represent them.
        // 0-4 -> Char1; 5-9 -> Char2; 10-14 -> Char3...... 95-99 -> Char20
        //Essentially: Mapping: [Max brightness value(100) / Number of chars(20)] brightness range(br) to 
        //([Actual brightness value / br] - 1)
         for (const brightness of brightnessArr){
            let b = Math.round(brightness / brightnessRange)
            asciiArr.push(asciiString[b])
        }
        

        let asciiImg = ''
        for(let j = 0; j < asciiArr.length; j++){
            asciiImg += (asciiArr[j] + asciiArr[j] +asciiArr[j])
        }
        console.log(asciiImg)

    })
    .catch(err =>{
        console.log(err)
    })