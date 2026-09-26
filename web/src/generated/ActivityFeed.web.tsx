import React from "react";
export type ActivityItem = {
    id: string;
    user: string;
    avatar?: string;
    action: string;
    time: string;
    status: "success" | "primary" | "warning";
};
const DEFAULT_ITEMS: ActivityItem[] = [
    {
        id: "1",
        user: "Elena Rostova",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
        action: "Deployed mobile build v2.4.0",
        time: "5m ago",
        status: "success",
    },
    {
        id: "2",
        user: "Marcus Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        action: "Compiled 32 components for web target",
        time: "22m ago",
        status: "primary",
    },
    {
        id: "3",
        user: "Devon Vance",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        action: "Updated semantic color tokens",
        time: "1h ago",
        status: "warning",
    },
];
export type ActivityFeedProps = {
    items?: ActivityItem[];
    onItemPress?: (item: ActivityItem) => void;
};
export const ActivityFeed = ({ items = DEFAULT_ITEMS, onItemPress }: ActivityFeedProps = {}) => {
    return (<article style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        padding: "16px"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
          <h4>Recent Activity</h4>
          <span style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        fontWeight: "600",
        backgroundColor: "#e0e7ff",
        color: "#3730a3",
        fontSize: "13px",
        padding: "4px 10px"
    }}>Live Stream</span>
        </div>

        <hr style={{
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "8px 0",
        width: "100%"
    }}/>

        {items.map(item => <button style={{
        display: "inline-flex",
        cursor: "pointer",
        border: "none",
        backgroundColor: "transparent",
        textAlign: "left",
        paddingTop: "4px",
        paddingBottom: "4px",
        width: "100%", display: "flex"
    }} onClick={() => onItemPress?.(item)} key={item.id}>
              <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%", flex: 1
    }}>
                <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        alignItems: "center",
        flex: 1, minWidth: 0
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
        width: "32px",
        height: "32px"
    }}><img src={item.avatar} alt="Avatar" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
    }}/></figure>
                  <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flex: 1, minWidth: 0
    }}>
                    <p style={{
        fontSize: "13px",
        fontWeight: "600"
    }}>
                      {item.user}
                    </p>
                    <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>
                      {item.action}
                    </p>
                  </div>
                </div>
                <p color="neutral.400" style={{
        fontSize: "11px",
        color: "neutral.400",
        flexShrink: 0
    }}>
                  {item.time}
                </p>
              </div>
            </button>)}
      </div>
    </article>);
};
