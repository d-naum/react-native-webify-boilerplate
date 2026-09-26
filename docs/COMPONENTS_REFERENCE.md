# @groooh/react-native-webify — Complete Component & Event Reference

Comprehensive guide to every UI element and component in `@groooh/react-native-webify`, detailing design token customization, supported props, compile-time web output, and all interactive tap & change events.

---

## Table of Contents

1. [Architecture & Event Model](#1-architecture--event-model)
2. [Interactive Tap & Selection Events (Quick Guide)](#2-interactive-tap--selection-events-quick-guide)
   - [ProductCard Tap & Item Events](#productcard-tap--item-events)
   - [Item Tap Events Across Primitives](#item-tap-events-across-primitives)
3. [Design Tokens & Customization Engine](#3-design-tokens--customization-engine)
4. [Components Catalog](#4-components-catalog)
   - [Layout & Primitives (`Stack`, `Row`, `Box`, `View`, `Pressable`, `ScrollView`, `FlatList`)](#layout--primitives)
   - [Typography (`Heading`, `Body`, `Caption`)](#typography)
   - [Actions (`Button`)](#actions)
   - [Form & Inputs (`Input`, `PasswordInput`, `SearchInput`, `Textarea`, `OTPInput`, `Select`, `Checkbox`, `Radio`, `RadioGroup`, `Slider`, `DatePicker`, `DateInput`)](#form--inputs)
   - [Data Display (`Card`, `Badge`, `Tag`, `Avatar`, `AvatarGroup`, `Divider`, `Accordion`, `Tabs`, `ProgressBar`, `Skeleton`)](#data-display)
   - [Media & Upload (`Image`, `ImageSlider`, `FileUpload`)](#media--upload)
   - [Overlays & Feedback (`BottomSheet`, `Modal`, `Drawer`, `Alert`, `Spinner`, `Toast`)](#overlays--feedback)
   - [E-Commerce (`Price`, `Rating`, `QuantitySelector`, `ProductCard`)](#e-commerce)

---

## 1. Architecture & Event Model

`@groooh/react-native-webify` provides a unified component API that runs natively on mobile (iOS/Android) and compiles to pure semantic HTML on web with **0 KB runtime overhead**.

### Event Translation on Web
When running the compiler (`webify build`), event handlers are automatically mapped from React Native standards to web DOM conventions:
- `onPress` ➔ `onClick`
- `onLongPress` ➔ `onDoubleClick`
- `onChangeText` ➔ `onChange` (with event value extraction)
- `accessibilityRole` ➔ semantic HTML element / ARIA `role`
- `accessibilityLabel` ➔ `aria-label`

---

## 2. Interactive Tap & Selection Events (Quick Guide)

### ProductCard Tap & Item Events

`<ProductCard>` provides dedicated, non-colliding tap events for every interactive surface:

| Target Surface | Event Prop | Signature | Behavior |
| :--- | :--- | :--- | :--- |
| **Entire Card / Main Image** | `onPress` | `() => void` | Triggers navigation or opens product detail screen |
| **Add to Cart Action** | `onAddToCart` | `() => void` | Fires add-to-cart handler without bubbling to card tap |
| **Wishlist Heart Icon** | `onWishlist` | `() => void` | Toggles wishlist state without triggering card tap |

```tsx
<ProductCard
  title="Sony WH-1000XM5 Wireless Headphones"
  category="Audio & Electronics"
  price={279.99}
  originalPrice={349.99}
  images={[
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600",
  ]}
  rating={4.9}
  ratingCount={2840}
  badgeText="Best Seller"
  isWishlisted={isWishlisted}
  onPress={() => {
    // 🛒 Product card tap event: Navigate to details screen
    navigation.navigate("ProductDetails", { id: "sony-wh-1000xm5" });
  }}
  onAddToCart={() => {
    // 🛍️ Add to cart button tap event
    cartStore.addItem({ id: "sony-wh-1000xm5", qty: 1 });
  }}
  onWishlist={() => {
    // ❤️ Wishlist button tap event
    setIsWishlisted(!isWishlisted);
  }}
/>
```

### Item Tap Events Across Primitives

| Component | Target Item | Event Prop | Callback Signature |
| :--- | :--- | :--- | :--- |
| **`ImageSlider`** | Slide image tap | `onPressImage` | `(index: number) => void` |
| **`ImageSlider`** | Slide transition / dot tap | `onIndexChange` | `(index: number) => void` |
| **`Card`** | Entire card container | `onPress` | `() => void` |
| **`Tabs`** | Tab navigation item | `onChange` | `(tabId: string) => void` |
| **`Accordion`** | Accordion collapse header | `onChange` | `(expandedIds: string[]) => void` |
| **`Avatar`** | Avatar profile image | `onPress` | `() => void` |
| **`Tag`** | Remove "×" icon | `onRemove` | `() => void` |
| **`Rating`** | Individual star item (1–5) | `onChange` | `(newRating: number) => void` |
| **`QuantitySelector`** | Stepper `+` / `−` buttons | `onChange` | `(newQuantity: number) => void` |
| **`Select`** | Dropdown option item | `onValueChange` | `(value: string) => void` |
| **`RadioGroup`** | Radio button item | `onChange` | `(value: string) => void` |
| **`Checkbox`** | Checkbox toggle item | `onChange` | `(checked: boolean) => void` |
| **`DatePicker`** | Calendar day item selection | `onChange` | `(date: Date) => void` |
| **`FileUpload`** | File picker or drop zone | `onSelectFiles` | `(files: UploadedFile[]) => void` |
| **`FileUpload`** | Remove uploaded file item | `onRemoveFile` | `(fileId: string) => void` |

---

## 3. Design Tokens & Customization Engine

### Spacing Scale (`SpacingToken`)
Used in `padding`, `paddingX`, `paddingY`, `gap`, `margin`:
- `"none"`: `0px`
- `"xs"`: `4px`
- `"sm"`: `8px`
- `"md"`: `16px`
- `"lg"`: `24px`
- `"xl"`: `32px`
- `"2xl"`: `48px`
- `"3xl"`: `64px`

### Border Radius Scale (`RadiusToken`)
Used in `radius`:
- `"none"`: `0px`
- `"xs"`: `2px`
- `"sm"`: `4px`
- `"md"`: `8px`
- `"lg"`: `12px`
- `"xl"`: `16px`
- `"full"`: `9999px`

### Color Palette
- `primary`: Shades `50` to `900` (Brand indigo/blue)
- `neutral`: Shades `50` to `900` (Slate gray)
- `success`: `#22c55e`
- `warning`: `#f59e0b`
- `danger`: `#ef4444`

---

## 4. Components Catalog

### Layout & Primitives

#### `<Stack>`
Vertical flexbox container.
* **Web Output**: `<div style="display: flex; flex-direction: column;">`
* **Customization Props**:
  * `gap`: `SpacingToken` (`"none"` | `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"`)
  * `padding`, `paddingX`, `paddingY`: `SpacingToken`
  * `align`: `"start"` | `"center"` | `"end"` | `"stretch"`
  * `justify`: `"start"` | `"center"` | `"end"` | `"between"` | `"around"` | `"evenly"`
  * `style`: `ViewStyle` override
```tsx
<Stack gap="md" padding="lg" align="stretch">
  <Heading variant="h2">Section Header</Heading>
  <Body>Stacked content child elements</Body>
</Stack>
```

#### `<Row>`
Horizontal flexbox container supporting dynamic multi-line wrapping.
* **Web Output**: `<div style="display: flex; flex-direction: row;">`
* **Customization Props**:
  * `gap`: `SpacingToken`
  * `wrap`: `boolean` (wraps overflowing child components to the next line)
  * `align`: `"start"` | `"center"` | `"end"` | `"stretch"`
  * `justify`: `"start"` | `"center"` | `"end"` | `"between"` | `"around"` | `"evenly"`
```tsx
<Row gap="sm" wrap justify="between" align="center">
  <Button variant="secondary" size="md">Cancel</Button>
  <Button variant="primary" size="md">Confirm</Button>
</Row>
```

#### `<Box>` / `<View>`
Primitive container for backgrounds, borders, and margins.
* **Web Output**: `<div style="...">`
* **Customization Props**: `bg`, `backgroundColor`, `radius`, `padding`, `margin`, `style`.
```tsx
<Box bg="#f8fafc" radius="lg" padding="md" style={{ borderWidth: 1, borderColor: "#e2e8f0" }}>
  <Body>Container content</Body>
</Box>
```

#### `<Pressable>`
Low-level touchable primitive.
* **Web Output**: `<button style="...">` or `<div role="button">`
* **Events**: `onPress`, `onLongPress`, `onPressIn`, `onPressOut`.
```tsx
<Pressable onPress={() => handleTap()} hitSlop={8}>
  <Body>Tap Target</Body>
</Pressable>
```

---

### Typography

#### `<Heading>`
Semantic heading typography.
* **Web Output**: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, or `<h6>` based on `variant`.
* **Customization Props**:
  * `variant`: `"h1"` | `"h2"` | `"h3"` | `"h4"` | `"h5"` | `"h6"`
  * `color`: Color string or token (e.g. `"primary.600"`, `"neutral.900"`)
  * `weight`: `"regular"` | `"medium"` | `"semibold"` | `"bold"`
  * `align`: `"left"` | `"center"` | `"right"`
```tsx
<Heading variant="h1" color="neutral.900" weight="bold">Storefront Products</Heading>
```

#### `<Body>`
Paragraph copy element.
* **Web Output**: `<p style="...">`
* **Customization Props**:
  * `size`: `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"`
  * `weight`: `"regular"` | `"medium"` | `"semibold"` | `"bold"`
  * `color`: Color string or token path
```tsx
<Body size="md" color="neutral.600">Standard body description text.</Body>
```

#### `<Caption>`
Micro-copy, helper text, and timestamps.
* **Web Output**: `<span style="...">`
* **Customization Props**: `size`, `color`, `weight`.
```tsx
<Caption color="neutral.400">Updated 2 minutes ago</Caption>
```

---

### Actions

#### `<Button>`
High-performance button with loading spinner, icons, single-line text protection, and row wrapping.
* **Web Output**: `<button type="button">`
* **Customization Props**:
  * `variant`: `"primary"` | `"secondary"` | `"ghost"` | `"danger"` | `"link"`
  * `size`: `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"`
  * `radius`: `RadiusToken` (default `"md"`)
  * `fullWidth`: `boolean` (expands to 100% container width)
  * `loading`: `boolean` (shows spinner and disables interactions)
  * `disabled`: `boolean`
  * `leftIcon` / `rightIcon`: `React.ReactNode`
* **Events**:
  * `onPress`: `() => void`
```tsx
<Button
  variant="primary"
  size="md"
  loading={isSubmitting}
  onPress={() => submitForm()}
>
  Save Changes
</Button>
```

---

### Form & Inputs

#### `<Input>`
Single-line text input with label, floating helper, and validation error messages.
* **Web Output**: `<input type="text">`
* **Customization Props**: `label`, `error`, `helperText`, `size`, `variant` (`"outline"` | `"filled"` | `"flushed"`), `prefix`, `suffix`.
* **Events**:
  * `onChangeText`: `(text: string) => void`
  * `onFocus`: `() => void`
  * `onBlur`: `() => void`
```tsx
<Input
  label="Full Name"
  placeholder="Jane Doe"
  value={name}
  onChangeText={(text) => setName(text)}
  error={nameError}
/>
```

#### `<PasswordInput>`
Password input with built-in eye toggle for revealing/hiding plaintext.
* **Web Output**: `<input type="password">`
* **Events**: `onChangeText: (text: string) => void`.
```tsx
<PasswordInput
  label="Account Password"
  value={password}
  onChangeText={setPassword}
/>
```

#### `<SearchInput>`
Search bar with magnifying glass icon and instant clear button.
* **Web Output**: `<input type="search">`
* **Events**:
  * `onChangeText`: `(text: string) => void`
  * `onClear`: `() => void`
```tsx
<SearchInput
  placeholder="Search inventory..."
  value={query}
  onChangeText={setQuery}
  onClear={() => setQuery("")}
/>
```

#### `<Textarea>`
Multiline text entry area.
* **Web Output**: `<textarea>`
* **Customization Props**: `rows`, `minHeight`, `maxHeight`.
* **Events**: `onChangeText: (text: string) => void`.
```tsx
<Textarea
  label="Customer Feedback"
  rows={4}
  value={feedback}
  onChangeText={setFeedback}
/>
```

#### `<OTPInput>`
Auto-advancing numeric PIN verification boxes.
* **Customization Props**: `length` (default `6`).
* **Events**:
  * `onCodeChanged`: `(code: string) => void`
  * `onCodeFilled`: `(code: string) => void` (called when all digits are entered)
```tsx
<OTPInput
  length={6}
  onCodeFilled={(pin) => verifyTwoFactor(pin)}
/>
```

#### `<Select>`
Accessible dropdown selector.
* **Web Output**: `<select>` with `<option>` elements
* **Customization Props**: `options: { label: string, value: string }[]`, `placeholder`.
* **Events**:
  * `onValueChange`: `(value: string) => void`
```tsx
<Select
  label="Region"
  options={[
    { label: "North America", value: "NA" },
    { label: "Europe", value: "EU" },
    { label: "Asia-Pacific", value: "APAC" },
  ]}
  value={selectedRegion}
  onValueChange={(val) => setSelectedRegion(val)}
/>
```

#### `<Checkbox>`
Accessible checkbox control with check animation.
* **Web Output**: `<input type="checkbox">`
* **Events**:
  * `onChange`: `(checked: boolean) => void`
```tsx
<Checkbox
  label="I agree to Terms & Conditions"
  checked={agreed}
  onChange={(val) => setAgreed(val)}
/>
```

#### `<RadioGroup>`
Mutually exclusive radio options.
* **Web Output**: `<fieldset>` with `<input type="radio">`
* **Customization Props**: `options: { label: string, value: string }[]`, `direction` (`"row"` | `"column"`).
* **Events**:
  * `onChange`: `(value: string) => void`
```tsx
<RadioGroup
  options={[
    { label: "Standard Shipping (3-5 days)", value: "standard" },
    { label: "Express Overnight", value: "express" },
  ]}
  value={shippingMethod}
  onChange={(val) => setShippingMethod(val)}
/>
```

#### `<Slider>`
Continuous numerical slider.
* **Web Output**: `<input type="range">`
* **Customization Props**: `min`, `max`, `step`, `value`.
* **Events**:
  * `onValueChange`: `(val: number) => void`
```tsx
<Slider
  min={0}
  max={100}
  step={5}
  value={volume}
  onValueChange={(val) => setVolume(val)}
/>
```

#### `<DatePicker>` & `<DateInput>`
Comprehensive date calendar modal and input with fast Month/Year selectors.
* **Customization Props**: `value: Date`, `minDate`, `maxDate`, `format`.
* **Events**:
  * `onChange`: `(date: Date) => void`
```tsx
<DatePicker
  value={selectedDate}
  onChange={(date) => setSelectedDate(date)}
/>
```

---

### Data Display

#### `<Card>`
Elevated container supporting clickable card behavior.
* **Web Output**: `<article style="...">`
* **Customization Props**:
  * `elevation`: `0` | `1` | `2` | `3` | `4`
  * `padding`: `SpacingToken`
  * `radius`: `RadiusToken`
* **Events**:
  * `onPress`: `() => void` (makes entire card clickable with touch feedback)
```tsx
<Card elevation={2} padding="md" onPress={() => console.log("Card tapped!")}>
  <Body>Clickable card container</Body>
</Card>
```

#### `<Badge>`
Status indicator pill.
* **Web Output**: `<span style="...">`
* **Customization Props**: `variant` (`"primary"` | `"secondary"` | `"success"` | `"warning"` | `"danger"` | `"neutral"`), `size` (`"sm"` | `"md"` | `"lg"`).
```tsx
<Badge variant="success" label="Active" />
```

#### `<Tag>`
Removable metadata chip.
* **Customization Props**: `label`, `variant`, `size`.
* **Events**:
  * `onRemove`: `() => void` (fires when the "×" remove icon is tapped)
```tsx
<Tag label="React Native" variant="primary" onRemove={() => removeTag("React Native")} />
```

#### `<Avatar>` & `<AvatarGroup>`
User portrait with fallback initials, online status badge, and stack grouping.
* **Customization Props**: `source` (URI), `name`, `size` (`"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"`), `status` (`"online"` | `"offline"` | `"busy"`).
* **Events**:
  * `onPress`: `() => void` (fires when avatar is tapped, e.g., to upload photo)
```tsx
<Avatar
  name="Alex Developer"
  size="lg"
  status="online"
  onPress={() => openPhotoPicker()}
/>
```

#### `<Accordion>`
Collapsible expandable sections.
* **Web Output**: `<details>` and `<summary>` elements
* **Customization Props**: `items: { id: string, title: string, content: ReactNode }[]`, `allowMultiple`.
* **Events**:
  * `onChange`: `(expandedIds: string[]) => void`
```tsx
<Accordion
  items={[
    { id: "1", title: "What is AOT Compilation?", content: <Body>Zero runtime web code.</Body> },
  ]}
  onChange={(ids) => console.log("Expanded IDs:", ids)}
/>
```

#### `<Tabs>`
Segmented tab bar.
* **Customization Props**: `items: { id: string, label: string }[]`, `activeId`.
* **Events**:
  * `onChange`: `(tabId: string) => void` (fires on tab tap)
```tsx
<Tabs
  items={[
    { id: "overview", label: "Overview" },
    { id: "analytics", label: "Analytics" },
  ]}
  activeId={activeTab}
  onChange={(id) => setActiveTab(id)}
/>
```

---

### Media & Upload

#### `<Image>`
Responsive image element.
* **Web Output**: `<img>` with automatic dimensions and `alt` tags.
```tsx
<Image source={{ uri: "https://example.com/photo.jpg" }} width={300} height={200} radius="md" />
```

#### `<ImageSlider>`
Touch-enabled image carousel with swipe gestures, auto-play, navigation arrows, and dots.
* **Customization Props**:
  * `images`: `string[]`
  * `height`: `number | string` (default `200`)
  * `autoPlay`: `boolean`
  * `interval`: `number` (milliseconds, default `3500`)
  * `showDots`: `boolean`
  * `showArrows`: `boolean`
  * `showCounter`: `boolean`
* **Events**:
  * `onPressImage`: `(index: number) => void` (fires on image tap)
  * `onIndexChange`: `(index: number) => void` (fires on slide change)
```tsx
<ImageSlider
  images={productImages}
  height={220}
  showDots={true}
  showArrows={true}
  onPressImage={(index) => openFullscreenPreview(index)}
  onIndexChange={(index) => console.log("Active slide:", index)}
/>
```

#### `<FileUpload>`
Tap or drag-and-drop file uploader with type validation and size limits.
* **Customization Props**: `accept`, `maxFiles`, `maxSizeMB`, `title`, `description`.
* **Events**:
  * `onSelectFiles`: `(files: UploadedFile[]) => void` (fires when files are chosen)
  * `onRemoveFile`: `(fileId: string) => void` (fires when a file item remove icon is tapped)
```tsx
<FileUpload
  maxFiles={5}
  maxSizeMB={10}
  accept="image/*,application/pdf"
  onSelectFiles={(files) => uploadToServer(files)}
  onRemoveFile={(fileId) => deleteFile(fileId)}
/>
```

---

### Overlays & Feedback

#### `<Toast>`
Animated toast notification with auto-dismiss and accessibility support.
* **Customization Props**: `message`, `variant` (`"info"` | `"success"` | `"warning"` | `"error"`), `position` (`"top"` | `"bottom"`), `duration`.
* **Events**:
  * `onClose`: `() => void`
```tsx
<Toast
  message="Changes saved successfully!"
  variant="success"
  onClose={() => setToastVisible(false)}
/>
```

#### `<Modal>`
Accessible dialog modal with backdrop.
* **Web Output**: `<dialog>` element
* **Customization Props**: `visible: boolean`, `title: string`.
* **Events**:
  * `onClose`: `() => void`
```tsx
<Modal visible={isModalOpen} onClose={() => setModalOpen(false)} title="Confirm Action">
  <Body>Are you sure you want to proceed?</Body>
</Modal>
```

#### `<BottomSheet>`
Mobile bottom sheet modal with downward swipe drag gesture.
* **Customization Props**: `visible: boolean`, `title?: string`, `height?: number`.
* **Events**:
  * `onClose`: `() => void`
```tsx
<BottomSheet visible={isSheetOpen} onClose={() => setSheetOpen(false)} title="Actions">
  <Stack gap="sm">
    <Button variant="secondary" onPress={() => setSheetOpen(false)}>Option 1</Button>
  </Stack>
</BottomSheet>
```

---

### E-Commerce

#### `<ProductCard>`
Full product tile with built-in image slider, wishlist heart, category, ratings, comparison price, and add-to-cart action.
* **Web Output**: `<article class="product-card">` with `<img>`, `<h3>`, `<button>`
* **Customization Props**:
  * `title`: `string`
  * `price`: `number | string`
  * `originalPrice`: `number | string`
  * `currency`: `string` (default `"$"` )
  * `images`: `string[]` (renders `<ImageSlider>`)
  * `imageUri`: `string` (single fallback image)
  * `rating`: `number` (0–5)
  * `ratingCount`: `number | string`
  * `badgeText`: `string` (e.g. `"SALE"`, `"BESTSELLER"`)
  * `category`: `string`
  * `isWishlisted`: `boolean`
* **Events**:
  * `onPress`: `() => void` (fires when card or slide image is tapped)
  * `onAddToCart`: `() => void` (fires when Add to Cart button is tapped)
  * `onWishlist`: `() => void` (fires when wishlist heart button is tapped)
```tsx
<ProductCard
  title="Sony WH-1000XM5 Wireless Headphones"
  category="Audio & Electronics"
  price={279.99}
  originalPrice={349.99}
  images={productImages}
  rating={4.9}
  ratingCount={2840}
  badgeText="Best Seller"
  isWishlisted={isWishlisted}
  onPress={() => navigateToDetail()}
  onAddToCart={() => addToCart()}
  onWishlist={() => toggleWishlist()}
/>
```

#### `<Price>`
Formatted currency price with optional strike-through and discount calculation.
* **Customization Props**: `amount`, `originalAmount`, `currency`, `size` (`"sm"` | `"md"` | `"lg"` | `"xl"`).
```tsx
<Price amount={279.99} originalAmount={349.99} currency="$" size="lg" />
```

#### `<Rating>`
Star rating with read-only and interactive rating modes.
* **Customization Props**: `value`, `count`, `readOnly` (default `true`), `size`.
* **Events**:
  * `onChange`: `(newRating: number) => void` (fires when a star is clicked)
```tsx
<Rating
  value={userRating}
  readOnly={false}
  size="lg"
  onChange={(newRating) => setUserRating(newRating)}
/>
```

#### `<QuantitySelector>`
Cart item quantity stepper with bounds protection.
* **Customization Props**: `value`, `min` (default 1), `max` (default 99), `step` (default 1), `size`.
* **Events**:
  * `onChange`: `(newQuantity: number) => void` (fires on `+` or `−` button tap)
```tsx
<QuantitySelector
  value={quantity}
  min={1}
  max={10}
  onChange={(qty) => setQuantity(qty)}
/>
```
