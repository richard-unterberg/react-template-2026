hey in this tool I wanna add a new feature to the react and solidjs package + readme. make a plan.

We wanna make this test based, so add the tests first and then go along this feature

The new should make it possible to transform a component into another component and add new classes. The new feature should be called `transform` and should be available in both the react and solidjs packages. The readme should be updated to include examples of how to use the new feature.

## Typescript

This tool is typescript sensitive, Means if you transform a button into a span, the original button properties are not displayed / valid on the new jsx element. only the properties that are valid for the new component type will be passed to the new component type and classnames will be merged. but the custom properties of the classmate component will be passed to the new component type.

Classic typescript Implementation example (without transform):

```tsx
import ma from '@marmo/react'

// definition
const MyButton = cm.button<{ $toggleCta?: boolean }>`
  absolute 
  min-w-300
  ${({ $toggleCta }) => ($toggleCta ? 'bg-red-500' : 'bg-blue-500')}
`

// jsx
<MyButton $toggleCta type="button" />
```

outputs:

```html
<button class="absolute min-w-300 bg-red-500" type="button" />
```

## Short way to transform a component type into another component

the new elements properties must match the new component type. The new component type can be a string. `$_as` is used to transform the component into another component type. Example: you have a button which has special properties a span does not have.

```tsx
// we assume MyButton is defined as above
<MyButton $toggleCta $_as="span" />
```

outputs 
```html
<span className="absolute min-w-300 bg-red-500" />
```

## component based transform

```tsx
// we assume MyButton is defined as above
const TransformButtonElement = cm.transform(MyButton).span

// jsx
<TransformButtonElement $toggleCta />
```

outputs:

```html
<span className="absolute min-w-300 bg-red-500" />
```


## transform component based transform

Since the design of the tool should allow that, it should be no big transform already transformed components.

```jsx
// we assume TransformButtonElement is defined as above
const TransformButtonAgain = cm.transform(TransformButtonElement).p

// jsx
<TransformButtonAgain $toggleCta />
```

outputs:

```html
<p className="absolute min-w-300 bg-red-500" />
```

### adding new classes to the transformed component

```tsx
// we assume TransformButtonElement is defined as above 
const TransformButtonAddClasses = cm.transform(MyButton).span`text-neutral tracking-wide`

// jsx
<TransformButtonAddClasses $toggleCta />
```

outputs:

```html
<span className="absolute min-w-300 bg-red-500 text-neutral tracking-wide" />
```

## transform with variants

Of course the transform feature should also work with variants.



// base variant
// output: <div className="absolute min-w-300" />
const _VariantDiv = cm.div.variants<{ $size: "sm" | "md" }>({
  base: 'absolute min-w-300',
  variants: {
    $size: {
      sm: 'w-10 h-10',
      md: 'w-20 h-20',
    },
  },
  defaultVariants: {
    $size: 'medium',
  },
})