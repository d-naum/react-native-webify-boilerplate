import React, { useState } from "react";
import { HeroCard } from "./generated/HeroCard.web";
import { LoginForm } from "./generated/LoginForm.web";
import { ActivityFeed } from "./generated/ActivityFeed.web";
import { MetricsDashboard } from "./generated/MetricsDashboard.web";
import { SettingsPanel } from "./generated/SettingsPanel.web";
import { OverlaysFeedbackDemo } from "./generated/OverlaysFeedbackDemo.web";
import { MediaShowcase } from "./generated/MediaShowcase.web";
import { EcommerceShowcase } from "./generated/EcommerceShowcase.web";
import { COMPONENT_METAS, type ComponentMeta } from "./componentSources";

type TabType = "rendered" | "native" | "compiled";

export function App() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [isSingleColumn, setIsSingleColumn] = useState<boolean>(false);
  const [globalTab, setGlobalTab] = useState<TabType | null>(null);
  const [cardTabs, setCardTabs] = useState<Record<string, TabType>>({
    "hero-card": "rendered",
    "ecommerce-showcase": "rendered",
    "login-form": "rendered",
    "activity-feed": "rendered",
    "metrics-dashboard": "rendered",
    "settings-panel": "rendered",
    "overlays-feedback": "rendered",
    "media-showcase": "rendered",
  });
  const [rnSubViews, setRnSubViews] = useState<Record<string, "frame" | "code">>({
    "hero-card": "frame",
    "ecommerce-showcase": "frame",
    "login-form": "frame",
    "activity-feed": "frame",
    "metrics-dashboard": "frame",
    "settings-panel": "frame",
    "overlays-feedback": "frame",
    "media-showcase": "frame",
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [interactiveAlert, setInteractiveAlert] = useState<string | null>(null);

  const handleTabChange = (componentId: string, tab: TabType) => {
    setCardTabs((prev) => ({ ...prev, [componentId]: tab }));
    setGlobalTab(null);
  };

  const handleGlobalTabChange = (tab: TabType) => {
    setGlobalTab(tab);
    const updated: Record<string, TabType> = {};
    for (const meta of COMPONENT_METAS) {
      updated[meta.id] = tab;
    }
    setCardTabs(updated);
  };

  const handleSubViewToggle = (componentId: string, subView: "frame" | "code") => {
    setRnSubViews((prev) => ({ ...prev, [componentId]: subView }));
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredComponents =
    selectedFilter === "all"
      ? COMPONENT_METAS
      : COMPONENT_METAS.filter((c) => c.id === selectedFilter);

  const renderComponentElement = (id: string) => {
    switch (id) {
      case "hero-card":
        return (
          <HeroCard
            onPrimaryAction={() =>
              setInteractiveAlert("Primary Action triggered on HeroCard")
            }
            onSecondaryAction={() =>
              setInteractiveAlert("Secondary Documentation action triggered")
            }
          />
        );
      case "ecommerce-showcase":
        return <EcommerceShowcase />;
      case "login-form":
        return (
          <LoginForm
            onSubmit={(email) =>
              setInteractiveAlert(`User authenticated: ${email}`)
            }
          />
        );
      case "activity-feed":
        return (
          <ActivityFeed
            onItemPress={(item: any) =>
              setInteractiveAlert(`Selected activity item from ${item.user}: "${item.action}"`)
            }
          />
        );
      case "metrics-dashboard":
        return <MetricsDashboard />;
      case "settings-panel":
        return <SettingsPanel />;
      case "overlays-feedback":
        return <OverlaysFeedbackDemo />;
      case "media-showcase":
        return <MediaShowcase />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Top Header */}
      <header className="header-section">
        <div className="header-left">
          <div className="brand-badge">
            <span>
              Powered by <a href="https://www.groooh.com" target="_blank" rel="noreferrer">www.groooh.com</a>
            </span>
            <span>&bull;</span>
            <span>AST Build-Time Compiler</span>
          </div>
          <h1 className="header-title">@groooh/react-native-webify</h1>
          <p className="header-subtitle">
            Universal Cross-Platform UI Architecture. Write once in React Native with design tokens.
            Compile ahead-of-time into semantic, accessible HTML5 React Web code with <strong>0 KB runtime overhead</strong>.
          </p>
        </div>

        <div className="header-right">
          <div className="author-chip">
            <span>Author:</span>
            <strong>d-naum</strong>
            <span>&bull;</span>
            <a href="https://www.groooh.com" target="_blank" rel="noreferrer">
              www.groooh.com
            </a>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="stats-grid">
        <div className="stat-box">
          <div className="stat-label">Source Format</div>
          <div className="stat-value">React Native TSX</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Web Output</div>
          <div className="stat-value">Semantic HTML5</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Runtime Overhead</div>
          <div className="stat-value">0 KB Wrapper</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Next.js & React 19</div>
          <div className="stat-value">SSR & RSC Ready</div>
        </div>
      </section>

      {/* Interactive Alert Banner */}
      {interactiveAlert && (
        <div className="alert-banner">
          <span>{interactiveAlert}</span>
          <button className="alert-close" onClick={() => setInteractiveAlert(null)}>
            ✕
          </button>
        </div>
      )}

      {/* Global Toolbar */}
      <div className="toolbar-section">
        <div className="toolbar-left">
          <span className="toolbar-label">Components:</span>
          <div className="filter-pills">
            <button
              className={`filter-btn ${selectedFilter === "all" ? "active" : ""}`}
              onClick={() => setSelectedFilter("all")}
            >
              All ({COMPONENT_METAS.length})
            </button>
            {COMPONENT_METAS.map((comp) => (
              <button
                key={comp.id}
                className={`filter-btn ${selectedFilter === comp.id ? "active" : ""}`}
                onClick={() => setSelectedFilter(comp.id)}
              >
                {comp.name}
              </button>
            ))}
          </div>
        </div>

        <div className="toolbar-right">
          <div className="global-tab-group">
            <button
              className={`global-tab-btn ${globalTab === "rendered" ? "active" : ""}`}
              onClick={() => handleGlobalTabChange("rendered")}
              title="Set all cards to Rendered view"
            >
              All Rendered
            </button>
            <button
              className={`global-tab-btn ${globalTab === "native" ? "active" : ""}`}
              onClick={() => handleGlobalTabChange("native")}
              title="Set all cards to React Native View"
            >
              All React Native
            </button>
            <button
              className={`global-tab-btn ${globalTab === "compiled" ? "active" : ""}`}
              onClick={() => handleGlobalTabChange("compiled")}
              title="Set all cards to Compiled Web Output"
            >
              All Compiled Web
            </button>
          </div>

          <button
            className="layout-toggle-btn"
            onClick={() => setIsSingleColumn(!isSingleColumn)}
            title="Toggle between 2-column grid and single focus column"
          >
            {isSingleColumn ? "2-Column Grid" : "Focus View"}
          </button>
        </div>
      </div>

      {/* Desktop Showcase Grid */}
      <main className={`desktop-grid ${isSingleColumn ? "single-column" : ""}`}>
        {filteredComponents.map((comp: ComponentMeta) => {
          const currentTab = cardTabs[comp.id] || "rendered";
          const currentSubView = rnSubViews[comp.id] || "frame";

          return (
            <article key={comp.id} className="component-card">
              {/* Card Topbar */}
              <div className="card-topbar">
                <div className="card-title-group">
                  <h2 className="card-title">{comp.name}</h2>
                  <span className="card-tag-badge">{comp.tag}</span>
                  <span className="card-category-badge">{comp.category}</span>
                </div>

                {/* The 3 Tabs */}
                <div className="card-nav-tabs">
                  <button
                    className={`card-tab-btn ${currentTab === "rendered" ? "active" : ""}`}
                    onClick={() => handleTabChange(comp.id, "rendered")}
                  >
                    Rendered (Web)
                  </button>
                  <button
                    className={`card-tab-btn ${currentTab === "native" ? "active" : ""}`}
                    onClick={() => handleTabChange(comp.id, "native")}
                  >
                    React Native View
                  </button>
                  <button
                    className={`card-tab-btn ${currentTab === "compiled" ? "active" : ""}`}
                    onClick={() => handleTabChange(comp.id, "compiled")}
                  >
                    Compiled Web Output
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body">
                {/* Tab 1: Rendered Web Output */}
                {currentTab === "rendered" && (
                  <div className="rendered-web-view">
                    {renderComponentElement(comp.id)}
                  </div>
                )}

                {/* Tab 2: React Native View (Mobile Device Mockup or RN Code) */}
                {currentTab === "native" && (
                  <div className="rn-view-container">
                    <div className="rn-view-switcher">
                      <button
                        className={`rn-subtab-btn ${currentSubView === "frame" ? "active" : ""}`}
                        onClick={() => handleSubViewToggle(comp.id, "frame")}
                      >
                        Mobile Preview
                      </button>
                      <button
                        className={`rn-subtab-btn ${currentSubView === "code" ? "active" : ""}`}
                        onClick={() => handleSubViewToggle(comp.id, "code")}
                      >
                        Source Code (.tsx)
                      </button>
                    </div>

                    {currentSubView === "frame" ? (
                      <div className="mobile-phone-frame">
                        <div className="mobile-status-bar">
                          <span>9:41</span>
                          <div className="mobile-island"></div>
                          <div className="mobile-status-icons">
                            <span>5G</span>
                            <span className="battery-pill"></span>
                          </div>
                        </div>
                        <div className="mobile-screen-content">
                          {renderComponentElement(comp.id)}
                        </div>
                        <div className="mobile-home-bar-area">
                          <div className="mobile-home-indicator"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="code-box-container" style={{ width: "100%" }}>
                        <div className="code-box-header">
                          <div className="code-box-title">
                            <span>{comp.file}.tsx</span>
                            <span style={{ color: "#64748b" }}>— React Native</span>
                          </div>
                          <button
                            className="copy-btn"
                            onClick={() => copyToClipboard(comp.rnSource, comp.id + "-rn")}
                          >
                            {copiedId === comp.id + "-rn" ? "Copied" : "Copy"}
                          </button>
                        </div>
                        <pre className="code-viewer-pre">
                          <code>{comp.rnSource}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 3: Compiled Web Output */}
                {currentTab === "compiled" && (
                  <div className="code-box-container">
                    <div className="code-box-header">
                      <div className="code-box-title">
                        <span>{comp.file}.web.tsx</span>
                        <span style={{ color: "#64748b" }}>— Semantic HTML5 JSX</span>
                      </div>
                      <button
                        className="copy-btn"
                        onClick={() => copyToClipboard(comp.webSource, comp.id + "-web")}
                      >
                        {copiedId === comp.id + "-web" ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <pre className="code-viewer-pre">
                      <code>{comp.webSource}</code>
                    </pre>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="footer-section">
        <div>
          <strong>@groooh/react-native-webify</strong> &bull; Author:{" "}
          <a href="https://www.groooh.com" target="_blank" rel="noreferrer">
            d-naum
          </a>
        </div>
        <div>
          <a href="https://www.groooh.com" target="_blank" rel="noreferrer">
            www.groooh.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
