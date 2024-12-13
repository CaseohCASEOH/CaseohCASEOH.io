// Function to fetch the public IP addresses
function getIPAddresses() {
  // Fetch IPv4 address from ipify API
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      // Display the IPv4 address in the HTML
      document.getElementById('ipv4').textContent = data.ip;
    })
    .catch(error => {
      console.error('Error fetching IPv4 address:', error);
      document.getElementById('ipv4').textContent = 'Unable to fetch IPv4';
    });

  // Fetch IPv6 address from ipify API
  fetch('https://api6.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      // Display the IPv6 address in the HTML
      document.getElementById('ipv6').textContent = data.ip;
    })
    .catch(error => {
      console.error('Error fetching IPv6 address:', error);
      document.getElementById('ipv6').textContent = 'Unable to fetch IPv6';
    });
}

// Call the function to display IP addresses when the page loads
getIPAddresses();
