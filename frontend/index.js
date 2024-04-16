document.addEventListener("DOMContentLoaded", (event) => {
  const fetchServer = async () => {
    let response = await fetch("https://fullstack-deployment-test.vercel.app/");
    console.log(response)
  }


  fetchServer()
});



