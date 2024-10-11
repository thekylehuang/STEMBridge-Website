document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get form values
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
    //   const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
  
      const subject = 'Contact Form Submission';

      const emailContent = `Full Name: ${fullName}\nEmail: ${email}\n\n${message}`;

      const hiddenForm = document.createElement('form');
      hiddenForm.action = 'mailto:stembridgecontact@gmail.com';
      hiddenForm.method = 'post';
      hiddenForm.enctype = 'text/plain';
      hiddenForm.style.display = 'none';

      const inputSubject = document.createElement('input');
      inputSubject.type = 'hidden';
      inputSubject.name = 'subject';
      inputSubject.value = subject;

      const inputBody = document.createElement('input');
      inputBody.type = 'hidden';
      inputBody.name = 'body';
      inputBody.value = emailContent;

      hiddenForm.appendChild(inputSubject);
      hiddenForm.appendChild(inputBody);

      document.body.appendChild(hiddenForm);
      hiddenForm.submit();
    });
  });
  