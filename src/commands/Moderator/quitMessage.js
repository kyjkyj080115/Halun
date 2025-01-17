const Command = require("../../structures/Command")

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "퇴장메시지",
      aliases: ["퇴장메세지", "퇴장메시지"],
      description: "유저 퇴장 메시지를 변경해요.",
      category: "관리자",
    })
  }

  async run(message, args) {
    if (this.owners.some((oid) => message.author.id.includes(oid))) {
      if (args.length < 1)
        return message.reply("`하룬아 퇴장메시지 < 메시지 >` 가 올바른 명령어에요.")
      await this.client.knex("entry").update({ quit: args.join(" ") })
      message.reply("완료되었습니다!")
    }
  }
}
