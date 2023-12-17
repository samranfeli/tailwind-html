//Tab:
var tabs = document.querySelectorAll('[data-tab]');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {

        var tab = e.target.closest('[data-tab]');
        var targetId = tab.getAttribute('data-tab');
        var target = document.getElementById(targetId);


        var tabLinks = tab.closest('.tab-links-wrapper').querySelectorAll('[data-tab]');
        var tabContents = target.closest('.tab-contents-wrapper').querySelectorAll('[data-tab-content]');

        for (var j = 0; j < tabContents.length; j++) {
            tabContent = tabContents[j];
            if (tabContent.getAttribute('id') === targetId) {
                tabContent.classList.remove('hidden');
            } else {
                tabContent.classList.add('hidden');
            }
        }

        for (var j = 0; j < tabLinks.length; j++) {
            var tabLink = tabLinks[j];
            var tabText = tabLink.querySelector('[tab-text]');
            var caret = tabLink.querySelector('[data-caret]');

            if (tabLink.getAttribute('data-tab') === targetId) {
                tabLink.classList.add('text-white', 'bg-violet-500');
                tabLink.classList.remove('text-neutral-400', 'bg-white');
                tabText.classList.add('text-white');
                tabText.classList.remove('text-neutral-700');
                caret.classList.add('block');
                caret.classList.remove('hidden');
            } else {
                tabLink.classList.remove('text-white', 'bg-violet-500');
                tabLink.classList.add('text-neutral-400', 'bg-white');
                tabText.classList.remove('text-white');
                tabText.classList.add('text-neutral-700');
                caret.classList.remove('block');
                caret.classList.add('hidden');
            }
        }

    })
}
// END ---- tab: