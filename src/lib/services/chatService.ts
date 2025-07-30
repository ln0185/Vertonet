// System message to define chatbot behavior and knowledge
const systemMessage = `You are a helpful assistant for Vertonet, a website focused on supporting non-binary individuals and women in technology in Iceland. Your main responsibilities are:

1. Provide information about upcoming events and registration
2. Help users navigate the website
3. Answer questions about Vertonet's mission and services
4. Provide information about non-binary individuals and women in technology in Iceland

Key Information About Women and Non-Binary People in Tech in Iceland:

- Statistics and Context:
  * Women make up approximately 25% of the tech workforce in Iceland
  * The country has strong legal protections for workplace equality and LGBTQ+ rights
  * Tech companies in Iceland are required to prove they provide equal pay for equal work

- Initiatives and Support:
  * Numerous organizations focus on increasing diversity in tech
  * Regular networking events and mentorship programs are available
  * Vertonet has developped a playbook for companies to become more inclusive and supportive of non-binary individuals and women in technology
  * Educational institutions provide targeted support and scholarships

- Challenges:
  * Despite high equality rankings, gender imbalance in tech persists
  * Representation in leadership positions remains lower than desired
  * Work-life balance and parental leave are important topics
  * Unconscious bias and stereotypes still affect career progression

Website Navigation:
- Home page ("/"): Overview of our mission and latest news
- About Us ("/um-okkur"): Our team and mission details
- Events ("/vidburdir"): Upcoming events and past event highlights
- Registration: Available through the "Become a member" section on the bottom of the home page

Please be friendly, professional, and inclusive in your responses. When providing navigation assistance, be specific about where users can find information on the website.

Language support:
- Always respond in the language specified by the language parameter (is for Icelandic, en for English)
- Default to Icelandic if no language is specified

Remember to:
1. Be empathetic and understanding of challenges faced by women and non-binary individuals in tech
2. Provide accurate, up-to-date information about the tech industry in Iceland
3. Encourage participation in events and community activities
4. Direct users to appropriate resources and website sections
5. Maintain a professional yet welcoming tone`;

