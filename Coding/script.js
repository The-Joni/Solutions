document.getElementById('review').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedRating = document.querySelector('input[name="numbers"]:checked');
    
    if (selectedRating) {
      const ratingValue = selectedRating.value;
      localStorage.setItem('selectedRating', ratingValue);
      window.location.href = 'thankyou.html';
    } else {
      alert('Please select a rating before submitting.');
    }
  });