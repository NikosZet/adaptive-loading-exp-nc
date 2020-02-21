const goodConnection = connection();
// Settings
var stickyOption = {
  acceptButton: document.getElementById('adaptive-accept'),
  declineButton: document.getElementById('adaptive-decline'),
  closeButton: document.getElementById('adaptive-close'),
  stickyWrapper: document.getElementById('adaptive-option'),
  noCampaignImages: document.getElementsByClassName('no-campaign-image'),
  noCampaignVideos: document.getElementsByClassName('no-campaign-video')
}

function handleSticky(accept, decline, close, sticky) {
  // Display
  sticky.classList.remove('hidden');

  // Click events
  accept.addEventListener('click', function () {
    removeSticky()
  });
  close.addEventListener('click', function () {
    removeSticky()
  });
  decline.addEventListener('click', function () {
    removeAdaptive();
    removeSticky();
  });

  // methods
  function removeSticky() {
    sticky.remove();
  }

}
function removeAdaptive() {
  console.log('Removed Adaptive');
  let imageList = [...stickyOption.noCampaignImages];
  imageList.forEach(el => {
    el.src = `images/${el.alt}.jpg`
    el.classList.remove('nc-image__image--adaptive');
  });
}

function optimizePage(images, videos) {
  //get assets(image-video)
  let imgs = [...images];
  let vds = [...videos];
  //change resources 'src' or design(take decisions)
  console.log(imgs, vds);
  imgs.forEach(el => {
    if (el.alt != "home-hero") {
      el.src = 'images/netcentric.png'
      el.classList.add('nc-image__image--adaptive');
    }
  })
  //change naming of images to handle the src of each image separately by a loop
}

if (goodConnection) {
  console.log('Congratulation, you have a good connection');
  removeAdaptive();
} else {
  handleSticky(stickyOption.acceptButton, stickyOption.declineButton, stickyOption.closeButton, stickyOption.stickyWrapper);
  optimizePage(stickyOption.noCampaignImages, stickyOption.noCampaignVideos);
}
