import React, { useState } from "react";
export const MetricsDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [tags, setTags] = useState(["TypeScript", "React Native", "Compiler", "AST", "Zero Runtime"]);
    const [isLoading, setIsLoading] = useState(false);
    const teamMembers = [
        { name: "Sarah Connor" },
        { name: "John Matrix" },
        { name: "Ellen Ripley" },
        { name: "Rick Deckard" },
        { name: "Marty McFly" },
    ];
    const handleRemoveTag = (tagToRemove: string) => {
        setTags((prev) => prev.filter((t) => t !== tagToRemove));
    };
    const handleSimulateReload = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 800);
    };
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
        {/* Header with Title and Team */}
        <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }}>
          <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flex: 1, minWidth: 160
    }}>
            <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        alignItems: "center",
        flexWrap: "wrap"
    }}>
              <h4>System Performance</h4>
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
    }}>Healthy</span>
            </div>
            <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>
              Live telemetry & build analytics
            </p>
          </div>
          <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }}/>
        </div>

        <hr style={{
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "8px 0",
        width: "100%"
    }}/>

        {/* Tab Navigation */}
        <div />

        {/* Content based on active tab */}
        {isLoading ? (<div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        }}>
            <div aria-busy="true" style={{
            backgroundColor: "#e5e7eb",
            borderRadius: "4px",
            animation: "rn-pulse 1.5s ease-in-out infinite",
            height: "20px"
        }}/>
            <div aria-busy="true" style={{
            backgroundColor: "#e5e7eb",
            borderRadius: "4px",
            animation: "rn-pulse 1.5s ease-in-out infinite",
            height: "40px"
        }}/>
            <div aria-busy="true" style={{
            backgroundColor: "#e5e7eb",
            borderRadius: "4px",
            animation: "rn-pulse 1.5s ease-in-out infinite",
            height: "20px"
        }}/>
          </div>) : activeTab === "overview" ? (<div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
        }}>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px"
        }}>
              <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
                <p style={{
            fontSize: "13px",
            fontWeight: "600"
        }}>
                  Memory Utilization
                </p>
                <p color="neutral.500" style={{
            fontSize: "13px",
            color: "neutral.500"
        }}>
                  42.8 MB / 128 MB
                </p>
              </div>
              <progress value={34} max="100" style={{
            width: "100%",
            height: "8px",
            borderRadius: "4px"
        }}/>
            </div>

            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px"
        }}>
              <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
                <p style={{
            fontSize: "13px",
            fontWeight: "600"
        }}>
                  AST Transformation Rate
                </p>
                <p color="success.600" style={{
            fontSize: "13px",
            color: "success.600"
        }}>
                  98.4% optimal
                </p>
              </div>
              <progress value={98} max="100" style={{
            width: "100%",
            height: "8px",
            borderRadius: "4px"
        }}/>
            </div>
          </div>) : activeTab === "metrics" ? (<div style={{
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
              <p style={{
            fontSize: "13px"
        }}>Transform Duration</p>
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
        }}>4.2ms avg</span>
            </div>
            <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
              <p style={{
            fontSize: "13px"
        }}>Bundle Size Impact</p>
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
        }}>0 KB (Zero Runtime)</span>
            </div>
            <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
              <p style={{
            fontSize: "13px"
        }}>Cache Hit Ratio</p>
              <span style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            fontWeight: "600",
            backgroundColor: "#fef3c7",
            color: "#92400e",
            fontSize: "13px",
            padding: "4px 10px"
        }}>87.5%</span>
            </div>
          </div>) : (<div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        }}>
            <p color="neutral.500" style={{
            fontSize: "11px",
            color: "neutral.500"
        }}>
              Active tags (click ✕ to remove):
            </p>
            <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
            flexWrap: "wrap"
        }}>
              {tags.map((t) => (<span key={t} style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "6px",
                backgroundColor: "#f3f4f6",
                color: "#374151",
                fontSize: "12px",
                padding: "4px 8px",
                border: "1px solid #e5e7eb"
            }}>{t}</span>))}
            </div>
          </div>)}

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
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }}>
          <button onClick={() => setTags(["TypeScript", "React Native", "Compiler", "AST", "Zero Runtime"])} style={{
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
            Reset Tags
          </button>
          <button onClick={handleSimulateReload} style={{
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
            Refresh Telemetry
          </button>
        </div>
      </div>
    </article>);
};
