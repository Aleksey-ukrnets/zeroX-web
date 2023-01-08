/**
 * В зависимости от браузера подставляет ссылку на установку расширения Metamask
 */
export default function installMetamaskDesktop() {
  if (navigator.userAgent.indexOf('Chrome') !== -1) {
    window.location.href =
      'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';
  } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    window.location.href =
      'https://addons.mozilla.org/en/firefox/addon/ether-metamask/';
  }
}
