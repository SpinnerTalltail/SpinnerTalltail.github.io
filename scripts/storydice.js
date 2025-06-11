// Prompts courtesy of my friends.
const settings = ["an ancient forest", "a catastic city", "a haunted library", "a Minecraft mine", "a mushroom circle in the middle of the woods", "a PAX gaming room", "a brothel", "a Santeria church", "the ninth moon of Endor"];
const characters = ["a lost cat", "an ancient sorceress", "a troubled AI", "a one-legged shoemaker named Joe", "a fruit bat with the tail of a skunk and rainbow wings", "an itinerant priest named Father Donal", "an Ewok named Wicket"];
const twists = ["searching for a forgotten tome", "haunted by nightmares", "chased by invisible spirits", "sacrificing a leg to get attention of the fae", "doing something naughty", "totally lost but too proud to admit it", "worshipping the great shiny golden god fallen from the sky as foretold in legend"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("roll_button").addEventListener("click", () => {
  const setting = getRandomItem(settings);
  const character = getRandomItem(characters);
  const twist = getRandomItem(twists);

  const promptOutput = document.getElementById("prompt_output");
  promptOutput.innerHTML = ""; // Clear existing content

  const sentence = `In ${setting}, ${character} is ${twist}.`;
  const words = sentence.split(" ");

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.innerText = word + "\u00A0"; // non-breaking space
    span.classList.add("word_fade");
    span.style.animationDelay = `${index * 0.3}s`; // Staggered fade
    promptOutput.appendChild(span);
  });
});