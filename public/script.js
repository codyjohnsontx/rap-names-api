document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("rapperSelect")
    .addEventListener("change", function () {
      const rapperName = this.value;
      if (rapperName) {
        fetch(
          `/.netlify/functions/getRapper?name=${encodeURIComponent(rapperName)}`
        )
          .then((response) => response.json())
          .then((data) => {
            const rapperInfoDiv = document.getElementById("rapperInfo");
            rapperInfoDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>Age: ${data.age}</p>
                <p>Birth Name: ${data.birthName}</p>
                <p>Birth Location: ${data.birthLocation}</p>
              `;
          })
          .catch((error) => console.error("Error fetching data:", error));
      } else {
        document.getElementById("rapperInfo").innerHTML = "";
      }
    });
});
