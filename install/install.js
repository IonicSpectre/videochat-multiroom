document.getElementById('install-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const result = document.getElementById('result');

  try {
    const res = await fetch('/api/install', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    if (res.ok) {
      result.innerHTML = `<span class="success">✅ ${json.message}</span>`;
    } else {
      result.innerHTML = `<span class="error">❌ ${json.error}</span>`;
    }
  } catch (err) {
    result.innerHTML = `<span class="error">Errore di rete o server non raggiungibile</span>`;
  }
});
