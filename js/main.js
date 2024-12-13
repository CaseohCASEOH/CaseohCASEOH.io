// Handle script uploads
document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("upload-form");
  const scriptList = document.getElementById("script-list");

  const scripts = []; // Temporary storage (replace with backend API later)

  // Handle upload form submission
  if (uploadForm) {
    uploadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const description = e.target.description.value;
      const scriptContent = e.target.script.value;

      // Store script
      scripts.push({ title, description, scriptContent });

      // Reset form
      uploadForm.reset();
      alert("Script uploaded!");

      // Update home page if possible
      if (scriptList) displayScripts();
    });
  }

  // Display uploaded scripts
  function displayScripts() {
    scriptList.innerHTML = '<h2>Uploaded Scripts</h2>';
    scripts.forEach((script, index) => {
      const scriptItem = document.createElement("div");
      scriptItem.className = "script-item";
      scriptItem.innerHTML = `
        <h3>${script.title}</h3>
        <p>${script.description}</p>
        <pre>${script.scriptContent}</pre>
        <button onclick="deleteScript(${index})">Delete</button>
      `;
      scriptList.appendChild(scriptItem);
    });
  }

  // Delete a script
  window.deleteScript = (index) => {
    scripts.splice(index, 1);
    displayScripts();
  };
});
