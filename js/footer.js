const form = document.querySelector(".client-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.querySelector(".form-status");
  const response = await fetch(event.target.action, {
    method: form.method,
    body: new FormData(event.target),
    headers: {
      Accept: "application/json"
    }
  })
  if (response.ok) {
    status.innerHTML = "Thanks for your register!";
    form.reset();
  } else {
    status.innerText = "Error!";
  }
}
form.addEventListener("submit", handleSubmit);
