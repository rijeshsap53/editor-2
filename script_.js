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

    // console.log(image_input.value);
});

  
 
// again upload img

const option2 = document.querySelector(".aga_option");
const dialoge2 = document.querySelector("#aga_dialouge");

option2.addEventListener("click", function(){
    dialoge2.click();
    
});

const image_input2 = document.querySelector("#aga_dialouge");
const inf2 = document.querySelector(".inf");
let uploaded_image2 = "";

image_input2.addEventListener("change",function(){
    inf2.style.display="none";
    
    const reader = new FileReader();
    reader.addEventListener("load", () => {
    uploaded_image2 = reader.result;
    document.querySelector(".upload_p").style.backgroundImage = 'url('+uploaded_image2+')';
    });
    reader.readAsDataURL(this.files[0]);

    console.log(image_input2.value);
});



