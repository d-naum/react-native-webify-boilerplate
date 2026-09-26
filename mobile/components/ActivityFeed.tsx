import React from "react";
import {
  Card,
  Stack,
  Row,
  Heading,
  Body,
  Badge,
  Avatar,
  FlatList,
  Pressable,
  Divider,
} from "@groooh/react-native-webify";

export type ActivityItem = {
  id: string;
  user: string;
  avatar?: string;
  action: string;
  time: string;
  status: "success" | "primary" | "warning";
};

const DEFAULT_ITEMS: ActivityItem[] = [
  {
    id: "1",
    user: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    action: "Deployed mobile build v2.4.0",
    time: "5m ago",
    status: "success",
  },
  {
    id: "2",
    user: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    action: "Compiled 32 components for web target",
    time: "22m ago",
    status: "primary",
  },
  {
    id: "3",
    user: "Devon Vance",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    action: "Updated semantic color tokens",
    time: "1h ago",
    status: "warning",
  },
];

export const ActivityFeed = () => {
  return (
    <Card padding="md">
      <Stack gap="sm">
        <Row justify="between" align="center">
          <Heading variant="h4">Recent Activity</Heading>
          <Badge variant="primary" label="Live Stream" />
        </Row>

        <Divider />

        <FlatList
          data={DEFAULT_ITEMS}
          scrollEnabled={false}
          keyExtractor={(item: ActivityItem) => item.id}
          renderItem={({ item }: { item: ActivityItem }) => (
            <Pressable
              paddingY="xs"
              style={{ width: "100%", display: "flex" }}
              onPress={() => console.log(item.id)}
            >
              <Row
                align="center"
                justify="between"
                gap="sm"
                style={{ width: "100%", flex: 1 }}
              >
                <Row align="center" gap="sm" style={{ flex: 1, minWidth: 0 }}>
                  <Avatar name={item.user} uri={item.avatar} size="sm" />
                  <Stack gap="xs" style={{ flex: 1, minWidth: 0 }}>
                    <Body weight="semibold" size="sm">
                      {item.user}
                    </Body>
                    <Body size="xs" color="neutral.500">
                      {item.action}
                    </Body>
                  </Stack>
                </Row>
                <Body size="xs" color="neutral.400" style={{ flexShrink: 0 }}>
                  {item.time}
                </Body>
              </Row>
            </Pressable>
          )}
        />
      </Stack>
    </Card>
  );
};
