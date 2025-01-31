# Chak-Blocks (Beta)

Chak-Blocks는 리액트 기반의 UI 라이브러리입니다 ✨
<br/>
블록(컴포넌트)을 조립하여 빠르게 페이지를 만들어보세요. 🟦 🟥 🟨 &nbsp;&nbsp;➡️ &nbsp;🏡

### Features ✨

- 🍦 서버 컴포넌트, 클라이언트 컴포넌트 모두 지원합니다. Vanilla Extract로 추출해 낸 순수한 CSS를 제공합니다.
- 📝 시맨틱한 마크업을 지원합니다. HTML 엘리먼트 타입은 물론, 엘리먼트 속성도 자유롭게 지정할 수 있습니다. 시맨틱한 마크업으로 웹 접근성과 SEO를 향상 시킬 수 있습니다.
- 🗿 예측 가능한 정적 타입을 지원합니다. 모든 코드는 Typescript로 작성되었습니다.
- 📦 ESM, CJS 모듈을 지원합니다.
  <br/>

---

### UI

Chak-Blocks에서 제공하는 UI입니다.
<br/>
🎨 [Chak Block의 스토리북](https://main--678d86d905c56bc74be0b58c.chromatic.com)에서 모든 컴포넌트를 직접 확인해보세요.

#### Typography

유연한 사용을 위해 `Heading Level`에 고정된 스타일 없이 `as`, `variant` props를 조합하여 커스터마이징이 가능합니다.
<br/>
HTML 엘리먼트와 스타일을 조합하여 다양한 Typography를 만들어보세요.

| Prop                 | Type                                                                                               | Description                                 | Notes                             |
| -------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------- |
| `variant`            | `"title1"`, `"title2"`, `"title3"`, `"title4"`, `"title5"`, `"text1"`, `"text2"`, `text3`          | Typography의 스타일을 지정합니다.           | `Optional`, 기본 값은 `text1`     |
| `theme`              | `"primary"`, `"info"`, `"secondary"`, `"tertiary"`, `"success"`, `"error"`, `"warning"`, `"light"` | Typography의 테마(색상)을 지정합니다.       | `Optional`, 기본 값은 `"primary"` |
| `mark`               | `boolean`                                                                                          | `mark` 스타일 지정 여부입니다.              | `Optional`, 기본 값은 `false`     |
| `strong`             | `boolean`                                                                                          | `strong(굵은 글꼴)` 스타일 지정 여부입니다. | `Optional`, 기본 값은 `false`     |
| `italic`             | `boolean`                                                                                          | `italic (기울임)` 스타일 지정 여부입니다.   | `Optional`, 기본 값은 `false`     |
| `color`              | `string`                                                                                           | Typography 색상 값을 지정합니다.            | `Optional`, 기본 값은 `undefined` |
| `as`                 | `ElementType` 값입니다.                                                                            | Typography의 엘리먼트 타입을 지정합니다.    | `Optional`, 기본 값은 `"p"`       |
| `children`           | `ReactNode`                                                                                        | Typography의 자식 요소입니다.               | `* Required`                      |
| `...HTML attributes` |                                                                                                    | HTML 엘리먼트의 속성을 지원합니다.          | `Optional`                        |

<br/>

---

#### Button

<br/>

| Prop                    | Type                                                                  | Description                                | Notes                               |
| ----------------------- | --------------------------------------------------------------------- | ------------------------------------------ | ----------------------------------- |
| `variant`               | `"contained"`, `"outlined"`, `"text"`                                 | Button의 스타일 값입니다.                  | `Optional`, 기본 값은 `"contained"` |
| `size`                  | `"sm"`, `"md"`, `"lg"`                                                | Button의 사이즈 값입니다.                  | `Optional`, 기본 값은 `"md"`        |
| `theme`                 | `"primary"`, `"success"`, `"error"`, `"warning"`, `"light"`, `"dark"` | Button의 테마(색상) 값입니다.              | `Optional`, 기본 값은 `"primary"`   |
| `as`                    | `ElementType`                                                         | `HTML Element`                             | `Optional`, 기본 값은 `"button"`    |
| `... button attributes` |                                                                       | 그 외 button 엘리먼트의 속성을 지원합니다. |                                     |

<br/>

---

#### Tag

| Prop                 | Type                                                                  | Description                        | Notes                              |
| -------------------- | --------------------------------------------------------------------- | ---------------------------------- | ---------------------------------- |
| `variant`            | `"outlined"`, `"contained"`                                           | Tag의 스타일을 지정합니다.         | `Optional`, 기본 값은 `"outlined"` |
| `size`               | `"sm"`, `"md"`, `"lg"`                                                | Tag의 사이즈를 지정합니다.         | `Optional`, 기본 값은 `"md"`       |
| `theme`              | `"primary"`, `"success"`, `"error"`, `"warning"`, `"light"`, `"dark"` | Tag의 테마(색상)을 지정합니다.     | `Optional`, 기본 값은 `"primary"`  |
| `as`                 | `ElementType`                                                         | HTML 엘리먼트 타입을 지정합니다.   | `Optional`, 기본 값은 `"div"`      |
| `children`           | `ReactNode`                                                           | Tag의 자식 요소입니다.             | `* Required`                       |
| `...HTML attributes` |                                                                       | HTML 엘리먼트의 속성을 지원합니다. | `Optional`                         |

<br/>

---

#### Divider

| Prop                 | Type                                                                                               | Description                        | Notes                                                   |
| -------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------- |
| `theme`              | `"primary"`, `"info"`, `"secondary"`, `"tertiary"`, `"success"`, `"error"`, `"warning"`, `"light"` | Divider의 테마(색상) 값입니다.     | `Optional`, 기본 값은 `"primary"`                       |
| `direction`          | `"vertical"`, `"horizontal"`                                                                       | Divider의 방향을 지정합니다.       | `Optional`, 기본 값은 `"horizontal"`                    |
| `color`              | `string`                                                                                           | Divider의 색상을 지정합니다.       | `Optional`, `"#000"` 등의 색상 값을 사용할 수 있습니다. |
| `as`                 | `ElementType`                                                                                      | HTML 엘리먼트 타입을 지정합니다.   | `Optional`, 기본 값은 `"hr"`                            |
| `size`               | `string`                                                                                           | Divider의 두께를 지정합니다.       | `Optional`, 기본 값은 `"1px"`                           |
| `...HTML attributes` |                                                                                                    | HTML 엘리먼트의 속성을 지원합니다. | `Optional`                                              |

 <br/>

---

#### ColorChip

| Prop                  | Type                                                                  | Description                        | Notes                                             |
| --------------------- | --------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------- |
| `theme`               | `"primary"`, `"success"`, `"error"`, `"warning"`, `"light"`, `"dark"` | ColorChip의 테마(색상) 값입니다.   | `Optional`, 기본 값은 "primary"                   |
| `size`                | `"sm"`, `"md"`, `"lg"`                                                | ColorChip의 사이즈 값입니다.       | `Optional`, 기본 값은 `"md"`                      |
| `color`               | `string`                                                              | ColorChip의 색상 값입니다.         | `Optional`, `theme`보다 높은 우선순위를 가집니다. |
| `as`                  | `ElementType`                                                         | HTML 엘리먼트 타입 값입니다.       | `Optional`, 기본 값은 `"div"`                     |
| `... HTML attributes` |                                                                       | HTML 엘리먼트의 속성을 지원합니다. |                                                   |

<br/>

---

#### Icon

| Prop                 | Type                                                                                                                                                    | Description                             | Notes                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | --------------------------------- |
| `name`               | `"arrow"`, `"book"`, `"chevron"`, `"infomation"`, `"warning"`, `"star-filled"`, `"check"`, `"warning-triangle"`, `"heart"`, `"heart-filled"`, `"close"` | Icon의 이름입니다.                      | `* Required`                      |
| `size`               | `number`                                                                                                                                                | Icon의 사이즈입니다.                    | `Optional`, 기본 값은 `24`        |
| `color`              | string                                                                                                                                                  | Icon의 색상입니다.                      | `Optional`, 기본 값은 `"#1a202c"` |
| `... SVG Attributes` |                                                                                                                                                         | 그 외 SVG 엘리먼트의 속성을 지원합니다. |                                   |

<br/>

---

#### RatingStar

| Prop                | Type                   | Description                              | Notes                         |
| ------------------- | ---------------------- | ---------------------------------------- | ----------------------------- |
| `value`             | `number`               | 별점 값입니다.                           | `* Required`                  |
| size                | `"sm"`, `"md"`, `"lg"` | RatingStar의 사이즈 값입니다.            | `Optional`, 기본 값은 `"md"`  |
| as                  | `ElementType`          | HTML 엘리먼트 타입 값입니다.             | `Optional`, 기본 값은 `"div"` |
| ... HTML attributes |                        | 그 외 HTML 엘리먼트의 속성을 지원합니다. |                               |

<br/>

---

#### Card

| Prop                  | Type                                   | Description                              | Notes                              |
| --------------------- | -------------------------------------- | ---------------------------------------- | ---------------------------------- |
| `variant`             | `"elevated"`, `"filled"`, `"outlined"` | Card의 스타일을 지정합니다.              | `Optional`, 기본 값은 `"elevated"` |
| `color `              | `string`                               | Card의 색상 값을 지정합니다.             | `Optional`, 기본 값은 `"white"`    |
| `borderColor`         | `string`                               | Card의 테두리 색상을 지정합니다.         | `Optional`, 기본 값은 `"#e2e8f0"`  |
| `rounded `            | `boolean`                              | Card의 둥근 모서리 여부입니다.           | `Optional`, 기본 값은 `false`      |
| `children`            | `React.ReactNode `                     | Card의 자식 요소입니다.                  | `* Required`                       |
| `as `                 | `ElementType`                          | HTML 엘리먼트 타입 값입니다.             | `Optional`, 기본 값은 "article"    |
| `... HTML attributes` |                                        | 그 외 HTML 엘리먼트의 속성을 지원합니다. |                                    |

<br/>

---

#### Skeleton

| Prop                 | Type                    | Description                        | Notes                            |
| -------------------- | ----------------------- | ---------------------------------- | -------------------------------- |
| `width`              | `string`                | Skeleton의 너비 값입니다.          | `Optional`, 기본 값은 `100%`     |
| height               | `string`                | Skeleton의 높이 값입니다.          | `Optional`, 기본 값은 `100%`     |
| variant              | `"outlined"`,`"filled"` | Skeleton의 스타일 값입니다.        | `Optional`, 기본 값은 `"filled"` |
| `as`                 | `ElementType`           | HTML 엘리먼트 타입 값입니다.       | `Optional`, 기본 값은 `"div"`    |
| `...HTML attributes` |                         | HTML 엘리먼트의 속성을 지원합니다. |                                  |

<br/>

---

#### Input

| Prop                  | Type                                                         | Description                        | Notes                                      |
| --------------------- | ------------------------------------------------------------ | ---------------------------------- | ------------------------------------------ |
| `inputSize`           | `"sm"`,`"md"`, `"lg"`                                        | Input의 사이즈 값입니다.           | `Optional`, 기본 값은 `"md"`               |
| `theme`               | `"primary"`, `"active"`, `"success"`, `"error"`, `"warning"` | Input의 테마(색상) 값입니다.       | `Optional`, 기본 값은 `"primary"`          |
| `placeholder`         | `string`                                                     | Input의 placeholder입니다.         | `Optional`, 기본 값은 `값을 입력해주세요.` |
| `... HTML attributes` |                                                              | HTML 엘리먼트의 속성을 지원합니다. |                                            |

<br/>

---

#### InputField

| Prop                  | Type                         | Description                         | Notes                                |
| --------------------- | ---------------------------- | ----------------------------------- | ------------------------------------ |
| `label`               | `string`                     | InputField의 레이블 텍스트입니다.   | `* Required`                         |
| `helperText`          | `string`                     | 입력 필드에 대한 도움 메시지입니다. | `Optiona`l                           |
| `"error"Text`         | `string`                     | 입력 필드에 대한 오류 메시지입니다. | `Optional`                           |
| `isRequired`          | `boolean`                    | 필수 입력 여부를 나타내는 값입니다. | `Optional`, 기본 값은 `false`        |
| `direction`           | `"horizontal"`, `"vertical"` | 라벨과 입력 필드의 배치 방향입니다. | `Optional`, 기본 값은 ""horizontal"" |
| `as `                 | `ElementType`                | HTML 엘리먼트 타입 값입니다.        | `Optional`, 기본 값은 `"div"`        |
| ... `HTML attributes` |                              | HTML 엘리먼트의 속성을 지원합니다.  |                                      |

<br/>

---

#### Accordion

정보를 계층적으로 표현할 때 유용한 Accordion UI 입니다.
<br/>
다양한 상황에 유연하게 대응하기 위해 컴파운드 패턴으로 구현되었습니다.
<br/>
기본으로 제공되는 Accordion 컴포넌트 구성으로 쉽게, <br/>
혹은 커스터마이징를 통해 다양한 Accordion UI를 만들어보세요.

###### 기본 컴포넌트 구성

```tsx
<Accordion initActiveItems={["2"]} style={{ width: "500px" }}>
  <Accordion.Item
    accordionKey="1"
    renderChildren={(accordionKey, isActive) => {
      return (
        <>
          <Accordion.Button accordionKey={accordionKey} isActive={isActive}>
            <Accordion.Label accordionKey={accordionKey} isActive={isActive}>
              Title 1
            </Accordion.Label>
            <Accordion.Icon accordionKey={accordionKey} isActive={isActive} />
          </Accordion.Button>
          <Accordion.Content accordionKey={accordionKey} isActive={isActive}>
            //...
          </Accordion.Content>
        </>
      );
    }}
  />
  ...
  <Accordion.Item
    accordionKey="4"
    renderChildren={(accordionKey, isActive) => {
      return (
        <>
          <Accordion.Button accordionKey={accordionKey} isActive={isActive}>
            <Accordion.Label accordionKey={accordionKey} isActive={isActive}>
              Title 4
            </Accordion.Label>
            <Accordion.Icon accordionKey={accordionKey} isActive={isActive} />
          </Accordion.Button>
          <Accordion.Content accordionKey={accordionKey} isActive={isActive}>
            //...
          </Accordion.Content>
        </>
      );
    }}
  />
</Accordion>
```

###### Accordion

Accordion 컴포넌트의 최상위 요소입니다.

| Prop              | Type                          | Description                                                           | Notes                       |
| ----------------- | ----------------------------- | --------------------------------------------------------------------- | --------------------------- |
| `initActiveItems` | `string[]`                    | 아코디언에서 초기 활성화된 항목들을 지정할 `accordionKey` 배열입니다. | `Optional`                  |
| `size`            | `"sm"`, `"md"`, `"lg"`        | 아코디언의 크기를 지정합니다.                                         | `Optional`, 기본값은 `"md"` |
| `children`        | `ReactNode`                   | 아코디언 항목의 자식 요소입니다.                                      | `* Required`                |
| `as`              | `ElementType`                 | HTML 엘리먼트 타입 값입니다.                                          | `Optional`, 기본값은 `"ul"` |
| `...`             | `HTMLAttributes<HTMLElement>` | HTML 엘리먼트의 속성을 지원합니다.                                    |                             |

###### AccordionItem

정보를 계층화할 Accordion 항목입니다. 각 항목을 구별할 `고유한 키(accordionKey)`를 가져야합니다.
<br/>
이때 `AccordionItem`의 자식요소는 renderChild 함수를 통해 `accordionKey`와 `isActive`props를 전달받아야 합니다.

| Prop                 | Type                                                     | Description                                        | Notes                       |
| -------------------- | -------------------------------------------------------- | -------------------------------------------------- | --------------------------- |
| `accordionKey`       | `string`                                                 | 아코디언 항목의 고유한 키 값입니다.                | `* Required`                |
| `as`                 | `ElementType`                                            | HTML 엘리먼트 타입 값입니다.                       | `Optional`, 기본값은 `"li"` |
| `renderChildren`     | `(accordionKey: string, isActive: boolean) => ReactNode` | 아코디언 항목의 자식 요소를 렌더링하는 함수입니다. | `* Required`                |
| `...HTML atrributes` |                                                          | HTML 엘리먼트의 속성을 지원합니다.                 |                             |

###### AccordionButton

AccordionItem의 `열림 / 닫힘` 상태를 컨트롤하는 버튼입니다.

###### AccordionLabel

AccordionItem의 제목을 보여주는 라벨입니다.

###### AccordionIcon

AccordionItem의 `열림 / 닫힘` 상태를 표시하는 아이콘입니다.

###### AccordionContent

AccordionItem의 세부 정보를 보여주는 콘텐츠입니다.
<br/>

---

#### Toast

사용자에게 알림을 전달하기 위한 Toast UI입니다.
<br/>
Toast 컴포넌트를 단독으로 사용할 수 있으며,
<br/>
Context API로 구현된 useToast 훅이 제공하는 open, close 함수를 사용하여 Toast 렌더링을 컨트롤할 수 있습니다.

##### Toast 컴포넌트

| Prop                  | Type                                          | Description                        | Notes                                                      |
| --------------------- | --------------------------------------------- | ---------------------------------- | ---------------------------------------------------------- |
| `status`              | `"info"`, `"success"`, `"error"`, `"warning"` | Toast의 상태를 지정합니다.         | `Optional`, 기본값은 `"info"`                              |
| `title`               | `ReactNode`                                   | Toast의 제목을 나타냅니다.         | `* Required`                                               |
| `description`         | `ReactNode`                                   | Toast의 설명을 나타냅니다.         | `Optional`                                                 |
| `onClose`             | `() => void`                                  | Toast를 닫는 함수입니다.           | `Optional`, 해당 prop을 전달하면 `닫힘 버튼`이 노출됩니다. |
| `as`                  | `ElementType`                                 | HTML 엘리먼트 타입 값입니다.       | `Optional`, 기본값은 `"div"`                               |
| `... HTML attributes` |                                               | HTML 엘리먼트의 속성을 지원합니다. |                                                            |

##### useToast

`ToastProvider` 내부에서 `useToast` 훅을 사용하여 Toast 렌더링을 컨트롤할 수 있습니다.

```tsx
const ToastContainer = ({
  title,
  description,
  status,
}: Pick<ToastProps, "title" | "status" | "description">) => {
  const { open } = useToast();
  const handleButtonClick = () => {
    open({ status, title, description });
  };
  return (
    <Button
      theme={buttonMap.get(status || "primary") as ButtonProps["theme"]}
      onClick={handleButtonClick}
    >
      Toast Open!
    </Button>
  );
};

<ToastProvider>
  <ToastContainer {...args} />
</ToastProvider>;
```

<br/>
