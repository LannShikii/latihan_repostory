<script>
    const tabs = document.querySelectorAll('.category-tab');
    const products = document.querySelectorAll('.product-card');

    tabs.forEach(tab = {
      tab.addEventListener('click', () => {
        // Update tab style
        tabs.forEach(t => t.classList.remove('bg-red-600', 'text-white'));
        tabs.forEach(t => t.classList.add('bg-gray-200'));
        tab.classList.add('bg-red-600', 'text-white');

        const category = tab.getAttribute('data-category');

        products.forEach(product => {
          if (category === 'all') {
            product.classList.remove('hidden');
          } else {
            product.classList.toggle('hidden', !product.classList.contains(category));
          }
        });
      })
    });
  </script>