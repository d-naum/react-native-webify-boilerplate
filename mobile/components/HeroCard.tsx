import React from "react";
import {
  Card,
  Row,
  Stack,
  Avatar,
  Heading,
  Body,
  Badge,
  Button,
  Divider,
} from "@groooh/react-native-webify";

export type HeroCardProps = {
  title?: string;
  subtitle?: string;
  authorName?: string;
  badgeText?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
};

export const HeroCard = ({
  title = "Universal Cross-Platform Architecture",
  subtitle = "Write components once with design tokens. Deploy natively on iOS & Android, compile to semantic HTML on Web.",
  authorName = "Groooh Engineering",
  badgeText = "Production Ready",
  onPrimaryAction,
  onSecondaryAction,
}: HeroCardProps) => {
  return (
    <Card padding="lg">
      <Stack gap="md">
        <Row align="center" justify="between" gap="sm">
          <Row align="center" gap="sm" style={{ flex: 1, marginRight: 8 }}>
            <Avatar name={authorName} size="md" />
            <Stack gap="xs" style={{ flex: 1 }}>
              <Body weight="bold" numberOfLines={1}>{authorName}</Body>
              <Body size="xs" color="neutral.500" numberOfLines={1}>Cross-Platform UI Framework</Body>
            </Stack>
          </Row>
          <Badge variant="success" label={badgeText} />
        </Row>

        <Divider />

        <Stack gap="sm">
          <Heading variant="h3">{title}</Heading>
          <Body color="neutral.600">{subtitle}</Body>
        </Stack>

        <Divider />

        <Row gap="sm" wrap style={{ paddingTop: 4 }}>
          <Button
            variant="secondary"
            size="md"
            style={{ flexGrow: 1 }}
            onPress={onSecondaryAction}
          >
            Explore Docs
          </Button>
          <Button
            variant="primary"
            size="md"
            style={{ flexGrow: 1 }}
            onPress={onPrimaryAction}
          >
            Get Started
          </Button>
        </Row>
      </Stack>
    </Card>
  );
};
