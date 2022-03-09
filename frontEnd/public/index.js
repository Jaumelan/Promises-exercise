const button = document.getElementById("requisitionButton");

async function request() {
    const url = "http://localhost:3000/aula";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        
        console.error("Timeout Error");
    }

    /* fetch(url) */



    /* .then( (answer) => {
        try {
            answer.json().then(res => console.log(res)) ;
        } catch (error) {
            throw error;
        }
    } ) */
    


    /* .catch( error => console.log(error.message) )
    .then( res => console.log(res) ) */
}