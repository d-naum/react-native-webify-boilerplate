import React, { useState } from "react";
export type LoginFormProps = {
    onSubmit?: (email: string) => void;
};
export const LoginForm = ({ onSubmit }: LoginFormProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
    const handleSubmit = () => {
        if (!email || !email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }
        if (!password || password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        setError(null);
        setSubmittedEmail(email);
        if (onSubmit) {
            onSubmit(email);
        }
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
          <h3>Welcome Back</h3>
          <p color="neutral.500" style={{
        color: "neutral.500"
    }}>Sign in to your cross-platform dashboard</p>
        </div>

        {error ? (<div role="alert" style={{
            borderRadius: "8px",
            padding: "12px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            backgroundColor: "#fff1f2",
            color: "#881337"
        }}>
            <p color="danger.800" style={{
            fontSize: "13px",
            fontWeight: "600",
            color: "danger.800"
        }}>
              {error}
            </p>
          </div>) : null}

        {submittedEmail ? (<div role="alert" style={{
            borderRadius: "8px",
            padding: "12px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            backgroundColor: "#f0fdf4",
            color: "#14532d"
        }}>
            <p color="success.800" style={{
            fontSize: "13px",
            fontWeight: "600",
            color: "success.800"
        }}>
              Signed in successfully as {submittedEmail}!
            </p>
          </div>) : null}

        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    }}>
          <input placeholder="name@company.com" value={email} onChange={e => setEmail(e.target.value)} style={{
        width: "100%",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        padding: "10px 14px",
        fontSize: "14px",
        boxSizing: "border-box",
        outline: "none"
    }}/>
          <input placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} type="password" style={{
        width: "100%",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        padding: "10px 14px",
        fontSize: "14px",
        boxSizing: "border-box",
        outline: "none"
    }}/>
        </div>

        <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
          <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center"
    }}>
            <input checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} type="checkbox"/>
            <p style={{
        fontSize: "13px"
    }}>Remember me</p>
          </div>
          <button style={{
        backgroundColor: "transparent",
        color: "#6366f1",
        border: "none",
        textDecoration: "underline",
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
            Forgot password?
          </button>
        </div>

        <button onClick={handleSubmit} style={{
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
          Sign In
        </button>
      </div>
    </article>);
};
