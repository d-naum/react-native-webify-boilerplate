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
  Image,
  Accordion,
  Divider,
  Avatar,
  FileUpload,
  ImageSlider,
  Toast,
} from "@groooh/react-native-webify";

export const MediaShowcase = () => {
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleAvatarUpload = () => {
    setToastMsg("Profile photo upload triggered!");
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleFileUpload = () => {
    setToastMsg("Upload dialog opened!");
    setTimeout(() => setToastMsg(null), 3500);
  };

  const sliderImages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  ];

  const accordionItems = [
    {
      id: "ast-compilation",
      title: "How does build-time compilation work?",
      content: (
        <Body size="sm" color="neutral.600">
          The TypeScript compiler parser walks the AST of your React Native components and replaces native primitives (View, Text, Pressable) with semantic HTML5 elements (div, p, button, article) and converts design tokens into inline CSS styles at build time.
        </Body>
      ),
    },
    {
      id: "runtime-overhead",
      title: "Is there any runtime wrapper or shim?",
      content: (
        <Body size="sm" color="neutral.600">
          Zero KB. Unlike react-native-web which ships an entire compatibility runtime, @groooh/react-native-webify compiles down to pure React web code with zero runtime dependencies.
        </Body>
      ),
    },
    {
      id: "tokens",
      title: "Are design tokens customized per theme?",
      content: (
        <Body size="sm" color="neutral.600">
          Yes. Spacing, typography, color palettes, and border radius tokens are centralized in TypeScript modules and resolved statically at compilation time.
        </Body>
      ),
    },
  ];

  return (
    <Stack gap="lg">
      {toastMsg && (
        <Toast
          message={toastMsg}
          variant="success"
          onClose={() => setToastMsg(null)}
        />
      )}

      {/* Main Media & Upload Card */}
      <Card padding="lg">
        <Stack gap="lg">
          <Row justify="between" align="center">
            <Stack gap="xs" style={{ flex: 1, marginRight: 8 }}>
              <Heading variant="h3">Media, Slider & Upload</Heading>
              <Body size="xs" color="neutral.500">
                Responsive image slider, editable avatar with upload badge, and file upload zone
              </Body>
            </Stack>
            <Badge variant="primary" label="Interactive" />
          </Row>

          {/* Interactive Image Slider */}
          <Stack gap="xs">
            <Body weight="bold" size="sm" color="neutral.700">
              ImageSlider Carousel
            </Body>
            <ImageSlider
              images={sliderImages}
              height={200}
              showDots
              showArrows
              showCounter
            />
          </Stack>

          <Divider />

          {/* Avatar Upload & File Upload Row */}
          <Row gap="lg" align="start" style={{ flexWrap: "wrap" }}>
            {/* 1. Profile Avatar with Edit/Upload Icon */}
            <Stack gap="sm" style={{ flex: 1, minWidth: 260 }}>
              <Body weight="bold" size="sm" color="neutral.700">
                Profile Photo (Editable Avatar)
              </Body>
              <Card padding="md" style={{ backgroundColor: "#f9fafb" }}>
                <Row align="center" gap="md">
                  <Avatar
                    size="xl"
                    name="Sarah Connor"
                    uri="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
                    editable
                    onUpload={handleAvatarUpload}
                  />
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Body weight="bold" size="sm">Sarah Connor</Body>
                    <Body size="xs" color="neutral.500">sarah.connor@example.com</Body>
                    <Body size="xs" color="primary.600">Click camera badge to change photo</Body>
                  </Stack>
                </Row>
              </Card>
            </Stack>

            {/* 2. Drag & Drop File Upload */}
            <Stack gap="sm" style={{ flex: 1, minWidth: 260 }}>
              <Body weight="bold" size="sm" color="neutral.700">
                FileUpload Dropzone
              </Body>
              <FileUpload
                label="Attachment Upload"
                helperText="PNG, JPG, PDF up to 10MB"
                onUpload={handleFileUpload}
              />
            </Stack>
          </Row>

          <Row gap="xs" wrap align="center">
            <Tag variant="success" label="Zero Runtime" />
            <Tag variant="primary" label="TypeScript 5.9" />
            <Tag variant="warning" label="React 19" />
            <Tag variant="neutral" label="HTML5 Semantic" />
          </Row>

          <Divider />

          <Stack gap="xs">
            <Heading variant="h4">Frequently Asked Questions</Heading>
            <Accordion items={accordionItems} defaultOpen={["ast-compilation"]} />
          </Stack>

          <Divider />

          <Row justify="end">
            <Button variant="secondary" size="md">
              View Specification
            </Button>
          </Row>
        </Stack>
      </Card>
    </Stack>
  );
};

