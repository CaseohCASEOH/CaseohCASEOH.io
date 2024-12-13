function IPAddresses() {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ipv4').textContent = data.ip;
    })
    .catch(error => {
      console.error('IPv4:', error);
      document.getElementById('ipv4').textContent = 'You Do Not Have IPv4';
    });

  fetch('https://api6.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ipv6').textContent = data.ip;
    })
    .catch(error => {
      console.error('IPv6:', error);
      document.getElementById('ipv6').textContent = 'You Do Not Have IPv6';
    });
}

IPAddresses();
