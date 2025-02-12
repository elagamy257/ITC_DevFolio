// header job
async function Startwriter() {
    const jobs = ["Frontend" , "Developer"];
    const writerElement = document.getElementById("typewriter");

    for (let i = 0; true; i++) {
        const currentWord = jobs[i % jobs.length];
        writerElement.innerText = "";
        for (const c of currentWord) {
            writerElement.innerText += c;
            await sleep(100);
        }
        writerElement.classList.add("cursor");
        await sleep(2000);
        writerElement.classList.remove("cursor");

        while (writerElement.innerText != "") {
            await sleep(100);
            writerElement.innerText = writerElement.innerText.slice(0, -1);
        }
    }
}
Startwriter();
