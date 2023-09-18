import { readFile, writeFile } from 'fs/promises'

export class MessagesRepository {
  async getMessages() {
    const contents = await readFile('messages.json', 'utf-8')
    return JSON.parse(contents)
  }

  async findOne(id: string) {
    const messages = await this.getMessages()
    return messages[id]
  }

  async findAll() {
    const messages = await this.getMessages()
    return messages
  }

  async create(message : string) {
    const messages = await this.getMessages()
    const messageId = Object.keys(messages).length + 1

    messages[messageId] = {
      "content": "abc",
      "id": messageId
    }

    await writeFile('messages.json', JSON.stringify(messages))
    return messageId
  }
}