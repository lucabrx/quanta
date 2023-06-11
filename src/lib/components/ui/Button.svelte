<script lang="ts">
    import { cva, type VariantProps } from "class-variance-authority";
    import type { HTMLButtonAttributes } from "svelte/elements";

    const buttonVariants = cva("text-base font-[500] rounded transition-colors duration-300 cursor-pointer ", {
    variants: {
      variant: {
        primary: "bg-gray-900 hover:bg-gray-900/80 text-gray-100",
        secondary: "hover:bg-gray-900/30 text-gray-900",
        icon_hover: "hover:bg-gray-900/30 text-gray-900"
      },
      size: {
        sm: "p-1.5",
        md: "py-1.5 px-3",
        lg: "py-2 px-4 text-lg"
      },
    }
  });

  interface ButtonProps extends HTMLButtonAttributes, VariantProps<typeof buttonVariants> {}
    export let variant: ButtonProps["variant"] = "primary";
    export let size: ButtonProps["size"] = "md";
    export let clickeEvent: ButtonProps["on:click"] = () => {};
    export let type: ButtonProps["type"] = "button";
</script>

<button type={type} on:click={clickeEvent} class={buttonVariants({ variant, size, class: $$props.class })}>
<slot />
</button>