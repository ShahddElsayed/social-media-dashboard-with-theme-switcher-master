document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector(
      '.toggle-btn input[type="checkbox"]'
    );
  
    
    document.body.classList.toggle("Dark-mode", toggleSwitch.checked);
  
    toggleSwitch.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.body.classList.add("Dark-mode");
      } else {
        document.body.classList.remove("Dark-mode");
      }
    });
  });
  