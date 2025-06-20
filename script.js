//your JS code here. If required.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function showMessage()
{
	let text=document.getElementById("text").value;
	let delayvalue=document.getElementById("delay").value;

	await delay(delayvalue);
    // Display the message
  document.getElementById('output').innerText = text;

}

// Attach event listener to button
document.getElementById('btn').addEventListener('click', showMessage);
