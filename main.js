AOS.init();

document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.querySelector('.submitBtn');
  const feedbackInput = document.querySelector('.feedbackText');

  if (submitBtn && feedbackInput) {
    submitBtn.addEventListener('click', function () {
      const feedbackText = feedbackInput.value.trim();

      if (feedbackText === "") {
        Swal.fire({
          icon: 'warning',
          title: 'Empty Feedback',
          text: 'Please write something before submitting.',
          width: '500px',
          customClass: {
            popup: 'custom-alert-spacing custom-alert-size',
            title: 'custom-title-spacing'
          }
        });
      } else {
         const newFeedback = {
          FeedbackID: 'FB-' + Date.now(),
          Message: feedbackText,
          StudentID: 'ST-' + Math.floor(Math.random() * 100000), 
          SubmittedAt: new Date().toISOString()
        };

         const storedFeedbacks = JSON.parse(localStorage.getItem('submittedFeedbacks')) || [];
        storedFeedbacks.push(newFeedback);
        localStorage.setItem('submittedFeedbacks', JSON.stringify(storedFeedbacks));

         Swal.fire({
          position: "center",
          icon: "success",
          title: "Great to see your feedback!",
          showConfirmButton: false,
          timer: 1600,
          width: '500px',
          customClass: {
            popup: 'custom-alert-size'
          }
        });

         feedbackInput.value = "";
      }
    });
  }

   document.querySelectorAll('img[data-modal-id]').forEach(img => {
    img.addEventListener('mouseenter', function () {
      const modalId = img.getAttribute('data-modal-id');
      const modalElement = document.getElementById(modalId);
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    });
  });

   var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2,
      slideShadows: false,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  });
});


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img[data-modal-id]').forEach(img => {
    img.addEventListener('mouseenter', function () {
      const modalId = img.getAttribute('data-modal-id');
      const modalElement = document.getElementById(modalId);
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    });
  });
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2,
    slideShadows: false,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});