// Helper function to detect if message is in Icelandic
function isIcelandic(message: string): boolean {
  const icelandicWords = [
    "viðburð",
    "viðburðir",
    "um okkur",
    "aðild",
    "forsíða",
    "heimasíða",
    "hæ",
    "halló",
    "sæl",
    "sæll",
    "konur",
    "kvenna",
    "kynsegin",
    "hver",
    "hvað",
    "hvernig",
    "næstu",
    "skráning",
    "skrá",
    "mig",
    "þið",
    "ég",
    "eru",
    "gerið",
    "vertonet",
    "á íslandi",
    "hjálp",
  ];

  return icelandicWords.some((word) => message.includes(word));
}

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export class ChatService {
  getFallbackResponse(
    userMessage: string,
    language: string = "is",
    messages: Message[] = []
  ): string {
    const message = userMessage.toLowerCase();
    const isIcelandicMessage = isIcelandic(userMessage);

    // Check if the previous message was about the Gangverk event
    const previousMessages = messages.slice(-2);
    const lastBotMessage =
      previousMessages.find((m) => m.role === "assistant")?.content || "";

    const isRespondingToGangverkEvent =
      lastBotMessage.includes("Fyrirtækjaheimsókn til Gangverk") ||
      lastBotMessage.includes("Company Visit to Gangverk");

    // Registration responses (only if responding to Gangverk event question)
    if (isRespondingToGangverkEvent) {
      if (
        message.includes("yes") ||
        message.includes("já") ||
        message.includes("yeah") ||
        message.includes("sure") ||
        message.includes("okay") ||
        message.includes("all right") ||
        message.includes("alright") ||
        message.includes("ok") ||
        message.includes("já takk") ||
        message.includes("já það") ||
        message.includes("auðvitað")
      ) {
        if (isIcelandicMessage) {
          return "Finndu viðburðinn á viðburðasíðunni okkar og ýttu á hann - það mun leiða þig á skráningarform.\n\nVið hlakka til að sjá þig þar!";
        }
        return "Find the event on our events page and click on it - it will take you to a registration form.\n\nWe are looking forward to see you there!";
      }

      if (
        message.includes("no") ||
        message.includes("nei") ||
        message.includes("nope") ||
        message.includes("not really") ||
        message.includes("not now") ||
        message.includes("maybe later") ||
        message.includes("ekki núna") ||
        message.includes("kannski seinna") ||
        message.includes("nei takk") ||
        message.includes("no thanks")
      ) {
        if (isIcelandicMessage) {
          return "Ekkert mál! Hvað annað get ég hjálpað þér með?";
        }
        return "No problem! What else can I help you with?";
      }
    }

    // Next event specific queries
    if (
      message.includes("next event") ||
      message.includes("næsti viðburður") ||
      message.includes("hvenær er næsti") ||
      message.includes("when is the next") ||
      message.includes("what is the next") ||
      message.includes("hvað er næsti") ||
      message.includes("næsta viðburður") ||
      message.includes("next upcoming") ||
      message.includes("komandi viðburður")
    ) {
      if (isIcelandicMessage) {
        return "Næsti viðburður okkar er **Fyrirtækjaheimsókn til Gangverk** sem fer fram **18. september 2025 klukkan 14:00** á **Ármúli 6, 108 Reykjavík**. Þetta er heimsókn til tæknifyrirtækis þar sem þú getur kynnst starfskerfinu og fólkinu sem vinnur þar. Viltu að skrá þig fyrir þennan viðburð?";
      }
      return "Our next event is **Company Visit to Gangverk** on **September 18, 2025 at 14:00** at **Ármúli 6, 108 Reykjavík**. This is a company visit to a tech company where you can learn about their work environment and meet the people who work there. Would you like to register for this event?";
    }

    // General events queries
    if (
      message.includes("event") ||
      message.includes("viðburð") ||
      message.includes("viðburðir") ||
      message.includes("best event") ||
      message.includes("upcoming") ||
      message.includes("workshop") ||
      message.includes("networking") ||
      message.includes("events and workshops") ||
      message.includes("events page") ||
      message.includes("hvaða viðburðir") ||
      message.includes("næstu viðburðir") ||
      message.includes("what events") ||
      message.includes("do you have") ||
      message.includes("hvaða viðburði") ||
      message.includes("eru ykkar")
    ) {
      if (isIcelandicMessage) {
        return "Hér er það sem þú finnur á viðburðasíðunni okkar:\n\n**Kommandi viðburðir:**\n• Netvæðingarfundir fyrir konur og kynsegin einstaklinga í tækni\n• Iðngreinar og kynningar\n\n**Hvernig á að nálgast:** Ýttu á 'Viðburðir' í valmyndinni\n\n**Hvað þú getur búist við:** Reglulegir viðburðir sérstaklega hannaðir til að styðja og tengja konur og kynsegin einstaklinga í tækniiðnaði Íslands. Viltu að skrá þig fyrir viðburð?";
      }
      return "Here's what you'll find on our Events page:\n\n**Upcoming Events:**\n• Networking meetups for women and non-binary individuals in tech\n• Industry talks and presentations\n\n**How to access:** Click on 'Events' in the navigation menu\n\n**What to expect:** Regular events specifically designed to support and connect women and non-binary individuals in Iceland's tech industry. Would you like to register for an event?";
    }

    if (
      message.includes("about") ||
      message.includes("um okkur") ||
      message.includes("mission") ||
      message.includes("team") ||
      message.includes("who are you") ||
      message.includes("about our organization") ||
      message.includes("about us page") ||
      message.includes("hver eru þið") ||
      message.includes("hvað gerið þið") ||
      message.includes("um vertonet") ||
      message.includes("who are") ||
      message.includes("what do you") ||
      message.includes("hvað er") ||
      message.includes("um ykkur")
    ) {
      if (isIcelandicMessage) {
        return "Hér er það sem þú lærir á Um okkur síðunni:\n\n**Verkefni okkar:** Að styðja konur og kynsegin einstaklinga í tækniiðnaði Íslands\n\n**Hvað við gerum:**\n• Búa til innifalda rými í tækni\n• Veita netvæðingartækifæri\n• Baráttu fyrir fjölbreytni í iðnaðinum\n\n**Liðið okkar:** Kynnstu fólkinu á bak við Vertonet\n\n**Hvernig á að finna okkur:** Ýttu á 'Um okkur' í valmyndinni";
      }
      return "Here's what you'll learn on our About Us page:\n\n**Our Mission:** Supporting women and non-binary individuals in Iceland's tech industry\n\n**What We Do:**\n• Create inclusive spaces in tech\n• Provide networking opportunities\n• Advocate for diversity in the industry\n\n**Our Team:** Meet the people behind Vertonet\n\n**How to find us:** Click on 'About Us' in the navigation menu";
    }

    if (
      message.includes("register") ||
      message.includes("aðild") ||
      message.includes("join") ||
      message.includes("become member") ||
      message.includes("membership") ||
      message.includes("how to join") ||
      message.includes("sign up") ||
      message.includes("hvernig tek ég þátt") ||
      message.includes("hvernig geri ég mig að meðlim") ||
      message.includes("skráning") ||
      message.includes("skrá mig") ||
      message.includes("how do i") ||
      message.includes("can i join") ||
      message.includes("hvernig get ég") ||
      message.includes("get ég aðild")
    ) {
      if (isIcelandicMessage) {
        return "Til að gerast meðlimur og taka þátt í samfélaginu okkar, skrunaðu niður að neðst á þessari forsíðu þar sem þú finnur skráningarformið okkar. Leitaðu að 'Gerast meðlimur' hlutanum - þú getur fyllt út formið þar til að taka þátt í samfélaginu okkar fyrir konur og kynsegin einstaklinga í tækni. Aðild er ókeypis og gefur þér aðgang að einstökum viðburðum, netvæðingartækifærum og stuðningssamfélaginu okkar!";
      }
      return "To become a member and join our community, scroll down to the bottom of this homepage where you'll find our registration form. Look for the 'Become a member' section - you can fill out the form right there to join our community of women and non-binary individuals in tech. Membership is free andgives you access to exclusive events, networking opportunities, and our supportive community!";
    }

    if (
      message.includes("home") ||
      message.includes("main page") ||
      message.includes("front page") ||
      message.includes("forsíða") ||
      message.includes("heimasíða")
    ) {
      if (isIcelandicMessage) {
        return "Þú ert á forsíðunni okkar! Hér finnur þú yfirlit yfir verkefnið okkar, nýjustu fréttir og valinn efni. Notaðu valmyndina til að kanna mismunandi hluta vefsíðunnar.";
      }
      return "You're currently on our home page! Here you'll find an overview of our mission, latest news, and featured content. Use the navigation menu to explore different sections of our website.";
    }

    // Information queries
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hæ") ||
      message.includes("halló") ||
      message.includes("sæl") ||
      message.includes("sæll")
    ) {
      if (isIcelandicMessage) {
        return "Hæ! Ég er hér til að hjálpa þér með upplýsingar um konur og kynsegin einstaklinga í tækni, sérstaklega á Íslandi. Ég get hjálpað þér að finna þig um vefsíðuna, finna viðburði og svara spurningum um samfélagið okkar. Hvernig get ég aðstoðað þig í dag?";
      }
      return "Hello! I'm here to help you with information about women and non-binary individuals in tech, especially in Iceland. I can help you navigate our website, find events, and answer questions about our community. How can I assist you today?";
    }

    if (
      message.includes("women") ||
      message.includes("konur") ||
      message.includes("kvenna") ||
      message.includes("what about women") ||
      message.includes("women in tech") ||
      message.includes("hvað er með konur") ||
      message.includes("konur í tækni")
    ) {
      if (isIcelandicMessage) {
        return "Konur eru um 25% af tæknivinnuaflinu á Íslandi. Þó að Ísland sé í 1. sæti í kynjajafnrétti heimsins, þá er enn vinna að gera í tækniiðnaðinum. Við styðjum ýmis verkefni til að auka framsetningu og veita netvæðingartækifæri. Skoðaðu viðburðasíðuna okkar fyrir komandi verkefni og netvæðingarfundi!";
      }
      return "Women make up approximately 25% of the tech workforce in Iceland. While Iceland ranks #1 in gender equality globally, there's still work to be done in the tech industry. We support various initiatives to increase representation and provide networking opportunities. Check out our Events page for upcoming workshops and networking events!";
    }

    if (
      message.includes("non-binary") ||
      message.includes("kynsegin") ||
      message.includes("kynsegin einstaklingar") ||
      message.includes("what about non-binary") ||
      message.includes("non-binary individuals") ||
      message.includes("hvað er með kynsegin") ||
      message.includes("kynsegin einstaklinga")
    ) {
      if (isIcelandicMessage) {
        return "Kynsegin einstaklingar standa frammi fyrir einstökum áskorunum í tækni. Ísland hefur sterkar lögverndar fyrir réttindi hinsegin fólks og við erum skuldbundin til að búa til innifalda rými í tæknisamfélaginu. Við bjóðum upp á stuðningsnet og úrræði fyrir kynsegin einstaklinga í tækni. Skoðaðu viðburðasíðuna okkar til að sjá komandi innifalda viðburði og verkefni.";
      }
      return "Non-binary individuals face unique challenges in tech. Iceland has strong legal protections for LGBTQ+ rights, and we're committed to creating inclusive spaces in the tech community. We offer support networks and resources for non-binary individuals in tech. Visit our Events page to see upcoming inclusive events and workshops.";
    }

    if (
      message.includes("iceland") ||
      message.includes("ísland") ||
      message.includes("á íslandi")
    ) {
      if (isIcelandicMessage) {
        return "Ísland er frábært staður fyrir konur og kynsegin einstaklinga í tækni! Landið hefur sterkar jafnréttislög, frábært vinnu-líf jafnvægi og vaxandi tækniiðnað. Margar fyrirtæki hér eru virk að vinna að aukinni fjölbreytni. Við hýsum reglulega viðburði og verkefni til að styðja þetta samfélag - skoðaðu viðburðasíðuna okkar fyrir komandi starfsemi!";
      }
      return "Iceland is a great place for women and non-binary individuals in tech! The country has strong equality laws, excellent work-life balance, and a growing tech scene. Many companies here are actively working to increase diversity. We host regular events and workshops to support this community - check out our Events page for upcoming activities!";
    }

    if (
      message.includes("help") ||
      message.includes("hjálp") ||
      message.includes("what can you do")
    ) {
      if (isIcelandicMessage) {
        return "Ég get hjálpað þér með nokkra hluti:\n\n• **Viðburðir og verkefni** - Finna komandi viðburði fyrir konur og kynsegin einstaklinga í tækni\n• **Um stofnunina okkar** - Læra um verkefnið okkar og liðið\n• **Taka þátt í samfélaginu okkar** - Skráningarformið er neðst á þessari forsíðu\n• **Tækniiðnaður á Íslandi** - Tölfræði og upplýsingar um konur og kynsegin einstaklinga í tækni\n• **Vefsíðunavigation** - Hjálpa þér að finna sérstakar upplýsingar á síðunni okkar\n\nSpurðu mig bara um einhvern af þessum efnum og ég mun gefa þér sérstakar upplýsingar og leiðbeina þér á réttar síður!";
      }
      return "I can help you with several things:\n\n• **Events & Workshops** - Find upcoming events for women and non-binary individuals in tech\n• **About Our Organization** - Learn about our mission and team\n• **Join Our Community** - Registration form is at the bottom of this homepage\n• **Tech Industry in Iceland** - Statistics and information about women and non-binary individuals in tech\n• **Website Navigation** - Help you find specific information on our site\n\nJust ask me about any of these topics and I'll provide specific information and guide you to the right pages!";
    }

    // Default response - simple acknowledgment without guidance
    if (isIcelandicMessage) {
      return "Ég skil ekki alveg hvað þú ert að spyrja um. Getur þú sagt það með öðrum orðum?";
    }
    return "I'm not quite sure what you're asking. Could you rephrase that?";
  }

  async processMessage(
    messages: Message[],
    language: string = "is"
  ): Promise<Message> {
    const lastUserMessage = messages.filter((m) => m.role === "user").pop();
    if (!lastUserMessage) {
      throw new Error("No user message found");
    }

    const responseContent = this.getFallbackResponse(
      lastUserMessage.content,
      language,
      messages
    );

    return {
      role: "assistant",
      content: responseContent,
    };
  }
} 