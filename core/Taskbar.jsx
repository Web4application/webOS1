import { useWindows } from "../core/window-manager/WindowProvider";

export default function Taskbar() {
  const { windows, focusWindow } = useWindows();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "40px",
        background: "#111",
        display: "flex",
        alignItems: "center",
        padding: "5px",
        gap: "10px",
      }}
    >
      {windows.map((win) => (
        <button
          key={win.id}
          onClick={() => focusWindow(win.id)}
          style={{
            background: win.isFocused ? "#4ade80" : "#333",
            color: "#fff",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          {win.title}
        </button>
      <>
  {windows.map((win) => (
    <Window key={win.id} data={win} />
  ))}

  <Taskbar />
</>
      ))}
    </div>
  );
}
