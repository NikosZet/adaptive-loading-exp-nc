const goodConnection = isGoodConnection();

// Settings
const stickyOption = {
  acceptButton: document.getElementById('adaptive-accept'),
  declineButton: document.getElementById('adaptive-decline'),
  closeButton: document.getElementById('adaptive-close'),
  stickyWrapper: document.getElementById('adaptive-option'),
  teaserBase: document.getElementsByClassName('teaser__base--no-campaign'),
  noCampaignImages: document.getElementsByClassName('no-campaign-image'),
  noCampaignVideos: document.getElementsByClassName('no-campaign-video')
}

const videoTemplate = `<iframe class="video__youtube__iframe"
                             width="100%"
                             src="https://www.youtube.com/embed/cz_4NcgfTTo"
                             frameborder="0"
                             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                             allowfullscreen>
                     </iframe>`;

const videoLinkTemplate = `<img src="images/video-adaptive.jpeg"
                              class="nc-image__image nc-image--loading nc-image__image--landscape nc-image--loaded"
                              alt="cases">
                         <a class="video__button"
                            href="https://www.youtube.com/watch?v=cz_4NcgfTTo"
                            target="_blank"
                            aria-label="Link to youtube video">
                            <i class="icons icons--play"
                               aria-hidden="true">
                            </i>
                         </a>`;

function handleSticky(accept, decline, close, sticky) {
  sticky.classList.remove('hidden');

  // Click events
  accept.addEventListener('click', () => removeSticky());
  close.addEventListener('click', () => removeSticky());
  decline.addEventListener('click', () => {
    removeAdaptive(stickyOption.noCampaignImages, stickyOption.noCampaignVideos, stickyOption.teaserBase);
    removeSticky();
  });

  function removeSticky() {
    sticky.remove();
  }
}

function removeAdaptive(images, videos, teasers) {
  let imageList = [...images];
  let teaserList = [...teasers];
  let videoList = [...videos];

  //REMOVE ADAPTIVE OPTIMIZATION
  imageList.forEach(el => {
    el.src = `images/${el.alt}.jpg`;
    el.classList.remove('hidden');
  });
  teaserList.forEach(el => el.classList.remove('teaser__base--adaptive'));
  videoList.forEach(el => {
    el.innerHTML = videoTemplate;
    el.parentNode.classList.remove('video__wrapper--adaptive');
  });
  addScirpts();
}

function optimizePage(images, videos, teasers) {
  let imageList = [...images];
  let teaserList = [...teasers];
  let videoList = [...videos];

  //OPTIMIZE TEASER COMPONENT
  imageList.forEach(el => el.classList.add('hidden'));
  teaserList.forEach(el => el.classList.add('teaser__base--adaptive'));

  //OPTIMIZE VIDEO COMPONENT
  videoList.forEach(el => {
    el.classList.add('video__youtube--adaptive');
    el.innerHTML = videoLinkTemplate;
    el.parentNode.classList.add('video__wrapper--adaptive');
  });
}

function addScirpts() {
  let heavyScript = document.createElement('script');
  heavyScript.type = 'text/javascript';
  heavyScript.src = 'js/publish.js';
  document.head.append(heavyScript);

  let thirdPartyScript = document.createElement('script');
  thirdPartyScript.type = 'text/javascript';
  thirdPartyScript.src = 'https://kit.fontawesome.com/d535e0526d.js';
  thirdPartyScript.crossOrigin = 'anonymous';
  thirdPartyScript.async = true;
  document.head.append(thirdPartyScript);
}

if (goodConnection) {
  removeAdaptive(stickyOption.noCampaignImages, stickyOption.noCampaignVideos, stickyOption.teaserBase);
  addScirpts();
} else {
  handleSticky(stickyOption.acceptButton, stickyOption.declineButton, stickyOption.closeButton, stickyOption.stickyWrapper);
  optimizePage(stickyOption.noCampaignImages, stickyOption.noCampaignVideos, stickyOption.teaserBase);
}
