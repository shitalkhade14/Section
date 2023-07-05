<script>
        function filterList() {
            const input = document.getElementById("search-input");
            const filterValue = input.value.toLowerCase();
            const items = document.querySelectorAll(".item");

            items.forEach((item) => {
                const itemText = item.innerText.toLowerCase();
                const isVisible = itemText.includes(filterValue);

                if (isVisible) {
                    item.setAttribute("aria-hidden", "false");
                    item.style.display = "block";
                } else {
                    item.setAttribute("aria-hidden", "true");
                    item.style.display = "none";
                }
            });
        }

        const items = document.querySelectorAll(".item");

        items.forEach((item) => {
            item.addEventListener("click", () => {
                // Perform the action when an item is selected (e.g., alert the selected item).
                alert(item.innerText);
            });

            item.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === "Space") {
                    event.preventDefault();
                    // Perform the action when an item is selected (e.g., alert the selected item).
                    alert(item.innerText);
                }
            });
        });
    </script>