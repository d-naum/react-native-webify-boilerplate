import React, { useState } from "react";
import {
  Card,
  Stack,
  Row,
  Heading,
  Body,
  Badge,
  Button,
  Divider,
  Price,
  Rating,
  QuantitySelector,
  ProductCard,
  Toast,
} from "@groooh/react-native-webify";

export const EcommerceShowcase = () => {
  const [quantity, setQuantity] = useState(1);
  const [userRating, setUserRating] = useState(4.8);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const unitPrice = 279.99;
  const originalUnitPrice = 349.99;
  const totalPrice = (unitPrice * quantity).toFixed(2);
  const totalSavings = ((originalUnitPrice - unitPrice) * quantity).toFixed(2);

  const handleAddToCart = () => {
    setToastMessage(`Added ${quantity}x Premium Audio Pro to cart ($${totalPrice})`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <Stack gap="lg">
      {/* Toast Notification */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          variant="success"
          onClose={() => setToastMessage(null)}
        />
      )}

      {/* Main E-Commerce Card */}
      <Card padding="lg">
        <Stack gap="md">
          {/* Header */}
          <Row justify="between" align="center">
            <Stack gap="xs">
              <Row align="center" gap="sm">
                <Heading variant="h3">E-Commerce Primitives</Heading>
                <Badge variant="primary" label="New" />
              </Row>
              <Body size="sm" color="neutral.500">
                Production-ready e-commerce elements with zero runtime overhead on web
              </Body>
            </Stack>
          </Row>

          <Divider />

          {/* Product & Interactive Controls Layout */}
          <Row gap="md" align="start" style={{ flexWrap: "wrap" }}>
            {/* 1. Full Product Card */}
            <Stack gap="sm" style={{ flex: 1, minWidth: 280 }}>
              <Body weight="bold" size="sm" color="neutral.700">
                ProductCard Component
              </Body>
              <ProductCard
                title="Sony WH-1000XM5 Wireless Noise-Canceling Headphones"
                category="Audio & Electronics"
                price={unitPrice}
                originalPrice={originalUnitPrice}
                images={[
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
                ]}
                rating={4.9}
                ratingCount={2840}
                badgeText="Best Seller"
                isWishlisted={isWishlisted}
                onWishlist={() => setIsWishlisted(!isWishlisted)}
                onAddToCart={handleAddToCart}
              />
            </Stack>

            {/* 2. Interactive Primitives & Order Calculator */}
            <Stack gap="md" style={{ flex: 1, minWidth: 280 }}>
              {/* Standalone Interactive Rating */}
              <Card padding="md">
                <Stack gap="sm">
                  <Row justify="between" align="center">
                    <Body weight="bold" size="sm">
                      Interactive Rating
                    </Body>
                    <Badge variant="neutral" label={`${userRating.toFixed(1)} / 5.0`} />
                  </Row>
                  <Body size="xs" color="neutral.500">
                    Click stars to set custom rating:
                  </Body>
                  <Rating
                    value={userRating}
                    count={142}
                    readOnly={false}
                    onChange={(r) => setUserRating(r)}
                    size="lg"
                  />
                </Stack>
              </Card>

              {/* Standalone Quantity Selector */}
              <Card padding="md">
                <Stack gap="sm">
                  <Row justify="between" align="center">
                    <Body weight="bold" size="sm">
                      Quantity Selector Stepper
                    </Body>
                    <Body size="xs" color="neutral.500">
                      Max: 10 units
                    </Body>
                  </Row>
                  <Row align="center" gap="md" wrap>
                    <QuantitySelector
                      value={quantity}
                      min={1}
                      max={10}
                      size="md"
                      onChange={(q) => setQuantity(q)}
                    />
                    <Body size="xs" color="neutral.600">
                      {quantity} {quantity === 1 ? "unit" : "units"} selected
                    </Body>
                  </Row>
                </Stack>
              </Card>

              {/* Standalone Price Hierarchy */}
              <Card padding="md">
                <Stack gap="sm">
                  <Body weight="bold" size="sm">
                    Price Variants & Hierarchy
                  </Body>
                  <Stack gap="xs">
                    <Row align="center" justify="between" wrap gap="xs">
                      <Body size="xs" color="neutral.500">Extra Large (Hero):</Body>
                      <Price amount={499.00} originalAmount={599.00} size="lg" />
                    </Row>
                    <Row align="center" justify="between" wrap gap="xs">
                      <Body size="xs" color="neutral.500">Large (Feature):</Body>
                      <Price amount={199.99} originalAmount={249.99} size="md" />
                    </Row>
                    <Row align="center" justify="between" wrap gap="xs">
                      <Body size="xs" color="neutral.500">Medium (Default):</Body>
                      <Price amount={89.50} originalAmount={110.00} size="sm" />
                    </Row>
                    <Row align="center" justify="between" wrap gap="xs">
                      <Body size="xs" color="neutral.500">Small (Cart row):</Body>
                      <Price amount={24.99} size="sm" />
                    </Row>
                  </Stack>
                </Stack>
              </Card>

              {/* Real-time Order Summary */}
              <Card padding="md" style={{ backgroundColor: "#f9fafb" }}>
                <Stack gap="sm">
                  <Row justify="between" align="center">
                    <Heading variant="h4">Cart Summary</Heading>
                    <Badge variant="success" label={`Save $${totalSavings}`} />
                  </Row>

                  <Row justify="between">
                    <Body size="sm" color="neutral.600">Items ({quantity}):</Body>
                    <Price amount={totalPrice} size="sm" />
                  </Row>

                  <Row justify="between">
                    <Body size="sm" color="neutral.600">Standard Shipping:</Body>
                    <Body size="sm" weight="semibold" color="success.600">FREE</Body>
                  </Row>

                  <Divider />

                  <Row justify="between" align="center">
                    <Body weight="bold" size="md">Estimated Total:</Body>
                    <Price amount={totalPrice} size="lg" />
                  </Row>

                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    onPress={handleAddToCart}
                  >
                    Proceed to Checkout
                  </Button>
                </Stack>
              </Card>
            </Stack>
          </Row>
        </Stack>
      </Card>
    </Stack>
  );
};
