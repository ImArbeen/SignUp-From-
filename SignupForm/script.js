// Signup form js 

document.addEventListener('DOMContentLoaded', function () {
      const signupForm = document.getElementById('signupForm');
      const signupBtn = document.getElementById('signupBtn');
  
      // Signup form submission
      signupBtn.addEventListener('click', function (event) {
          event.preventDefault();
          const username = signupForm.elements['username'].value;
          const email = signupForm.elements['email'].value;
          // I can perform validation here 
          console.log('Username:', username);
          console.log('Email:', email);
          signupForm.reset();
      });
  });
  