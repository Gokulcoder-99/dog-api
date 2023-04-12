const button= document.getElementById("bt");
button.addEventListener("click",fetchImage)
async function fetchImage(){
    try{
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if(response.ok){
            const data = await response.json();
            const imageURL = data.message;
            document.getElementById('imageElement').src = imageURL;
        }else{
            console.error("Api does not respond")
        }
    }catch (error){
        cobsole.error("failed due to :",error)
    }
}
