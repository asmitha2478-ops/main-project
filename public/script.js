function submitFeedback() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("error");

    error.innerText = "";

    if (!name) {
        error.innerText = "⚠ Name is required";
        return;
    }

    if (!email) {
        error.innerText = "⚠ Email is required";
        return;
    }

    if (!message) {
        error.innerText = "⚠ Feedback is required";
        return;
    }

    if (message.length > 360) {
        error.innerText = "⚠ Max 360 characters allowed";
        return;
    }

    fetch("/feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(res => res.text())
    .then(msg => {
        alert(msg);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch(() => {
        error.innerText = "❌ Failed to submit. Try again.";
    });
}
