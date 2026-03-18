import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";
import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
}
export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
}
import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
}

import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
}
import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
}
}
import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
}
import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
}
import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
}
import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
}
const saveState = async (state) => {
  await fetch("/save", {
    method: "POST",
    body: JSON.stringify(state),
    headers: { "Content-Type": "application/json" }
  });
};
let users = [];

app.post("/login", (req, res) => {
  const { username } = req.body;

  let user = users.find(u => u.username === username);
  if (!user) {
    user = { username, files: [] };
    users.push(user);
  }

  res.json(user);
});
export default {
  name: "Calculator",
  permissions: ["ui"],

  init(os) {
    os.registerApp({
      id: "calculator",
      launch: () => {
        os.createWindow({
          title: "Calculator",
          content: <div>Calc App</div>
        });
      }
    });
  }
};const plugins = [];

export const registerPlugin = (plugin) => {
  plugins.push(plugin);
  plugin.init(osAPI);
};
app.post("/ai", async (req, res) => {
  const { prompt } = req.body;

  // Example (pseudo AI logic)
  if (prompt.includes("open notes")) {
    return res.json({ action: "OPEN_APP", app: "notes" });
  }

  if (prompt.includes("open browser")) {
    return res.json({ action: "OPEN_APP", app: "browser" });
  }

  res.json({ action: "UNKNOWN" });
});
