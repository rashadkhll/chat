(function () {
  const urlObj = new URL(window.location.pathname);
  console.log(urlObj)
  const urlParams = new URLSearchParams(urlObj.search);
  console.log(urlParams)
  const token = urlParams.get("token");
  const overrideCSS = () => {
    fetch("https://live-chat-wine.vercel.app/defaultSettings.json")
      .then((res) => res.json())
      .then((data) => {});
  };
  const messagesArr = JSON.parse(localStorage.getItem("messages")) || [];
  const toggleBtn = document.createElement("button");
  toggleBtn.setAttribute("aria-label", "Toggle chat");
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "24px";
  toggleBtn.style.right = "24px";
  toggleBtn.style.width = "56px";
  toggleBtn.style.height = "56px";
  toggleBtn.style.borderRadius = "50%";
  toggleBtn.style.backgroundColor = "#0084ff";
  toggleBtn.style.border = "none";
  toggleBtn.style.boxShadow = "0 4px 12px rgba(0, 132, 255, 0.3)";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.display = "flex";
  toggleBtn.style.alignItems = "center";
  toggleBtn.style.justifyContent = "center";
  toggleBtn.style.transition = "background-color 0.3s ease";
  toggleBtn.style.zIndex = "9999";

  toggleBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="28" height="28" viewBox="0 0 24 24">
        <path d="M2 3h20v14H6l-4 4V3z" />
    </svg>
    `;

  toggleBtn.addEventListener("mouseenter", () => {
    toggleBtn.style.backgroundColor = "#006fcc";
  });
  toggleBtn.addEventListener("mouseleave", () => {
    toggleBtn.style.backgroundColor = "#0084ff";
  });

  document.body.appendChild(toggleBtn);
  // Chat pəncərəsi
  const chatWindow = document.createElement("div");
  chatWindow.style.position = "fixed";
  chatWindow.style.bottom = "90px";
  chatWindow.style.right = "24px";
  chatWindow.style.width = "360px";
  chatWindow.style.height = "480px";
  chatWindow.style.backgroundColor = "white";
  chatWindow.style.borderRadius = "16px";
  chatWindow.style.boxShadow = "0 16px 48px rgba(0, 132, 255, 0.3)";
  chatWindow.style.display = "none";
  chatWindow.style.flexDirection = "column";
  chatWindow.style.overflow = "hidden";
  chatWindow.style.fontFamily =
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  chatWindow.style.zIndex = "9999";

  // Header
  const header = document.createElement("div");
  header.textContent = "Live Chat";
  header.style.backgroundColor = "#0084ff";
  header.style.color = "white";
  header.style.fontWeight = "600";
  header.style.padding = "16px 24px";
  header.style.fontSize = "18px";
  header.style.userSelect = "none";

  // Messages area
  const messages = document.createElement("div");
  messages.style.flex = "1";
  messages.style.padding = "16px";
  messages.style.backgroundColor = "#f5f8ff";
  messages.style.overflowY = "auto";
  messages.style.display = "flex";
  messages.style.flexDirection = "column";
  messages.style.gap = "12px";

  // Input container
  const inputContainer = document.createElement("div");
  inputContainer.style.padding = "12px 16px";
  inputContainer.style.borderTop = "1px solid #ddd";
  inputContainer.style.display = "flex";
  inputContainer.style.alignItems = "center";

  // Input field
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Mesaj yazın...";
  input.style.flex = "1";
  input.style.border = "1.5px solid #ddd";
  input.style.borderRadius = "24px";
  input.style.padding = "12px 20px";
  input.style.fontSize = "14px";
  input.style.outline = "none";
  input.style.marginRight = "12px";
  input.style.transition = "border-color 0.3s ease";
  input.addEventListener("focus", () => {
    input.style.borderColor = "#0084ff";
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "#ddd";
  });

  // Send button
  const sendBtn = document.createElement("button");
  sendBtn.textContent = "Göndər";
  sendBtn.disabled = true;
  sendBtn.style.backgroundColor = "#0084ff";
  sendBtn.style.border = "none";
  sendBtn.style.color = "white";
  sendBtn.style.padding = "10px 20px";
  sendBtn.style.fontWeight = "600";
  sendBtn.style.borderRadius = "24px";
  sendBtn.style.cursor = "pointer";
  sendBtn.style.transition = "background-color 0.3s ease";
  sendBtn.style.userSelect = "none";
  sendBtn.style.opacity = "0.5";

  sendBtn.addEventListener("mouseenter", () => {
    if (!sendBtn.disabled) sendBtn.style.backgroundColor = "#006fcc";
  });
  sendBtn.addEventListener("mouseleave", () => {
    if (!sendBtn.disabled) sendBtn.style.backgroundColor = "#0084ff";
  });

  // Input change event to enable/disable send button
  input.addEventListener("input", () => {
    if (input.value.trim().length > 0) {
      sendBtn.disabled = false;
      sendBtn.style.opacity = "1";
      sendBtn.style.cursor = "pointer";
    } else {
      sendBtn.disabled = true;
      sendBtn.style.opacity = "0.5";
      sendBtn.style.cursor = "default";
    }
  });
  inputContainer.appendChild(input);
  inputContainer.appendChild(sendBtn);
  chatWindow.appendChild(header);
  chatWindow.appendChild(messages);
  chatWindow.appendChild(inputContainer);
  document.body.appendChild(chatWindow);
  toggleBtn.addEventListener("click", () => {
    if (chatWindow.style.display === "none") {
      chatWindow.style.display = "flex";
      input.focus();
    } else {
      chatWindow.style.display = "none";
    }
  });

  // Function to add message
  function addMessage(text, isUser = true) {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.padding = "10px 16px";
    msg.style.borderRadius = "20px";
    msg.style.maxWidth = "75%";
    msg.style.wordBreak = "break-word";
    msg.style.alignSelf = isUser ? "flex-end" : "flex-start";
    msg.style.backgroundColor = isUser ? "#0084ff" : "#e5e5ea";
    msg.style.color = isUser ? "white" : "black";
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  sendBtn.addEventListener("click", () => {
    const msgText = input.value.trim();
    if (!msgText) return;
    addMessage(msgText, true);
    input.value = "";
    sendBtn.disabled = true;
    sendBtn.style.opacity = "0.5";
    sendBtn.style.cursor = "default";
    console.log(msgText);
    console.log(messagesArr);
    messagesArr.push({
      msgText: msgText,
      isUser: true,
    });
    localStorage.setItem("messages", JSON.stringify(messagesArr));
    setTimeout(() => {
      addMessage("Təşəkkürlər! Mesajınız qeydə alındı.", false);
      localStorage.setItem("messages", JSON.stringify(messagesArr));
    }, 1000);
  });
  // Send on Enter
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !sendBtn.disabled) {
      sendBtn.click();
    }
  });
})();
