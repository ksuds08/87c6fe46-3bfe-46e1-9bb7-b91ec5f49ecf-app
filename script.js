document.getElementById('resume-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const industry = document.getElementById('industry').value;
    const experience = document.getElementById('experience').value;
    const design = document.getElementById('design').value;

    const response = await fetch('/functions/api/handler.ts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ industry, experience, design })
    });

    if (response.ok) {
        const data = await response.json();
        // Handle the resume template generation result (e.g., show a download link)
        console.log(data);
    } else {
        console.error('Failed to generate resume.');
    }
});