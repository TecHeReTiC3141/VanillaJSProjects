document.addEventListener('DOMContentLoaded', () => {

    function setup_links() {
        let anchors = document.querySelectorAll('a[href^="#"]');

        anchors.forEach(item => {
            item.addEventListener('click', e => {
               e.preventDefault();

               let hrefId = e.currentTarget.getAttribute('href').substring(1);

               let target = document.getElementById(hrefId);

               let navOffset = document.querySelector('.navbar').offsetHeight;
               let targetOffset = target.getBoundingClientRect().top;
               let offsetDiff = targetOffset - navOffset;

               window.scrollBy({
                   top: offsetDiff,
                   behavior: "smooth",
               })
            });
        });
    }

    setup_links();
});