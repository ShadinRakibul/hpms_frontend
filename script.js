const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

// Array of all doctors
const doctors = [
    "Dr. Smith",
    "Dr. Johnson",
    "Dr. Williams",
    // Add more doctors as needed
  ];
  
  // Function to display all doctors
  function displayAllDoctors() {
    const doctorList = document.getElementById("doctorList");
    doctorList.innerHTML = ""; // Clear previous list
  
    doctors.forEach(doctor => {
      const doctorItem = document.createElement("p");
      doctorItem.textContent = doctor;
      doctorList.appendChild(doctorItem);
    });
  }
  
  // Event listener for "All Doctors" option
  const allDoctorsLink = document.getElementById("allDoctors");
  allDoctorsLink.addEventListener("click", displayAllDoctors);
  