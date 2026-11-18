document.getElementById('checkBtn').addEventListener('click', async () => {
    const statusDiv = document.getElementById('status');
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = tab.url;

    statusDiv.textContent = "Checking...";
    
    try {
        const response = await fetch(`http://127.0.0.1:8000/check-url?url=${url}`);
        const data = await response.json();
        
        if(data.status === "DANGEROUS"){
            statusDiv.textContent = "⚠️ KHATRA! Ye Fake Site Hai!";
            statusDiv.className = "danger";
        } else {
            statusDiv.textContent = "✅ Surakshit Hai";
            statusDiv.className = "safe";
        }
    } catch (e) {
        statusDiv.textContent = "Backend band hai, chalu karo!";
        statusDiv.className = "danger";
    }
});