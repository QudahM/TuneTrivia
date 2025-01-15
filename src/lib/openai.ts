import OpenAI from "openai";

// Initialize the OpenAI instance
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

// Function to generate ChatGPT responses
export const generateChatResponse = async (prompt: string) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", 
      store: true,
      messages: [
        { role: "user", content: prompt },
      ],
    });

    // Return the generated message content
    return completion.choices[0]?.message?.content || "No response generated.";
  } catch (error) {
    console.error("Error generating ChatGPT response:", error);
    throw error;
  }
};

// Pre-generated dataset
const audioDataset = [
    { url: "https://freemusicarchive.org/music/Jazz_at_Mladost_Club/Jazz_Night/Arana/", genre: "Jazz" },
    { url: "https://freemusicarchive.org/music/Jazz_at_Mladost_Club/Jazz_Night/Kurina_blues/", genre: "Jazz" },
    { url: "https://freemusicarchive.org/music/achachak/symphony-no-3-in-d-pekiwewin/andantino-1/", genre: "Classical" },
    { url: "https://freemusicarchive.org/music/achachak/symphony-no-2-in-c-paspiwin/first-movement/", genre: "Classical" },
    { url: "https://freemusicarchive.org/music/Here_Comes_A_Big_Black_Cloud/Pompeii/Death_March/", genre: "Rock" },
    { url: "https://freemusicarchive.org/music/holiznacc0/power-pop/mutant-club/", genre: "Pop" },
    { url: "https://freemusicarchive.org/music/jcbl/tales-from-underground-vol1/pinocchio/", genre: "Hip Hop" },
    { url: "https://freemusicarchive.org/music/audiorezout/lime/velvet-shadows/", genre: "Hip Hop" },
    { url: "https://freemusicarchive.org/music/beat-mekanik/single/welcome-to-fortuna/", genre: "Country" },
  ];
  
  // Function to fetch a random audio entry
  export const fetchGeneratedAudio = async () => {
    const randomAudio = audioDataset[Math.floor(Math.random() * audioDataset.length)];
    return {
      url: randomAudio.url,
      correctAnswer: randomAudio.genre,
    };
  };
  