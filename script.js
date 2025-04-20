document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointmentForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const appointment = {
        name: form.name.value,
        age: form.age.value,
        email: form.email.value,
        phone: form.phone.value,
        date: form.date.value,
        time: form.time.value,
        speciality: form.speciality.value,
        doctor: form.doctor.value
      };
  
      // Save all appointments
      let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
      appointments.push(appointment);
      localStorage.setItem('appointments', JSON.stringify(appointments));
  
      // Save last appointment separately for success page
      localStorage.setItem('lastAppointment', JSON.stringify(appointment));
  
      // Redirect to success.html
      window.location.href = "success.html";
    });
  });
  
  