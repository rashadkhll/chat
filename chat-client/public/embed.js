(function () {
  const scriptTag = document.currentScript;
  const urlParams = new URLSearchParams(scriptTag.src.split("?")[1]);
  const token = urlParams.get("token");

  fetch(`http://localhost:4000/defaultSettings.json?token=${token}`)
    .then((res) => res.json())
    .then((data) => {
      const settings = data[token];
      if (!settings || !settings.status) return;

      const {
        themeColor = "green",
        widgetTitle = "Live Chat",
        widgetIcon = "",
        inputPlaceholder = "Mesaj göndərin",
        buttonText = "Göndər",
        ToggleBtnPosition = "bottom left",
        online = true,
      } = settings;

      // Toggle button
      const toggleBtn = document.createElement("button");
      toggleBtn.setAttribute("aria-label", "Toggle chat");
      toggleBtn.style.position = "fixed";
      toggleBtn.style.width = "56px";
      toggleBtn.style.height = "56px";
      toggleBtn.style.borderRadius = "50%";
      toggleBtn.style.backgroundColor = themeColor;
      toggleBtn.style.border = "none";
      toggleBtn.style.boxShadow = `0 4px 12px ${themeColor}55`;
      toggleBtn.style.cursor = "pointer";
      toggleBtn.style.display = "flex";
      toggleBtn.style.alignItems = "center";
      toggleBtn.style.justifyContent = "center";
      toggleBtn.style.transition = "background-color 0.3s ease";
      toggleBtn.style.zIndex = "9999";

      if (ToggleBtnPosition === "bottom left") {
        toggleBtn.style.bottom = "24px";
        toggleBtn.style.left = "24px";
      } else {
        toggleBtn.style.bottom = "24px";
        toggleBtn.style.right = "24px";
      }

      toggleBtn.innerHTML = widgetIcon
        ? `<img src="${widgetIcon}" alt="icon" style="width:28px;height:28px;border-radius:50%"/>`
        : `<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="28" height="28" viewBox="0 0 24 24">
            <path d="M2 3h20v14H6l-4 4V3z" />
          </svg>`;

      // Chat window
      const chatWindow = document.createElement("div");
      chatWindow.style.position = "fixed";
      chatWindow.style.width = "360px";
      chatWindow.style.height = "480px";
      chatWindow.style.backgroundColor = "white";
      chatWindow.style.borderRadius = "16px";
      chatWindow.style.boxShadow = `0 16px 48px ${themeColor}55`;
      chatWindow.style.display = "none";
      chatWindow.style.flexDirection = "column";
      chatWindow.style.overflow = "hidden";
      chatWindow.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
      chatWindow.style.zIndex = "9999";

      if (ToggleBtnPosition === "bottom left") {
        chatWindow.style.bottom = "90px";
        chatWindow.style.left = "24px";
      } else {
        chatWindow.style.bottom = "90px";
        chatWindow.style.right = "24px";
      }

      // Header with icon & title
      const header = document.createElement("div");
      header.style.display = "flex";
      header.style.alignItems = "center";
      header.style.gap = "12px";
      header.style.backgroundColor = themeColor;
      header.style.color = "white";
      header.style.fontWeight = "600";
      header.style.padding = "16px 24px";
      header.style.fontSize = "18px";
      header.style.userSelect = "none";

      if (widgetIcon) {
        const iconImg = document.createElement("img");
        iconImg.src = widgetIcon;
        iconImg.alt = "icon";
        iconImg.style.width = "28px";
        iconImg.style.height = "28px";
        iconImg.style.borderRadius = "50%";
        header.appendChild(iconImg);
      }

      const titleText = document.createElement("span");
      titleText.textContent = widgetTitle;
      header.appendChild(titleText);

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

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = inputPlaceholder;
      input.style.flex = "1";
      input.style.border = "1.5px solid #ddd";
      input.style.borderRadius = "24px";
      input.style.padding = "12px 20px";
      input.style.fontSize = "14px";
      input.style.outline = "none";
      input.style.marginRight = "12px";

      const sendBtn = document.createElement("button");
      sendBtn.textContent = buttonText;
      sendBtn.disabled = true;
      sendBtn.style.backgroundColor = themeColor;
      sendBtn.style.border = "none";
      sendBtn.style.color = "white";
      sendBtn.style.padding = "10px 20px";
      sendBtn.style.fontWeight = "600";
      sendBtn.style.borderRadius = "24px";
      sendBtn.style.cursor = "default";
      sendBtn.style.opacity = "0.5";

      input.addEventListener("input", () => {
        const hasValue = input.value.trim().length > 0;
        sendBtn.disabled = !hasValue;
        sendBtn.style.opacity = hasValue ? "1" : "0.5";
        sendBtn.style.cursor = hasValue ? "pointer" : "default";
      });

      sendBtn.addEventListener("click", () => {
        const msgText = input.value.trim();
        if (!msgText) return;
        addMessage(msgText, true);
        input.value = "";
        sendBtn.disabled = true;
        sendBtn.style.opacity = "0.5";
        setTimeout(() => {
          addMessage("Təşəkkürlər! Mesajınız qeydə alındı.", false);
        }, 1000);
      });

      function addMessage(text, isUser) {
        const msg = document.createElement("div");
        msg.textContent = text;
        msg.style.padding = "10px 16px";
        msg.style.borderRadius = "20px";
        msg.style.maxWidth = "75%";
        msg.style.wordBreak = "break-word";
        msg.style.alignSelf = isUser ? "flex-end" : "flex-start";
        msg.style.backgroundColor = isUser ? themeColor : "#e5e5ea";
        msg.style.color = isUser ? "white" : "black";
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
      }

      toggleBtn.addEventListener("click", () => {
        const isOpen = chatWindow.style.display === "flex";
        chatWindow.style.display = isOpen ? "none" : "flex";
        if (!isOpen) input.focus();
      });

      inputContainer.appendChild(input);
      inputContainer.appendChild(sendBtn);
      chatWindow.appendChild(header);
      chatWindow.appendChild(messages);
      chatWindow.appendChild(inputContainer);
      document.body.appendChild(toggleBtn);
      document.body.appendChild(chatWindow);
    });
})();
