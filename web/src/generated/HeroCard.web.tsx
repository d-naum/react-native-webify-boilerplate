import React from "react";
export type HeroCardProps = {
    title?: string;
    subtitle?: string;
    authorName?: string;
    badgeText?: string;
    onPrimaryAction?: () => void;
    onSecondaryAction?: () => void;
};
export const HeroCard = ({ title = "Universal Cross-Platform Architecture", subtitle = "Write components once with design tokens. Deploy natively on iOS & Android, compile to semantic HTML on Web.", authorName = "Groooh Engineering", badgeText = "Production Ready", onPrimaryAction, onSecondaryAction, }: HeroCardProps) => {
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
        flexDirection: "row",
        gap: "8px",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
          <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        alignItems: "center",
        flex: 1, marginRight: 8
    }}>
            <figure style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        overflow: "hidden",
        backgroundColor: "#e5e7eb",
        fontWeight: "600",
        color: "#4b5563",
        width: "40px",
        height: "40px"
    }}><span style={{
        color: "#374151",
        fontWeight: "700",
        fontSize: "15px",
        lineHeight: "1"
    }}>{(((authorName) || "?").trim().split(/\s+/).map((p: any) => p[0] || "").slice(0, 2).join("").toUpperCase() || "?")}</span></figure>
            <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flex: 1
    }}>
              <p style={{
        fontWeight: "700",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }}>{authorName}</p>
              <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }}>Cross-Platform UI Framework</p>
            </div>
          </div>
          <span style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        fontWeight: "600",
        backgroundColor: "#dcfce7",
        color: "#166534",
        fontSize: "13px",
        padding: "4px 10px"
    }}>{badgeText}</span>
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
          <h3>{title}</h3>
          <p color="neutral.600" style={{
        color: "neutral.600"
    }}>{subtitle}</p>
        </div>

        <hr style={{
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "8px 0",
        width: "100%"
    }}/>

        <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        flexWrap: "wrap",
        paddingTop: 4
    }}>
          <button style={{
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
        flexShrink: "0",
        flexGrow: 1
    }} onClick={onSecondaryAction}>
            Explore Docs
          </button>
          <button style={{
        backgroundColor: "#6366f1",
        color: "#ffffff",
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
        flexShrink: "0",
        flexGrow: 1
    }} onClick={onPrimaryAction}>
            Get Started
          </button>
        </div>
      </div>
    </article>);
};
