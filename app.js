const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}

// function copyText() {

//     /* Copy text into clipboard */
//     navigator.clipboard.writeText
//         ("👉 ɪꜰ ʏᴏᴜ ɴᴇᴇᴅ ᴀɴʏ ᴍᴏᴠɪᴇ, ꜱᴇʀɪᴇꜱ & \nᴀɴɪᴍᴇ - ᴊᴜꜱᴛ ᴛʏᴘᴇ ɴᴀᴍᴇ & ɢᴇᴛ ɪɴ 3 ꜱᴇᴄᴏɴᴅ ✅\n\nᴊᴏɪɴ ᴏᴜʀ ᴍᴏᴠɪᴇ ʀᴇǫᴜᴇꜱᴛ ɢʀᴏᴜᴘ ✅\n👉 t.me/ThappyHour \n👉 t.me/ThappyHour\n\nᴊᴏɪɴ ꜰᴏʀ ɴᴇᴡ ʀᴇʟᴇᴀꜱᴇ ᴍᴏᴠɪᴇ ✅\n👉 t.me/The_Happy_Hour_Hindi\n👉 t.me/The_Happy_Hour_Hindi\n\n👉 ᴛʜᴇ ʜᴀᴘᴘʏ ʜᴏᴜʀ™ ✅");
// }

image.addEventListener('click', show);
close.addEventListener('click', hide);