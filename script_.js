const option = document.querySelector(".option");
const dialoge = document.querySelector("#dialouge");

option.addEventListener("click", function(){
    dialoge.click();
    
});

const image_input = document.querySelector("#dialouge");
const inf = document.querySelector(".inf");
let uploaded_image = "";

image_input.addEventListener("change",function(){
    inf.style.display="none";
    
    const reader = new FileReader();
    reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(".upload_p").style.backgroundImage = 'url('+uploaded_image+')';
    });
    reader.readAsDataURL(this.files[0]);

    console.log(image_input.value);
});