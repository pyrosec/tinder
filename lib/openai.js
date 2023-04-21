'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUsername = void 0;
const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY || '');
async function parseUsername(user) {
    const documents = ["A username is an identification used by a person with access to a computer, network, or online service. It is a single token with no spaces which is not an English word. It is most often an anagram of a human first name or last name or both."];
    let temperature = Number(0.7);
    const gptResponse = await openai.answers({
        documents,
        question: 'Retrieve the list of usernames from this bio: ' + user.user.bio,
        temperature,
        search_model: "davinci",
        model: "davinci",
        examples_context: documents[0],
        examples: [["Retrieve the list of usernames from this bio: I can’t change age on here but I’m definitely in my 40s. I'm not making another account just for that.\n" + 'Fb isis guarigione\n' + 'Ig Siciliankisses\n' + 'Im not talking to these sneaky people on this app or on snap.\n' + "Friends are cool but it takes a certain person to capture my interest. Know how to laugh  & don't come here with a dull personality.", "Siciliankisses guarigione"], ["Never really on here . Add me on snap @kissmyaxex2 🧁💕", "kissmyaxex2"]],
        max_tokens: 200,
        stop: ["\n", "<|endoftext|>"],
    });
    return gptResponse.data.answers[0];
}
exports.parseUsername = parseUsername;
;
//# sourceMappingURL=openai.js.map