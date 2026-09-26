import React, { useState } from "react";
import {
  Card,
  Stack,
  Row,
  Heading,
  Body,
  Input,
  PasswordInput,
  Button,
  Checkbox,
  Alert,
} from "@groooh/react-native-webify";

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

  return (
    <Card padding="lg">
      <Stack gap="md">
        <Stack gap="xs">
          <Heading variant="h3">Welcome Back</Heading>
          <Body color="neutral.500">Sign in to your cross-platform dashboard</Body>
        </Stack>

        {error ? (
          <Alert variant="danger">
            <Body size="sm" weight="semibold" color="danger.800">
              {error}
            </Body>
          </Alert>
        ) : null}

        {submittedEmail ? (
          <Alert variant="success">
            <Body size="sm" weight="semibold" color="success.800">
              Signed in successfully as {submittedEmail}!
            </Body>
          </Alert>
        ) : null}

        <Stack gap="sm">
          <Input
            placeholder="name@company.com"
            value={email}
            onChangeText={setEmail}
          />
          <PasswordInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
          />
        </Stack>

        <Row justify="between" align="center">
          <Row align="center" gap="xs">
            <Checkbox
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <Body size="sm">Remember me</Body>
          </Row>
          <Button variant="link" size="sm">
            Forgot password?
          </Button>
        </Row>

        <Button variant="primary" size="md" onPress={handleSubmit} fullWidth>
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};
