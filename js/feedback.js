// feedback.js

// Get references to elements
const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackForm = document.getElementById('feedbackForm');
const submitFeedbackBtn = document.getElementById('submitFeedback');
const cancelFeedbackBtn = document.getElementById('cancelFeedback');
const feedbackText = document.getElementById('feedbackText');

// Show the feedback form when the button is clicked
feedbackBtn.addEventListener('click', () => {
  feedbackForm.style.display = 'block'; // Show the form
});

// Hide the feedback form when the cancel button is clicked
cancelFeedbackBtn.addEventListener('click', () => {
  feedbackForm.style.display = 'none'; // Hide the form
  feedbackText.value = ''; // Clear the text area
});

// Handle the feedback submission
submitFeedbackBtn.addEventListener('click', async () => {
  const feedback = feedbackText.value.trim();

  if (feedback) {
    // Send feedback to Discord webhook
    await sendFeedbackToDiscord(feedback);

    // Hide the form and clear the text area
    feedbackForm.style.display = 'none';
    feedbackText.value = '';
    alert('Thank you for your feedback!');
  } else {
    alert('Please enter your feedback!');
  }
});

// Function to send feedback to Discord webhook
async function sendFeedbackToDiscord(feedback) {
  const webhookURL = 'https://discord.com/api/webhooks/1317075083553935411/w44o2275bOO-d23V5wbXSyfFoKqRJzDhM6XaKPNHZwn96l3isUl27Vv-gLjBbVQILpJD'; // Replace with your webhook URL

  const embed = {
    title: 'New Feedback Received',
    description: feedback,
    color: 3066993, // Green color for the embed
    footer: {
      text: 'Feedback from MyIpAddress'
    }
  };

  const payload = {
    content: 'New feedback from the website!',
    embeds: [embed]
  };

  try {
    await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error('Error sending feedback to Discord:', error);
  }
}
