// Prompts courtesy of my friends.
const settings = ["In an ancient forest", "In a catastic city", "In a haunted library", "Inside a Minecraft mine", "Within a mushroom circle in the middle of the woods", "In a PAX gaming room", "Inside a brothel", "Inside a Santeria church", "On the ninth moon of Endor", "On Mars"];
const characters = ["a lost cat", "an ancient sorceress", "a troubled AI", "a one-legged shoemaker named Joe", "a fruit bat with the tail of a skunk and rainbow wings", "an itinerant priest named Father Donal", "an Ewok named Wicket", "a master necromancer"];
const twists = ["searching for a forgotten tome", "haunted by nightmares", "chased by invisible spirits", "sacrificing a leg to get the attention of the fae", "doing something naughty", "totally lost but too proud to admit it", "worshipping the great shiny golden god fallen from the sky as foretold in legend", "living a quiet life away from earthly concerns", "singing the song of their people"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function typeText(element, text, speed = 50) {
    element.innerHTML = ''; // Clear previous content

    let i = 0;
    const interval = setInterval(() => {
        const span = document.createElement('span');
        const char = text[i] === ' ' ? '\u00A0' : text[i]; // Preserve space width
        span.textContent = char;
        element.appendChild(span);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, speed);
}

document.getElementById("roll_button").addEventListener("click", () => {
  const setting = getRandomItem(settings);
  const character = getRandomItem(characters);
  const twist = getRandomItem(twists);

  const promptOutput = document.getElementById("prompt_output");
  promptOutput.innerHTML = ""; // Clear existing content

  const sentence = `${setting}, ${character} is ${twist}.`;
  const words = sentence.split(" ");

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.innerText = word + "\u00A0"; // non-breaking space
    span.classList.add("word_fade");
    span.style.animationDelay = `${index * 0.3}s`; // Staggered fade
    promptOutput.appendChild(span);
  });
});