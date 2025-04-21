function initPriceRange() {
    // Get the DOM elements
    const priceSlider = document.getElementById('price-range');
    const outputElement = document.getElementById('value');
    
    // Set initial values
    const minPrice = priceSlider.min;
    const maxPrice = priceSlider.max;
    
    // Display the initial price range
    outputElement.innerHTML = `${minPrice} ₴ — ${maxPrice} ₴`;
    
    // Update the price display when slider changes
    priceSlider.addEventListener('input', function() {
        const currentValue = this.value;
        outputElement.innerHTML = `${minPrice} ₴ — ${currentValue} ₴`;
    });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPriceRange);