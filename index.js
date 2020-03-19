var TelegramBot = require('node-telegram-bot-api');

var token = '1057915012:AAFCMngT4EIHJdHO-JAleq7_LQo2R4tAGoc';
const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/start/, (msg, match) => {
    var message = 'Привiт, ' + msg.chat.last_name + ' ' + msg.chat.first_name + '!';
    bot.sendMessage(msg.chat.id, message)
    
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
 

app.listen(80);

app.get('*/*', function(req, res) {
    console.log("Lab.")
    res.send(message + ". Як справи?")
})
});
bot.onText(/\/end/, (msg, match) => {
    var message_one = 'Бувай, ' + msg.chat.last_name + ' ' + msg.chat.first_name + '!';
    bot.sendMessage(msg.chat.id, message_one)});
     
bot.onText(/\/say/, (msg,match) =>
    {let message_two = 'Чим бездоганніша  людина зовні, тим більше демонів у неї всередині. ';
        bot.sendMessage(msg.chat.id, message_two);
        } );

bot.onText(/\/date/, (msg,match) =>
        {
            var message_three = new Date();
        
            bot.sendMessage(msg.chat.id, message_three.toString());
            } );

bot.getMe().then(function(me)
        {
            console.log('Hello! My name is %s!', me.first_name);
            console.log('My id is %s.', me.id);
            console.log('And my username is @%s.', me.username);
        });

