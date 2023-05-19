const imageLoaded = false;

const displayImage = (isImageLoaded, imageLoadStatus) => {
  isImageLoaded(imageLoadStatus);
}

const isImageLoadedCallback = (imageStatus) => {
  if (imageStatus) {
    console.log("Image loaded");
  } else {
    console.log("Image load failed");
  }
}

displayImage(isImageLoadedCallback, imageLoaded);