import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Alert, Platform, StatusBar } from "react-native";
import { Stack, Row, Heading, Body, Badge, Card } from "@groooh/react-native-webify";
import { HeroCard } from "./components/HeroCard";
import { LoginForm } from "./components/LoginForm";
import { ActivityFeed } from "./components/ActivityFeed";
import { MetricsDashboard } from "./components/MetricsDashboard";
import { SettingsPanel } from "./components/SettingsPanel";
import { OverlaysFeedbackDemo } from "./components/OverlaysFeedbackDemo";
import { MediaShowcase } from "./components/MediaShowcase";
import { EcommerceShowcase } from "./components/EcommerceShowcase";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Stack gap="md" padding="md">
          <Card padding="md">
            <Stack gap="xs">
              <Row justify="between" align="center">
                <Badge variant="neutral" label="iOS & Android" />
                <Body size="xs" color="neutral.500">React Native 0.87.1 &bull; d-naum</Body>
              </Row>
              <Heading variant="h2">@groooh/react-native-webify</Heading>
              <Body color="neutral.600">Universal UI architecture &bull; www.groooh.com</Body>
            </Stack>
          </Card>

          <HeroCard
            onPrimaryAction={() => Alert.alert("Action", "Primary tapped on mobile!")}
            onSecondaryAction={() => Alert.alert("Action", "Secondary tapped on mobile!")}
          />

          <EcommerceShowcase />

          <MetricsDashboard />

          <SettingsPanel />

          <OverlaysFeedbackDemo />

          <MediaShowcase />

          <LoginForm onSubmit={(email) => Alert.alert("Submitted", `Submitted ${email}`)} />


          <ActivityFeed />
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
