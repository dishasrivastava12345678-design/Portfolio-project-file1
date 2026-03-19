
// IMAGE UPLOAD
function uploadImages() {
  let files = document.getElementById("imageInput").files;
  let images = JSON.parse(localStorage.getItem("images")) || [];

  for (let file of files) {
    let reader = new FileReader();
    reader.onload = function(e) {
      images.push(e.target.result);
      localStorage.setItem("images", JSON.stringify(images));
    };
    reader.readAsDataURL(file);
  }

  alert("Images Uploaded ✅");
}