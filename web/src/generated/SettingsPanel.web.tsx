import React, { useState } from "react";
export const SettingsPanel = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [targetEnv, setTargetEnv] = useState<"staging" | "production">("staging");
    const [bundleFormat, setBundleFormat] = useState("esm");
    const [workerCount, setWorkerCount] = useState(4);
    const [deployDate, setDeployDate] = useState("2026-09-25");
    const [releaseNotes, setReleaseNotes] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [savedStatus, setSavedStatus] = useState<string | null>(null);
    const handleSave = () => {
        setSavedStatus(`Saved configuration: ${bundleFormat.toUpperCase()} on ${targetEnv} with ${workerCount} workers!`);
        setTimeout(() => setSavedStatus(null), 3000);
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
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    }}>
          <h3>Compiler Preferences</h3>
          <p color="neutral.500" style={{
        fontSize: "11px",
        color: "neutral.500"
    }}>
            Configure output target, parallel worker threads, and release authorization
          </p>
        </div>

        <input placeholder="Filter settings..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="search" style={{
        width: "100%",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        padding: "10px 14px",
        fontSize: "14px",
        boxSizing: "border-box",
        outline: "none"
    }}/>

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
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      <label htmlFor="select-1485" style={{ fontSize: "14px", fontWeight: "600", color: "#374151", display: "block" }}>Module Target Format</label>
      <details className="custom-select-popover" style={{ position: "relative", width: "100%" }}>
        <summary style={{ listStyle: "none", width: "100%", height: "42px", minHeight: "42px", boxSizing: "border-box", borderRadius: "8px", border: "1.5px solid #d1d5db", padding: "10px 14px", fontSize: "14px", fontFamily: "inherit", fontWeight: "500", backgroundColor: "#ffffff", color: "#111827", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", outline: "none", userSelect: "none" }}>
          <span>{([
        { label: "ES Modules (ESM)", value: "esm" },
        { label: "CommonJS (CJS)", value: "cjs" },
        { label: "Universal UMD Bundle", value: "umd" },
    ] || []).find((o: any) => o.value === bundleFormat)?.label || "Select an option"}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="m6 9 6 6 6-6"/></svg>
        </summary>
        <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 50, backgroundColor: "#ffffff", border: "1.5px solid #e5e7eb", borderRadius: "8px", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)", overflow: "hidden", padding: "4px", boxSizing: "border-box" }}>
          {([
        { label: "ES Modules (ESM)", value: "esm" },
        { label: "CommonJS (CJS)", value: "cjs" },
        { label: "Universal UMD Bundle", value: "umd" },
    ] || []).map((option: any) => {
        const isSelected = option.value === bundleFormat;
        return (<div key={option.value} role="option" aria-selected={isSelected} onClick={e => {
            const d = e.currentTarget.closest("details");
            if (d)
                d.removeAttribute("open");
            const val = option.value;
            ((val: any) => setBundleFormat(typeof val === "string" ? val : val?.target?.value))?.(val);
        }} onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#eef2ff";
            e.currentTarget.style.color = "#4f46e5";
        }} onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = isSelected ? "#eef2ff" : "transparent";
            e.currentTarget.style.color = isSelected ? "#4f46e5" : "#111827";
        }} style={{
            height: "40px",
            minHeight: "40px",
            padding: "10px 14px",
            borderRadius: "6px",
            cursor: "pointer",
            backgroundColor: isSelected ? "#eef2ff" : "transparent",
            color: isSelected ? "#4f46e5" : "#111827",
            fontWeight: isSelected ? "600" : "500",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.15s ease",
            boxSizing: "border-box",
        }}>
                <span>{option.label}</span>
                {isSelected && <span style={{ color: "#4f46e5", fontWeight: "700" }}>✓</span>}
              </div>);
    })}
        </div>
        <select id="select-1485" value={bundleFormat || ""} style={{ display: "none" }} onChange={() => { }}>
          {([
        { label: "ES Modules (ESM)", value: "esm" },
        { label: "CommonJS (CJS)", value: "cjs" },
        { label: "Universal UMD Bundle", value: "umd" },
    ] || []).map((opt: any) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      </details>
      
      
    </div>

          <fieldset />

          <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        width: "100%"
    }}><div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }}><label htmlFor="slider-2356" style={{
        fontSize: "14px",
        fontWeight: "600",
        color: "#374151"
    }}>{`Parallel AST Workers (${workerCount})`}</label><span style={{
        fontSize: "12px",
        fontWeight: "700",
        color: "#6366f1",
        backgroundColor: "#eef2ff",
        padding: "2px 8px",
        borderRadius: "9999px"
    }}>{workerCount}</span></div><input id="slider-2356" type="range" style={{
        width: "100%",
        borderRadius: "9999px",
        backgroundColor: "#e5e7eb",
        accentColor: "#6366f1",
        cursor: "pointer",
        outline: "none"
    }} value={workerCount} min={1} max={16} step={1} onChange={e => ((val: any) => setWorkerCount(Number(typeof val === "number" ? val : val?.target?.value)))(Number(e.target ? e.target.value : e))}/><span style={{
        fontSize: "12px",
        color: "#6b7280"
    }}>Number of background CPU threads for component transformation</span></div>

          <textarea placeholder="Document key changes or component updates..." value={releaseNotes} onChange={e => setReleaseNotes(e.target.value)} rows={3} style={{
        width: "100%",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        padding: "10px 14px",
        fontSize: "14px",
        boxSizing: "border-box",
        resize: "vertical"
    }}/>

          <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    }}><label htmlFor="otp-2989-0" style={{
        fontSize: "14px",
        fontWeight: "600",
        color: "#374151"
    }}>2FA Confirmation Passcode</label><div style={{
        display: "flex",
        gap: "8px"
    }}><input id="otp-2989-0" key="0" type="text" inputMode="numeric" maxLength={1} value={otpCode[0] ?? ""} data-otp-index={0} style={{
        width: "44px",
        height: "48px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "700",
        borderRadius: "8px",
        border: "1.5px solid #d1d5db",
        outline: "none",
        backgroundColor: "#ffffff",
        color: "#111827",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        caretColor: "#6366f1",
        transition: "border-color 0.15s ease"
    }} onChange={(e: any) => {
        const _val = otpCode || "";
        setOtpCode?.(_val.substring(0, 0) + e.target.value.slice(-1) + _val.substring(1));
        if (e.target.value)
            document.getElementById("otp-2989-1")?.focus();
    }}/><input id="otp-2989-1" key="1" type="text" inputMode="numeric" maxLength={1} value={otpCode[1] ?? ""} data-otp-index={1} style={{
        width: "44px",
        height: "48px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "700",
        borderRadius: "8px",
        border: "1.5px solid #d1d5db",
        outline: "none",
        backgroundColor: "#ffffff",
        color: "#111827",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        caretColor: "#6366f1",
        transition: "border-color 0.15s ease"
    }} onChange={(e: any) => {
        const _val = otpCode || "";
        setOtpCode?.(_val.substring(0, 1) + e.target.value.slice(-1) + _val.substring(2));
        if (e.target.value)
            document.getElementById("otp-2989-2")?.focus();
    }} onKeyDown={(e: any) => {
        if (e.key === "Backspace" && !(e.target.value))
            document.getElementById("otp-2989-0")?.focus();
    }}/><input id="otp-2989-2" key="2" type="text" inputMode="numeric" maxLength={1} value={otpCode[2] ?? ""} data-otp-index={2} style={{
        width: "44px",
        height: "48px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "700",
        borderRadius: "8px",
        border: "1.5px solid #d1d5db",
        outline: "none",
        backgroundColor: "#ffffff",
        color: "#111827",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        caretColor: "#6366f1",
        transition: "border-color 0.15s ease"
    }} onChange={(e: any) => {
        const _val = otpCode || "";
        setOtpCode?.(_val.substring(0, 2) + e.target.value.slice(-1) + _val.substring(3));
        if (e.target.value)
            document.getElementById("otp-2989-3")?.focus();
    }} onKeyDown={(e: any) => {
        if (e.key === "Backspace" && !(e.target.value))
            document.getElementById("otp-2989-1")?.focus();
    }}/><input id="otp-2989-3" key="3" type="text" inputMode="numeric" maxLength={1} value={otpCode[3] ?? ""} data-otp-index={3} style={{
        width: "44px",
        height: "48px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "700",
        borderRadius: "8px",
        border: "1.5px solid #d1d5db",
        outline: "none",
        backgroundColor: "#ffffff",
        color: "#111827",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        caretColor: "#6366f1",
        transition: "border-color 0.15s ease"
    }} onChange={(e: any) => {
        const _val = otpCode || "";
        setOtpCode?.(_val.substring(0, 3) + e.target.value.slice(-1) + _val.substring(4));
        if (e.target.value)
            document.getElementById("otp-2989-4")?.focus();
    }} onKeyDown={(e: any) => {
        if (e.key === "Backspace" && !(e.target.value))
            document.getElementById("otp-2989-2")?.focus();
    }}/><input id="otp-2989-4" key="4" type="text" inputMode="numeric" maxLength={1} value={otpCode[4] ?? ""} data-otp-index={4} style={{
        width: "44px",
        height: "48px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "700",
        borderRadius: "8px",
        border: "1.5px solid #d1d5db",
        outline: "none",
        backgroundColor: "#ffffff",
        color: "#111827",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        caretColor: "#6366f1",
        transition: "border-color 0.15s ease"
    }} onChange={(e: any) => {
        const _val = otpCode || "";
        setOtpCode?.(_val.substring(0, 4) + e.target.value.slice(-1) + _val.substring(5));
        if (e.target.value)
            document.getElementById("otp-2989-5")?.focus();
    }} onKeyDown={(e: any) => {
        if (e.key === "Backspace" && !(e.target.value))
            document.getElementById("otp-2989-3")?.focus();
    }}/><input id="otp-2989-5" key="5" type="text" inputMode="numeric" maxLength={1} value={otpCode[5] ?? ""} data-otp-index={5} style={{
        width: "44px",
        height: "48px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "700",
        borderRadius: "8px",
        border: "1.5px solid #d1d5db",
        outline: "none",
        backgroundColor: "#ffffff",
        color: "#111827",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        caretColor: "#6366f1",
        transition: "border-color 0.15s ease"
    }} onChange={(e: any) => {
        const _val = otpCode || "";
        setOtpCode?.(_val.substring(0, 5) + e.target.value.slice(-1) + _val.substring(6));
    }} onKeyDown={(e: any) => {
        if (e.key === "Backspace" && !(e.target.value))
            document.getElementById("otp-2989-4")?.focus();
    }}/></div></div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      <label htmlFor="date-3154" style={{ fontSize: "14px", fontWeight: "600", color: "#374151", display: "block" }}>Scheduled Release Date</label>
      <details className="custom-calendar-details" style={{ position: "relative", width: "100%" }} onToggle={e => {
        const details = e.currentTarget;
        if (details.open) {
            const popover = details.querySelector(".calendar-popover-card") as HTMLElement;
            if (popover) {
                const mSel = popover.querySelector(".cal-month-sel") as HTMLSelectElement;
                const ySel = popover.querySelector(".cal-year-sel") as HTMLSelectElement;
                const dateVal = String(deployDate || "");
                if (dateVal.includes("-")) {
                    const parts = dateVal.split("-");
                    if (parts.length >= 2 && mSel && ySel) {
                        ySel.value = parts[0];
                        mSel.value = String(parseInt(parts[1], 10) - 1);
                        mSel.dispatchEvent(new Event("change", { bubbles: true }));
                    }
                }
            }
        }
    }}>
        <summary style={{ listStyle: "none", width: "100%", height: "42px", minHeight: "42px", boxSizing: "border-box", borderRadius: "8px", border: "1.5px solid #d1d5db", padding: "10px 14px", fontSize: "14px", fontFamily: "inherit", fontWeight: "500", backgroundColor: "#ffffff", color: "#111827", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", outline: "none", userSelect: "none" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span className="cal-val-display">{deployDate || "Select date..."}</span>
          </span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="m6 9 6 6 6-6"/></svg>
        </summary>

        <div className="calendar-popover-card" style={{
        position: "absolute",
        top: "calc(100% + 6px)",
        left: 0,
        zIndex: 1000,
        width: "320px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        border: "1.5px solid #e5e7eb",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.08)",
        padding: "16px",
        boxSizing: "border-box"
    }} onClick={e => e.stopPropagation()}>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", gap: "6px" }}>
            <button type="button" aria-label="Previous month" onClick={e => {
        e.stopPropagation();
        const popover = e.currentTarget.closest(".calendar-popover-card") as HTMLElement;
        const mSel = popover?.querySelector(".cal-month-sel") as HTMLSelectElement;
        const ySel = popover?.querySelector(".cal-year-sel") as HTMLSelectElement;
        if (mSel && ySel) {
            let m = parseInt(mSel.value, 10) - 1;
            let y = parseInt(ySel.value, 10);
            if (m < 0) {
                m = 11;
                y--;
                ySel.value = String(y);
            }
            mSel.value = String(m);
            mSel.dispatchEvent(new Event("change", { bubbles: true }));
        }
    }} onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = "#e0e7ff";
        e.currentTarget.style.borderColor = "#c7d2fe";
        e.currentTarget.style.color = "#3730a3";
    }} onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = "#eef2ff";
        e.currentTarget.style.borderColor = "#e0e7ff";
        e.currentTarget.style.color = "#4f46e5";
    }} style={{ border: "1px solid #e0e7ff", background: "#eef2ff", color: "#4f46e5", borderRadius: "7px", width: "32px", height: "32px", minHeight: "32px", cursor: "pointer", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0, transition: "all 0.15s ease", boxSizing: "border-box" }}>
              ‹
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              
              <details className="custom-select-popover cal-dropdown cal-month-dd" style={{ position: "relative" }} onToggle={e => {
        if (e.currentTarget.open) {
            const parent = e.currentTarget.closest(".calendar-popover-card");
            parent?.querySelectorAll(".cal-dropdown").forEach((d: any) => {
                if (d !== e.currentTarget)
                    d.removeAttribute("open");
            });
        }
    }}>
                <summary onMouseEnter={e => {
        e.currentTarget.style.borderColor = "#818cf8";
        e.currentTarget.style.backgroundColor = "#f8fafc";
    }} onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#e0e7ff";
        e.currentTarget.style.backgroundColor = "#ffffff";
    }} style={{
        listStyle: "none",
        height: "32px",
        minHeight: "32px",
        lineHeight: "30px",
        padding: "0 10px",
        fontWeight: "600",
        fontSize: "13px",
        fontFamily: "inherit",
        color: "#1e1b4b",
        backgroundColor: "#ffffff",
        border: "1.5px solid #e0e7ff",
        borderRadius: "7px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        outline: "none",
        userSelect: "none",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        transition: "all 0.15s ease",
        boxSizing: "border-box"
    }}>
                  <span className="cal-month-label">September</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="cal-dd-menu" style={{
        position: "absolute",
        top: "calc(100% + 4px)",
        left: 0,
        zIndex: 1200,
        backgroundColor: "#ffffff",
        border: "1.5px solid #e0e7ff",
        borderRadius: "8px",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.08)",
        maxHeight: "180px",
        overflowY: "auto",
        width: "125px",
        padding: "4px",
        boxSizing: "border-box"
    }}>
                  {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m, idx) => {
        const isSelected = idx === 8;
        return (<div key={idx} className="cal-month-opt" data-val={idx} role="option" onClick={e => {
            e.stopPropagation();
            const popover = e.currentTarget.closest(".calendar-popover-card") as HTMLElement;
            const mSel = popover?.querySelector(".cal-month-sel") as HTMLSelectElement;
            const dd = e.currentTarget.closest("details");
            if (dd)
                dd.removeAttribute("open");
            if (mSel) {
                mSel.value = String(idx);
                mSel.dispatchEvent(new Event("change", { bubbles: true }));
            }
        }} onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#eef2ff";
            e.currentTarget.style.color = "#4f46e5";
        }} onMouseLeave={e => {
            const popover = e.currentTarget.closest(".calendar-popover-card") as HTMLElement;
            const mSel = popover?.querySelector(".cal-month-sel") as HTMLSelectElement;
            const curr = mSel ? parseInt(mSel.value, 10) : 8;
            const isSel = idx === curr;
            e.currentTarget.style.backgroundColor = isSel ? "#eef2ff" : "transparent";
            e.currentTarget.style.color = isSel ? "#4f46e5" : "#111827";
        }} style={{
            height: "30px",
            minHeight: "30px",
            padding: "0 8px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: isSelected ? "600" : "500",
            backgroundColor: isSelected ? "#eef2ff" : "transparent",
            color: isSelected ? "#4f46e5" : "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.15s ease",
            boxSizing: "border-box"
        }}>
                        <span>{m}</span>
                        <span className="cal-opt-check" style={{ display: isSelected ? "inline" : "none", color: "#4f46e5", fontWeight: "700" }}>✓</span>
                      </div>);
    })}
                </div>
              </details>

              
              <details className="custom-select-popover cal-dropdown cal-year-dd" style={{ position: "relative" }} onToggle={e => {
        if (e.currentTarget.open) {
            const parent = e.currentTarget.closest(".calendar-popover-card");
            parent?.querySelectorAll(".cal-dropdown").forEach((d: any) => {
                if (d !== e.currentTarget)
                    d.removeAttribute("open");
            });
        }
    }}>
                <summary onMouseEnter={e => {
        e.currentTarget.style.borderColor = "#818cf8";
        e.currentTarget.style.backgroundColor = "#f8fafc";
    }} onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#e0e7ff";
        e.currentTarget.style.backgroundColor = "#ffffff";
    }} style={{
        listStyle: "none",
        height: "32px",
        minHeight: "32px",
        lineHeight: "30px",
        padding: "0 10px",
        fontWeight: "600",
        fontSize: "13px",
        fontFamily: "inherit",
        color: "#1e1b4b",
        backgroundColor: "#ffffff",
        border: "1.5px solid #e0e7ff",
        borderRadius: "7px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        outline: "none",
        userSelect: "none",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        transition: "all 0.15s ease",
        boxSizing: "border-box"
    }}>
                  <span className="cal-year-label">2026</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="cal-dd-menu" style={{
        position: "absolute",
        top: "calc(100% + 4px)",
        left: 0,
        zIndex: 1200,
        backgroundColor: "#ffffff",
        border: "1.5px solid #e0e7ff",
        borderRadius: "8px",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.08)",
        maxHeight: "180px",
        overflowY: "auto",
        width: "90px",
        padding: "4px",
        boxSizing: "border-box"
    }}>
                  {[2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030].map(y => {
        const isSelected = y === 2026;
        return (<div key={y} className="cal-year-opt" data-val={y} role="option" onClick={e => {
            e.stopPropagation();
            const popover = e.currentTarget.closest(".calendar-popover-card") as HTMLElement;
            const ySel = popover?.querySelector(".cal-year-sel") as HTMLSelectElement;
            const mSel = popover?.querySelector(".cal-month-sel") as HTMLSelectElement;
            const dd = e.currentTarget.closest("details");
            if (dd)
                dd.removeAttribute("open");
            if (ySel) {
                ySel.value = String(y);
                if (mSel)
                    mSel.dispatchEvent(new Event("change", { bubbles: true }));
            }
        }} onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#eef2ff";
            e.currentTarget.style.color = "#4f46e5";
        }} onMouseLeave={e => {
            const popover = e.currentTarget.closest(".calendar-popover-card") as HTMLElement;
            const ySel = popover?.querySelector(".cal-year-sel") as HTMLSelectElement;
            const curr = ySel ? parseInt(ySel.value, 10) : 2026;
            const isSel = y === curr;
            e.currentTarget.style.backgroundColor = isSel ? "#eef2ff" : "transparent";
            e.currentTarget.style.color = isSel ? "#4f46e5" : "#111827";
        }} style={{
            height: "30px",
            minHeight: "30px",
            padding: "0 8px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: isSelected ? "600" : "500",
            backgroundColor: isSelected ? "#eef2ff" : "transparent",
            color: isSelected ? "#4f46e5" : "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.15s ease",
            boxSizing: "border-box"
        }}>
                        <span>{y}</span>
                        <span className="cal-opt-check" style={{ display: isSelected ? "inline" : "none", color: "#4f46e5", fontWeight: "700" }}>✓</span>
                      </div>);
    })}
                </div>
              </details>

              
              <select className="cal-month-sel" defaultValue={8} style={{ display: "none" }} onChange={e => {
        const popover = e.currentTarget.closest(".calendar-popover-card") as HTMLElement;
        const mSel = popover?.querySelector(".cal-month-sel") as HTMLSelectElement;
        const ySel = popover?.querySelector(".cal-year-sel") as HTMLSelectElement;
        const grid = popover?.querySelector(".cal-days-grid") as HTMLElement;
        if (!mSel || !ySel || !grid)
            return;
        const m = parseInt(mSel.value, 10);
        const y = parseInt(ySel.value, 10);
        const mLabel = popover?.querySelector(".cal-month-label");
        const yLabel = popover?.querySelector(".cal-year-label");
        if (mLabel)
            mLabel.textContent = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][m] || "";
        if (yLabel)
            yLabel.textContent = String(y);
        popover?.querySelectorAll(".cal-month-opt").forEach((opt: any) => {
            const isS = parseInt(opt.getAttribute("data-val"), 10) === m;
            opt.style.backgroundColor = isS ? "#eef2ff" : "transparent";
            opt.style.color = isS ? "#4f46e5" : "#111827";
            opt.style.fontWeight = isS ? "600" : "500";
            const chk = opt.querySelector(".cal-opt-check");
            if (chk)
                chk.style.display = isS ? "inline" : "none";
        });
        popover?.querySelectorAll(".cal-year-opt").forEach((opt: any) => {
            const isS = parseInt(opt.getAttribute("data-val"), 10) === y;
            opt.style.backgroundColor = isS ? "#eef2ff" : "transparent";
            opt.style.color = isS ? "#4f46e5" : "#111827";
            opt.style.fontWeight = isS ? "600" : "500";
            const chk = opt.querySelector(".cal-opt-check");
            if (chk)
                chk.style.display = isS ? "inline" : "none";
        });
        const daysInMonth = new Date(y, m + 1, 0).getDate();
        const firstDay = new Date(y, m, 1).getDay();
        grid.innerHTML = "";
        for (let i = 0; i < firstDay; i++) {
            const span = document.createElement("span");
            grid.appendChild(span);
        }
        for (let d = 1; d <= daysInMonth; d++) {
            const dayStr = String(d).padStart(2, "0");
            const mStr = String(m + 1).padStart(2, "0");
            const dateStr = y + "-" + mStr + "-" + dayStr;
            const isSelected = String(deployDate || "").endsWith(dayStr) && String(deployDate || "").startsWith(y + "-" + mStr);
            const btn = document.createElement("button");
            btn.type = "button";
            btn.textContent = String(d);
            btn.style.cssText = "width: 32px; height: 32px; border-radius: 16px; border: none; background-color: " + (isSelected ? "#4f46e5" : "transparent") + "; color: " + (isSelected ? "#ffffff" : "#1f2937") + "; font-weight: " + (isSelected ? "700" : "500") + "; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; margin: auto; transition: all 0.15s ease;";
            btn.onmouseenter = () => { if (!isSelected) {
                btn.style.backgroundColor = "#eef2ff";
                btn.style.color = "#4f46e5";
            } };
            btn.onmouseleave = () => { if (!isSelected) {
                btn.style.backgroundColor = "transparent";
                btn.style.color = "#1f2937";
            } };
            btn.onclick = ev => {
                ev.stopPropagation();
                const details = popover.closest("details");
                if (details)
                    details.removeAttribute("open");
                const disp = details?.querySelector(".cal-val-display");
                if (disp)
                    disp.textContent = dateStr;
                (setDeployDate)?.(dateStr);
            };
            grid.appendChild(btn);
        }
    }}>
                <option key="0" value="0">January</option><option key="1" value="1">February</option><option key="2" value="2">March</option><option key="3" value="3">April</option><option key="4" value="4">May</option><option key="5" value="5">June</option><option key="6" value="6">July</option><option key="7" value="7">August</option><option key="8" value="8">September</option><option key="9" value="9">October</option><option key="10" value="10">November</option><option key="11" value="11">December</option>
              </select>

              <select className="cal-year-sel" defaultValue={2026} style={{ display: "none" }} onChange={e => {
        const popover = e.currentTarget.closest(".calendar-popover-card") as HTMLElement;
        const mSel = popover?.querySelector(".cal-month-sel") as HTMLSelectElement;
        if (mSel)
            mSel.dispatchEvent(new Event("change", { bubbles: true }));
    }}>
                <option key="2022" value="2022">2022</option><option key="2023" value="2023">2023</option><option key="2024" value="2024">2024</option><option key="2025" value="2025">2025</option><option key="2026" value="2026">2026</option><option key="2027" value="2027">2027</option><option key="2028" value="2028">2028</option><option key="2029" value="2029">2029</option><option key="2030" value="2030">2030</option>
              </select>
            </div>

            <button type="button" aria-label="Next month" onClick={e => {
        e.stopPropagation();
        const popover = e.currentTarget.closest(".calendar-popover-card") as HTMLElement;
        const mSel = popover?.querySelector(".cal-month-sel") as HTMLSelectElement;
        const ySel = popover?.querySelector(".cal-year-sel") as HTMLSelectElement;
        if (mSel && ySel) {
            let m = parseInt(mSel.value, 10) + 1;
            let y = parseInt(ySel.value, 10);
            if (m > 11) {
                m = 0;
                y++;
                ySel.value = String(y);
            }
            mSel.value = String(m);
            mSel.dispatchEvent(new Event("change", { bubbles: true }));
        }
    }} onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = "#e0e7ff";
        e.currentTarget.style.borderColor = "#c7d2fe";
        e.currentTarget.style.color = "#3730a3";
    }} onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = "#eef2ff";
        e.currentTarget.style.borderColor = "#e0e7ff";
        e.currentTarget.style.color = "#4f46e5";
    }} style={{ border: "1px solid #e0e7ff", background: "#eef2ff", color: "#4f46e5", borderRadius: "7px", width: "32px", height: "32px", minHeight: "32px", cursor: "pointer", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0, transition: "all 0.15s ease", boxSizing: "border-box" }}>
              ›
            </button>
          </div>

          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px", textAlign: "center", marginBottom: "8px" }}>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (<span key={d} style={{ fontSize: "11px", fontWeight: "600", color: "#9ca3af" }}>{d}</span>))}
          </div>

          
          <div className="cal-days-grid" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
            
            <span />
            <span />
            {Array.from({ length: 30 }, (_, i) => i + 1).map(day => {
        const dayStr = String(day).padStart(2, "0");
        const isSelected = String(deployDate).endsWith(dayStr) || (day === 25 && !deployDate);
        return (<button key={day} type="button" onClick={e => {
            e.stopPropagation();
            const d = e.currentTarget.closest("details");
            if (d)
                d.removeAttribute("open");
            const popover = e.currentTarget.closest(".calendar-popover-card") as HTMLElement;
            const ySel = popover?.querySelector(".cal-year-sel") as HTMLSelectElement;
            const mSel = popover?.querySelector(".cal-month-sel") as HTMLSelectElement;
            const y = ySel ? ySel.value : "2026";
            const m = mSel ? String(parseInt(mSel.value, 10) + 1).padStart(2, "0") : "09";
            const dateStr = y + "-" + m + "-" + dayStr;
            const disp = d?.querySelector(".cal-val-display");
            if (disp)
                disp.textContent = dateStr;
            (setDeployDate)?.(dateStr);
        }} onMouseEnter={e => {
            if (!isSelected) {
                e.currentTarget.style.backgroundColor = "#eef2ff";
                e.currentTarget.style.color = "#4f46e5";
            }
        }} onMouseLeave={e => {
            if (!isSelected) {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#1f2937";
            }
        }} style={{
            width: "32px",
            height: "32px",
            borderRadius: "16px",
            border: "none",
            backgroundColor: isSelected ? "#4f46e5" : "transparent",
            color: isSelected ? "#ffffff" : "#1f2937",
            fontWeight: isSelected ? "700" : "500",
            fontSize: "13px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            transition: "all 0.15s ease",
        }}>
                  {day}
                </button>);
    })}
          </div>

          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px", paddingTop: "8px", borderTop: "1px solid #f3f4f6" }}>
            <button type="button" onClick={e => {
        e.stopPropagation();
        const d = e.currentTarget.closest("details");
        if (d)
            d.removeAttribute("open");
        const dateStr = "2026-09-24";
        const disp = d?.querySelector(".cal-val-display");
        if (disp)
            disp.textContent = dateStr;
        (setDeployDate)?.(dateStr);
    }} style={{ border: "none", background: "none", color: "#4f46e5", fontSize: "12px", fontWeight: "600", cursor: "pointer", padding: "4px 8px" }}>
              Today
            </button>
            <button type="button" onClick={e => {
        e.stopPropagation();
        const d = e.currentTarget.closest("details");
        if (d)
            d.removeAttribute("open");
        const dateStr = "";
        const disp = d?.querySelector(".cal-val-display");
        if (disp)
            disp.textContent = "Select date...";
        (setDeployDate)?.(dateStr);
    }} style={{ border: "none", background: "none", color: "#6b7280", fontSize: "12px", fontWeight: "500", cursor: "pointer", padding: "4px 8px" }}>
              Clear
            </button>
          </div>
        </div>
        <input type="date" id="date-3154" value={deployDate || ""} style={{ display: "none" }} onChange={() => { }}/>
      </details>
      
      <span style={{ fontSize: "12px", color: "#6b7280" }}>Automated CI/CD pipeline triggers on this date</span>
    </div>
        </div>

        {savedStatus ? (<p color="success.600" style={{
            fontSize: "11px",
            fontWeight: "600",
            color: "success.600"
        }}>
            ✓ {savedStatus}
          </p>) : null}

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
        justifyContent: "flex-end",
        flexWrap: "wrap"
    }}>
          <button onClick={() => {
            setReleaseNotes("");
            setOtpCode("");
        }} style={{
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
            Clear
          </button>
          <button onClick={handleSave} style={{
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
        flexShrink: "0"
    }}>
            Save Configuration
          </button>
        </div>
      </div>
    </article>);
};
