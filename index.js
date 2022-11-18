import { Client } from "photop-client";
import { onChat } from "./commands_entry.js";
import { START, PREFIX } from "./constants.js";

const client = new Client({ username: "Siri_test_bot", password: "Marley2011%%^&!" }, { logSocketMessages: false });

const noop = () => { };

client.onPost = async (post) => {
  const resetTimeout = await post.connect(60000, () => {
    post.onChat = noop; //replace post.onChat to free up memory
    if (post.text.match(START)) {
      post.chat("Bot has disconnected... Reason: inactivity")
    }
  })
  if (post.text.match(START)) {
    if (post.author.id != "624bbe3fa95b113f1038140c") {
      setTimeout(function( ) {
        resetTimeout()
        post.chat(`Test`)
      }, 2000)
    } else {
      post.chat(`Fuck off horny bitch`)
    }
  }

  post.onChat = (chat) => {
    resetTimeout();
    onChat(client, chat);
  }
  }

client.onReady = () => {
  console.log("Bot is ready!")
}
