(function () {
  const scriptTag = document.currentScript;
  const urlParams = new URLSearchParams(scriptTag.src.split("?")[1]);
  const token = urlParams.get("token");
  const BASE_URL = urlParams.get("baseUrl");
  if (!token) return;

  fetch(`${BASE_URL}/defaultSettings.json?token=${token}`)
    .then((res) => res.json())
    .then((data) => {
      const settings = data[token];
      if (!settings || !settings.status) return;

      const {
        themeColor = "#007bff",
        widgetTitle = "Live Chat",
        widgetIcon = "",
        inputPlaceholder = "Mesaj yazın...",
        buttonText = "Göndər",
        ToggleBtnPosition = "bottom right",
        agent = {},
      } = settings;

      // === CREATE ELEMENT HELPER ===
      function createEl(tag, styles = {}, innerHTML = "") {
        const el = document.createElement(tag);
        Object.assign(el.style, styles);
        if (innerHTML) el.innerHTML = innerHTML;
        return el;
      }

      // === TOGGLE BUTTON ===
      const toggleBtn = createEl("button", {
        position: "fixed",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: themeColor,
        border: "none",
        boxShadow: `0 4px 12px ${themeColor}55`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.3s ease",
        zIndex: "9999",
        ...(ToggleBtnPosition.includes("bottom")
          ? { bottom: "24px" }
          : { top: "24px" }),
        ...(ToggleBtnPosition.includes("left")
          ? { left: "24px" }
          : { right: "24px" }),
      });
      toggleBtn.innerHTML = widgetIcon
        ? `<img src="${widgetIcon}" alt="icon" style="width:28px;height:28px;border-radius:50%"/>`
        : `<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="28" height="28" viewBox="0 0 24 24">
            <path d="M2 3h20v14H6l-4 4V3z" />
          </svg>`;

      // === CHAT WINDOW ===
      const chatWindow = createEl("div", {
        position: "fixed",
        width: "360px",
        height: "480px",
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: `0 16px 48px ${themeColor}55`,
        display: "none",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        zIndex: "9999",
        ...(ToggleBtnPosition.includes("bottom")
          ? { bottom: "90px" }
          : { top: "90px" }),
        ...(ToggleBtnPosition.includes("left")
          ? { left: "24px" }
          : { right: "24px" }),
      });

      // === HEADER ===
      const header = createEl("div", {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        backgroundColor: themeColor,
        color: "white",
        fontWeight: "600",
        padding: "16px 24px",
        fontSize: "18px",
        userSelect: "none",
        flexShrink: "0",
      });

      // Icon
      if (widgetIcon) {
        const iconImg = createEl("img", {
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          objectFit: "cover",
        });
        iconImg.src = widgetIcon;
        header.appendChild(iconImg);
      }

      // Agent info
      const agentInfo = createEl("div", {
        display: "flex",
        flexDirection: "column",
      });

      const nameRow = createEl("div", {
        display: "flex",
        alignItems: "center",
        gap: "6px",
      });
      const nameText = createEl("span", { fontWeight: "700" });
      nameText.textContent = agent.name || widgetTitle;

      if (agent.online) {
        const statusDot = createEl("span", {
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "limegreen",
          boxShadow: "0 0 4px rgba(0,0,0,0.3)",
        });
        nameRow.appendChild(statusDot);
      }
      nameRow.appendChild(nameText);

      agentInfo.appendChild(nameRow);
      if (agent.profession) {
        const professionText = createEl("span", {
          fontSize: "13px",
          fontWeight: "400",
          opacity: "0.9",
        });
        professionText.textContent = agent.profession;
        agentInfo.appendChild(professionText);
      }
      header.appendChild(agentInfo);

      // === MESSAGES AREA ===
      const messages = createEl("div", {
        flex: "1",
        padding: "16px",
        backgroundColor: "#f5f8ff",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      });

      // === INPUT AREA ===
      const inputContainer = createEl("div", {
        padding: "12px 16px",
        borderTop: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
      });

      const input = createEl("input", {
        flex: "1",
        border: "1.5px solid #ddd",
        borderRadius: "24px",
        padding: "12px 20px",
        fontSize: "14px",
        outline: "none",
        marginRight: "12px",
      });
      input.type = "text";
      input.placeholder = inputPlaceholder;

      const sendBtn = createEl("button", {
        backgroundColor: themeColor,
        border: "none",
        color: "white",
        padding: "10px 20px",
        fontWeight: "600",
        borderRadius: "24px",
        cursor: "default",
        opacity: "0.5",
      });
      sendBtn.textContent = buttonText;
      sendBtn.disabled = true;

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
        const msg = createEl("div", {
          padding: "10px 16px",
          borderRadius: "20px",
          maxWidth: "75%",
          wordBreak: "break-word",
          alignSelf: isUser ? "flex-end" : "flex-start",
          backgroundColor: isUser ? themeColor : "#e5e5ea",
          color: isUser ? "white" : "black",
        });
        msg.textContent = text;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
      }

      toggleBtn.addEventListener("click", () => {
        const isOpen = chatWindow.style.display === "flex";
        chatWindow.style.display = isOpen ? "none" : "flex";
        if (!isOpen) input.focus();
      });

      // === Assemble ===
      inputContainer.appendChild(input);
      inputContainer.appendChild(sendBtn);
      chatWindow.appendChild(header);
      chatWindow.appendChild(messages);
      chatWindow.appendChild(inputContainer);
      document.body.appendChild(toggleBtn);
      document.body.appendChild(chatWindow);
    });
})();
