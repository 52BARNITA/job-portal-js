const searchInput = document.getElementById("searchInput");
        const btn = document.getElementById("btn");
        const resultDiv = document.getElementById("result");

        const jobsArray = [
            {title:"Fronend Developer", company: "Google", location:"Hydrabad"},
            {title:"Backend Developer", company: "Microsoft", location:"Bangalore"},
            {title:"Full Stack Web Developer", company: "Oracle", location:"Pune"},
            {title:"UI Developer", company: "PWC", location:"Remote"},
            {title:"Web Developer", company: "Deloite", location:"Kolkata"},
        ];

        btn.addEventListener("click", ()=>{
            let userInput = searchInput.value.toLowerCase();
            // console.log("User Typed:", userInput);
            const matchedJobs = jobsArray.filter((job) =>{        
                //filter() → array ko chhota karta hai
                return job.title.toLowerCase().includes(userInput) || 
                    job.company.toLowerCase().includes(userInput) ||
                    job.location.toLowerCase().includes(userInput);
            });
                console.log("Matches Jobs: ", matchedJobs);
                if(matchedJobs===0){
                    resultDiv.innerText = "<p> No Jobs Found </p>";
                    return;
                }
                matchedJobs.forEach((job) => {
                    const card = document.createElement("div");
                    card.classList.add("job-card");
                    card.innerHTML = `
                    <h3> ${job.title} </h3> ⬇️
                    <p> <strong> Company: </strong> ${job.company} </p> ⬇️
                    <p> <strong> Location: </strong> ${job.location} </p>
                    <button class= "apply-btn"> Apply Now </button>`;
                    resultDiv.appendChild(card);

            const applyButton = card.querySelector(".apply-btn");
            applyButton.addEventListener("click", ()=>{
            applyButton.innerText = "Applied ✔️";
            applyButton.classList.add("applied");   //CSS state change
            applyButton.disable = true; //Button dobara click nahi hoga
            alert(`Applied for ${job.title} at ${job.company}`);
        });
                });

        });
