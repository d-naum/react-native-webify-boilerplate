import React, { useState } from "react";
export const EcommerceShowcase = () => {
    const [quantity, setQuantity] = useState(1);
    const [userRating, setUserRating] = useState(4.8);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const unitPrice = 279.99;
    const originalUnitPrice = 349.99;
    const totalPrice = (unitPrice * quantity).toFixed(2);
    const totalSavings = ((originalUnitPrice - unitPrice) * quantity).toFixed(2);
    const handleAddToCart = () => {
        setToastMessage(`Added ${quantity}x Premium Audio Pro to cart ($${totalPrice})`);
        setTimeout(() => setToastMessage(null), 3500);
    };
    return (<div style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px"
    }}>
      {/* Toast Notification */}
      {toastMessage && (<div role="alert" aria-live="polite" style={{
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
        }}>{toastMessage}<button onClick={() => setToastMessage(null)} style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer", fontWeight: "bold", padding: "0 4px", marginLeft: "8px" }}>✕</button></div>)}

      {/* Main E-Commerce Card */}
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
        gap: "16px"
    }}>
          {/* Header */}
          <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
            <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    }}>
              <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        alignItems: "center"
    }}>
                <h3>E-Commerce Primitives</h3>
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
    }}>New</span>
              </div>
              <p color="neutral.500" style={{
        fontSize: "13px",
        color: "neutral.500"
    }}>
                Production-ready e-commerce elements with zero runtime overhead on web
              </p>
            </div>
          </div>

          <hr style={{
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "8px 0",
        width: "100%"
    }}/>

          {/* Product & Interactive Controls Layout */}
          <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        alignItems: "flex-start",
        flexWrap: "wrap"
    }}>
            {/* 1. Full Product Card */}
            <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        flex: 1, minWidth: 280
    }}>
              <p color="neutral.700" style={{
        fontSize: "13px",
        fontWeight: "700",
        color: "neutral.700"
    }}>
                ProductCard Component
              </p>
              <article style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "12px"
    }}><div style={{ position: "relative", width: "100%", height: "180px", borderRadius: "8px", overflow: "hidden", backgroundColor: "#f3f4f6" }}><div className="slider-track" onScroll={e => {
        const track = e.currentTarget;
        const w = track.clientWidth || 1;
        const idx = Math.round(track.scrollLeft / w);
        const root = track.parentElement;
        if (root) {
            const dots = root.querySelectorAll(".slider-dot");
            dots.forEach((dot: any, i: number) => {
                const isActive = i === idx;
                dot.style.width = isActive ? "16px" : "5px";
                dot.style.backgroundColor = isActive ? "#4f46e5" : "rgba(255, 255, 255, 0.7)";
            });
        }
    }} style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%", overflowX: "auto", scrollSnapType: "x mandatory", scrollBehavior: "smooth", scrollbarWidth: "none" }}>
          {([
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
    ] || []).map((src: any, idx: number) => (<img key={idx} src={src} alt="Product" style={{ flex: "0 0 100%", width: "100%", height: "100%", objectFit: "cover", scrollSnapAlign: "start", display: "block" }}/>))}
        </div><button type="button" aria-label="Previous image" onClick={e => {
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
                dot.style.width = isActive ? "16px" : "5px";
                dot.style.backgroundColor = isActive ? "#4f46e5" : "rgba(255, 255, 255, 0.7)";
            });
        }
    }} style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", width: "28px", height: "28px", borderRadius: "14px", backgroundColor: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "700", color: "#1f2937", boxShadow: "0 1px 3px rgba(0,0,0,0.15)", zIndex: 2 }}>‹</button><button type="button" aria-label="Next image" onClick={e => {
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
                dot.style.width = isActive ? "16px" : "5px";
                dot.style.backgroundColor = isActive ? "#4f46e5" : "rgba(255, 255, 255, 0.7)";
            });
        }
    }} style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", width: "28px", height: "28px", borderRadius: "14px", backgroundColor: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "700", color: "#1f2937", boxShadow: "0 1px 3px rgba(0,0,0,0.15)", zIndex: 2 }}>›</button><div style={{ position: "absolute", bottom: "8px", left: "0", right: "0", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", zIndex: 2 }}>
          {([
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
    ] || []).map((_: any, idx: number) => (<button key={idx} type="button" className="slider-dot" aria-label={"Go to slide " + (idx + 1)} onClick={e => {
        const root = e.currentTarget.parentElement?.parentElement;
        const track = root?.querySelector(".slider-track") as HTMLElement;
        if (track) {
            const w = track.clientWidth || 1;
            track.scrollTo({ left: idx * w, behavior: "smooth" });
            const dots = root?.querySelectorAll(".slider-dot");
            dots?.forEach((dot: any, i: number) => {
                const isActive = i === idx;
                dot.style.width = isActive ? "16px" : "5px";
                dot.style.backgroundColor = isActive ? "#4f46e5" : "rgba(255, 255, 255, 0.7)";
            });
        }
    }} style={{
        width: idx === 0 ? "16px" : "5px",
        height: "5px",
        borderRadius: "3px",
        backgroundColor: idx === 0 ? "#4f46e5" : "rgba(255,255,255,0.7)",
        border: "none",
        cursor: "pointer",
        padding: 0,
        transition: "all 0.2s ease"
    }}/>))}
        </div><span style={{ position: "absolute", top: "8px", left: "8px", backgroundColor: "#4f46e5", color: "#ffffff", fontSize: "11px", fontWeight: "700", padding: "3px 8px", borderRadius: "4px", textTransform: "uppercase", zIndex: 5 }}>{"Best Seller"}</span><button onClick={() => setIsWishlisted(!isWishlisted)} style={{ position: "absolute", top: "8px", right: "8px", width: "32px", height: "32px", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: isWishlisted ? "#ef4444" : "#6b7280", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", zIndex: 5 }}>{isWishlisted ? "\u2665" : "\u2661"}</button></div><div style={{ display: "flex", flexDirection: "column", gap: "4px" }}><span style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", color: "#6b7280" }}>{"Audio & Electronics"}</span><h3 style={{ fontSize: "15px", fontWeight: "600", color: "#111827", margin: "0", lineHeight: "1.35" }}>{"Sony WH-1000XM5 Wireless Noise-Canceling Headphones"}</h3></div><div style={{ display: "flex", alignItems: "center", gap: "4px" }}><span style={{ color: "#f59e0b" }}>★</span><span style={{ fontSize: "13px", fontWeight: "600" }}>{4.9}</span><span style={{ fontSize: "12px", color: "#6b7280" }}>{`(${2840})`}</span></div><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "4px" }}><div style={{ display: "flex", alignItems: "baseline" }}><span style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{`$${unitPrice}`}</span><del style={{ fontSize: "13px", color: "#9ca3af", marginLeft: "6px" }}>{`$${originalUnitPrice}`}</del></div><button onClick={handleAddToCart} style={{ backgroundColor: "#0f172a", color: "#ffffff", border: "none", padding: "8px 14px", borderRadius: "6px", fontWeight: "600", fontSize: "13px", cursor: "pointer" }}>Add to Cart</button></div></article>
            </div>

            {/* 2. Interactive Primitives & Order Calculator */}
            <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        flex: 1, minWidth: 280
    }}>
              {/* Standalone Interactive Rating */}
              <article style={{
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
                    <p style={{
        fontSize: "13px",
        fontWeight: "700"
    }}>
                      Interactive Rating
                    </p>
                    <span style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        fontWeight: "600",
        backgroundColor: "#f3f4f6",
        color: "#374151",
        fontSize: "13px",
        padding: "4px 10px"
    }}>{`${userRating.toFixed(1)} / 5.0`}</span>
                  </div>
                  <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>
                    Click stars to set custom rating:
                  </p>
                  <div role="img" style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px"
    }}><span style={{ color: "#f59e0b" }}>★</span><span style={{ fontWeight: "600", fontSize: "13px", marginLeft: "2px" }}>{userRating}</span><span style={{ color: "#6b7280", fontSize: "12px", marginLeft: "2px" }}>{`(${142})`}</span></div>
                </div>
              </article>

              {/* Standalone Quantity Selector */}
              <article style={{
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
                    <p style={{
        fontSize: "13px",
        fontWeight: "700"
    }}>
                      Quantity Selector Stepper
                    </p>
                    <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>
                      Max: 10 units
                    </p>
                  </div>
                  <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap"
    }}>
                    <div role="group" aria-label="Quantity selector" style={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        overflow: "hidden"
    }}><button style={{ background: "none", border: "none", padding: "6px 12px", cursor: "pointer", fontWeight: "700", fontSize: "16px", color: "#374151" }} onClick={() => ((q) => setQuantity(q))(quantity - 1)}>−</button><span style={{ padding: "0 10px", fontWeight: "600", fontSize: "14px", minWidth: "24px", textAlign: "center", display: "inline-block" }}>{quantity}</span><button style={{ background: "none", border: "none", padding: "6px 12px", cursor: "pointer", fontWeight: "700", fontSize: "16px", color: "#374151" }} onClick={() => ((q) => setQuantity(q))(quantity + 1)}>+</button></div>
                    <p color="neutral.600" style={{
        fontSize: "11px",
        color: "neutral.600"
    }}>
                      {quantity} {quantity === 1 ? "unit" : "units"} selected
                    </p>
                  </div>
                </div>
              </article>

              {/* Standalone Price Hierarchy */}
              <article style={{
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
                  <p style={{
        fontSize: "13px",
        fontWeight: "700"
    }}>
                    Price Variants & Hierarchy
                  </p>
                  <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    }}>
                    <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }}>
                      <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>Extra Large (Hero):</p>
                      <div style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "6px"
    }}><span style={{ fontWeight: "700" }}>{`$${499.00}`}</span><del style={{ color: "#9ca3af", marginLeft: "4px", fontSize: "0.85em" }}>{`$${599.00}`}</del></div>
                    </div>
                    <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }}>
                      <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>Large (Feature):</p>
                      <div style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "6px"
    }}><span style={{ fontWeight: "700" }}>{`$${199.99}`}</span><del style={{ color: "#9ca3af", marginLeft: "4px", fontSize: "0.85em" }}>{`$${249.99}`}</del></div>
                    </div>
                    <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }}>
                      <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>Medium (Default):</p>
                      <div style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "6px"
    }}><span style={{ fontWeight: "700" }}>{`$${89.50}`}</span><del style={{ color: "#9ca3af", marginLeft: "4px", fontSize: "0.85em" }}>{`$${110.00}`}</del></div>
                    </div>
                    <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }}>
                      <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>Small (Cart row):</p>
                      <div style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "6px"
    }}><span style={{ fontWeight: "700" }}>{`$${24.99}`}</span></div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Real-time Order Summary */}
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
        flexDirection: "column",
        gap: "8px"
    }}>
                  <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
                    <h4>Cart Summary</h4>
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
    }}>{`Save $${totalSavings}`}</span>
                  </div>

                  <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }}>
                    <p color="neutral.600" style={{
        fontSize: "13px",
        color: "neutral.600"
    }}>Items ({quantity}):</p>
                    <div style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "6px"
    }}><span style={{ fontWeight: "700" }}>{`$${totalPrice}`}</span></div>
                  </div>

                  <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }}>
                    <p color="neutral.600" style={{
        fontSize: "13px",
        color: "neutral.600"
    }}>Standard Shipping:</p>
                    <p color="success.600" style={{
        fontSize: "13px",
        fontWeight: "600",
        color: "success.600"
    }}>FREE</p>
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
        alignItems: "center",
        justifyContent: "space-between"
    }}>
                    <p style={{
        fontSize: "15px",
        fontWeight: "700"
    }}>Estimated Total:</p>
                    <div style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "6px"
    }}><span style={{ fontWeight: "700" }}>{`$${totalPrice}`}</span></div>
                  </div>

                  <button onClick={handleAddToCart} style={{
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
        width: "100%",
        flexShrink: "1"
    }}>
                    Proceed to Checkout
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </article>
    </div>);
};
