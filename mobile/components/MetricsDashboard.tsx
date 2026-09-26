import React, { useState } from "react";
import {
  Card,
  Stack,
  Row,
  Heading,
  Body,
  Badge,
  Tag,
  Button,
  ProgressBar,
  Tabs,
  AvatarGroup,
  Skeleton,
  Divider,
} from "@groooh/react-native-webify";

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

  return (
    <Card padding="lg">
      <Stack gap="md">
        {/* Header with Title and Team */}
        <Row justify="between" align="center" wrap gap="sm">
          <Stack gap="xs" style={{ flex: 1, minWidth: 160 }}>
            <Row align="center" gap="sm" wrap>
              <Heading variant="h4">System Performance</Heading>
              <Badge variant="success" label="Healthy" />
            </Row>
            <Body size="xs" color="neutral.500">
              Live telemetry & build analytics
            </Body>
          </Stack>
          <AvatarGroup avatars={teamMembers} max={3} size="sm" />
        </Row>

        <Divider />

        {/* Tab Navigation */}
        <Tabs
          tabs={[
            { id: "overview", label: "Overview" },
            { id: "metrics", label: "Metrics" },
            { id: "tags", label: "Tags" },
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {/* Content based on active tab */}
        {isLoading ? (
          <Stack gap="sm">
            <Skeleton height={20} radius="sm" />
            <Skeleton height={40} radius="md" />
            <Skeleton height={20} radius="sm" />
          </Stack>
        ) : activeTab === "overview" ? (
          <Stack gap="md">
            <Stack gap="xs">
              <Row justify="between" align="center">
                <Body size="sm" weight="semibold">
                  Memory Utilization
                </Body>
                <Body size="sm" color="neutral.500">
                  42.8 MB / 128 MB
                </Body>
              </Row>
              <ProgressBar value={34} variant="primary" showLabel={false} height={8} />
            </Stack>

            <Stack gap="xs">
              <Row justify="between" align="center">
                <Body size="sm" weight="semibold">
                  AST Transformation Rate
                </Body>
                <Body size="sm" color="success.600">
                  98.4% optimal
                </Body>
              </Row>
              <ProgressBar value={98} variant="success" showLabel={false} height={8} />
            </Stack>
          </Stack>
        ) : activeTab === "metrics" ? (
          <Stack gap="sm">
            <Row justify="between" align="center">
              <Body size="sm">Transform Duration</Body>
              <Badge variant="primary" label="4.2ms avg" />
            </Row>
            <Row justify="between" align="center">
              <Body size="sm">Bundle Size Impact</Body>
              <Badge variant="success" label="0 KB (Zero Runtime)" />
            </Row>
            <Row justify="between" align="center">
              <Body size="sm">Cache Hit Ratio</Body>
              <Badge variant="warning" label="87.5%" />
            </Row>
          </Stack>
        ) : (
          <Stack gap="sm">
            <Body size="xs" color="neutral.500">
              Active tags (click ✕ to remove):
            </Body>
            <Row gap="xs" wrap align="center">
              {tags.map((t) => (
                <Tag
                  key={t}
                  variant="primary"
                  label={t}
                  onRemove={() => handleRemoveTag(t)}
                />
              ))}
            </Row>
          </Stack>
        )}

        <Divider />

        <Row justify="between" align="center" wrap gap="sm">
          <Button
            variant="ghost"
            size="sm"
            onPress={() => setTags(["TypeScript", "React Native", "Compiler", "AST", "Zero Runtime"])}
          >
            Reset Tags
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onPress={handleSimulateReload}
          >
            Refresh Telemetry
          </Button>
        </Row>
      </Stack>
    </Card>
  );
};
