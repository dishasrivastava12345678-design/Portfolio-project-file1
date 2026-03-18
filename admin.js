
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

// VIDEO UPLOAD
function uploadVideos() {
  let files = document.getElementById("videoInput").files;
  let videos = JSON.parse(localStorage.getItem("videos")) || [];

  for (let file of files) {
    let reader = new FileReader();
    reader.onload = function(e) {
      videos.push(e.target.result);
      localStorage.setItem("videos", JSON.stringify(videos));
    };
    reader.readAsDataURL(file);
  }

  alert("Videos Uploaded ✅");
}