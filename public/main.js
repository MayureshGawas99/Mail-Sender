document.addEventListener("DOMContentLoaded", () => {
  const send = document.querySelector("#send");
  send.addEventListener("click", async (e) => {
    e.preventDefault()
    const receiver = document.querySelector("#receiver").value;
    const cc = document.querySelector("#cc").value;
    const bcc = document.querySelector("#bcc").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;
    console.log(receiver, cc, bcc, subject, message)

    let request = await fetch("/save", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        receiver: receiver,
        cc: cc,
        bcc: bcc,
        subject: subject,
        message: message,
      })
    });
    let messages = await request.text();
    console.log(messages);
    alert(messages);
    // .then(response => {
    //   if (!response.ok) {
    //     throw Error(response.statusText);
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   console.log("data", data);
    //   alert(data);
    // })
    // .catch((e) => {
    //   console.log(e);
    //   alert(e);
    // })
  });

})