let form = document.querySelector('#form');

form.addEventListener("submit", e => {

    e.preventDefault();

    let name = document.querySelector('#fname');
    console.log(name.value);

    let mail = document.querySelector('#mail');
    console.log(mail.value);

    let num = document.querySelector('#num');
    console.log(num.value);

    let message = document.querySelector('#mes');
    console.log(message.value);

    let bot = {
        TOKEN: "5516004413:AAF095MNQHgMmFkxo3SN45TyXrfldveCtmU",
        chatID: "-1001674060854",
    }

    let data = `New Contact Submit:%0A Name: ${name.value} %0A MailId: ${mail.value} %0A Contact: ${num.value} %0A Message: ${message.value}`

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${data}`, {
            method: "GET"
        })
        .then(sucess => {
            alert("Form Submitted Sucessfully")
        }, error => {
            alert("Form not send!")
            console.log(error);
        })

})