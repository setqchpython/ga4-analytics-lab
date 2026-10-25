'use strict';
// Google Tag устанавливается отдельно в head каждой HTML-страницы.

const leadForm = document.querySelector('#lead-form');
if (leadForm) {
  // Заполняем UTM-метки в скрытые поля формы при загрузке
  const params = new URLSearchParams(window.location.search);
  const utmSourceInput = document.querySelector('#utm_source');
  const utmMediumInput = document.querySelector('#utm_medium');
  const utmCampaignInput = document.querySelector('#utm_campaign');

  if (utmSourceInput) utmSourceInput.value = params.get('utm_source') || 'direct';
  if (utmMediumInput) utmMediumInput.value = params.get('utm_medium') || 'none';
  if (utmCampaignInput) utmCampaignInput.value = params.get('utm_campaign') || 'not_set';

  // Генерируем уникальный request_id
  const reqInput = document.querySelector('#request_id');
  if (reqInput && !reqInput.value) {
    reqInput.value = 'req_' + Math.random().toString(36).substring(2, 10);
  }

  // Отправка формы в Apps Script и событие в GA4
  leadForm.addEventListener('submit', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        lead_source: 'contact_form'
      });
    }
    // preventDefault НЕ вызывается, чтобы браузер штатно отправил POST-запрос в Apps Script
  });
}

const programCta = document.querySelector('#program-cta');
if (programCta) {
  programCta.addEventListener('click', () => {
    document.querySelector('#program-preview').hidden = false;
    if (typeof gtag === 'function') {
      gtag('event', 'cta_click', {
        button_name: 'program',
        page_section: 'hero'
      });
    }
  });
}

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'nav_click', {
        link_text: link.textContent.trim(),
        from_page: document.title
      });
    }
  });
});

const params = new URLSearchParams(window.location.search);
const utmSource = params.get('utm_source');
if (utmSource) {
  if (typeof gtag === 'function') {
    gtag('event', 'utm_visit', {
      utm_source: utmSource,
      utm_medium: params.get('utm_medium') || 'not_set',
      utm_campaign: params.get('utm_campaign') || 'not_set',
      landing_page: window.location.pathname
    });
  }
}

let readCounted = false;
setTimeout(() => {
  if (readCounted || document.hidden) return;
  readCounted = true;
  if (typeof gtag === 'function') {
    gtag('event', 'read_30s', {
      page_path: window.location.pathname
    });
  }
}, 30000);

const leadFormFields = document.querySelector('#lead-form');
if (leadFormFields) {
  leadFormFields.addEventListener('invalid', (event) => {
    if (typeof gtag === 'function') {
      gtag('event', 'form_error', {
        field_name: event.target.name || 'unknown',
        form_id: 'lead-form'
      });
    }
  }, true);
}
