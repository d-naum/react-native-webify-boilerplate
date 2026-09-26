import React, { useState } from "react";
export const OverlaysFeedbackDemo = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [toastVisible, setToastVisible] = useState(false);
    return (<article style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        padding: "24px"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    }}>
          <h3>Overlays & Feedback</h3>
          <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>
            Interactive modal dialogs, bottom sheets, spinners, and toast alerts
          </p>
        </div>

        <div role="alert" style={{
        borderRadius: "8px",
        padding: "12px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        backgroundColor: "#eff6ff",
        color: "#1e40af"
    }}>
          <p color="neutral.700" style={{
        fontSize: "11px",
        color: "neutral.700"
    }}>
            On React Native, overlays use hardware-accelerated Animated transitions. On Web, they compile to semantic HTML5 dialogs and accessible popovers.
          </p>
        </div>

        <hr style={{
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "8px 0",
        width: "100%"
    }}/>

        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    }}>
          <p style={{
        fontSize: "13px",
        fontWeight: "600"
    }}>Interactive Triggers</p>
          <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        flexWrap: "wrap"
    }}>
            <button onClick={() => setModalOpen(true)} style={{
        backgroundColor: "transparent",
        color: "#1f2937",
        border: "1px solid #d1d5db",
        padding: "10px 16px",
        fontSize: "16px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: "600",
        borderRadius: "8px",
        whiteSpace: "nowrap",
        flexShrink: "0"
    }}>
              Open Dialog Modal
            </button>

            <button onClick={() => setSheetOpen(true)} style={{
        backgroundColor: "transparent",
        color: "#1f2937",
        border: "1px solid #d1d5db",
        padding: "10px 16px",
        fontSize: "16px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: "600",
        borderRadius: "8px",
        whiteSpace: "nowrap",
        flexShrink: "0"
    }}>
              Open Bottom Sheet
            </button>

            <button onClick={() => setToastVisible(true)} style={{
        backgroundColor: "transparent",
        color: "#6366f1",
        border: "none",
        padding: "10px 16px",
        fontSize: "16px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: "600",
        borderRadius: "8px",
        whiteSpace: "nowrap",
        flexShrink: "0"
    }}>
              Trigger Toast Notification
            </button>
          </div>
        </div>

        <hr style={{
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "8px 0",
        width: "100%"
    }}/>

        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    }}>
          <p style={{
        fontSize: "13px",
        fontWeight: "600"
    }}>Loading Spinners</p>
          <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }}>
            <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center"
    }}>
              <div role="status" aria-label="Loading" style={{
        display: "inline-block",
        borderRadius: "50%",
        border: "2px solid #e2e8f0",
        borderTopColor: "#0f172a",
        animation: "rn-spin 0.8s linear infinite",
        width: "16px",
        height: "16px"
    }}/>
              <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>16px</p>
            </div>
            <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center"
    }}>
              <div role="status" aria-label="Loading" style={{
        display: "inline-block",
        borderRadius: "50%",
        border: "2px solid #e2e8f0",
        borderTopColor: "#0f172a",
        animation: "rn-spin 0.8s linear infinite",
        width: "24px",
        height: "24px"
    }}/>
              <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>24px</p>
            </div>
            <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center"
    }}>
              <div role="status" aria-label="Loading" style={{
        display: "inline-block",
        borderRadius: "50%",
        border: "2px solid #e2e8f0",
        borderTopColor: "#0f172a",
        animation: "rn-spin 0.8s linear infinite",
        width: "32px",
        height: "32px"
    }}/>
              <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>36px</p>
            </div>
          </div>
        </div>

        {/* Modal Dialog */}
        {modalOpen && <div role="dialog" aria-modal="true" style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(4px)"
    }} onClick={() => setModalOpen(false)}><div onClick={e => e.stopPropagation()} style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        maxWidth: "480px",
        width: "90%",
        maxHeight: "85vh",
        overflowY: "auto",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column"
    }}><div style={{
        padding: "16px 20px",
        borderBottom: "1px solid #f3f4f6",
        fontSize: "18px",
        fontWeight: "700",
        color: "#111827",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }}><span>Confirm Component Deployment</span><button onClick={() => setModalOpen(false)} style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "18px",
        color: "#9ca3af",
        padding: "4px"
    }}>✕</button></div><div style={{
        padding: "20px"
    }}>
          <div style={{
        display: "flex",
        flexDirection: "column",
        padding: "8px",
        gap: "16px"
    }}>
            <p color="neutral.600" style={{
        color: "neutral.600"
    }}>
              Are you sure you want to deploy the compiled AST artifacts to the production web bundle? This process has zero runtime overhead.
            </p>
            <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        justifyContent: "flex-end",
        flexWrap: "wrap"
    }}>
              <button onClick={() => setModalOpen(false)} style={{
        backgroundColor: "transparent",
        color: "#6366f1",
        border: "none",
        padding: "6px 12px",
        fontSize: "14px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: "600",
        borderRadius: "8px",
        whiteSpace: "nowrap",
        flexShrink: "0"
    }}>
                Cancel
              </button>
              <button onClick={() => {
            setModalOpen(false);
            setToastVisible(true);
        }} style={{
        backgroundColor: "#6366f1",
        color: "#ffffff",
        border: "none",
        padding: "6px 12px",
        fontSize: "14px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: "600",
        borderRadius: "8px",
        whiteSpace: "nowrap",
        flexShrink: "0"
    }}>
                Confirm Deploy
              </button>
            </div>
          </div>
        </div></div></div>}

        {/* Bottom Sheet */}
        {sheetOpen && <div role="dialog" aria-modal="true" style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(4px)"
    }} onClick={() => setSheetOpen(false)}><div onClick={e => e.stopPropagation()} style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        maxWidth: "480px",
        width: "90%",
        maxHeight: "85vh",
        overflowY: "auto",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column"
    }}><div style={{
        padding: "16px 20px",
        borderBottom: "1px solid #f3f4f6",
        fontSize: "18px",
        fontWeight: "700",
        color: "#111827",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }}><span>Quick Actions Menu</span><button onClick={() => setSheetOpen(false)} style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "18px",
        color: "#9ca3af",
        padding: "4px"
    }}>✕</button></div><div style={{
        padding: "20px"
    }}>
          <div style={{
        display: "flex",
        flexDirection: "column",
        padding: "8px",
        gap: "16px"
    }}>
            <p color="neutral.600" style={{
        fontSize: "13px",
        color: "neutral.600"
    }}>
              Select an action to perform on this component tree:
            </p>
            <button onClick={() => setSheetOpen(false)} style={{
        backgroundColor: "transparent",
        color: "#1f2937",
        border: "1px solid #d1d5db",
        padding: "6px 12px",
        fontSize: "14px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: "600",
        borderRadius: "8px",
        whiteSpace: "nowrap",
        flexShrink: "0"
    }}>
              Export AST JSON
            </button>
            <button onClick={() => setSheetOpen(false)} style={{
        backgroundColor: "transparent",
        color: "#1f2937",
        border: "1px solid #d1d5db",
        padding: "6px 12px",
        fontSize: "14px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: "600",
        borderRadius: "8px",
        whiteSpace: "nowrap",
        flexShrink: "0"
    }}>
              Copy JSX Web Code
            </button>
            <button onClick={() => setSheetOpen(false)} style={{
        backgroundColor: "transparent",
        color: "#6366f1",
        border: "none",
        padding: "6px 12px",
        fontSize: "14px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: "600",
        borderRadius: "8px",
        whiteSpace: "nowrap",
        flexShrink: "0"
    }}>
              Close Menu
            </button>
          </div>
        </div></div></div>}

        {/* Toast Notification */}
        {toastVisible && <div role="alert" aria-live="polite" style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        backgroundColor: "#16a34a",
        color: "#ffffff",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.15)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "12px"
    }}>AST compiled and deployed with 0 runtime errors!<button onClick={() => setToastVisible(false)} style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer", fontWeight: "bold", padding: "0 4px", marginLeft: "8px" }}>✕</button></div>}
      </div>
    </article>);
};
