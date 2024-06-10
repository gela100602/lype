// Pagination
document.addEventListener('DOMContentLoaded', () => {
    const productsPerPage = 6;
    const productList = document.querySelector('[data-feature-list]');
    const paginationLinks = document.querySelectorAll('#pagination a[data-page]');
    const nextButton = document.querySelector('#pagination i[data-next]');
    const previousButton = document.querySelector('#pagination i[data-previous]');
  
    if (!productList || paginationLinks.length === 0 || !nextButton || !previousButton) {
      console.error('Required elements are not found in the DOM.');
      return;
    }
  
    const products = Array.from(productList.children);
    const totalPages = Math.ceil(products.length / productsPerPage);
    let currentPage = 1;
  
    function showPage(pageNumber) {
      const start = (pageNumber - 1) * productsPerPage;
      const end = start + productsPerPage;
  
      products.forEach((product, index) => {
        product.style.display = (index >= start && index < end) ? 'block' : 'none';
      });
  
      paginationLinks.forEach(link => link.classList.remove('active'));
      const activeLink = Array.from(paginationLinks).find(link => parseInt(link.getAttribute('data-page')) === pageNumber);
      if (activeLink) {
        activeLink.classList.add('active');
      }
  
      // Show or hide the previous button
      if (pageNumber === 1) {
        previousButton.style.display = 'none';
      } else {
        previousButton.style.display = 'inline';
      }
  
      // Show or hide the next button
      if (pageNumber === totalPages) {
        nextButton.style.display = 'none';
      } else {
        nextButton.style.display = 'inline';
      }
    }
  
    paginationLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = parseInt(link.getAttribute('data-page'));
        showPage(currentPage);
      });
    });
  
    nextButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
      }
    });
  
    previousButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
      }
    });
  
    showPage(1);
  });  