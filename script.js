// Change text content dynamically and apply styles
document.getElementById("change-text-btn").addEventListener("click", () => {
    const desc = document.getElementById("description");
    desc.textContent = "Maize is not only vital for food security but also a key economic driver in rural areas.";
    desc.style.color = "green";
    desc.style.fontWeight = "bold";
  });
  
  // Add or remove info box visibility
  document.getElementById("toggle-box-btn").addEventListener("click", () => {
    const box = document.getElementById("info-box");
    box.style.display = box.style.display === "none" ? "block" : "none";
  });
  