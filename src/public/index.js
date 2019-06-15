function handleSubmit(event) {
    event.preventDefault()

    console.log("clicked!")
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.remaining
    })
}
