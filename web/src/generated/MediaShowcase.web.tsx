import React, { useState } from "react";
export const MediaShowcase = () => {
    const [toastMsg, setToastMsg] = useState<string | null>(null);
    const handleAvatarUpload = () => {
        setToastMsg("Profile photo upload triggered!");
        setTimeout(() => setToastMsg(null), 3500);
    };
    const handleFileUpload = () => {
        setToastMsg("Upload dialog opened!");
        setTimeout(() => setToastMsg(null), 3500);
    };
    const sliderImages = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ];
    const accordionItems = [
        {
            id: "ast-compilation",
            title: "How does build-time compilation work?",
            content: (<p color="neutral.600" style={{
                fontSize: "13px",
                color: "neutral.600"
            }}>
          The TypeScript compiler parser walks the AST of your React Native components and replaces native primitives (View, Text, Pressable) with semantic HTML5 elements (div, p, button, article) and converts design tokens into inline CSS styles at build time.
        </p>),
        },
        {
            id: "runtime-overhead",
            title: "Is there any runtime wrapper or shim?",
            content: (<p color="neutral.600" style={{
                fontSize: "13px",
                color: "neutral.600"
            }}>
          Zero KB. Unlike react-native-web which ships an entire compatibility runtime, @groooh/react-native-webify compiles down to pure React web code with zero runtime dependencies.
        </p>),
        },
        {
            id: "tokens",
            title: "Are design tokens customized per theme?",
            content: (<p color="neutral.600" style={{
                fontSize: "13px",
                color: "neutral.600"
            }}>
          Yes. Spacing, typography, color palettes, and border radius tokens are centralized in TypeScript modules and resolved statically at compilation time.
        </p>),
        },
    ];
    return (<div style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px"
    }}>
      {toastMsg && (<div role="alert" aria-live="polite" style={{
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
        }}>{toastMsg}<button onClick={() => setToastMsg(null)} style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer", fontWeight: "bold", padding: "0 4px", marginLeft: "8px" }}>✕</button></div>)}

      {/* Main Media & Upload Card */}
      <article style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        padding: "24px"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px"
    }}>
          <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
            <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flex: 1, marginRight: 8
    }}>
              <h3>Media, Slider & Upload</h3>
              <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>
                Responsive image slider, editable avatar with upload badge, and file upload zone
              </p>
            </div>
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
    }}>Interactive</span>
          </div>

          {/* Interactive Image Slider */}
          <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    }}>
            <p color="neutral.700" style={{
        fontSize: "13px",
        fontWeight: "700",
        color: "neutral.700"
    }}>
              ImageSlider Carousel
            </p>
            <div role="region" aria-label="Image slider" style={{
        position: "relative",
        width: "100%",
        height: "200px",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#f3f4f6",
        userSelect: "none"
    }}>
      <div className="slider-track" onScroll={e => {
        const track = e.currentTarget;
        const w = track.clientWidth || 1;
        const idx = Math.round(track.scrollLeft / w);
        const root = track.parentElement;
        if (root) {
            const dots = root.querySelectorAll(".slider-dot");
            dots.forEach((dot: any, i: number) => {
                const isActive = i === idx;
                dot.style.width = isActive ? "18px" : "6px";
                dot.style.backgroundColor = isActive ? "#4f46e5" : "rgba(255, 255, 255, 0.7)";
            });
            const counter = root.querySelector(".slider-counter");
            if (counter && dots.length > 0)
                counter.textContent = (idx + 1) + " / " + dots.length;
        }
    }} style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
        scrollbarWidth: "none"
    }}>
        {(sliderImages || []).map((src: any, idx: number) => (<img key={idx} src={src} alt={"Slide " + (idx + 1)} style={{
        flex: "0 0 100%",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        scrollSnapAlign: "start",
        display: "block"
    }}/>))}
      </div>

      
        <button type="button" aria-label="Previous image" onClick={e => {
        const root = e.currentTarget.parentElement;
        const track = root?.querySelector(".slider-track") as HTMLElement;
        if (track) {
            const w = track.clientWidth || 1;
            const curIdx = Math.round(track.scrollLeft / w);
            const total = track.children.length;
            const prevIdx = (curIdx - 1 + total) % total;
            track.scrollTo({ left: prevIdx * w, behavior: "smooth" });
            const dots = root?.querySelectorAll(".slider-dot");
            dots?.forEach((dot: any, i: number) => {
                const isActive = i === prevIdx;
                dot.style.width = isActive ? "18px" : "6px";
                dot.style.backgroundColor = isActive ? "#4f46e5" : "rgba(255, 255, 255, 0.7)";
            });
            const counter = root?.querySelector(".slider-counter");
            if (counter && total > 0)
                counter.textContent = (prevIdx + 1) + " / " + total;
        } /* Interactive Image Slider */
    }} style={{
        position: "absolute",
        left: "8px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "32px",
        height: "32px",
        borderRadius: "16px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        fontWeight: "700",
        color: "#1f2937",
        boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        zIndex: 5
    }}>
          ‹
        </button>

        <button type="button" aria-label="Next image" onClick={e => {
        const root = e.currentTarget.parentElement;
        const track = root?.querySelector(".slider-track") as HTMLElement;
        if (track) {
            const w = track.clientWidth || 1;
            const curIdx = Math.round(track.scrollLeft / w);
            const total = track.children.length;
            const nextIdx = (curIdx + 1) % total;
            track.scrollTo({ left: nextIdx * w, behavior: "smooth" });
            const dots = root?.querySelectorAll(".slider-dot");
            dots?.forEach((dot: any, i: number) => {
                const isActive = i === nextIdx;
                dot.style.width = isActive ? "18px" : "6px";
                dot.style.backgroundColor = isActive ? "#4f46e5" : "rgba(255, 255, 255, 0.7)";
            });
            const counter = root?.querySelector(".slider-counter");
            if (counter && total > 0)
                counter.textContent = (nextIdx + 1) + " / " + total;
        }
    }} style={{
        position: "absolute",
        right: "8px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "32px",
        height: "32px",
        borderRadius: "16px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        fontWeight: "700",
        color: "#1f2937",
        boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        zIndex: 5
    }}>
          ›
        </button>
      

      
        <div className="slider-dots" style={{
        position: "absolute",
        bottom: "10px",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "6px",
        zIndex: 5
    }}>
          {(sliderImages || []).map((_: any, idx: number) => (<button key={idx} type="button" className="slider-dot" aria-label={"Go to slide " + (idx + 1)} onClick={e => {
        const root = e.currentTarget.closest("[role=\"region\"]");
        const track = root?.querySelector(".slider-track") as HTMLElement;
        if (track) {
            const w = track.clientWidth || 1;
            track.scrollTo({ left: idx * w, behavior: "smooth" });
            const dots = root?.querySelectorAll(".slider-dot");
            dots?.forEach((dot: any, i: number) => {
                const isActive = i === idx;
                dot.style.width = isActive ? "18px" : "6px";
                dot.style.backgroundColor = isActive ? "#4f46e5" : "rgba(255, 255, 255, 0.7)";
            });
            const counter = root?.querySelector(".slider-counter");
            if (counter && dots)
                counter.textContent = (idx + 1) + " / " + dots.length;
        }
    }} style={{
        width: idx === 0 ? "18px" : "6px",
        height: "6px",
        borderRadius: "3px",
        backgroundColor: idx === 0 ? "#4f46e5" : "rgba(255,255,255,0.7)",
        border: "none",
        cursor: "pointer",
        padding: 0,
        transition: "all 0.2s ease"
    }}/>))}
        </div>
      

      
        <div className="slider-counter" style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "#ffffff",
        fontSize: "11px",
        fontWeight: "600",
        padding: "2px 8px",
        borderRadius: "10px",
        backdropFilter: "blur(4px)",
        zIndex: 5,
        pointerEvents: "none"
    }}>
          1 / {(sliderImages || []).length}
        </div>
      
    </div>
          </div>

          <hr style={{
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "8px 0",
        width: "100%"
    }}/>

          {/* Avatar Upload & File Upload Row */}
          <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "24px",
        alignItems: "flex-start",
        flexWrap: "wrap"
    }}>
            {/* 1. Profile Avatar with Edit/Upload Icon */}
            <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        flex: 1, minWidth: 260
    }}>
              <p color="neutral.700" style={{
        fontSize: "13px",
        fontWeight: "700",
        color: "neutral.700"
    }}>
                Profile Photo (Editable Avatar)
              </p>
              <article style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        padding: "16px",
        backgroundColor: "#f9fafb"
    }}>
                <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        alignItems: "center"
    }}>
                  <div style={{
        position: "relative",
        display: "inline-flex",
        width: "72px",
        height: "72px"
    }}><figure style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        overflow: "hidden",
        backgroundColor: "#e5e7eb",
        fontWeight: "600",
        color: "#4b5563",
        width: "56px",
        height: "56px"
    }}><img src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"} alt="Sarah Connor" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
    }}/></figure><label aria-label="Upload photo" style={{
        position: "absolute",
        bottom: "-1px",
        right: "-1px",
        width: "28px",
        height: "28px",
        borderRadius: "14px",
        backgroundColor: "#4f46e5",
        border: "2px solid #ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: "0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        zIndex: "3",
        boxSizing: "border-box"
    }} onClick={e => {
        (handleAvatarUpload)?.();
    }}>
      <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => {
        (handleAvatarUpload)?.();
    }}/>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    </label></div>
                  <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flex: 1
    }}>
                    <p style={{
        fontSize: "13px",
        fontWeight: "700"
    }}>Sarah Connor</p>
                    <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>sarah.connor@example.com</p>
                    <p color="primary.600" style={{
        fontSize: "11px",
        color: "primary.600"
    }}>Click camera badge to change photo</p>
                  </div>
                </div>
              </article>
            </div>

            {/* 2. Drag & Drop File Upload */}
            <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        flex: 1, minWidth: 260
    }}>
              <p color="neutral.700" style={{
        fontSize: "13px",
        fontWeight: "700",
        color: "neutral.700"
    }}>
                FileUpload Dropzone
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      <label style={{ fontSize: "14px", fontWeight: "600", color: "#374151", display: "block" }}>Attachment Upload</label>
      <label style={{
        position: "relative",
        width: "100%",
        padding: "24px 16px",
        borderRadius: "8px",
        border: "2px dashed #cbd5e1",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxSizing: "border-box",
        transition: "border-color 0.15s ease, background-color 0.15s ease"
    }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#4f46e5"; e.currentTarget.style.backgroundColor = "#f8fafc"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#cbd5e1"; e.currentTarget.style.backgroundColor = "#ffffff"; }}>
        <input type="file" onChange={e => {
        (handleFileUpload)?.();
    }} onClick={e => {
        (handleFileUpload)?.();
    }} style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        cursor: "pointer",
        zIndex: 10
    }}/>
        <div style={{
        width: "48px",
        height: "48px",
        borderRadius: "24px",
        backgroundColor: "#eef2ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "8px"
    }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
        </div>
        <div style={{ fontSize: "14px", fontWeight: "600", color: "#1f2937", textAlign: "center" }}>
          Click to upload <span style={{ color: "#4f46e5" }}>or drag and drop</span>
        </div>
        <div style={{ fontSize: "12px", color: "#6b7280", textAlign: "center", marginTop: "2px" }}>PNG, JPG, PDF up to 10MB</div>
      </label>
      
    </div>
            </div>
          </div>

          <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
        flexWrap: "wrap"
    }}>
            <span style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "6px",
        backgroundColor: "#f3f4f6",
        color: "#374151",
        fontSize: "12px",
        padding: "4px 8px",
        border: "1px solid #e5e7eb"
    }}>Zero Runtime</span>
            <span style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "6px",
        backgroundColor: "#f3f4f6",
        color: "#374151",
        fontSize: "12px",
        padding: "4px 8px",
        border: "1px solid #e5e7eb"
    }}>TypeScript 5.9</span>
            <span style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "6px",
        backgroundColor: "#f3f4f6",
        color: "#374151",
        fontSize: "12px",
        padding: "4px 8px",
        border: "1px solid #e5e7eb"
    }}>React 19</span>
            <span style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "6px",
        backgroundColor: "#f3f4f6",
        color: "#374151",
        fontSize: "12px",
        padding: "4px 8px",
        border: "1px solid #e5e7eb"
    }}>HTML5 Semantic</span>
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
            <h4>Frequently Asked Questions</h4>
            <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%"
    }}>{accordionItems.map(item => <details key={item.id} style={{
        borderRadius: "10px",
        border: "1px solid #e5e7eb",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    }} open={["ast-compilation"].includes(item.id)}><summary style={{
        padding: "14px 18px",
        fontWeight: "600",
        cursor: "pointer",
        backgroundColor: "#f9fafb",
        color: "#111827",
        fontSize: "15px",
        userSelect: "none"
    }}>{item.title}</summary><div style={{
        padding: "16px 18px",
        borderTop: "1px solid #f3f4f6",
        backgroundColor: "#ffffff",
        color: "#4b5563",
        fontSize: "14px",
        lineHeight: "1.6"
    }}>{item.content}</div></details>)}</div>
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
        justifyContent: "flex-end"
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
        flexShrink: "0"
    }}>
              View Specification
            </button>
          </div>
        </div>
      </article>
    </div>);
};
