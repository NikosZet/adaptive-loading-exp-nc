// Adaptive-loading util
var adpativeLoading = {
  effectiveType:     navigator.connection.effectiveType,
  deviceMemory:      navigator.deviceMemory,
  logicalProcessors: navigator.hardwareConcurrency,

  networkCases:   ['slow-2g', '2g', '3g', '4g'],
  memoryCases:    ['0.25', '0.5', '1', '2', '4', '8'],
  processorCases: []
}

// Settings
var stickyOption = {
  acceptButton:     document.getElementById('adaptive-accept'),
  declineButton:    document.getElementById('adaptive-decline'),
  closeButton:      document.getElementById('adaptive-close'),
  stickyWrapper:    document.getElementById('adaptive-option'),
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

  function removeAdaptive() {
    console.log('Remove Adaptive');
    //get assets(image-video)

    //change resources 'src' or design(lower resolution or none)

  }
}

function optimizePage(images, videos) {
  //get assets(image-video)

  //change resources 'src' or design(take decisions)
  console.log(images, videos);

  //change naming of images to handle the src of each image separately by a loop
}

// Conditions to optimize and display the option (2G, 3G)
if (adpativeLoading.effectiveType === adpativeLoading.networkCases[0] ||
  adpativeLoading.effectiveType === adpativeLoading.networkCases[1] ||
  adpativeLoading.effectiveType === adpativeLoading.networkCases[2]) {
  handleSticky(stickyOption.acceptButton, stickyOption.declineButton, stickyOption.closeButton, stickyOption.stickyWrapper);
  optimizePage(stickyOption.noCampaignImages, stickyOption.noCampaignVideos);
}
