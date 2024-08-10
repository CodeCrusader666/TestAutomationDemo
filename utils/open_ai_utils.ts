import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
})

export const askChatGpt = async prompt => {
  return await client.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  })
}
