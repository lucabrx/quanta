<script lang="ts">
    export let href:string;
    export let active:boolean = false;
    </script>
    
    
    <a
    class={`font-medium text-lg hover:text-gray-900 transition-all duration-300
    ${active ? "text-gray-900" : "text-gray-800/70"}`}
    href={href}>
    <slot/>
    </a>