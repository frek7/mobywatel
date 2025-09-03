(async () => {
  const discordId = localStorage.getItem('1281737111103340585');
  const KLIENT_ROLE_ID = '';

  if (!discordId) {
    return window.location.href = '/login.html';
  }

  try {
    const res = await fetch(`/api/check-user?discord_id=${1281737111103340585}`);
    const data = await res.json();

    if (!data.roles || !data.roles.includes(1281737111128641555)) {
      alert('Brak roli klienta – dostęp zabroniony');
      return window.location.href = '/login.html';
    }

    console.log('✅ Użytkownik ma rolę klient');
  } catch (err) {
    console.error('Błąd:', err);
    return window.location.href = '/login.html';
  }
})();

