document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector("#assignments-table tbody");
      data.forEach((item) => {
        const row = document.createElement("tr");

        // Helper function to create and append a cell
        function createCell(cellData) {
          const cell = document.createElement("td");
          cell.textContent = cellData.value;
          if (cellData.class) {
            cell.classList.add(cellData.class);
          }
          return cell;
        }

        // Create table cells
        row.appendChild(createCell(item.sn));
        row.appendChild(createCell(item.title));
        row.appendChild(createCell(item.category));

        const statusCell = createCell(item.status);
        row.appendChild(statusCell);

        const codeCell = document.createElement("td");
        const codeLink = document.createElement("a");
        codeLink.href = item.codeLink.value;
        codeLink.textContent = "Code";
        codeLink.classList.add("code-link");
        if (item.codeLink.class) {
          codeLink.classList.add(item.codeLink.class);
        }
        codeCell.appendChild(codeLink);
        row.appendChild(codeCell);

        const hostedCell = document.createElement("td");
        const hostedLink = document.createElement("a");
        hostedLink.href = item.hostedLink.value;
        hostedLink.textContent = "Hosted Page";
        hostedLink.classList.add("hosted-link");
        if (item.hostedLink.class) {
          hostedLink.classList.add(item.hostedLink.class);
        }
        hostedCell.appendChild(hostedLink);
        row.appendChild(hostedCell);

        const noteCell = createCell(item.note);
        row.appendChild(noteCell);

        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
