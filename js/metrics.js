// 1. utm_visit: парсинг UTM-параметров при входе
(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');

  if (utmSource || utmMedium || utmCampaign) {
    gtag('event', 'utm_visit', {
      utm_source: utmSource || '',
      utm_medium: utmMedium || '',
      utm_campaign: utmCampaign || '',
      landing_page: window.location.pathname
    });
  }
})();

// 2. nav_click: клики по навигации меню
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a, header a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      gtag('event', 'nav_click', {
        link_text: link.innerText.trim(),
        link_url: link.getAttribute('href')
      });
    });
  });
});

// 3. read_30s: 30 секунд чтения на странице
setTimeout(() => {
  gtag('event', 'read_30s', {
    page_title: document.title,
    page_path: window.location.pathname
  });
}, 30000);

// 4. form_error: валидация формы
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        gtag('event', 'form_error', {
          form_id: form.id || 'lead_form',
          error_field: 'required_field_empty'
        });
      }
    });
  });
});