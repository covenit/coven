<script>
    export let image;
    export let title;
    export let text;
</script>

<article class="card-product-main">
    <img src={image} alt={title} class="product-image" />
    <p class="product-title">{title}</p>
    <p class="product-text">{text}</p>
    <br>
    <slot><!-- optional fallback --></slot>
</article>

<style>
    article {
        width: 30%;
        margin-bottom: 2vh;
    }

    img {
        width: 100%;
        height: auto;
        margin-bottom: 5px;
        border: 1px solid #f4f4f4;
        border-radius: 15px;
    }

    .product-title {
        font-family: 'sf-ui-display-medium';
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0%;
        color: #2F2F2F;
        margin-bottom: 5px;
    }

    .product-text {
        color: #5B5B5B;
        font-family: 'sf-ui-display-regular';
        font-size: 14px;
        line-height: 20px;
        width: 80%;
        letter-spacing: 2%;
    }

    @media (max-width: 767px) {
        article {
            width: 100%;
            margin-bottom: 2vh;
        }
        .product-text {
            width: 100%;
        }
    }
</style>