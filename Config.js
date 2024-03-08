const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['254102028964']
global.ownername = "Merseyside"//owner name
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub:Mersey-side"
global.location = "Kenya"

global.botname = 'PRIDE OF MERSEYSIDE' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘AʏᴜSʜ✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'Maria MD'
//console view/theme
global.themeemoji = '♟💫⭐🌠✨♟'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*PRIDE OF MERSEYSIDE*\n\n*♟💫⭐🌠✨♟ Bot link:* \nhttps://https://github.com/Mersey-side/Maria-MD.git\n',
    prem: '*yooh hapa hauwezani🙌 *',
    admin: '*This feature can be used by admin only⚠⚠⚠*',
    botAdmin: '*This feature can only be used when the bot is a group admin⚠⚠⚠* ',
    owner: '*This feature can be used by owner only⚠⚠⚠*',
    group: '*This feature is only for groups⚠⚠⚠*',
    private: '*This feature is only for private chats⚠⚠⚠*',
    wait: '*In process...😂😂😂* ',    
    error: '*Error!😂😂😂*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
