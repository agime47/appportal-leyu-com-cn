// public/site-helper.js
(function() {
  'use strict';

  // Config data block
  var APP_SETTINGS = {
    portalUrl: 'https://appportal-leyu.com.cn',
    keyword: '乐鱼体育',
    cardColors: ['#f0f7ff', '#fff3e0', '#e8f5e9'],
    badgeColors: ['#1565c0', '#ef6c00', '#2e7d32']
  };

  // Sample data for card generation
  var sampleTips = [
    { title: '欢迎使用', content: '探索 ' + APP_SETTINGS.keyword + ' 的丰富内容。' },
    { title: '快速导航', content: '访问 ' + APP_SETTINGS.portalUrl + ' 获取最新信息。' },
    { title: '提示', content: '使用关键词「' + APP_SETTINGS.keyword + '」搜索相关内容。' }
  ];

  var sampleKeywords = [
    { text: '乐鱼体育', color: APP_SETTINGS.badgeColors[0] },
    { text: '体育赛事', color: APP_SETTINGS.badgeColors[1] },
    { text: '娱乐直播', color: APP_SETTINGS.badgeColors[2] }
  ];

  // Helper: create a card element
  function createCard(title, content, bgColor) {
    var card = document.createElement('div');
    card.className = 'site-card';
    card.style.background = bgColor || '#ffffff';
    card.style.border = '1px solid #ddd';
    card.style.borderRadius = '8px';
    card.style.padding = '12px 16px';
    card.style.margin = '10px 0';
    card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';

    var titleEl = document.createElement('h4');
    titleEl.textContent = title;
    titleEl.style.margin = '0 0 6px 0';
    titleEl.style.color = '#333';

    var contentEl = document.createElement('p');
    contentEl.textContent = content;
    contentEl.style.margin = '0';
    contentEl.style.color = '#555';

    card.appendChild(titleEl);
    card.appendChild(contentEl);
    return card;
  }

  // Helper: create a badge element
  function createBadge(text, bgColor) {
    var badge = document.createElement('span');
    badge.className = 'keyword-badge';
    badge.textContent = text;
    badge.style.display = 'inline-block';
    badge.style.background = bgColor || '#1976d2';
    badge.style.color = '#fff';
    badge.style.padding = '4px 12px';
    badge.style.borderRadius = '16px';
    badge.style.fontSize = '0.85em';
    badge.style.margin = '4px 6px 4px 0';
    badge.style.fontWeight = '500';
    return badge;
  }

  // Main: render cards and badges into a container
  function renderSiteHelper(containerId) {
    var container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = containerId || 'site-helper-container';
      document.body.appendChild(container);
    }

    // Clear previous content
    container.innerHTML = '';

    // Add heading
    var heading = document.createElement('h3');
    heading.textContent = '页面辅助 - ' + APP_SETTINGS.keyword;
    heading.style.marginBottom = '16px';
    heading.style.color = '#222';
    container.appendChild(heading);

    // Add keyword badges
    var badgeGroup = document.createElement('div');
    badgeGroup.style.marginBottom = '20px';
    sampleKeywords.forEach(function(item) {
      badgeGroup.appendChild(createBadge(item.text, item.color));
    });
    container.appendChild(badgeGroup);

    // Add tip cards
    sampleTips.forEach(function(tip, index) {
      var bg = APP_SETTINGS.cardColors[index % APP_SETTINGS.cardColors.length];
      container.appendChild(createCard(tip.title, tip.content, bg));
    });

    // Add access note
    var note = document.createElement('div');
    note.style.marginTop = '16px';
    note.style.padding = '10px 14px';
    note.style.background = '#f5f5f5';
    note.style.borderLeft = '4px solid #1976d2';
    note.style.borderRadius = '4px';
    note.innerHTML = '访问说明：请通过 ' +
      '<a href="' + APP_SETTINGS.portalUrl + '" target="_blank" rel="noopener noreferrer">' +
      APP_SETTINGS.portalUrl + '</a> 获取更多 ' + APP_SETTINGS.keyword + ' 资讯。';
    container.appendChild(note);
  }

  // Auto-run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      renderSiteHelper('site-helper-container');
    });
  } else {
    renderSiteHelper('site-helper-container');
  }

})();