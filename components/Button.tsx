import cm from '@classmatejs/react'

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'

interface ButtonProps {
  $variant?: ButtonVariant
  $size?: ButtonSize
  $wide?: boolean
  $block?: boolean
}

const Button = cm.button.variants<ButtonProps>({
  base: 'btn',
  variants: {
    $variant: {
      default: '',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      ghost: 'btn-ghost',
      outline: 'btn-outline',
    },
    $size: {
      xs: 'btn-xs',
      sm: 'btn-sm',
      md: '',
      lg: 'btn-lg',
    },
    $wide: {
      true: 'btn-wide',
    },
    $block: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    $variant: 'default',
    $size: 'md',
  },
})

export default Button
