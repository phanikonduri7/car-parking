document.addEventListener("DOMContentLoaded", function() {
    const vehicleForm = document.getElementById("vehicleForm");
    const vehicleTableBody = document.getElementById("vehicleTableBody");

    vehicleForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const vehicleName = document.getElementById("vehicleName").value;
        const vehicleNumber = document.getElementById("vehicleNumber").value;
        const entryDate = document.getElementById("entryDate").value;
        const exitDate = document.getElementById("exitDate").value;
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${vehicleName}</td>
            <td>${vehicleNumber}</td>
            <td>${entryDate}</td>
            <td>${exitDate}</td>
        `;
        vehicleTableBody.appendChild(newRow);
        vehicleForm.reset();
    });
});