const url = 
'http://worldtimeapi.org/api/timezone/America/Los_Angeles'

async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(response)
}

getData()