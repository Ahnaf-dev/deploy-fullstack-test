document.addEventListener("DOMContentLoaded", (event) => {
  const fetchServer = async () => {
    let response = await fetch("https://deploy-fullstack-test-server.vercel.app/");
    console.log(response)
  }


  fetchServer()
});



