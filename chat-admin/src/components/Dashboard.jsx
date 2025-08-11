import React, { useState } from "react";

const users = [
  { id: 1, name: "Rashad", email: "rashad@example.com", online: true },
  { id: 2, name: "Aysel", email: "aysel@example.com", online: false },
  { id: 3, name: "Kamran", email: "kamran@example.com", online: true },
];

const chats = [
  { id: 1, user: "Rashad", lastMessage: "Salam, necəsiz?", unread: 2 },
  { id: 2, user: "Aysel", lastMessage: "Axşamınız xeyir!", unread: 0 },
  { id: 3, user: "Kamran", lastMessage: "Nə var, nə yox?", unread: 5 },
];

const sidebarStyle = {
  width: 240,
  background: "#2f3e46",
  color: "#fff",
  height: "100vh",
  paddingTop: 20,
  display: "flex",
  flexDirection: "column",
  gap: 20,
  boxSizing: "border-box",
};

const sidebarItemStyle = (active) => ({
  padding: "15px 20px",
  cursor: "pointer",
  backgroundColor: active ? "#354f52" : "transparent",
  borderLeft: active ? "4px solid #84a98c" : "4px solid transparent",
  fontWeight: active ? "bold" : "normal",
  transition: "all 0.3s",
});

const navbarStyle = {
  height: 60,
  background: "#52796f",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  fontWeight: "bold",
  fontSize: 20,
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const contentStyle = {
  flexGrow: 1,
  background: "#cad2c5",
  padding: 20,
  overflowY: "auto",
};

const containerStyle = {
  display: "flex",
  height: "100vh",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const thTdStyle = {
  border: "1px solid #84a98c",
  padding: "10px 15px",
  textAlign: "left",
};

const unreadBadgeStyle = {
  backgroundColor: "#ef476f",
  color: "#fff",
  borderRadius: 12,
  padding: "2px 8px",
  fontSize: 12,
  fontWeight: "bold",
};

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("users");

  return (
    <div style={containerStyle}>
      <aside style={sidebarStyle}>
        <div
          style={sidebarItemStyle(activeMenu === "users")}
          onClick={() => setActiveMenu("users")}
        >
          İstifadəçilər
        </div>
        <div
          style={sidebarItemStyle(activeMenu === "chats")}
          onClick={() => setActiveMenu("chats")}
        >
          Chat-lar
        </div>
        <div
          style={sidebarItemStyle(activeMenu === "stats")}
          onClick={() => setActiveMenu("stats")}
        >
          Statistika
        </div>
      </aside>

      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <nav style={navbarStyle}>Chat Admin Panel</nav>

        <section style={contentStyle}>
          {activeMenu === "users" && (
            <>
              <h2>İstifadəçilər</h2>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>Ad</th>
                    <th style={thTdStyle}>Email</th>
                    <th style={thTdStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td style={thTdStyle}>{user.name}</td>
                      <td style={thTdStyle}>{user.email}</td>
                      <td style={thTdStyle}>
                        <span
                          style={{
                            color: user.online ? "green" : "gray",
                            fontWeight: "bold",
                          }}
                        >
                          {user.online ? "Online" : "Offline"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {activeMenu === "chats" && (
            <>
              <h2>Aktiv Chat-lar</h2>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>İstifadəçi</th>
                    <th style={thTdStyle}>Son Mesaj</th>
                    <th style={thTdStyle}>Oxunmamış Mesajlar</th>
                  </tr>
                </thead>
                <tbody>
                  {chats.map((chat) => (
                    <tr key={chat.id}>
                      <td style={thTdStyle}>{chat.user}</td>
                      <td style={thTdStyle}>{chat.lastMessage}</td>
                      <td style={thTdStyle}>
                        {chat.unread > 0 ? (
                          <span style={unreadBadgeStyle}>{chat.unread}</span>
                        ) : (
                          "0"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {activeMenu === "stats" && (
            <>
              <h2>Statistika</h2>
              <p>Burada chat admin üçün statistikalar olacaq...</p>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
