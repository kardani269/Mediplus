function validateForm() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var age = document.getElementById("age").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var Services = document.getElementById("Services").selectedOptions;
  var address = document.getElementById("address").value;

  var emailRegex = /^\S+@\S+\.\S+$/;
  var mobileRegex = /^\d{10}$/;

  if (fullName.trim() === "") {
      alert("Please enter your full name.");
      return false;
  }

  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  if (!mobileRegex.test(mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
  }

  if (isNaN(age) || age < 18 || age > 100) {
      alert("Please enter a valid age between 18 and 100.");
      return false;
  }

  if (!gender) {
      alert("Please select a gender.");
      return false;
  }

  if (Services.length === 0) {
      alert("Please select at least one Service.");
      return false;
  }

  if (address.trim() === "") {
      alert("Please enter your address.");
      return false;
  }

  return true; // Form submission allowed
}