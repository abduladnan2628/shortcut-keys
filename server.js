document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("shortcut-search");
    const resultsDiv = document.getElementById("results");

    // Predefined shortcuts
    const shortcuts = [
        { keys: "Ctrl + C", description: "Copy" },
        { keys: "Ctrl + V", description: "Paste" },
        { keys: "Ctrl + X", description: "Cut" },
        { keys: "Ctrl + Z", description: "Undo" },
        { keys: "Ctrl + Y", description: "Redo" },
        { keys: "Alt + Tab", description: "Switch between apps" },
        { keys: "Ctrl + S", description: "Save file" },
        { keys: "Ctrl + P", description: "Print document" },
        { keys: "Ctrl + A", description: "Select all" },
        { keys: "Ctrl + F", description: "Find in page" }
    ];

    // Search function
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        resultsDiv.innerHTML = "";

        if (query.length > 0) {
            const filteredShortcuts = shortcuts.filter(s =>
                s.keys.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
            );

            if (filteredShortcuts.length > 0) {
                filteredShortcuts.forEach(s => {
                    const item = document.createElement("p");
                    item.innerHTML = `<strong>${s.keys}</strong>: ${s.description}`;
                    resultsDiv.appendChild(item);
                });
            } else {
                resultsDiv.innerHTML = "<p>No shortcuts found</p>";
            }
        }
    });
});
