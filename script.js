const root = document.documentElement;
const colorInput = document.querySelector("#picker");
const hexInput = document.querySelector(".hex");
const rgbInput = document.querySelector(".rgb");

const changeValue = () => {
    const hexValue = colorInput.value;
    root.style.setProperty("--color", colorInput.value);
    console.log(hexValue);
    hexInput.textContent = "HEX: " + hexValue;
    rgbInput.textContent = "RGB: " + rgbValue;

    hexToRGB();
}

colorInput.addEventListener("change", changeValue);

// function hexToRGB(hexValue) {
//     let r = 0,
//         g = 0,
//         b = 0;

//     // 3 digits
//     if (hexValue.length == 4) {
//         r = "0x" + h[1] + h[1];
//         g = "0x" + h[2] + h[2];
//         b = "0x" + h[3] + h[3];

//         // 6 digits
//     } else if (hexValue.length == 7) {
//         r = "0x" + h[1] + h[2];
//         g = "0x" + h[3] + h[4];
//         b = "0x" + h[5] + h[6];
//     }

//     return "rgb(" + +r + "," + +g + "," + +b + ")";
// }