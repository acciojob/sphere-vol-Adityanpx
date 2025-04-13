function volume_sphere(event) {
  // Prevent form from submitting and refreshing the page
  event.preventDefault();

  // Get input and output fields
  let r = document.getElementById("radius").value;
  let v = document.getElementById("volume");

  // Convert input to a number
  let radius = parseFloat(r);

  // Validate input and calculate volume
  if (isNaN(radius) || radius < 0) {
    v.value = "NaN";
  } else {
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    v.value = volume.toFixed(4);
  }
}

window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
