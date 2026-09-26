import React, { useState } from "react";
import {
  Card,
  Stack,
  Row,
  Heading,
  Body,
  SearchInput,
  Select,
  RadioGroup,
  Slider,
  Textarea,
  OTPInput,
  DatePicker,
  Button,
  Divider,
} from "@groooh/react-native-webify";

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

  return (
    <Card padding="lg">
      <Stack gap="md">
        <Stack gap="xs">
          <Heading variant="h3">Compiler Preferences</Heading>
          <Body size="xs" color="neutral.500">
            Configure output target, parallel worker threads, and release authorization
          </Body>
        </Stack>

        <SearchInput
          placeholder="Filter settings..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <Divider />

        <Stack gap="sm">
          <Select
            label="Module Target Format"
            value={bundleFormat}
            onChange={(val: any) => setBundleFormat(typeof val === "string" ? val : val?.target?.value)}
            options={[
              { label: "ES Modules (ESM)", value: "esm" },
              { label: "CommonJS (CJS)", value: "cjs" },
              { label: "Universal UMD Bundle", value: "umd" },
            ]}
          />

          <RadioGroup
            label="Deployment Environment"
            value={targetEnv}
            onChange={(val: any) => setTargetEnv((typeof val === "string" ? val : val?.target?.value) as "staging" | "production")}
            direction="horizontal"
            options={[
              { label: "Staging Preview", value: "staging" },
              { label: "Production Canary", value: "production" },
            ]}
          />

          <Slider
            label={`Parallel AST Workers (${workerCount})`}
            helperText="Number of background CPU threads for component transformation"
            value={workerCount}
            min={1}
            max={16}
            step={1}
            onChange={(val: any) => setWorkerCount(Number(typeof val === "number" ? val : val?.target?.value))}
          />

          <Textarea
            label="Release Notes / Changelog"
            placeholder="Document key changes or component updates..."
            value={releaseNotes}
            onChangeText={setReleaseNotes}
            rows={3}
          />

          <OTPInput
            label="2FA Confirmation Passcode"
            length={6}
            value={otpCode}
            onChange={setOtpCode}
          />

          <DatePicker
            label="Scheduled Release Date"
            value={deployDate}
            onChange={setDeployDate}
            helperText="Automated CI/CD pipeline triggers on this date"
          />
        </Stack>

        {savedStatus ? (
          <Body size="xs" color="success.600" weight="semibold">
            ✓ {savedStatus}
          </Body>
        ) : null}

        <Divider />

        <Row justify="end" gap="sm" wrap>
          <Button
            variant="ghost"
            size="md"
            onPress={() => {
              setReleaseNotes("");
              setOtpCode("");
            }}
          >
            Clear
          </Button>
          <Button variant="primary" size="md" onPress={handleSave}>
            Save Configuration
          </Button>
        </Row>
      </Stack>
    </Card>
  );
};
