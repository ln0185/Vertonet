# Free AI Chatbot for School Project

## Overview

This chatbot uses **Hugging Face Inference API** which is completely free for school projects! No API keys or payment required.

## How It Works

### 1. **Primary: Hugging Face Inference API**

- Uses Microsoft's DialoGPT-medium model
- Free tier with generous limits
- No API key required for basic usage
- Runs in the cloud (no local setup needed)

### 2. **Fallback: Rule-Based Responses**

- If the API is unavailable, the chatbot uses intelligent fallback responses
- Covers common questions about women and non-binary individuals in tech in Iceland
- Supports both English and Icelandic

## Features

✅ **Completely Free** - No payment required  
✅ **No API Keys** - Works out of the box  
✅ **Bilingual Support** - English and Icelandic  
✅ **Smart Fallbacks** - Works even when API is down  
✅ **School Project Ready** - Perfect for academic use

## How to Use

1. **Start your development server:**

   ```bash
   npm run dev
   ```

2. **Open your website** and click the chatbot icon in the bottom right

3. **Start chatting!** The chatbot will:
   - Answer questions about women and non-binary individuals in tech
   - Provide information about Iceland's tech scene
   - Help navigate your website
   - Support both English and Icelandic

## Technical Details

### API Endpoint

- **URL:** `https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium`
- **Method:** POST
- **Authentication:** None required (free tier)

### Fallback System

If the Hugging Face API fails, the chatbot automatically switches to rule-based responses covering:

- Greetings
- Women in tech statistics
- Non-binary support
- Events information
- Registration help
- Iceland-specific information

## Alternative Free Options

If you want to explore other free AI options:

### 1. **Ollama (Local)**

```bash
# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Run a model locally
ollama run llama2
```

### 2. **LocalAI**

- Another local AI solution
- Good for privacy-focused projects

### 3. **Hugging Face with API Key (Optional)**

- Get a free API key from [Hugging Face](https://huggingface.co/settings/tokens)
- Add to your `.env.local` file:

  ```env
  HUGGINGFACE_API_KEY=your_key_here
  ```

- This gives you higher rate limits

## Customization

You can easily customize the chatbot by:

1. **Changing the AI model** in `src/app/api/chat/route.ts`
2. **Adding more fallback responses** in the `getFallbackResponse` function
3. **Modifying the system message** to change the chatbot's personality
4. **Adding new language support** in the translation files

## Perfect for School Projects

This setup is ideal for school projects because:

- ✅ No cost involved
- ✅ No complex setup required
- ✅ Reliable and always works
- ✅ Easy to demonstrate and explain
- ✅ Professional-looking results

Your chatbot is now ready to use! 🎉
