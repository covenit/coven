<script>
    export let aling = true;
    export let image = '';
    export let title = '';
    export let text = '';
</script>

<div class="container">
    {#if !aling}
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src={image} alt="Image Right Section"> <!-- content here -->
    {/if}
    {#if aling}
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img class="if-mobile-block" src={image} alt="Image Right Section"> <!-- content here -->
    {/if}
    <div>
        <h2>{title}</h2>
        <br>
        <p>{text}</p>
        <slot></slot>
    </div>
    {#if aling}
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img class="if-mobile-none" src={image} alt="Image Right Section"> <!-- content here -->
    {/if}
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container div {
        max-width: 45%;
    }

    h2 {
        text-align: left;
    }

    img {
        max-width: 45%;
        height: auto;
        border-radius: 16px;
    }

    p{
        font-size: 16px !important;    
        line-height: 38px;
        letter-spacing: 0%;
        color: #5B5B5B;
    }
     .if-mobile-block {
            display: none;
        }

    @media (max-width: 767px) {
        .container {
            display: block;
        }
        .container div {
            max-width: 100%;
        }
        img {
            max-width: 100%;
            height: auto;
            margin-bottom: 3vh;
        }
        .if-mobile-none {
            display: none;
        }
        .if-mobile-block {
            display: block;
        }
        p{
            line-height: 25px;
        }
        h2 {
            font-family: 'sf-ui-display-heavy';
        }
    }
</style>