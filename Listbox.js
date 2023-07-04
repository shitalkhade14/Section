const listbox = document.getElementById("listbox");

            listbox.addEventListener("keydown", function (event) {

                const currentOption = event.target;

                // accessible with arrow keys

                if (event.key === "ArrowUp") {

                    event.preventDefault();

                    if (currentOption.previousElementSibling) {

                        //accessible with arrow keys arrow up selected




                       const previousElement=currentOption.previousElementSibling;




                       previousElement.setAttribute("aria-selected","true");

                       previousElement.setAttribute("tabindex","0");




                       currentOption.setAttribute("aria-selected","false");

                    currentOption.setAttribute("tabindex","-1");




                       // currentOption.previousElementSibling.focus();

                       previousElement.focus();

                       

                    } else {

                        const lastOption = listbox.lastElementChild;

                        lastOption.focus();

                    }

                } else if (event.key === "ArrowDown") {

                    event.preventDefault();

                    if (currentOption.nextElementSibling) {




                        //accessible with arrow down option is selected

                        const nextElement=currentOption.nextElementSibling;

                        nextElement.setAttribute("aria-selected","true");

                        nextElement.setAttribute("tabindex","0");




                        currentOption.setAttribute("aria-selected","false");

                        currentOption.setAttribute("tabindex","-1");





                        nextElement.focus();

                    } else {

                        const firstOption = listbox.firstElementChild;

                        firstOption.focus();

                    }

                }

             });




const listbox = document.getElementById("listbox");

 

listbox.addEventListener("keydown", function (event) {

    const currentOption = event.target;

 

    // Accessible with arrow keys

    if (event.key === "ArrowUp") {

        event.preventDefault();

        if (currentOption.previousElementSibling) {

            // Accessible with arrow keys arrow up selected

            const previousElement = currentOption.previousElementSibling;

            previousElement.setAttribute("aria-selected", "true");

            previousElement.setAttribute("tabindex", "0");

            currentOption.setAttribute("aria-selected", "false");

            currentOption.setAttribute("tabindex", "-1");

            previousElement.focus();

        } else {

            const lastOption = listbox.lastElementChild;

            lastOption.focus();

        }

    } else if (event.key === "ArrowDown") {

        event.preventDefault();

        if (currentOption.nextElementSibling) {

            // Accessible with arrow down option is selected

            const nextElement = currentOption.nextElementSibling;

            nextElement.setAttribute("aria-selected", "true");

            nextElement.setAttribute("tabindex", "0");

            currentOption.setAttribute("aria-selected", "false");

            currentOption.setAttribute("tabindex", "-1");

            nextElement.focus();

        } else {

            const firstOption = listbox.firstElementChild;

            firstOption.focus();

        }

    }

});

 

listbox.addEventListener("mousedown", function (event) {

    const clickedOption = event.target;

 

    // Remove tabindex and aria-selected attributes from all options

    const options = listbox.querySelectorAll("option");

    options.forEach((option) => {

        option.removeAttribute("tabindex");

        option.removeAttribute("aria-selected");

    });

 

    // Set tabindex and aria-selected attributes for the clicked option

    clickedOption.setAttribute("tabindex", "0");

    clickedOption.setAttribute("aria-selected", "true");

});

             