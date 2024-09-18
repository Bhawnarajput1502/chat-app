const harshSelectorBtn = document.querySelector("#harsh-selector");
const rohanSelectorBtn = document.querySelector("#rohan-selector");
const chatHeader = document.querySelector(".chat-header");
const chatMessage = document.querySelector(".chat-message");
const chatInputForm = document.querySelector(".chat-input-form");
const chatInput = document.querySelector(".chat-input");
const sendBtn = document.querySelector(".send-button");
const clearChatBtn = document.querySelector(".clear-button");

//  const messages = JSON.parse(localStorage.getItem('messages')) ||[]
const createChatMessageElement = () =>`
<div class="message ${message.sender === 'Harsh'? 'blue-bg' : 'gray-bg'}">
<div class="message-sender">${message.sender}</div>
<div class="message-text">${message.text}</div>
<div class="message-time">${message.time}</div>
</div>  
`
// window.onload = () =>{
//   messages.forEach((message) =>{
//     chatMessage.inerHTML += createChatMessageElement(message)
//   })
// }
let messageSender = 'Harsh';

const updateMessageSender = (name) =>{ 
  messageSender = name
  chatHeader.innerText = `${messageSender} chatting.....`;
  chatInput.placeholder =`Type here, ${messageSender}.....`;

  if(name === 'Harsh'){
    harshSelectorBtn.classList.add('active-person') ;
    rohanSelectorBtn.classList.remove('active-person');
  }
  if(name === 'Bhawna'){
    rohanSelectorBtn.classList.add('active-person');
    harshSelectorBtn.classList.remove('active-person') ;
    
  }
  chatInput.focus()
}

harshSelectorBtn.onclick =() =>updateMessageSender('Harsh');
rohanSelectorBtn.onclick =() =>updateMessageSender('Rohan');

const sendMessage = (e) =>{
  e.peventDefault()

  const time = new Date().toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', hour12: true})
  const message ={
    sender: messageSender,
    text: chatInput.value,
    time,
   } 
  
//   messages.push(message)
//   localStorage.setItem('messages',JSON.stringify(messages))
  chatMessage.innerHTML += createChatMessageElement(message)

//   chatInputForm.reset()
//   chatMessage.scrollTop = chatMessage.scrollHeight
}
chatInputForm.addEventListener('submit',sendMessage)
// clearChatBtn.addEventListener('click', () =>{
//   localStorage.clear()
//   chatMessage.innerHTML = ''
// })