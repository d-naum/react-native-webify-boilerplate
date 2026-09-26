import React, { useState } from "react";
import {
  Card,
  Stack,
  Row,
  Heading,
  Body,
  Button,
  Modal,
  BottomSheet,
  Spinner,
  Toast,
  Alert,
  Divider,
} from "@groooh/react-native-webify";

export const OverlaysFeedbackDemo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <Card padding="lg">
      <Stack gap="md">
        <Stack gap="xs">
          <Heading variant="h3">Overlays & Feedback</Heading>
          <Body size="xs" color="neutral.500">
            Interactive modal dialogs, bottom sheets, spinners, and toast alerts
          </Body>
        </Stack>

        <Alert variant="info" title="Cross-Platform Modals">
          <Body size="xs" color="neutral.700">
            On React Native, overlays use hardware-accelerated Animated transitions. On Web, they compile to semantic HTML5 dialogs and accessible popovers.
          </Body>
        </Alert>

        <Divider />

        <Stack gap="sm">
          <Body size="sm" weight="semibold">Interactive Triggers</Body>
          <Row gap="sm" wrap>
            <Button
              variant="secondary"
              size="md"
              onPress={() => setModalOpen(true)}
            >
              Open Dialog Modal
            </Button>

            <Button
              variant="secondary"
              size="md"
              onPress={() => setSheetOpen(true)}
            >
              Open Bottom Sheet
            </Button>

            <Button
              variant="ghost"
              size="md"
              onPress={() => setToastVisible(true)}
            >
              Trigger Toast Notification
            </Button>
          </Row>
        </Stack>

        <Divider />

        <Stack gap="xs">
          <Body size="sm" weight="semibold">Loading Spinners</Body>
          <Row align="center" justify="between" wrap>
            <Row align="center" gap="xs">
              <Spinner size="sm" />
              <Body size="xs" color="neutral.500">16px</Body>
            </Row>
            <Row align="center" gap="xs">
              <Spinner size="md" />
              <Body size="xs" color="neutral.500">24px</Body>
            </Row>
            <Row align="center" gap="xs">
              <Spinner size="lg" />
              <Body size="xs" color="neutral.500">36px</Body>
            </Row>
          </Row>
        </Stack>

        {/* Modal Dialog */}
        <Modal
          visible={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Confirm Component Deployment"
        >
          <Stack gap="md" padding="sm">
            <Body color="neutral.600">
              Are you sure you want to deploy the compiled AST artifacts to the production web bundle? This process has zero runtime overhead.
            </Body>
            <Row justify="end" gap="sm" wrap>
              <Button variant="ghost" size="sm" onPress={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                onPress={() => {
                  setModalOpen(false);
                  setToastVisible(true);
                }}
              >
                Confirm Deploy
              </Button>
            </Row>
          </Stack>
        </Modal>

        {/* Bottom Sheet */}
        <BottomSheet
          visible={sheetOpen}
          onClose={() => setSheetOpen(false)}
          title="Quick Actions Menu"
        >
          <Stack gap="md" padding="sm">
            <Body size="sm" color="neutral.600">
              Select an action to perform on this component tree:
            </Body>
            <Button
              variant="secondary"
              size="sm"
              onPress={() => setSheetOpen(false)}
            >
              Export AST JSON
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onPress={() => setSheetOpen(false)}
            >
              Copy JSX Web Code
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onPress={() => setSheetOpen(false)}
            >
              Close Menu
            </Button>
          </Stack>
        </BottomSheet>

        {/* Toast Notification */}
        <Toast
          visible={toastVisible}
          message="AST compiled and deployed with 0 runtime errors!"
          variant="success"
          duration={3000}
          onClose={() => setToastVisible(false)}
        />
      </Stack>
    </Card>
  );
};
