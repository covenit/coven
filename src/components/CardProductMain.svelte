<script>
  export let image = '';
  export let title = '';
  export let text = '';
</script>

<article>
    <img src={image} alt="Product Image">
    <div>
        <p class="p-title">{title}</p>
        <p class="p-text">{text}</p>
    </div>
    <br>
    <slot></slot>
</article>

<style>
    img {
        margin-bottom: 1vh;
    }
    .p-title{
        font-family: 'sf-ui-display-medium';
        font-size: 14px;    
        line-height: 20px;
        letter-spacing: 0%;
        color: #2F2F2F;
    }
    .p-text {
        font-family: 'sf-ui-display-regular';
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0%;
        color: rgba(91, 91, 91, 1);
    }
</style>