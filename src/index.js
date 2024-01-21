function displayPoem(repsonse) {
  new Typewriter("#poem", {
    strings: repsonse.data.answer,
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = `td6b219f3d3oca374173c4ae55621b00`;
  let prompt = `User prompt: Generate a poem about ${userPrompt.value}`;
  let context =
    "User prompt: You are a Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user prompt. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#form-generator");
poemFormElement.addEventListener("submit", generatePoem);
